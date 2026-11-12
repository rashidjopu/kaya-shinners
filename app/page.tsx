import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TravelSection from "@/components/TravelSection";
import GameDrives from "@/components/GameDrives";
import Destinations from "@/components/Destinations";
import Gallery from "@/components/Gallery";
import Hotels from "@/components/Hotels";
import Reviews from "@/components/Reviews";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TravelSection />
        <GameDrives />
        <Destinations />
        <Gallery />
        <Hotels />
        <Reviews />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
