'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Page() {
  const heroRef = useRef(null);
  const heroInnerRef = useRef(null);
  const aboutRef = useRef(null);

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      effects: true,
    });

    // HERO PIN + SCALE OUT
    gsap.fromTo(
      heroInnerRef.current,
      {
        scale: 1,
        filter: 'blur(0px)',
        opacity: 1,
      },
      {
        scale: 1.4,
        filter: 'blur(12px)',
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: true,
          pin: true,
        },
      }
    );

    // ABOUT FADE IN
    gsap.fromTo(
      aboutRef.current,
      {
        scale: 1.2,
        filter: 'blur(12px)',
        opacity: 0,
      },
      {
        scale: 1,
        filter: 'blur(0px)',
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">

        {/* HERO */}
        <section
          ref={heroRef}
          className="h-screen bg-[#331707] flex items-center justify-center"
        >
          <div
            ref={heroInnerRef}
            className="w-[90%] md:w-[80%] lg:w-[65%] text-center flex flex-col items-center"
          >
            <svg
              className="w-[120px] h-[120px] md:w-[200px] md:h-[200px]"
              viewBox="0 0 463 284"
              fill="none"
            >
              <rect y="179" width="105" height="105" fill="#FFE9D9" />
              <rect x="179" y="179" width="105" height="105" fill="#FFE9D9" />
              <rect x="31" y="105.246" width="105" height="105" transform="rotate(-45 31 105.246)" fill="#FFE9D9" />
              <rect x="179" width="105" height="105" fill="#FFE9D9" />
              <rect x="358" y="179" width="105" height="105" fill="#FFE9D9" />
              <rect x="284" y="105.246" width="105" height="105" transform="rotate(-45 284 105.246)" fill="#FFE9D9" />
            </svg>

            <h1 className="text-[#ffe9d9] font-times text-3xl md:text-5xl lg:text-6xl mt-4">
              The First Media Company crafted For the Digital First Generation
            </h1>
          </div>
        </section>

        {/* ABOUT */}
        <section className="h-screen bg-[#331707] flex items-center justify-center">
          <div
            ref={aboutRef}
            className="w-[90%] md:w-[60%] lg:w-[30%] px-4 text-center"
          >
            <h1 className="text-[#ffe9d9] text-2xl mb-4">
              Where innovation meets precision.
            </h1>
            <p className="text-[#ffe9d9] text-sm font-thin leading-relaxed">
              Symphonia unites visionary thinkers, creative architects, and analytical experts,
              collaborating seamlessly to transform challenges into opportunities.
            </p>
          </div>
        </section>

        {/* NEXT SECTION */}
        <section className="h-screen bg-[#cdb9ab] flex items-center justify-center">
          <h1>Your next section goes here.</h1>
        </section>

      </div>
    </div>
  );
}
