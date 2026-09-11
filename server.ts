import express from 'express';
import path from 'path';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Meta credentials provided by the user (with support for process.env override)
const META_PIXEL_ID = process.env.META_PIXEL_ID || '1031140289908433';
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || 'EAFzGloW5T2cBSWwMZCtIc3wPdHeIVXrhfZARwmxlpIuYxXKlFYZCWlXVOkM8187pbu7ogDq27Opmaqex3pQvj5fyZBxbqMU0ZA7BZCJ4uWSLB6DFZA1LnrEC58POwhR0PbRnK3Vftyjc1RLQVABiN1VRvEbhkDZAs4hZAN9TBn8vNMop8Tytmngd2k2Vp2cG0VAZDZD';

// Helper to hash user data as required by Meta Conversions API (SHA-256)
function hashMetaUserData(val?: string): string | undefined {
  if (!val || typeof val !== 'string') return undefined;
  const clean = val.trim().toLowerCase();
  if (!clean) return undefined;
  return crypto.createHash('sha256').update(clean).digest('hex');
}

// Normalize Indonesian phone numbers (e.g., 0822... -> 62822...)
function normalizePhone(phone?: string): string | undefined {
  if (!phone || typeof phone !== 'string') return undefined;
  let digits = phone.replace(/\D/g, '');
  if (digits.startsWith('0')) {
    digits = '62' + digits.slice(1);
  } else if (!digits.startsWith('62') && digits.length >= 9) {
    digits = '62' + digits;
  }
  return digits;
}

// Helper to parse cookies from header
function getCookie(cookieHeader: string | undefined, name: string): string | undefined {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.match(new RegExp(`(^|;\\s*)(${name})=([^;]*)`));
  return match ? decodeURIComponent(match[3]) : undefined;
}

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 2. Meta CAPI status
app.get('/api/meta-status', (req, res) => {
  res.json({
    pixelConfigured: Boolean(META_PIXEL_ID),
    pixelId: META_PIXEL_ID,
    tokenConfigured: Boolean(META_ACCESS_TOKEN),
    tokenPrefix: META_ACCESS_TOKEN ? META_ACCESS_TOKEN.slice(0, 8) + '...' : null,
  });
});

// 3. Meta Conversions API (CAPI) Endpoint
app.post('/api/meta-event', async (req, res) => {
  try {
    const { event_name, event_id, event_source_url, user_data = {}, custom_data = {} } = req.body;

    if (!event_name) {
      return res.status(400).json({ error: 'event_name is required' });
    }

    if (!META_PIXEL_ID || !META_ACCESS_TOKEN) {
      return res.status(500).json({ error: 'Meta Pixel ID or Access Token not configured' });
    }

    // Extract client IP and user agent
    const rawIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    const client_ip_address = Array.isArray(rawIp) ? rawIp[0] : rawIp.split(',')[0].trim();
    const client_user_agent = (req.headers['user-agent'] as string) || '';

    // Extract _fbp and _fbc cookies for optimal Meta match quality
    const cookieHeader = req.headers.cookie;
    const fbp = user_data.fbp || getCookie(cookieHeader, '_fbp');
    const fbc = user_data.fbc || getCookie(cookieHeader, '_fbc');

    // Build normalized user data for CAPI
    const normalizedUserData: Record<string, any> = {
      client_ip_address,
      client_user_agent,
    };

    if (fbp) normalizedUserData.fbp = fbp;
    if (fbc) normalizedUserData.fbc = fbc;

    // Hash phone if provided
    const cleanPhone = normalizePhone(user_data.phone || user_data.whatsapp);
    if (cleanPhone) {
      const hashedPhone = hashMetaUserData(cleanPhone);
      if (hashedPhone) normalizedUserData.ph = [hashedPhone];
    }

    // Hash name/first name if provided
    if (user_data.name) {
      const hashedName = hashMetaUserData(user_data.name);
      if (hashedName) normalizedUserData.fn = [hashedName];
    }

    // Hash email if provided
    if (user_data.email) {
      const hashedEmail = hashMetaUserData(user_data.email);
      if (hashedEmail) normalizedUserData.em = [hashedEmail];
    }

    // Construct Meta CAPI Payload
    const currentUnixTime = Math.floor(Date.now() / 1000);
    const capiPayload = {
      data: [
        {
          event_name,
          event_time: currentUnixTime,
          event_id: event_id || `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          event_source_url: event_source_url || (req.headers.referer as string) || 'https://progresivo-consulting.com',
          action_source: 'website',
          user_data: normalizedUserData,
          custom_data: {
            ...custom_data,
            currency: 'IDR',
          },
        },
      ],
    };

    // Send to Meta Graph API
    const metaApiUrl = `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`;
    const metaResponse = await fetch(metaApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(capiPayload),
    });

    const metaResult = await metaResponse.json();

    if (!metaResponse.ok) {
      console.error('[Meta CAPI Error]:', metaResult);
      return res.status(metaResponse.status).json({
        success: false,
        error: metaResult,
      });
    }

    return res.json({
      success: true,
      event_name,
      event_id: capiPayload.data[0].event_id,
      events_received: metaResult.events_received,
      fbtrace_id: metaResult.fbtrace_id,
    });
  } catch (error: any) {
    console.error('[Meta CAPI Exception]:', error);
    return res.status(500).json({ success: false, message: error?.message || 'Server error' });
  }
});

// Vite middleware / Static serving
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();
