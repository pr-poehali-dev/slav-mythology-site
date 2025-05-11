
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import GodCarousel from "@/components/home/GodCarousel";
import WorldTree from "@/components/home/WorldTree";
import Calendar from "@/components/home/Calendar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <GodCarousel />
        <WorldTree />
        <Calendar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
