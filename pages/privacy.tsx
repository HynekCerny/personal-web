import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy & cookies | Hynek Černý</title>
        <link rel="canonical" href="https://hynekcerny.cz/privacy" />
        <meta name="description" content="How this website uses optional analytics cookies and how to manage your choice." />
      </Head>
      <main className="min-h-screen bg-gradient-to-tr from-blue-100 to-white px-6 py-12 text-gray-900 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
        <article className="mx-auto max-w-3xl space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-md md:p-10 dark:border-gray-600 dark:bg-gray-900">
          <Link href="/" className="text-blue-700 underline dark:text-blue-300">Back to homepage</Link>
          <h1 className="text-3xl font-bold">Privacy & cookies</h1>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Who operates this website?</h2>
            <p>Hynek Černý, IČO: 23029544, operates hynekcerny.cz and is the controller of personal data processed through its analytics.</p>
            <p>For privacy questions or requests, contact <a className="text-blue-700 underline dark:text-blue-300" href="mailto:jsem@hynekcerny.cz">jsem@hynekcerny.cz</a>.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Optional analytics</h2>
            <p>Only after you choose “Allow analytics”, this website loads Google Tag Manager to run Google Analytics, provided by Google Ireland Limited. Analytics helps measure visits, page usage and device/browser information to understand and improve the website. The legal basis is your consent.</p>
            <p>Google Analytics may set first-party cookies such as _ga and _ga_&lt;property-id&gt; to distinguish visitors and sessions. Google documents a default lifetime of up to two years for these cookies; the actual lifetime depends on the Analytics configuration. Your permission on this website expires after 180 days, after which analytics remains off unless you consent again.</p>
            <p>No Google Analytics or Google Tag Manager scripts are loaded before consent or after rejection. Advertising storage and advertising-related consent signals are denied.</p>
            <p>Google may process data outside the European Economic Area. For details about Google’s processing, transfers and safeguards, see <a className="text-blue-700 underline dark:text-blue-300" href="https://policies.google.com/privacy">Google’s Privacy Policy</a> and <a className="text-blue-700 underline dark:text-blue-300" href="https://support.google.com/analytics/answer/11397207">Google Analytics cookie documentation</a>.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Your choice and device storage</h2>
            <p>Allowing and rejecting analytics are equally available. Rejecting does not limit access to this website. Use “Cookie settings” at the bottom of any page to change or withdraw consent. Withdrawal stops analytics by reloading the page and removes accessible Google Analytics cookies for this website. It does not undo processing that took place before withdrawal.</p>
            <p>The choice and its timestamp are stored locally in your browser under cookie-consent-v1 for 180 days. This preference storage is used only to remember and respect your choice, not to track you. If local storage is unavailable, analytics defaults to off on the next page load. Session storage is also used to restore your scroll position and navigate to sections; it is not used for analytics.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Your rights</h2>
            <p>Where applicable, you may request access, rectification, erasure, restriction or portability of your personal data and withdraw consent at any time. You may lodge a complaint with the Czech supervisory authority, <a className="text-blue-700 underline dark:text-blue-300" href="https://uoou.gov.cz/">Úřad pro ochranu osobních údajů</a>.</p>
          </section>
        </article>
      </main>
    </>
  );
}
