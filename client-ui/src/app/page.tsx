import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import FeaturedCollection from "@/app/components/FeaturedCollection";
import AboutSection from "@/app/components/AboutSection";
import Testimonials from "@/app/components/Testimonials";
import CallToAction from "@/app/components/CallToAction";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header/>
      <HeroSection />
      <FeaturedCollection />
      <AboutSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
