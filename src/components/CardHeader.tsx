import { PropsWithChildren } from "react"
import {twMerge} from "tailwind-merge"
export const CardHeader = ({title, description,className, children}: 
    PropsWithChildren<{title: string; description?: string; className?: string}>) => {
    return(
        <div className={twMerge("flex flex-col  p-6 md:py-8 md:px-10", className)}>
            <div className="inline-flex items-center gap-2">
                {children}
                <h3 className="font-serif text-3xl">{title}</h3>
            </div>
            <p className="text-sm lg:text-base text-white/60 mt-2">{description}</p>
        </div>
    )
}