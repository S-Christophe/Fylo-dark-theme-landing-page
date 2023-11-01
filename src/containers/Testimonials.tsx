// import components
import Card from "@/components/TestimonialCard";

// import datas
import datas from "../static/Testimonials.json";

/**
 * TO DO PADDING TOP ALL SCREEN
 * @returns
 */
export default function Testimonials() {
  return (
    <section className="mx-auto flex flex-col gap-6 px-12 pb-[21.0625rem] md:flex-row md:justify-between lg:gap-10 lg:px-[3.71875rem] xl:max-w-7xl xl:pb-[22.5rem]">
      {datas.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </section>
  );
}
