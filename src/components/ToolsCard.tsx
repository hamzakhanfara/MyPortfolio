import { technologies } from "@/data/Technologies";
import { TechIcon } from "./TechIcon";
import {twMerge} from "tailwind-merge"
import { Fragment } from 'react';
export const ToolsCard = ({className}: {className?: string} ) =>{
    return(
        <div className=" pt-3 pb-2">
            {technologies.map((item, itemIndex) => (
                <div className="" key={item.type}>
                    <div className="flex flex-row items-center justify-center gap-3 mt-2 pt-2">
                        <item.icon className="text-emerald-300 size-6  md:size-8"  />
                        <h2 className="font-semibold text-xl md:text-2xl">{item.type}</h2>
                    </div>
                    <div className={twMerge("flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",className)}>
                        <div className={twMerge(itemIndex%2 === 0 && 'animate-move-right',"flex flex-none py-0.5 gap-6 pr-6 animate-move-left [animation-duration:20s]")}>
                            {[...new Array(2)].fill(0).map((_,index) => (
                                <Fragment key={index}>
                                    {item.technos.map((techno) =>(
                                        <div className="items-center inline-flex gap-2  md:gap-4 xl:gap-4 py-2 px-3 border-2 border-white/10 rounded-lg" key={techno.name}>
                                            <TechIcon component={techno.iconType} />
                                            <span className="font-semibold text-xs md:text-xl">{techno.name}</span>
                                        </div>
                                    ))}
                                </Fragment>
                            ))}
                            
                        </div>
                    </div>
                    <hr className="border-t-2 border-white/5 mt-5" />
                </div>
            ))}
        </div>
    )
}