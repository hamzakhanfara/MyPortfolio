interface EducationCardProps {
    university: string;
    degree: string;
    year: string;
    logo: StaticImageData;
    description: string;
}
import { motion } from "framer-motion";
import { Card } from "./Card";
import Image, { StaticImageData } from "next/image";

export default function EducationCard({
    university,
    degree,
    year,
    logo,
    description
  }: EducationCardProps) {
    return (
        <div>
            <Card className="p-4 md:p-8 max-w-xs md:max-w-md hover:-rotate-3 transition duration-300">
                <div className="flex items-center gap-4">
                    <div className=" size-16 flex-shrink-0">
                        <Image
                        src={logo}
                        alt={`${university} logo`}
                        className="max-h-full"
                        />
                    </div>
                    <div className="">
                        <h3 className="md:text-lg font-semibold">{university}</h3>
                        <h4 className="text-white/40 mb-1">{degree}</h4>
                        <p className="text-white/40">{year}</p>
                    </div>
                </div>
                <p className=" mt-4 md:mt-6 text-sm md:text-base">{description}</p>
            </Card>
        </div>
    )
}