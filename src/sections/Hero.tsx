"use client"
import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg"
import HeroOrbit from '@/components/HeroOrbit';
export const HeroSection = () => {
  return <div id='hero' className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
      <div className='absolute inset-0 -z-30 opacity-5' style={{backgroundImage: `url(${grainImage.src})`}}></div>
      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>
      <HeroOrbit rotation={-14} size={430} shouldSpin spinDuration='3s' shouldOrbit orbitDuration='30s'>
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit rotation={79} size={440} shouldSpin spinDuration='3s' shouldOrbit orbitDuration='32s'>
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit rotation={-41} size={520} shouldOrbit orbitDuration='34s'>
        <div className="size-2 rounded-full bg-emerald-300/20" ></div>
      </HeroOrbit>
      <HeroOrbit rotation={178} size={530} shouldSpin spinDuration='3s' shouldOrbit orbitDuration='36s'>
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit rotation={20} size={550} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit rotation={98} size={590} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit rotation={-5} size={650} shouldOrbit orbitDuration='42s'>
        <div className="size-3 rounded-full bg-emerald-300/20" ></div>
      </HeroOrbit>
      <HeroOrbit rotation={144} size={710} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit rotation={85} size={720} shouldOrbit orbitDuration='46s'>
        <div className="size-3 rounded-full bg-emerald-300/20" ></div>
      </HeroOrbit>
      <HeroOrbit rotation={-72} size={800} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
    </div>
    <div  className="container">
      <div className='flex flex-col items-center'>
        <Image  className="size-[100px]" src={memojiImage} alt="Person Peeking from behind laptop" />
        <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full relative'>
            <div className='bg-green-500 absolute inset-0 animate-ping-large rounded-full'></div>
          </div>
          <div className='text-sm font-medium'>Available for new projects</div>
        </div>
      </div>
      <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional FullStack Projects</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>Building modern web applications with cutting-edge technologies. Passionate about creating seamless user experiences and robust backend systems.</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <a href="#projects" className=" z-30 inline-block" onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'> Explore My work</span>
            <ArrowDown className='size-4' />
          </button>
        </a>
        <a href="#contact" className=" z-30 inline-block" onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>Let's connect</span>
          </button>
        </a>
      </div>
    </div>
  </div>;
};
