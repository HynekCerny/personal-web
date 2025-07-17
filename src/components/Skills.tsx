import { Code2, BarChart3, Database, FileSpreadsheet, BriefcaseBusiness, User2 } from "lucide-react";

const Skills = () => {
    const skills = [
        {
            icon: BarChart3,
            title: "Business Analysis",
            items: ["Requirements Gathering", "Process Mapping", "User Stories", "Use Cases", "BPMN", "UML"],
        },
        {
            icon: FileSpreadsheet,
            title: "Project Management",
            items: ["Agile", "Scrum", "Jira", "Confluence"],
        },
        {
            icon: User2,
            title: "Soft Skills",
            items: ["Communication", "Presentation", "Leadership", "Problem Solving", "Stakeholder Management"],
        },
        {
            icon: Database,
            title: "Data Analysis",
            items: ["SQL", "Excel", "Database Modeling", "Reporting"],
        },
        {
            icon: Code2,
            title: "Technical Skills",
            items: ["EA", "OpenAPI", "REST", "Kafka", "RabbitMQ", "SOAP", "SQL", "HTML/CSS", "TypeScript + React", "GitHub", "Figma", "AxureRP"],
        },
        {
            icon: BriefcaseBusiness,
            title: "Domain Knowledge",
            items: ["Finance", "Banking", "Insurance"],
        },
    ];

    return (
        <section id="skills" className="fade-in w-full justify-center pt-24 md:pt-24 lg:pt-24 bg-gradient-to-tr from-blue-100 to-white dark:from-gray-700 dark:to-gray-900">
            
            <div className="fade-slide-in container md:px-10 max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-flex items-center rounded-full border px-3.5 py-1 font-semibold dark:border-gray-200">
                            <Code2 className="mr-2 h-4 w-4" />
                            Skills & Expertise
                        </div>
                        <h2 className="pt-2 pb-2 text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-tr from-black to-gray-500 dark:from-gray-100 dark:to-gray-500">My Toolkit</h2>
                        <p className="max-w-[900px] text-lg/relaxed md:text-xl/relaxed">
                            I've developed a diverse set of skills that allow me to excel in both business and technical
                            environments.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map(({ icon: Icon, title, items }, index) => (
                        <div key={index} className="rounded-2xl border border-gray-500 bg-white dark:bg-gray-900 p-6 shadow-sm dark:shadow-sm dark:shadow-gray-800 dark:border-gray-500 hover:bg-blue-50 dark:hover:bg-gray-800 hover:shadow-lg transition-shadow">
                            <div className="flex items-center text-lg font-semibold mb-4">
                                <Icon className="mr-2 h-5 w-5 text-gray-700 dark:text-gray-400" />
                                {title}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="rounded-full bg-gray-200 dark:bg-gray-400 px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-900"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        // </div>
    );
}

export default Skills;