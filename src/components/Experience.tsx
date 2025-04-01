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
        {/* Svislá čára */}
        <div className="absolute left-0 top-1.5 bottom-0 w-0.5 bg-gray-300"></div>
        {/* Tečka */}
        <div className="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full bg-blue-700"></div>
        {/* Obsah */}
        <div className="space-y-2">
            <h3 className="text-xl font-bold">{role}</h3>
            <p className="font-bold flex items-center text-neutral-700">{employer}</p>
            <p className="flex items-center text-neutral-600">
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