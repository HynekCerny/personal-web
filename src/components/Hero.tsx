import { FaLinkedin } from "react-icons/fa6";
// import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa6";
// import { QuoteIcon, Quote, MessageSquareQuote } from "lucide-react";

declare global {
    interface Window {
      dataLayer: Record<string, unknown>[];
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
        <section className="fade-in w-full flex flex-col items-center sm:items-start text-center sm:text-left mt-14 pt-24 md:pt-24 lg:pt-24 pb-20 bg-gradient-to-tr from-blue-100 to-white dark:from-gray-700 dark:to-gray-900">
            <div className="container md:px-10 max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 
                 
                gap-6 items-center">
                    <div className="relative justify-self-center 
                
                    md:justify-self-start">
                        
                        {/* <h2 className="relative pl-8 pr-8 text-xl xl:text-3xl font-medium leading-relaxed"> */}
                        {/* <FaQuoteLeft className="inline-block absolute -z-30 -mt-4 -ml-4 w-18 h-18 text-blue-100 dark:text-gray-700"/> */}
                        {/* Bridging Business and IT with Insight and Precision */}
                        {/* <FaQuoteRight className="inline-block absolute w-18 h-18 -mt-4 -ml-12 -z-30 text-blue-100 dark:text-gray-700"/> */}
                        {/* </h2> */}
                        
                        <h2 className="heading pt-2 text-3xl sm:text-4xl text-gray-600 dark:text-gray-300">
                            Hynek Černý
                        </h2>
                        <p className="pl-10 sm:pl-23 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                            IT/Business Analyst
                        </p>
                    </div>
                    <div className="flex justify-center 
                
                    md:justify-end space-x-4 mt-4 md:mt-0">
                        <button onClick={handleClick}
                            className="font-medium hover:shadow-none shadow-lg cursor-pointer px-4 lg:px-8 py-3 text-base lg:text-xl bg-white dark:bg-gray-800 text-blue-700 dark:text-gray-300 border-2 border-blue-700 dark:border-gray-400 rounded-lg dark:hover:text-blue-700 dark:hover:border-blue-700 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors flex items-center space-x-2 mt-4 md:mt-0 justify-center">
                            {/* // className="font-medium hover:shadow-none shadow-lg cursor-pointer px-6 py-3 text-base lg:text-xl bg-white dark:bg-gray-800  hover:text-white text-blue-700 rounded-lg border-2 border-blue-700 hover:bg-blue-800 transition-colors mt-8 md:mt-0 flex items-center space-x-2"> */}
                            <span>View Experience</span>
                        </button>

                        <button
                            onClick={() => window.open('https://linkedin.com/in/hynekcerny', '_blank', 'noopener,noreferrer')}
                            className="font-medium hover:shadow-none shadow-lg cursor-pointer px-4 lg:px-8 py-3 text-base lg:text-xl bg-blue-700  text-white rounded-lg border-2 border-blue-700  hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-700 hover:border-blue-700 dark:hover:border-blue-700 transition-colors flex items-center space-x-2 mt-4 md:mt-0 justify-center"
                            // className="font-medium hover:shadow-none shadow-lg cursor-pointer px-6 py-3 text-base lg:text-xl bg-blue-700 text-white rounded-lg border-2 border-blue-700 hover:bg-blue-800 transition-colors mt-8 md:mt-0 flex items-center space-x-2"
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