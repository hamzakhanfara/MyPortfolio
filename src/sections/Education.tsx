import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import EducationCard from "@/components/EducationCard";
import { SectionHeader } from "@/components/SectionHeader";
import { educations } from "@/data/Educations";
import { Fragment } from "react";

export const EducationSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <SectionHeader title="Engineering degree" eyebrow="Education" description="My academic journey and qualifications that have shaped my expertise."/>
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_,index) => (
            <Fragment key={index}>
              {educations.map((education) => (
                <EducationCard key={education.school} description={education.description} university={education.school} degree={education.degree} logo={education.image} year={education.year} />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}