import { FaLinkedin } from "react-icons/fa6";

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
        <section className="fade-in w-full flex flex-col items-center sm:items-start text-center sm:text-left mt-10 pt-24 md:pt-24 lg:pt-24 pb-20 bg-gradient-to-tr from-blue-100 to-white">
            <div className="container md:px-10 max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="justify-self-center md:justify-self-start">
                        <h2 className="heading pt-2 text-3xl font-bold sm:text-4xl text-gray-600">
                            Hynek Černý
                        </h2>
                        <p className="pl-10 sm:pl-22 text-sm sm:text-base text-gray-500">
                            IT/Business Analyst
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
                        <button onClick={handleClick}
                            className="cursor-pointer px-4 lg:px-8 py-3 text-base lg:text-xl bg-white text-blue-700 border-2 border-blue-700 rounded-lg hover:bg-blue-100 transition-colors flex items-center space-x-2 mt-4 md:mt-0 justify-center">
                            <span>View Experience</span>
                        </button>

                        <button
                            onClick={() => window.open('https://linkedin.com/in/hynekcerny', '_blank', 'noopener,noreferrer')}
                            className="cursor-pointer px-4 lg:px-8 py-3 text-base lg:text-xl bg-blue-700 text-white rounded-lg border-2 border-blue-700 hover:bg-blue-100 hover:text-blue-700 hover:border-blue-700 transition-colors flex items-center space-x-2 mt-4 md:mt-0 justify-center"
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