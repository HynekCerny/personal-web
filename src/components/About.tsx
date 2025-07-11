// import profileImage from '../../public/assets/profile_square.webp';
import Image from 'next/image';

// const profileImageUrl = '/assets/profile_square.webp';
import { User2 } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="fade-slide-in w-full justify-center pt-24">
            <div className="container md:px-10 max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-flex items-center rounded-full border px-3.5 py-1 font-semibold dark:border-gray-200">
                            <User2 className="mr-2 h-4 w-4" />
                            About Me
                        </div>
                        <h2 className="pt-2 text-3xl font-bold tracking-tighter sm:text-5xl">Who I Am</h2>
                        <p className="max-w-[900px] text-lg/relaxed md:text-xl/relaxed">
                            I'm an experienced IT/Business Analyst with a passion for bridging the gap between business needs and
                            technical solutions. With over 7 years of experience, I specialize in delivering high-quality solutions that align with customer needs and expectations.
                        </p>
                    </div>
                </div>


                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-18">
                    <div className="flex flex-col justify-center space-y-4 text-left lg:col-span-2">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Problem Solver</h3>
                                    <p className="">
                                        I excel at identifying business needs and developing effective solutions that align with
                                        organizational goals.
                                    </p>
                                </div>
                            </li>
                            {/* <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Data-Driven</h3>
                                    <p className="">
                                        I leverage data analytics to drive decision-making and provide actionable insights for business
                                        improvement.
                                    </p>
                                </div>
                            </li> */}
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Technical Translator</h3>
                                    <p className="">
                                        I bridge the communication gap between technical teams and business stakeholders to ensure
                                        project success.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center lg:justify-end w-full">
                        <Image
                            src="/assets/profile_square.webp"
                            alt="About Me"
                            width={160}  
                            height={160}
                            className="w-40 sm:w-48 md:w-56 lg:w-64 aspect-square rounded-full object-cover"
                        />
                        {/* <img
                            alt="About Me"
                            className="w-40 sm:w-48 md:w-56 lg:w-64 aspect-square rounded-full object-cover"
                            src={profileImage}
                        /> */}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;