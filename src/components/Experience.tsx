import { CalendarDays, MapPin } from "lucide-react";

interface Props {
    role: string,
    employer: string,
    duration: string,
    location: string,
    description: string[]
}

const Experience = ( {role, employer, duration, location, description} : Props) => {
    return (
        <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-[1px] top-1.5 bottom-0 w-0.5 bg-gray-300 translate-y-[2px]"></div>
        {/* Dot */}
        <div className="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full bg-blue-700 translate-y-[1px]"></div>
        {/* Content */}
        <div className="space-y-2">
            <h3 className="text-xl font-bold">{role}</h3>
            <p className="font-bold flex items-center text-neutral-700 dark:text-gray-400">{employer}</p>
            <p className="flex items-center text-neutral-600 dark:text-gray-500">
                <CalendarDays className='h-4 w-4 mr-1' />{duration}
                <span className='mx-2'>|</span>
                <MapPin className='h-4 w-4 mr-1' />{location}
            </p>
            <ul className="list-disc pl-5 space-y-1">
                {description.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
    )
}

export default Experience;