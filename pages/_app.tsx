import Head from 'next/head';
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

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hynek Černý - IT/Business Analyst</title>
                <meta name="description"
                    content="Experienced IT/Businees Analyts with a passion for bridging the gap between business needs and technical solutions." />
                <link rel="preload" href="assets/fonts/PlaywriteBR/playwrite-br-1.woff2" as="font" type="font/woff2"
                    crossOrigin="anonymous" />
                <link rel="preload" as="image" href="assets/profile_square.webp"></link>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>


            <Component {...pageProps} />
        </>
    );
}

export default MyApp;