import '../src/App.css';
import '../src/index.css';
import type { AppProps } from 'next/app';
import { useEffect, useLayoutEffect } from 'react';

function loadGTM(gtmId: string) {
  if (window.dataLayer) return; // Prevent multiple GTM injections
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);
}

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        loadGTM('GTM-5Z8HWR2W');
    }, []);

    useLayoutEffect(() => {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition) {
            document.documentElement.style.scrollBehavior = 'auto';
            window.scrollTo(0, parseInt(scrollPosition, 10));
            sessionStorage.removeItem('scrollPosition');
            document.documentElement.style.scrollBehavior = '';
        }
    }, []);

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;