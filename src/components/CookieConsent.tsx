import { useEffect, useRef, useState } from 'react';
import CookieDetails from './CookieDetails';

const STORAGE_KEY = 'cookie-consent-v1';
const DENIAL_PARAM = 'analytics-consent';
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
type Choice = 'granted' | 'denied';

function readChoice(): Choice | null {
  // A failed withdrawal write must take precedence over a still-readable grant.
  if (new URL(location.href).searchParams.get(DENIAL_PARAM) === 'denied') return 'denied';
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if ((value?.choice === 'granted' || value?.choice === 'denied') &&
        typeof value.savedAt === 'number' && value.savedAt <= Date.now() &&
        Date.now() - value.savedAt < MAX_AGE) return value.choice;
  } catch { /* Unavailable or invalid storage must never enable analytics. */ }
  return null;
}

function clearAnalyticsCookies() {
  const labels = location.hostname.split('.');
  const domains = ['', ...labels.map((_, i) => labels.slice(i).join('.'))];
  const segments = location.pathname.split('/');
  const paths = ['/', ...segments.map((_, i) => segments.slice(0, i + 1).join('/') || '/')];
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$)|_gac_|_gcl_)/.test(name)) continue;
    for (const domain of domains) {
      for (const path of paths) {
        document.cookie = `${name}=; Max-Age=0; path=${path};${domain ? ` domain=${domain};` : ''} SameSite=Lax`;
      }
    }
  }
}

function loadAnalytics() {
  if (document.getElementById('consented-gtm')) return;
  window.dataLayer = window.dataLayer || [];
  // Basic consent mode: no Google script or ping at all before opt-in.
  function gtag(..._args: unknown[]) {
    window.dataLayer.push(arguments);
  }
  gtag('consent', 'default', {
    analytics_storage: 'granted', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied',
  });
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.id = 'consented-gtm';
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-5Z8HWR2W';
  document.head.appendChild(script);
}

export default function CookieConsent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [ready, setReady] = useState(false);
  const settingsRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = readChoice();
    setChoice(saved);
    setOpen(!saved);
    setReady(true);
    if (saved === 'granted') loadAnalytics();
    else clearAnalyticsCookies();
  }, []);

  useEffect(() => {
    function syncConsent() {
      const saved = readChoice();
      if (saved === choice) return;
      if (document.getElementById('consented-gtm')) {
        clearAnalyticsCookies();
        location.reload();
        return;
      }
      setChoice(saved);
      setOpen(!saved);
      if (saved === 'granted') loadAnalytics();
    }
    function onStorage(event: StorageEvent) {
      if (event.key === STORAGE_KEY || event.key === null) syncConsent();
    }
    const timer = window.setInterval(syncConsent, 60000);
    window.addEventListener('storage', onStorage);
    window.addEventListener('focus', syncConsent);
    return () => {
      clearInterval(timer);
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('focus', syncConsent);
    };
  }, [choice]);

  function choose(next: Choice) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice: next, savedAt: Date.now() }));
    } catch {
      if (next === 'denied') {
        // Never reload into a stale grant if overwriting it failed.
        try { localStorage.removeItem(STORAGE_KEY); } catch {
          if (readChoice() === 'granted') {
            // Even when storage cannot be changed, reload with a denial override.
            const url = new URL(location.href);
            url.searchParams.set(DENIAL_PARAM, 'denied');
            history.replaceState(history.state, '', url);
          }
        }
      }
    }
    if (next === 'granted') {
      const url = new URL(location.href);
      if (url.searchParams.get(DENIAL_PARAM) === 'denied') {
        url.searchParams.delete(DENIAL_PARAM);
        history.replaceState(history.state, '', url);
      }
    }
    setChoice(next);
    setOpen(false);
    setShowDetails(false);
    if (next === 'granted') loadAnalytics();
    else {
      clearAnalyticsCookies();
      // Removing a script cannot stop already-running tags. Reload to stop them.
      if (document.getElementById('consented-gtm')) {
        location.reload();
        return;
      }
    }
    settingsRef.current?.focus({ preventScroll: true });
  }

  if (!ready) return null;
  const buttonStyle = 'font-medium hover:shadow-none shadow-lg cursor-pointer px-4 py-2 text-sm bg-white dark:bg-gray-800 text-blue-700 dark:text-gray-300 border-2 border-blue-700 dark:border-gray-400 rounded-lg dark:hover:text-blue-700 dark:hover:border-blue-700 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors min-h-11 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600';

  return (
    <>
      <div className="bg-white px-4 py-3 text-center dark:bg-gray-900">
        <button ref={settingsRef} type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="cookie-preferences" className="rounded text-sm text-gray-600 underline underline-offset-4 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-gray-300">Cookie settings</button>
      </div>
      {open && (
        <section id="cookie-preferences" aria-label="Cookie preferences" className="fixed bottom-3 left-3 right-3 z-50 mx-auto max-h-[calc(100dvh-1.5rem)] max-w-screen-xl overflow-y-auto rounded-lg border border-gray-200 bg-white p-3 text-gray-900 shadow-lg sm:px-4 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Google Analytics uses cookies to measure visits. Only with your consent.{' '}
              <button type="button" onClick={() => setShowDetails(!showDetails)} aria-expanded={showDetails} aria-controls="cookie-details" className="cursor-pointer rounded underline underline-offset-2 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:text-blue-300">Details</button>
            </p>
            <div className="flex shrink-0 gap-3">
              <button type="button" aria-label="Reject analytics" onClick={() => choose('denied')} className={buttonStyle}>Reject</button>
              <button type="button" aria-label="Accept analytics" onClick={() => choose('granted')} className={buttonStyle}>Accept</button>
            </div>
          </div>
          {showDetails && <CookieDetails />}
          {showDetails && choice && <p className="mt-2 text-sm">Analytics is currently {choice === 'granted' ? 'on' : 'off'}.</p>}
        </section>
      )}
    </>
  );
}
