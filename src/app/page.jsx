import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);

const page = () => {
  return (
    <div className='h-screen'>
      <div className='bg-[#331707] h-[100vh] flex items-center justify-center'>
        <div className='w-[90%] md:w-[80%] lg:w-[65%] text-center flex flex-col items-center'>
          <svg className="w-[120px] h-[120px] md:w-[200px] md:h-[200px]" viewBox="0 0 463 284" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="179" width="105" height="105" fill="#FFE9D9" />
            <rect x="179" y="179" width="105" height="105" fill="#FFE9D9" />
            <rect x="31" y="105.246" width="105" height="105" transform="rotate(-45 31 105.246)" fill="#FFE9D9" />
            <rect x="179" width="105" height="105" fill="#FFE9D9" />
            <rect x="358" y="179" width="105" height="105" fill="#FFE9D9" />
            <rect x="284" y="105.246" width="105" height="105" transform="rotate(-45 284 105.246)" fill="#FFE9D9" />
          </svg>
          <h1 className='text-[#ffe9d9] font-times text-3xl md:text-5xl lg:text-6xl mt-4'>The First Media Company crafted For the Digital First Generation</h1>
        </div>
      </div>
      <div className='h-[100vh] bg-[#331707] flex items-center justify-center'>
        <div className='w-[90%] md:w-[60%] lg:w-[30%] px-4'>
          <h1 className='text-[#ffe9d9] text-2xl text-center mb-4'>Where innovation meets precision.</h1>
          <p className='text-[#ffe9d9] text-sm text-center font-thin leading-relaxed'>Symphonia unites visionary thinkers, creative architects, and analytical experts, collaborating seamlessly to transform challenges into oppurtunities. Together, we deliver tailored solutions that drive impact and inspire growth.</p>
        </div>

      </div>
      <div className='h-[100vh] bg-[#cdb9ab] flex items-center justify-center'>
        <h1>Your next section goes here.</h1>
      </div>

    </div>
  )
}

export default page