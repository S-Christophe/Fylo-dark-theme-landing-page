// import vendors
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mx-auto flex flex-col items-center gap-8 px-[2.21875rem] pt-12 text-center md:max-w-[45rem] md:px-0 lg:pb-[9.875rem] lg:pt-[5.25rem]">
      <Image
        src="/assets/images/illustration-intro.png"
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
        className="min-h-[3rem] w-60 rounded-full bg-gradient-to-r from-cyan to-blue font-RalewayBold lg:min-h-[3.5rem] lg:w-[17.5rem] lg:text-base"
      >
        Get Started
      </button>
    </section>
  );
}
