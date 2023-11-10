"use client";

// import vendors
import Image from "next/image";
import Link from "next/link";

// import components
import Motion from "@/components/Motion";

// import variants
import { fadeIn } from "@/utils/motion";

export default function StayProductive() {
  return (
    <section className="mx-auto flex flex-col items-center gap-12 px-7 py-20 md:flex-row lg:gap-[3.5625rem] lg:pb-[5.8125rem] lg:pt-[4.3125rem] xl:max-w-7xl">
      <Motion
        as="div"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.8,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.5,
              type: "tween",
              ease: "easeOut",
              duration: 0.5,
            },
          },
        }}
        className="relative aspect-[4/3] w-full max-w-[19rem] md:max-w-[38.4225rem]"
      >
        <Image
          src="./assets/images/illustration-stay-productive.png"
          alt="illustration stay productive"
          fill
          sizes="(max-width: 768px) 304px"
        />
      </Motion>
      <div className="flex flex-col gap-4">
        <Motion
          as="h2"
          variants={fadeIn(0.0, 0.5, "up", 20)}
          className="font-RalewayBold text-lg leading-6 lg:max-w-[15ch] lg:text-[2.5rem] lg:leading-[3.125rem]"
        >
          Stay productive, wherever you are
        </Motion>
        <Motion
          as="p"
          variants={fadeIn(0.1, 0.5, "up", 20)}
          className="font-OpenSans lg:text-base"
        >
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </Motion>
        <Motion
          as="p"
          variants={fadeIn(0.1, 0.5, "up", 20)}
          className="font-OpenSans lg:text-base"
        >
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </Motion>
        <Motion as="div" variants={fadeIn(0.2, 0.5, "up", 20)}>
          <Link
            href="#"
            className="flex w-fit items-center gap-2 border-b border-cyan font-OpenSans text-xs text-cyan lg:text-base"
          >
            See how Fylo works
            <Image
              src="./assets/images/icon-arrow.svg"
              alt="icon arrow"
              width={16}
              height={16}
            />
          </Link>
        </Motion>
      </div>
    </section>
  );
}
