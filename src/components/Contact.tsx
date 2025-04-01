import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
    return (

        <section id="contact" className="w-full justify-center pb-24 pt-24 md:pt-24 lg:pt-24 bg-gradient-to-tr from-blue-100 to-white">

            <div className="container md:px-10 max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-flex items-center rounded-full border px-3.5 py-1 font-semibold">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact
                        </div>
                        <h2 className="pt-2 text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                        <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Interested in working together? I'd love to hear from you.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-xl gap-8 py-12 md:grid-cols-1">
                    <div className="border rounded-lg shadow-md p-6 bg-white">
                        <div className="border-b pb-4 mb-4">
                            <h2 className="text-xl font-semibold">Contact Information</h2>
                            <p className="text-gray-600 transition-colors font-medium">
                                Hynek Černý
                            </p>
                            <p className="text-gray-600 transition-colors">
                                IČO: 23029544
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Mail className="mr-2 h-5 w-5 text-gray-600" />
                                <a
                                    href="mailto:jsem&#64;hynekcerny.cz"
                                    className="text-gray-600 hover:underline hover:text-blue-700 transition-colors"
                                >
                                    jsem&#64;hynekcerny.cz
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FaLinkedin className="mr-2 h-5 w-5 text-gray-600" />
                                <a
                                    href="https://linkedin.com/in/hynekcerny"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:underline hover:text-blue-700 transition-colors"
                                >
                                    linkedin.com/in/hynekcerny
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Contact;
