import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Link from 'next/link';
import type { NextPage } from 'next';
import { FileX2 } from 'lucide-react';

const Custom404: NextPage = () => {
  return (
    <div className="bg-white text-black dark:text-gray-200 dark:bg-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col">
        <section className="fade-in w-full flex flex-col items-center justify-center text-center mt-14 pt-24 md:pt-24 lg:pt-24 pb-20 bg-gradient-to-tr from-blue-100 to-white dark:from-gray-700 dark:to-gray-900 flex-grow">
          <div className="fade-slide-in container md:px-10 max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="inline-flex items-center rounded-full border px-3.5 py-1 font-semibold dark:border-gray-200">
                            <FileX2 className="mr-2 h-4 w-4" />
                            Error 404
                        </div>
              <h2 className="pt-2 pb-2 text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-tr from-black to-gray-500 dark:from-gray-100 dark:to-gray-500">Page Not Found</h2>
              <p className="max-w-[900px] text-lg/relaxed md:text-xl/relaxed pb-0 md:pb-8">
                            Page that you are looking for does not exist or has been moved.
                        </p>  
              <Link href="/"
                className="font-medium hover:shadow-none shadow-lg cursor-pointer px-4 lg:px-8 py-3 text-base lg:text-xl bg-white dark:bg-gray-800 text-blue-700 dark:text-gray-300 border-2 border-blue-700 dark:border-gray-400 rounded-lg dark:hover:text-blue-700 dark:hover:border-blue-700 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors flex items-center space-x-2 mt-4 md:mt-0 justify-center"
              >
                Back to Main Page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Custom404;
