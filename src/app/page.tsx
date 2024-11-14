import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import OverviewSection from "./components/overviewSection";
import CoursesSection from "./components/coursesSection";
import SlidingCardSection from "./components/slidingCardSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <SlidingCardSection />
      <CoursesSection /> 
      <Footer />
    </div>
  );
}
