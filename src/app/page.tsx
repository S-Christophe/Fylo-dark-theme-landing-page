// import containers
import StayProductive from "@/containers/StayProductive";
import Testimonials from "../containers/Testimonials";
import AccessForm from "@/containers/AccessForm";

export default function Home() {
  return (
    <main className="">
      <StayProductive />
      <Testimonials />
      <AccessForm />
    </main>
  );
}
