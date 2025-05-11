
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-forest/30 via-forest/50 to-forest/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-amber">Славянская</span> Мифология
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in font-serif" style={{animationDelay: "0.3s"}}>
            Погрузитесь в загадочный мир языческих богов, древних преданий и сакральных знаний наших предков
          </p>
          
          <div className="flex justify-center gap-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <Button size="lg" className="bg-amber hover:bg-amber/90 text-forest font-medium text-lg">
              Начать Путешествие
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-lg">
              Узнать Больше
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
