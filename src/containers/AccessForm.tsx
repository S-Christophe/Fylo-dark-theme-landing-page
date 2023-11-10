"use client";

// import components
import Motion from "@/components/Motion";

export default function AccessForm() {
  return (
    <Motion
      as="div"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.2,
            type: "tween",
            ease: "easeOut",
            duration: 0.5,
          },
        },
      }}
      className=" absolute mx-5 -translate-y-[58%] rounded-[0.5625rem] bg-dark-blue-intro-bg px-7 py-9 text-center min-[919px]:left-0 min-[919px]:right-0 min-[919px]:mx-auto min-[919px]:max-w-[53.9375rem] lg:px-[4.8125rem] lg:py-10"
    >
      <h2 className="mb-4 font-RalewayBold text-lg leading-6 lg:text-[2rem] lg:leading-[3rem]">
        Get early access today
      </h2>
      <p className="mb-8 font-OpenSans lg:mb-[2.375rem]">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div>
        <form className="flex flex-col gap-6 md:flex-row md:gap-7">
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            className="min-h-[3rem] w-full flex-1 rounded-full pl-7 font-OpenSans text-[0.625rem] text-dark-blue-main"
          ></input>
          <button
            type="button"
            className="min-h-[3rem] w-full rounded-full bg-gradient-to-r from-cyan to-blue font-RalewayBold hover:to-cyan md:w-[12.5rem]"
          >
            Get Started For Free
          </button>
        </form>
      </div>
    </Motion>
  );
}
