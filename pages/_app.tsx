import Head from 'next/head';
import { Inter } from 'next/font/google';
import '../src/App.css';
import '../src/index.css';
import type { AppProps } from 'next/app';
import { useEffect, useLayoutEffect } from 'react';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

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
                    content="Experienced IT/Business Analyst with a passion for bridging the gap between business needs and technical solutions." />
                <link rel="canonical" href="https://hynekcerny.cz/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hynekcerny.cz/" />
                <meta property="og:title" content="Hynek Černý - IT/Business Analyst" />
                <meta property="og:description" content="Experienced IT/Business Analyst with a passion for bridging the gap between business needs and technical solutions." />
                <meta property="og:image" content="https://hynekcerny.cz/assets/profile_square.webp" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Hynek Černý - IT/Business Analyst" />
                <meta name="twitter:description" content="Experienced IT/Business Analyst with a passion for bridging the gap between business needs and technical solutions." />
                <meta name="twitter:image" content="https://hynekcerny.cz/assets/profile_square.webp" />

                <link rel="preload" href="assets/fonts/PlaywriteBR/playwrite-br-1.woff2" as="font" type="font/woff2"
                    crossOrigin="anonymous" />
                {/* <link rel="preload" as="image" href="assets/profile_square.webp"></link> */}
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta name="theme-color" content="#dbeafe" media="(prefers-color-scheme: light)"/>
                <meta name="theme-color" content="#1e2939" media="(prefers-color-scheme: dark)"/>

                {/* JSON-LD Person Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Hynek Černý",
                            "jobTitle": "IT/Business Analyst",
                            "url": "https://hynekcerny.cz",
                            "sameAs": [
                                "https://linkedin.com/in/hynekcerny",
                                "https://github.com/HynekCerny"
                            ],
                            "description": "Experienced IT/Business Analyst with a passion for bridging the gap between business needs and technical solutions."
                        })
                    }}
                />
            </Head>


            <div className={inter.className}>
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;