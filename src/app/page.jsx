'use client';

import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Logo3D from '@/components/Logo3D';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const page = () => {
  const cubeRef = useRef(null);


  useGSAP(() => {

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "+=70%",
        scrub: true,
        pin: true,
      },
    })

    tl.fromTo("#hero-content",
      { scale: 1, filter: "blur(0px)", opacity: 1 },
      { scale: 1.4, filter: "blur(12px)", opacity: 0, ease: "none" }
    );

    tl.fromTo("#svgicon",
      { opacity: 1 },
      { opacity: 0, ease: "none" },
      0
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: "#about-section",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    })
    .fromTo("#about-content",
      { scale: 1.4, filter: "blur(12px)", opacity: 0 },
      { scale: 1, filter: "blur(0px)", opacity: 1, ease: "none" }
    );
  }, []);

  return (
    <div id="smooth-wrapper" className="bg-[#331707] overflow-hidden">
      <div id="smooth-content">

        <section id="hero-section" className='h-[80vh] flex items-center justify-center bg-[#331707]'>
          <div id='hero-content' className='w-[90%] md:w-[80%] lg:w-[65%] text-center flex flex-col items-center'>
            <svg id='svgicon' className="w-[120px] h-[120px] md:w-[200px] md:h-[200px]" viewBox="0 0 463 284" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="179" width="105" height="105" fill="#FFE9D9" />
              <rect x="179" y="179" width="105" height="105" fill="#FFE9D9" />
              <rect x="31" y="105.246" width="105" height="105" transform="rotate(-45 31 105.246)" fill="#FFE9D9" />
              <rect x="179" width="105" height="105" fill="#FFE9D9" />
              <rect x="358" y="179" width="105" height="105" fill="#FFE9D9" />
              <rect x="284" y="105.246" width="105" height="105" transform="rotate(-45 284 105.246)" fill="#FFE9D9" />
            </svg>
            <h1 className='text-[#ffe9d9] font-times text-3xl md:text-5xl lg:text-6xl mt-4'>
              The First Media Company crafted For the Digital First Generation
            </h1>
          </div>
          
        </section>
        <Logo3D cubeRef={cubeRef} />
        <Logo3D cubeRef={cubeRef} />
        <Logo3D cubeRef={cubeRef} />
        <Logo3D cubeRef={cubeRef} />
        <Logo3D cubeRef={cubeRef} />
        <Logo3D cubeRef={cubeRef} />


        <section id="about-section" className='h-screen flex items-center justify-center bg-[#331707] py-20'>
          <div id="about-content" className='w-[90%] md:w-[60%] lg:w-[40%] px-4'>
            <h1 className='text-[#ffe9d9] text-2xl md:text-3xl text-center mb-6'>Where innovation meets precision.</h1>
            <p className='text-[#ffe9d9] text-sm md:text-base text-center font-thin leading-relaxed'>
              Symphonia unites visionary thinkers, creative architects, and analytical experts, collaborating seamlessly to transform challenges into opportunities. Together, we deliver tailored solutions that drive impact and inspire growth.
            </p>
          </div>
        </section>


        <section className='h-screen bg-[#cdb9ab] flex items-center justify-center'>
          <h1 className='text-3xl md:text-4xl font-times text-[#331707]'>Your next section goes here.</h1>
        </section>
      </div>
    </div>
  )
}

export default page