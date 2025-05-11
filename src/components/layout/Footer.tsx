
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-forest text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-amber text-3xl">☀</span>
              <h2 className="text-xl font-serif font-bold">
                <span className="text-amber">Мир</span> Славян
              </h2>
            </div>
            <p className="text-white/80 mb-6">
              Погрузитесь в удивительный мир славянской мифологии, 
              узнайте о древних богах, существах и обрядах наших предков.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-amber">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-amber">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-amber">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-amber">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-forest-light pb-2">Разделы</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/80 hover:text-amber transition-colors">Главная</a></li>
              <li><a href="/gods" className="text-white/80 hover:text-amber transition-colors">Боги и Существа</a></li>
              <li><a href="/world" className="text-white/80 hover:text-amber transition-colors">Мир Славян</a></li>
              <li><a href="/rituals" className="text-white/80 hover:text-amber transition-colors">Обряды</a></li>
              <li><a href="/about" className="text-white/80 hover:text-amber transition-colors">О проекте</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-forest-light pb-2">Информация</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-white/80 hover:text-amber transition-colors">Часто задаваемые вопросы</a></li>
              <li><a href="/sources" className="text-white/80 hover:text-amber transition-colors">Источники и литература</a></li>
              <li><a href="/museum" className="text-white/80 hover:text-amber transition-colors">Музеи славянской культуры</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-amber transition-colors">Связаться с нами</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-forest-light pb-2">Подписка</h3>
            <p className="text-white/80 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать интересные материалы о славянской культуре
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-4 py-2 rounded-l-md flex-1 text-forest focus:outline-none" 
              />
              <Button className="rounded-l-none bg-amber hover:bg-amber/90 text-forest">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-forest-light/20 text-center text-white/60 text-sm">
          <p>© 2025 Мир Славян. Все права защищены. Сайт создан в образовательных целях.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
