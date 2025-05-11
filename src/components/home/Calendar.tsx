
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Season = {
  id: string;
  name: string;
  description: string;
  color: string;
  holidays: Holiday[];
  icon: string;
};

type Holiday = {
  id: number;
  name: string;
  date: string;
  description: string;
};

const seasons: Season[] = [
  {
    id: "spring",
    name: "Весна",
    description: "Время пробуждения природы, начала сельскохозяйственных работ и празднования возрождения жизни.",
    color: "bg-emerald-500",
    icon: "🌱",
    holidays: [
      {
        id: 1,
        name: "Масленица",
        date: "Конец февраля - начало марта",
        description: "Проводы зимы и встреча весны, сожжение чучела зимы и выпекание блинов - символов солнца."
      },
      {
        id: 2,
        name: "Красная Горка",
        date: "Первое воскресенье после весеннего равноденствия",
        description: "Праздник первых всходов, молодожёнов и весеннего плодородия земли."
      },
      {
        id: 3,
        name: "Ярилин День",
        date: "4 июня",
        description: "День бога солнца и плодородия Ярилы, символизирующий расцвет природных сил."
      }
    ]
  },
  {
    id: "summer",
    name: "Лето",
    description: "Пора расцвета природы, полевых работ и важнейших языческих праздников.",
    color: "bg-amber",
    icon: "☀",
    holidays: [
      {
        id: 4,
        name: "Купала",
        date: "21-22 июня",
        description: "Праздник летнего солнцестояния, связанный с очищением через огонь и воду, поиском цветка папоротника."
      },
      {
        id: 5,
        name: "Перунов День",
        date: "20 июля",
        description: "Праздник в честь бога-громовержца Перуна, покровителя воинов и князей."
      },
      {
        id: 6,
        name: "Спожинки",
        date: "15 августа",
        description: "Праздник первого снопа и начала сбора урожая, благодарение земли за плоды."
      }
    ]
  },
  {
    id: "autumn",
    name: "Осень",
    description: "Время сбора урожая, подготовки к зиме и благодарения богам за плодородие.",
    color: "bg-wood",
    icon: "🍂",
    holidays: [
      {
        id: 7,
        name: "Осенины",
        date: "21 сентября",
        description: "Праздник осеннего равноденствия, завершения сбора урожая и начала подготовки к зиме."
      },
      {
        id: 8,
        name: "Покров",
        date: "14 октября",
        description: "День встречи осени с зимой, начало вечерних посиделок и рукоделия."
      },
      {
        id: 9,
        name: "Велесовы Дни",
        date: "Конец октября - начало ноября",
        description: "Время поминовения предков и общения с потусторонним миром."
      }
    ]
  },
  {
    id: "winter",
    name: "Зима",
    description: "Период покоя природы, домашних работ и празднования зимнего солнцеворота.",
    color: "bg-skyblue",
    icon: "❄️",
    holidays: [
      {
        id: 10,
        name: "Коляда",
        date: "21-25 декабря",
        description: "Праздник зимнего солнцестояния, рождения молодого солнца и начала нового годового цикла."
      },
      {
        id: 11,
        name: "Велесов День",
        date: "11 февраля",
        description: "Праздник в честь бога Велеса, покровителя скота, богатства и мудрости."
      },
      {
        id: 12,
        name: "Громницы",
        date: "2 февраля",
        description: "Праздник первых весенних гроз, день встречи зимы с весной."
      }
    ]
  }
];

const Calendar = () => {
  const [activeSeason, setActiveSeason] = useState<string>("spring");
  const [rotateWheel, setRotateWheel] = useState<number>(0);

  const handleSeasonChange = (seasonId: string) => {
    setActiveSeason(seasonId);
    const index = seasons.findIndex(s => s.id === seasonId);
    setRotateWheel(index * -90);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-forest slavic-symbol">Славянский Календарь</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Жизнь славян была тесно связана с природными циклами, 
            которые отмечались важными праздниками и обрядами
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* Wheel of Seasons */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0">
            <div 
              className="absolute inset-0 rounded-full border-4 border-dashed border-amber/50 animate-rotate-slow"
              style={{ animationDirection: "reverse" }}
            ></div>
            
            <div 
              className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-sm p-4 transform transition-transform duration-1000 flex items-center justify-center"
              style={{ transform: `rotate(${rotateWheel}deg)` }}
            >
              {seasons.map((season, index) => (
                <div 
                  key={season.id}
                  className="absolute w-full h-full"
                  style={{ transform: `rotate(${index * 90}deg)` }}
                >
                  <div 
                    className={cn(
                      "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center cursor-pointer transition-all",
                      activeSeason === season.id ? `${season.color} scale-110` : `${season.color}/70`
                    )}
                    onClick={() => handleSeasonChange(season.id)}
                    style={{ transform: `rotate(${-rotateWheel}deg)` }}
                  >
                    <span className="text-3xl">{season.icon}</span>
                    <span 
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-serif font-bold text-lg whitespace-nowrap"
                    >
                      {season.name}
                    </span>
                  </div>
                </div>
              ))}
              
              <div className="w-2/3 h-2/3 rounded-full bg-amber/20 flex items-center justify-center">
                <div className="w-1/2 h-1/2 rounded-full bg-amber/30 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full bg-amber/50 flex items-center justify-center">
                    <span className="text-3xl">☀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Season Details */}
          <div className="flex-1 max-w-xl">
            <Tabs value={activeSeason} onValueChange={handleSeasonChange} className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                {seasons.map((season) => (
                  <TabsTrigger 
                    key={season.id} 
                    value={season.id}
                    className={cn(
                      "data-[state=active]:text-white",
                      `data-[state=active]:${season.color}`
                    )}
                  >
                    <span className="mr-2">{season.icon}</span>
                    <span className="hidden sm:inline">{season.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {seasons.map((season) => (
                <TabsContent key={season.id} value={season.id} className="animate-fade-in">
                  <div className={cn("p-6 rounded-lg border-l-4", `border-${season.color}`)}>
                    <h3 className="text-2xl font-bold mb-3">{season.name}</h3>
                    <p className="mb-6 text-muted-foreground">{season.description}</p>
                    
                    <h4 className="text-xl font-semibold mb-4">Основные праздники:</h4>
                    <div className="space-y-4">
                      {season.holidays.map((holiday) => (
                        <div key={holiday.id} className="bg-white/80 p-4 rounded-lg shadow-sm">
                          <div className="flex justify-between mb-2">
                            <h5 className="font-bold">{holiday.name}</h5>
                            <span className="text-sm text-muted-foreground">{holiday.date}</span>
                          </div>
                          <p className="text-sm">{holiday.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
