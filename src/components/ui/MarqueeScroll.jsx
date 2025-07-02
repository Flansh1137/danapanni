import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarqueeScroll = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-text", {
        x: "-50%", // move left by 50% as scroll progresses
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true, // smoothly ties animation to scroll
        },
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={marqueeRef}
      className="bg-green-600 py-8 overflow-hidden "
    >
      <div className="w-full">
        <div className="marquee-text flex items-center space-x-8 text-white text-[1.6rem] font-semibold whitespace-nowrap w-max">
          <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span> <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span> <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span>
          <span>Let's help each other</span>
          <span>*</span>
        </div>
      </div>
    </section>
  );
};

export default MarqueeScroll;
