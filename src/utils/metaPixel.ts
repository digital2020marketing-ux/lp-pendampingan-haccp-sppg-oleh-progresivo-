/**
 * Meta Pixel & Conversions API (CAPI) Tracking Utility
 * Pixel ID: 1031140289908433
 * Includes browser event (fbq) and server-side Conversions API event with matching event_id for deduplication.
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

// Helper to extract cookies by name
function getClientCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : undefined;
}

// Generate unique event ID for Meta Deduplication (Browser Pixel + Server CAPI)
export function generateEventId(prefix = 'evt'): string {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 9);
  return `${prefix}_${timestamp}_${randomStr}`;
}

export interface TrackMetaEventOptions {
  eventName: 'PageView' | 'Lead' | 'Contact' | 'ViewContent' | 'InitiateCheckout' | string;
  customData?: Record<string, any>;
  userData?: {
    name?: string;
    phone?: string;
    whatsapp?: string;
    email?: string;
  };
  eventId?: string;
}

/**
 * Send an event to both Meta Pixel in browser and Meta Conversions API on server
 */
export async function trackMetaEvent(options: TrackMetaEventOptions): Promise<string> {
  const { eventName, customData = {}, userData = {} } = options;
  const eventId = options.eventId || generateEventId(eventName.toLowerCase());

  // 1. Fire Client-Side Meta Pixel (Browser)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', eventName, customData, { eventID: eventId });
    } catch (err) {
      console.warn('[Meta Pixel Browser Error]:', err);
    }
  }

  // 2. Fire Server-Side Meta Conversions API (CAPI)
  try {
    const fbp = getClientCookie('_fbp');
    const fbc = getClientCookie('_fbc');
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    const payload = {
      event_name: eventName,
      event_id: eventId,
      event_source_url: currentUrl,
      user_data: {
        ...userData,
        fbp,
        fbc,
      },
      custom_data: customData,
    };

    // Use sendBeacon if available, otherwise fetch with keepalive
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      navigator.sendBeacon('/api/meta-event', blob);
    } else {
      fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch((e) => console.warn('[Meta CAPI Request Warning]:', e));
    }
  } catch (err) {
    console.warn('[Meta CAPI Error]:', err);
  }

  return eventId;
}

/**
 * Helper: Track WhatsApp button clicks (Meta 'Contact' Event)
 */
export function trackWhatsAppClick(locationSource: string) {
  return trackMetaEvent({
    eventName: 'Contact',
    customData: {
      content_category: 'WhatsApp Consultation',
      content_name: `WhatsApp Click - ${locationSource}`,
      source: locationSource,
      service: 'Pendampingan HACCP SPPG MBG',
    },
  });
}

/**
 * Helper: Track Lead Form submissions (Meta 'Lead' Event)
 */
export function trackLeadSubmission(formData: {
  nama: string;
  whatsapp: string;
  namaSppg: string;
  lokasi: string;
  sudahBeroperasi: string;
  kapasitasPorsi: string;
  sopFormBgn: string;
  kebutuhan: string;
  target: string;
}) {
  return trackMetaEvent({
    eventName: 'Lead',
    customData: {
      content_category: 'Kualifikasi SPPG MBG',
      content_name: 'Form Kualifikasi SPPG',
      sppg_name: formData.namaSppg,
      location_region: formData.lokasi,
      status_beroperasi: formData.sudahBeroperasi,
      kapasitas: formData.kapasitasPorsi,
      sop_status: formData.sopFormBgn,
      kebutuhan: formData.kebutuhan,
      target_waktu: formData.target,
      currency: 'IDR',
      value: 1, // Significant lead value
    },
    userData: {
      name: formData.nama,
      phone: formData.whatsapp,
      whatsapp: formData.whatsapp,
    },
  });
}
