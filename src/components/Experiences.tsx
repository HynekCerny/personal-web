import { BriefcaseBusiness } from 'lucide-react';
import Experience from './Experience';

export default function Experiences() {
    return (
        <section id="experiences" className="fade-slide-in w-full justify-center py-24 bg-muted">
            <div className="container md:px-10 max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-flex items-center rounded-full border px-3.5 py-1 font-semibold">
                            <BriefcaseBusiness className="mr-2 h-4 w-4" />
                            Work Experience
                        </div>
                        <h2 className="pt-2 text-3xl font-bold tracking-tighter sm:text-5xl">Professional Journey</h2>
                        <p className="max-w-[900px] text-xl/relaxed">
                            My career path has equipped me with a diverse set of experiences.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-3xl space-y-8 pt-12 text-left">
                    <Experience role='IT/Business Analyst' employer='Partners Banka, a.s.' duration='04/2025 - now' location='Prague' description={[
                        // 'Collaborating with stakeholders to identify, gather, and document business requirements and technical specifications',
                        // 'Designing and mapping business processes, workflows, and system interactions using various modeling techniques (e.g. BPMN, UML)',
                        // 'Preparing functional specifications and user stories based on business requirements to guide the development process',
                        // 'Analyzing and designing system integrations using REST and RabbitMQ',
                    ]}
                    />
                    <Experience role='Chapter Lead - IT/Business Analysis, B2C' employer='RENOMIA, a.s.' duration='08/2022 - 03/2025' location='Prague' description={[
                        'Leading team of four analysts in a B2C segment',
                        'Collaborating with stakeholders to identify, gather, and document business requirements and technical specifications',
                        'Serving as the main point of contact between business users, IT teams, and external vendors to ensure clear communication and understanding',
                        'Designing and mapping business processes, workflows, and system interactions using various modeling techniques (e.g. BPMN, UML)',
                        'Preparing functional specifications and user stories based on business requirements to guide the development process',
                        'Analyzing and designing system integrations using REST and SOAP',
                        'Preparing UI mockups using Figma'
                    ]}
                    />
                    <Experience role='Chapter Lead - IT Analysis & Design' employer='Česká spořitelna, a.s.' duration='11/2020 - 07/2022' location='Prague' description={[
                        'Leading the IT/Business analysis and design team, ensuring high quality requirements gathering and documentation',
                        'Overseeing the development of activity diagrams and business process models',
                        'Leading business requirements analysis and documentation initiatives on various projects',
                        'Creating and reviewing system specifications using UML methodology'
                    ]}
                    />
                    <Experience role='IT/Business Analyst' employer='Česká spořitelna, a.s.' duration='10/2017 - 11/2020' location='Prague' description={[
                        'Analyzing new system requirements',
                        'Creating and reviewing system specification using UML'
                    ]}
                    />
                    <Experience role='Test Manager' employer='Česká spořitelna, a.s.' duration='04/2017 - 02/2018' location='Prague' description={[
                        'Leading team of 5 testers, overseeing all testing operations',
                        'Collaborating with internal and external development teams, analysts, operations specialists, and product owners to ensure the quality of the software',
                        'Creating and maintaining comprehensive test documentation, test cases, and scenarios',
                        'Supervising incident management, defect tracking, and test execution processes',
                        'Leading acceptance, system, integration, and regression testing initiatives'
                    ]}
                    />
                </div>
            </div>
        </section>
    );
}