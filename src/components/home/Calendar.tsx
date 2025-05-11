
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { SeasonWheel } from "./calendar/SeasonWheel";
import { SeasonDetails } from "./calendar/SeasonDetails";
import { seasonsData } from "./calendar/data";

/**
 * Славянский календарь
 * 
 * Компонент, отображающий информацию о сезонных циклах и связанных с ними праздниках
 * в славянской культуре. Включает интерактивное колесо сезонов и детальную информацию
 * о праздниках для каждого времени года.
 */
const Calendar = () => {
  const [activeSeason, setActiveSeason] = useState<string>("spring");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader />
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* Интерактивное колесо сезонов */}
          <SeasonWheel 
            seasons={seasonsData}
            activeSeason={activeSeason}
            onSeasonChange={setActiveSeason}
          />
          
          {/* Детальная информация о сезоне */}
          <SeasonDetails 
            seasons={seasonsData}
            activeSeason={activeSeason}
            onSeasonChange={setActiveSeason}
          />
        </div>
      </div>
    </section>
  );
};

/**
 * Заголовок раздела
 */
const SectionHeader = () => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4 text-forest slavic-symbol">Славянский Календарь</h2>
    <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
      Жизнь славян была тесно связана с природными циклами, 
      которые отмечались важными праздниками и обрядами
    </p>
  </div>
);

export default Calendar;
