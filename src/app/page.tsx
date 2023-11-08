// import containers
import AccessForm from "@/containers/AccessForm";
import Features from "@/containers/Features";
import StayProductive from "@/containers/StayProductive";
import Testimonials from "@/containers/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Features />
      <StayProductive />
      <Testimonials />
      <AccessForm />
    </main>
  );
}
