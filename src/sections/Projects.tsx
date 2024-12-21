import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import PanelDashboardPage from "@/assets/images/panel-dashboard-interface.png";
import MyPortfolio from "@/assets/images/myportfolio-page.png";
import scrapeFlowPage from "@/assets/images/scrape-flow-page.png";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg"
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Panelio",
    year: "2024",
    title: "Inventory Management Dashboard",
    results: [
      { title: " FullStack Saas Fast and Interactive Invetory App." },
      { title: "Supports real-time updates and advanced filtering options." },
      { title: "Nextjs, Shadcn, Expressjs, postgresql." },
    ],
    link:[{
      github:"https://github.com/hamzakhanfara/panel-dashboard",
      demo: "https://github.com/hamzakhanfara/panel-dashboard",
    }],
    image: PanelDashboardPage,
  },
  {
    company: "Personal project",
    year: "2024",
    title: "My portfolio",
    results: [
      { title: "Stunning Portfolio design." },
      { title: "Built from scratch." },
      { title: "Nextjs, Tailwind CSS, motion-frame." },
    ],
    link:[{
      github:"https://github.com/hamzakhanfara/MyPortfolio",
      demo: "https://github.com/hamzakhanfara/MyPortfolio",
    }],
    image: MyPortfolio,
  },
  {
    company: "Personal project",
    year: "2024",
    title: "Flow Scrape",
    results: [
      { title: "FullStack Saas for building webscrapers visually." },
      { title: "AI powered tool." },
      { title: "Nextjs, Shadcn, Stripe, Prisma." },
    ],
    link:[{
      github:"https://github.com/hamzakhanfara/scrapeFlow",
      demo: "https://github.com/hamzakhanfara/scrapeFlow",
    }],
    image: scrapeFlowPage,
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
                  <a href={project.link[0].github}>
                    <button className=" bg-white text-gray-950 h-12 p-2 flex-row rounded-xl font-semibold justify-center gap-1 inline-flex items-center">
                      <Github />
                      <span>View Code</span>
                    </button>
                  </a>
                  <a href={project.link[0].demo}>
                    <button className=" bg-white  text-gray-950 h-12 p-2 flex-row rounded-xl font-semibold justify-center gap-1 inline-flex items-center">
                      <ExternalLink />
                      <span>View Demo</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative ">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none border-x-8 border-t-8 rounded-lg border-gray-950 " />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};
