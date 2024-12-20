"use client"
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import { GraduationCap, Brain, Smile } from 'lucide-react';
import EducationCard from "@/components/EducationCard";
import { CardHeader } from "@/components/CardHeader";
import Avatar from '@/assets/images/memoji-computer.png'
import Image from "next/image";
import { technologies } from "@/data/Technologies";
import { educations } from "@/data/Educations";
import { ToolsCard } from "@/components/ToolsCard";
import hobbies from "@/data/Hobbies";
import { motion } from 'framer-motion';
import { useRef } from "react";
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
  <div id="about" className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader 
      eyebrow="About Me"
      title="A Glimpse into My World"
      description="Learn More about who I am,what I do and have a comprehensive overview of my technical skills and proficiency levels."
      />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:gap-8 lg:gap-4">
          <div className=" flex flex-col lg:col-span-1 gap-8 md:gap-8 lg:gap-4">
            <Card className="h-[320px] md:h-auto">
              <CardHeader title="Introducing myself" description="">
                <StarIcon className="size-9 text-emerald-300" />
              </CardHeader>
              <div className="flex flex-row items-center px-3 pb-6 gap-2">
                <Image  className="size-[100px]" src={Avatar} alt="Person Peeking from behind laptop" />
                <p className="text-sm lg:text-base lg:mt-4 text-white/60">I'm Hamza, a software Engineer specializing in Fullstack Development. I am passionate about building innovative, user-centric applications and leveraging cutting-edge technologies to solve complex challenges.</p>
              </div>
            </Card>
            <Card className=" lg:col-span-2 h-[320px] lg:h-[388px] p-0 flex flex-col">
              <CardHeader className="px-6 py-6" title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm.">
                <Smile className="size-9 text-emerald-300" />
              </CardHeader>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobbie)=>(
                  <motion.div key={hobbie.name} className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                  style={{
                    left: hobbie.left,
                    top: hobbie.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">{hobbie.name}</span>
                    <hobbie.icon className="text-yellow-400" />
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
          <div className="flex flex-col gap-8 lg:col-span-2 md:gap-8 lg:gap-4">
            <Card className="">
              <CardHeader className="" title="Skills & Expertise" description="A comprehensive overview of my technical skills and proficiency levels.">
                <Brain className="size-9 text-emerald-300" />
              </CardHeader>
              <ToolsCard className="mt-6" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
)
};
