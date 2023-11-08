// import vendors
import Image from "next/image";

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
      <Image src={img} alt={name} width={width} height={height} />
      <div className="text-center">
        <h2 className="mb-2 font-RalewayBold text-lg leading-6 lg:text-xl lg:leading-7">
          {name}
        </h2>
        <p className="font-OpenSans">{description}</p>
      </div>
    </div>
  );
}
