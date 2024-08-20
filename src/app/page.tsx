import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { ScrollDesign } from "@/components/ScrollDesignbar";
import TermPart from "@/components/TermPart";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingCourse from "@/components/UpcomingCourse";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  
     <HeroSection/>
     <FeaturedCourses/>
     <div className="m-10 scroll-m-0">
     <ScrollDesign/>
     <TestimonialCard/>
     <UpcomingCourse/>
      <TermPart/>
     </div>
   </main>
  );
}
