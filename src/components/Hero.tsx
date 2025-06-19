import { FaLinkedin } from "react-icons/fa6";
// import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa6";
// import { QuoteIcon, Quote, MessageSquareQuote } from "lucide-react";

declare global {
    interface Window {
      dataLayer: Record<string, any>[];
    }
  }  

const Hero = () => {
    const handleClick = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'view_experience_click',
            buttonText: 'View Experience'
        });
        document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="fade-in w-full flex flex-col items-center sm:items-start text-center sm:text-left mt-10 pt-24 md:pt-24 lg:pt-24 pb-20 bg-gradient-to-tr from-blue-100 to-white dark:from-gray-700 dark:to-gray-900">
            <div className="container md:px-10 max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="relative justify-self-center md:justify-self-start">
                        {/* <span className="absolute -top-10 left-0 -z-10"><FaQuoteRight className="w-36 h-36 text-blue-100 dark:text-gray-700"/></span>
                        <p className="relative pl-8 pr-8 text-xl leading-relaxed">"The best solutions start by asking the right questions"</p> */}
                        <h2 className="heading pt-2 text-3xl sm:text-4xl text-gray-600 dark:text-gray-300">
                            Hynek Černý
                        </h2>
                        <p className="pl-10 sm:pl-23 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                            IT/Business Analyst
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
                        <button onClick={handleClick}
                            className="cursor-pointer px-4 lg:px-8 py-3 text-base lg:text-xl bg-white dark:bg-gray-800 text-blue-700 dark:text-gray-300 border-2 border-blue-700 dark:border-gray-300 rounded-lg dark:hover:text-blue-700 dark:hover:border-blue-700 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors flex items-center space-x-2 mt-4 md:mt-0 justify-center">
                            <span>View Experience</span>
                        </button>

                        <button
                            onClick={() => window.open('https://linkedin.com/in/hynekcerny', '_blank', 'noopener,noreferrer')}
                            className="cursor-pointer px-4 lg:px-8 py-3 text-base lg:text-xl bg-blue-700  text-white rounded-lg border-2 border-blue-700  hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-700 hover:border-blue-700 dark:hover:border-blue-700 transition-colors flex items-center space-x-2 mt-4 md:mt-0 justify-center"
                        >
                            <FaLinkedin className="w-6 h-6" />
                            <span>Get In Touch</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;