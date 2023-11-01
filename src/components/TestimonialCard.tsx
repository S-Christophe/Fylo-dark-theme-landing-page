// import vendors
import Image from "next/image";

// import types
import { ITestimonial } from "@/types/Testimonial";

export default function TestimonialCard({
  id,
  name,
  description,
  img,
  job,
}: ITestimonial) {
  return (
    <div
      className={`relative rounded-[0.245625rem] bg-dark-blue-testimonials-bg px-5 py-6 font-OpenSans lg:px-[1.5625rem] lg:pb-[1.625rem] lg:pt-10 ${
        id == 1 &&
        'before:absolute before:-left-2 before:top-[-2.1875rem] before:-z-10 before:block before:h-[2.8125rem] before:w-[3.4375rem] before:bg-[url("../../public/assets/images/bg-quotes.png")]'
      } `}
    >
      <p className="mb-4 text-[0.625rem] leading-[1.125rem] lg:text-sm">
        {description}
      </p>
      <div className="flex gap-2">
        <Image
          src={img}
          alt={name}
          width={24}
          height={24}
          className="rounded-full"
        />
        <div>
          <p className="text-[0.625rem] leading-3">{name}</p>
          <p className="text-[0.4375rem]">{job}</p>
        </div>
      </div>
    </div>
  );
}
