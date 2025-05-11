
import { useState, useEffect, useCallback, memo } from "react";
import { cn } from "@/lib/utils";
import { Season } from "./types";

interface SeasonWheelProps {
  seasons: Season[];
  activeSeason: string;
  onSeasonChange: (seasonId: string) => void;
}

/**
 * Интерактивное колесо сезонов
 * 
 * Анимированное колесо, позволяющее переключаться между сезонами
 * славянского календаря.
 */
export const SeasonWheel = memo(({ seasons, activeSeason, onSeasonChange }: SeasonWheelProps) => {
  const [rotateWheel, setRotateWheel] = useState<number>(0);

  // Обновляем угол поворота колеса при смене сезона
  useEffect(() => {
    const index = seasons.findIndex(s => s.id === activeSeason);
    setRotateWheel(index * -90);
  }, [activeSeason, seasons]);

  // Обработчик нажатия на сезон
  const handleSeasonClick = useCallback((seasonId: string) => {
    onSeasonChange(seasonId);
  }, [onSeasonChange]);

  return (
    <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0">
      {/* Декоративная вращающаяся рамка */}
      <div 
        className="absolute inset-0 rounded-full border-4 border-dashed border-amber/50 animate-rotate-slow"
        style={{ animationDirection: "reverse" }}
      ></div>
      
      {/* Основное колесо сезонов */}
      <div 
        className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-sm p-4 transform transition-transform duration-1000 flex items-center justify-center"
        style={{ transform: `rotate(${rotateWheel}deg)` }}
      >
        {/* Иконки сезонов */}
        {seasons.map((season, index) => (
          <SeasonIcon 
            key={season.id}
            season={season}
            index={index}
            isActive={activeSeason === season.id}
            rotateAngle={-rotateWheel}
            onClick={handleSeasonClick}
          />
        ))}
        
        {/* Центральная часть колеса */}
        <WheelCenter />
      </div>
    </div>
  );
});

SeasonWheel.displayName = "SeasonWheel";

/**
 * Иконка сезона на колесе
 */
interface SeasonIconProps {
  season: Season;
  index: number;
  isActive: boolean;
  rotateAngle: number;
  onClick: (seasonId: string) => void;
}

const SeasonIcon = memo(({ season, index, isActive, rotateAngle, onClick }: SeasonIconProps) => (
  <div 
    className="absolute w-full h-full"
    style={{ transform: `rotate(${index * 90}deg)` }}
  >
    <div 
      className={cn(
        "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center cursor-pointer transition-all",
        isActive ? `${season.color} scale-110` : `${season.color}/70`
      )}
      onClick={() => onClick(season.id)}
      style={{ transform: `rotate(${rotateAngle}deg)` }}
    >
      <span className="text-3xl">{season.icon}</span>
      <span 
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-serif font-bold text-lg whitespace-nowrap"
      >
        {season.name}
      </span>
    </div>
  </div>
));

SeasonIcon.displayName = "SeasonIcon";

/**
 * Центральная часть колеса с декоративными элементами
 */
const WheelCenter = memo(() => (
  <div className="w-2/3 h-2/3 rounded-full bg-amber/20 flex items-center justify-center">
    <div className="w-1/2 h-1/2 rounded-full bg-amber/30 flex items-center justify-center">
      <div className="w-3/4 h-3/4 rounded-full bg-amber/50 flex items-center justify-center">
        <span className="text-3xl">☀</span>
      </div>
    </div>
  </div>
));

WheelCenter.displayName = "WheelCenter";
