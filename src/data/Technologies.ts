import {Github, Monitor, Server, PenTool, Database} from 'lucide-react'
import ReactIcon from '@/assets/icons/react.svg'
import VueIcon from '@/assets/icons/vuejs_logo.svg'
import NextIcon from '@/assets/icons/next-js.svg'
import AngularIcon from '@/assets/icons/angular-icon.svg'
import GoIcon from '@/assets/icons/go-icon.svg'
import NodeIcon from '@/assets/icons/nodejs-icon.svg'
import SpringIcon from '@/assets/icons/spring-3.svg'
import PythonIcon from '@/assets/icons/python.svg'
import TailwindIcon from '@/assets/icons/tailwindcss.svg'
import MongodbIcon from '@/assets/icons/mongodb-icon.svg'
import PostgresIcon from '@/assets/icons/postgresql.svg'
import PrismaIcon from '@/assets/icons/prisma.svg'
import VscodeIcon from '@/assets/icons/visual-studio-code.svg'
import DockerIcon from '@/assets/icons/docker.svg'
import KubernetesIcon from '@/assets/icons/kubernets.svg'
import JiraIcon from '@/assets/icons/jira-icon.svg'
import ConfluenceIcon from '@/assets/icons/confluence.svg'
import StripeIcon from '@/assets/icons/stripe.svg'

export const technologies = [
    {
      type: "Frontend",
      icon: Monitor,
      technos:[
        {
            name:"Vuejs",
            iconType: VueIcon
        },
        {
            name:"React",
            iconType: ReactIcon,
        },
        {
            name:"Nextjs",
            iconType:NextIcon,
        },
        {
            name:"Angular",
            iconType:AngularIcon,
        },
        {
            name: "Tailwind CSS",
            iconType: TailwindIcon,
        }
      ]
    },
    {
        type:"Backend",
        icon: Server,
        technos:[
            {
                name:"Golang",
                iconType:GoIcon,
            },
            {
                name:"Nodejs",
                iconType:NodeIcon,
            },
            {
                name:"Spring",
                iconType:SpringIcon,
            },
            {
                name: "Python",
                iconType: PythonIcon,
            }
        ]
    },
    {
        type: "Database",
        icon: Database,
        technos:[
            {
                name: "Mongodb",
                iconType: MongodbIcon,
            },
            {
                name: "PostgreSQL",
                iconType: PostgresIcon,
            },
            {
                name: "Prisma",
                iconType: PrismaIcon,
            }
        ]
    },
    {
        type: "Tools",
        icon: PenTool,
        technos:[
            {
                name: "Docker",
                iconType: DockerIcon,
            },
            {
                name: "Kubernetes",
                iconType: KubernetesIcon,
            },
            {
                name: "Jira",
                iconType: JiraIcon,
            },
            {
                name: "Confluence",
                iconType: ConfluenceIcon,
            },
            {
                name: "Github",
                iconType: Github,
            },
            {
                name: "Vs code",
                iconType: VscodeIcon,
            },
            {
                name: "Stripe",
                iconType: StripeIcon,
            }
        ]
    }
]