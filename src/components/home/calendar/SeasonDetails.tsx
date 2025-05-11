
import { memo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Season, Holiday } from "./types";

interface SeasonDetailsProps {
  seasons: Season[];
  activeSeason: string;
  onSeasonChange: (seasonId: string) => void;
}

/**
 * Отображает детальную информацию о выбранном сезоне
 * и его праздниках с возможностью переключения между сезонами.
 */
export const SeasonDetails = memo(({ seasons, activeSeason, onSeasonChange }: SeasonDetailsProps) => {
  return (
    <div className="flex-1 max-w-xl">
      <Tabs value={activeSeason} onValueChange={onSeasonChange} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          {seasons.map((season) => (
            <SeasonTab key={season.id} season={season} />
          ))}
        </TabsList>
        
        {seasons.map((season) => (
          <SeasonContent key={season.id} season={season} />
        ))}
      </Tabs>
    </div>
  );
});

SeasonDetails.displayName = "SeasonDetails";

/**
 * Вкладка для выбора сезона
 */
interface SeasonTabProps {
  season: Season;
}

const SeasonTab = memo(({ season }: SeasonTabProps) => (
  <TabsTrigger 
    value={season.id}
    className={cn(
      "data-[state=active]:text-white",
      `data-[state=active]:${season.color}`
    )}
  >
    <span className="mr-2">{season.icon}</span>
    <span className="hidden sm:inline">{season.name}</span>
  </TabsTrigger>
));

SeasonTab.displayName = "SeasonTab";

/**
 * Содержимое вкладки с информацией о конкретном сезоне
 */
interface SeasonContentProps {
  season: Season;
}

const SeasonContent = memo(({ season }: SeasonContentProps) => (
  <TabsContent value={season.id} className="animate-fade-in">
    <div className={cn("p-6 rounded-lg border-l-4", `border-${season.color}`)}>
      <h3 className="text-2xl font-bold mb-3">{season.name}</h3>
      <p className="mb-6 text-muted-foreground">{season.description}</p>
      
      <h4 className="text-xl font-semibold mb-4">Основные праздники:</h4>
      <div className="space-y-4">
        {season.holidays.map((holiday) => (
          <HolidayCard key={holiday.id} holiday={holiday} />
        ))}
      </div>
    </div>
  </TabsContent>
));

SeasonContent.displayName = "SeasonContent";

/**
 * Карточка праздника
 */
interface HolidayCardProps {
  holiday: Holiday;
}

const HolidayCard = memo(({ holiday }: HolidayCardProps) => (
  <div className="bg-white/80 p-4 rounded-lg shadow-sm">
    <div className="flex justify-between mb-2">
      <h5 className="font-bold">{holiday.name}</h5>
      <span className="text-sm text-muted-foreground">{holiday.date}</span>
    </div>
    <p className="text-sm">{holiday.description}</p>
  </div>
));

HolidayCard.displayName = "HolidayCard";
