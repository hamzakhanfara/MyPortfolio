"use client"
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import ContactInfo from '@/components/contactInfo';
import { ArrowBigDown, ArrowDown, Phone } from 'lucide-react';
import { useState } from 'react';
export const ContactSection = () => {
  const [showInfo, setShowInfo] = useState(false);
  return(
    <div id='contact' className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container z-49'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
          <div className='absolute inset-0 -z-10 opacity-5' style={{
              backgroundImage: `url(${grainImage.src})`
            }}></div>
          <div className='flex flex-col z-100 gap-8 md:gap-8 items-center'>
            <div>
              <h2 className='font-serif md:text-center text-2xl md:text-3xl'>Let&apos;s create something amazing together</h2>
              <p className='text-sm md:text-center md:text-base mt-2'>
                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className='inline-block'>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowDown className="size-4" />
              </button>
            </div>
            {showInfo && <ContactInfo />}
          </div>
        </div>
      </div>
    </div>
  )
};
