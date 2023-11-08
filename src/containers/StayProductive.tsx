// import vendors
import Image from "next/image";
import Link from "next/link";

export default function StayProductive() {
  return (
    <section className="mx-auto flex flex-col items-center gap-12 px-7 py-20 md:flex-row lg:gap-[3.5625rem] lg:pb-[5.8125rem] lg:pt-[4.3125rem] xl:max-w-7xl">
      <div className="relative aspect-[4/3] w-full max-w-[19rem] md:max-w-[38.4225rem]">
        <Image
          src="/assets/images/illustration-stay-productive.png"
          alt="illustration stay productive"
          fill
          sizes="(max-width: 768px) 304px"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-RalewayBold text-lg leading-6 lg:max-w-[15ch] lg:text-[2.5rem] lg:leading-[3.125rem]">
          Stay productive, wherever you are
        </h2>
        <p className="font-OpenSans lg:text-base">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="font-OpenSans lg:text-base">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <Link
          href="#"
          className="flex w-fit border-b border-cyan font-OpenSans text-xs text-cyan lg:text-base"
        >
          See how Fylo works
          <Image
            src="/assets/images/icon-arrow.svg"
            alt="icon arrow"
            width={16}
            height={16}
            className="mb-[0.375rem] ml-2"
          />
        </Link>
      </div>
    </section>
  );
}
