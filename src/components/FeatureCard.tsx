"use client";

// import vendors
import Image from "next/image";

// import components
import Motion from "@/components/Motion";

// import variants
import { fadeIn } from "@/utils/motion";

// import types
import { IFeature } from "@/types/Feature";

export default function FeatureCard({
  id,
  name,
  description,
  img,
  width,
  height,
}: IFeature) {
  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <Motion as="div" variants={fadeIn(0, 0.5)}>
        <Image src={img} alt={name} width={width} height={height} />
      </Motion>

      <div className="text-center">
        <Motion
          as="h2"
          variants={fadeIn(0.1, 0.5, "up", 20)}
          className="mb-2 font-RalewayBold text-lg leading-6 lg:text-xl lg:leading-7"
        >
          {name}
        </Motion>
        <Motion
          as="p"
          variants={fadeIn(0.2, 0.5, "up", 20)}
          className="font-OpenSans"
        >
          {description}
        </Motion>
      </div>
    </div>
  );
}
