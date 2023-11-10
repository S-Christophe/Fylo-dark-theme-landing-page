"use client";
// import vendors
import Image from "next/image";

// import components
import Motion from "@/components/Motion";

// import variants
import { fadeIn } from "@/utils/motion";

export default function HeroSection() {
  return (
    <Motion
      as="section"
      variants={fadeIn(0, 0.5, "down", -10)}
      className="relative z-20 mx-auto flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-8 px-[2.21875rem] text-center md:min-h-[calc(100vh-(3rem+4.5625rem+52px))] md:max-w-[45rem] md:px-0 lg:min-h-[calc(100vh-(5.25rem+4.5625rem+52px))] lg:pb-[9.875rem]"
    >
      <Image
        src="./assets/images/illustration-intro.png"
        alt="illustration intro"
        width={720}
        height={534}
      />
      <h1 className="font-RalewayBold text-2xl leading-9 lg:text-[2.5rem] lg:leading-[3.75rem]">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="font-OpenSans lg:text-xl lg:leading-[1.875rem]">
        Fylo stores all your most important files in one secure location. Access
        them whereever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button
        type="button"
        className="min-h-[3rem] w-60 rounded-full bg-gradient-to-r from-cyan to-blue font-RalewayBold hover:to-cyan lg:min-h-[3.5rem] lg:w-[17.5rem] lg:text-base"
      >
        Get Started
      </button>
    </Motion>
  );
}
