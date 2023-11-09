// import components
import Card from "@/components/FeatureCard";

// import datas
import datas from "../static/Features.json";

// TODO padding top à revoir peut etre à cause du curve
export default function Features() {
  return (
    <section className="mx-auto grid grid-cols-1 gap-20 px-7 pb-20 pt-[7.5rem] md:grid-cols-2 lg:gap-x-[9.1875rem] lg:px-28 lg:pb-[4.3125rem] lg:pt-0 xl:max-w-7xl xl:px-[12.5rem]">
      {datas.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </section>
  );
}
