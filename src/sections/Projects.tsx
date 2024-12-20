import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg"
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Personal project",
    year: "2024",
    title: "Flow Scrape",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="A selection of projects that showcase my expertise in full-stack development." />
      <div className="flex flex-col md:mt-20 mt-10 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16" style={{top: `calc(64px + ${projectIndex * 40}px)`}} >
            <div className=" lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r inline-flex font-bold uppercase tracking-widest text-transparent bg-clip-text text-sm from-emerald-300 to-sky-400">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-3xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul  className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex md:w-auto w-full flex-row items-center mt-8 gap-3">
                  <a href={project.link}>
                    <button className=" bg-white text-gray-950 h-12 p-2 flex-row rounded-xl font-semibold justify-center gap-1 inline-flex items-center">
                      <Github />
                      <span>View Code</span>
                    </button>
                  </a>
                  <a href={project.link}>
                    <button className=" bg-white  text-gray-950 h-12 p-2 flex-row rounded-xl font-semibold justify-center gap-1 inline-flex items-center">
                      <ExternalLink />
                      <span>View Demo</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};
