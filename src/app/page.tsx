// import containers
import AccessForm from "@/containers/AccessForm";
import Features from "@/containers/Features";
import HeroSection from "@/containers/HeroSection";
import StayProductive from "@/containers/StayProductive";
import Testimonials from "@/containers/Testimonials";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <div className='relative z-0 bg-dark-blue-main before:absolute before:-top-[8.8125rem] before:-z-10 before:h-[8.8125rem] before:w-full before:bg-[url("../../public/assets/images/bg-curvy-mobile.svg")] before:bg-[length:100%_100%] before:bg-no-repeat lg:translate-y-0 lg:pt-0 lg:before:-top-[28.0625rem] lg:before:h-[28.0625rem] lg:before:bg-[url("../../public/assets/images/bg-curvy-desktop.svg")]'>
        <Features />
        <StayProductive />
        <Testimonials />
        <AccessForm />
      </div>
    </main>
  );
}
