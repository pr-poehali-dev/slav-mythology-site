
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Главная", href: "/" },
  { name: "Боги и Существа", href: "/gods" },
  { name: "Мир Славян", href: "/world" },
  { name: "Обряды", href: "/rituals" },
  { name: "О проекте", href: "/about" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-4 md:px-8 bg-gradient-to-b from-forest/95 to-forest/90 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-amber text-3xl">☀</span>
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wide">
              <span className="text-amber">Мир</span> Славян
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-amber transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-amber"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-60 mt-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-amber py-2 transition-colors border-b border-forest-light/20 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
