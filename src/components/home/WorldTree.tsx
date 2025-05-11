
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type WorldLevel = {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
};

const worldLevels: WorldLevel[] = [
  {
    id: 1,
    name: "Прави",
    description: "Верхний мир, обитель богов и предков, источник порядка, гармонии и света.",
    icon: "☀",
    color: "bg-skyblue",
  },
  {
    id: 2,
    name: "Яви",
    description: "Средний мир, реальность, в которой живут люди, мир материального существования.",
    icon: "🌳",
    color: "bg-forest",
  },
  {
    id: 3,
    name: "Нави",
    description: "Нижний мир, потусторонний мир, царство тьмы, обитель духов и умерших предков.",
    icon: "🌑",
    color: "bg-wood",
  },
];

const WorldTree = () => {
  const [activeLevel, setActiveLevel] = useState<number>(2);
  const treeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const branchElements = document.querySelectorAll("[data-branch]");
          branchElements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("w-full");
            }, i * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (treeRef.current) {
      observer.observe(treeRef.current);
    }

    return () => {
      if (treeRef.current) {
        observer.unobserve(treeRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-muted/50 parchment-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-forest slavic-symbol">Мировое Древо</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Славяне представляли вселенную в виде великого древа, соединяющего три мира
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24" ref={treeRef}>
          {/* Tree Visualization */}
          <div className="relative h-[500px] w-16 flex-shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-wood/70 w-4 mx-auto rounded-full"></div>
            
            {worldLevels.map((level, index) => (
              <div 
                key={level.id} 
                className={cn(
                  "absolute h-24 w-24 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 border-4",
                  activeLevel === level.id ? `${level.color} border-amber scale-110 z-10` : `${level.color}/70 border-transparent`,
                  index === 0 ? "top-0" : index === 1 ? "top-1/2 -translate-y-1/2" : "bottom-0"
                )}
                onClick={() => setActiveLevel(level.id)}
              >
                <span className="text-3xl">{level.icon}</span>
                
                {/* Connecting branch */}
                <div 
                  data-branch
                  className={cn(
                    "absolute h-2 bg-amber/80 w-0 transition-all duration-700 ease-out rounded-full",
                    index === 0 ? "top-full right-1/2 rotate-90 origin-top" : 
                    index === 1 ? "left-full top-1/2 -translate-y-1/2" : 
                    "top-0 right-1/2 rotate-90 origin-top"
                  )}
                  style={{ 
                    height: index === 1 ? "8px" : "100px",
                    width: activeLevel === level.id ? "150px" : "0" 
                  }}
                ></div>
                
                <span 
                  className={cn(
                    "absolute text-lg font-serif font-semibold transition-all",
                    index === 0 ? "-top-10" : index === 1 ? "left-32" : "-bottom-10",
                    activeLevel === level.id ? "opacity-100" : "opacity-70"
                  )}
                >
                  {level.name}
                </span>
              </div>
            ))}
            
            {/* Decorative elements */}
            <div className="absolute inset-y-0 left-0 right-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute left-1/2 transform -translate-x-1/2 w-3 h-1 bg-amber/60 rounded-full"
                  style={{ 
                    top: `${15 + i * 15}%`,
                    opacity: 0.3 + (i % 3) * 0.2
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Description */}
          <div className="w-full max-w-md">
            {worldLevels.map((level) => (
              <div 
                key={level.id}
                className={cn(
                  "transition-all duration-500 bg-white/80 backdrop-blur-sm p-6 rounded-lg border-l-4 shadow-lg mb-6",
                  activeLevel === level.id ? "opacity-100 border-l-amber" : "opacity-50 border-l-transparent",
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={cn("text-2xl flex items-center justify-center w-10 h-10 rounded-full", level.color)}>
                    {level.icon}
                  </span>
                  <h3 className="text-xl font-bold">{level.name}</h3>
                </div>
                <p className="text-muted-foreground">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldTree;
