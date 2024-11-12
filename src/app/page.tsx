import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";
import HeroSection from "./components/heroSection";
import CourseDescription from "./components/overviewSection";
import CoursesSection from "./components/coursesSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CourseDescription />
      <hr />
      <div className="flex flex-row w-[85%]  py-10 sm:mx-auto gap-6 md:gap-9">
        <Image className="" src="/images/governor-in chair.jpg" width={700} height={700} alt=""  />
        <Image className="" src="/images/auditorium.jpg" width={700} height={700} alt=""  />
      </div>
      <CoursesSection />
     
      <Footer />
    </div>
  );
}
