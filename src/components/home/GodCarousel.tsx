
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const gods = [
  {
    id: 1,
    name: "Перун",
    title: "Бог грома и молнии",
    description: "Верховное божество, покровитель воинов и князей, владыка грома и молнии, защитник славян.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    color: "bg-amber",
    symbol: "⚡"
  },
  {
    id: 2,
    name: "Велес",
    title: "Покровитель скота и богатства",
    description: "Бог мудрости, магии, богатства и загробного мира, хранитель знаний и ремесел, оборотень.",
    image: "https://images.unsplash.com/photo-1652732728262-35afaadff44c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    color: "bg-wood",
    symbol: "🐮"
  },
  {
    id: 3,
    name: "Мокошь",
    title: "Богиня судьбы и рукоделия",
    description: "Великая богиня плодородия, женского начала, покровительница ткачества и всех женских работ.",
    image: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    color: "bg-skyblue",
    symbol: "🧶"
  },
  {
    id: 4,
    name: "Сварог",
    title: "Небесный кузнец",
    description: "Бог-кузнец, создатель мира, податель небесного огня и покровитель семейного очага.",
    image: "https://images.unsplash.com/photo-1535082049017-5a2e5f400405?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    color: "bg-forest",
    symbol: "🔨"
  },
  {
    id: 5,
    name: "Даждьбог",
    title: "Бог солнца и тепла",
    description: "Бог солнечного света, тепла и плодородия, даритель благ, сын Сварога, прародитель славян.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    color: "bg-amber",
    symbol: "☀"
  },
  {
    id: 6,
    name: "Стрибог",
    title: "Повелитель ветров",
    description: "Владыка воздушной стихии, повелитель ветров и бурь, дед всех ветров и штормов.",
    image: "https://images.unsplash.com/photo-1495756111155-45cb19b8aeee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    color: "bg-skyblue",
    symbol: "💨"
  }
];

const GodCarousel = () => {
  return (
    <section className="py-16 ornament-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-forest slavic-symbol">Пантеон Богов</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Древние славяне верили во множество богов, каждый из которых отвечал за определенную часть мироздания
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {gods.map((god) => (
              <CarouselItem key={god.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <Card className="h-full border border-muted overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={god.image} 
                        alt={god.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className={`absolute top-4 right-4 w-8 h-8 ${god.color} text-white rounded-full flex items-center justify-center text-lg`}>
                        {god.symbol}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{god.name}</CardTitle>
                      <CardDescription>{god.title}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p>{god.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Узнать больше</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default GodCarousel;
