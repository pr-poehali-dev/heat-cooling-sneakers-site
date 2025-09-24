import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const products = [
    {
      id: 1,
      name: "ThermoMax Pro",
      price: "₽29 999",
      image: "/img/d0796b6d-7109-4dd9-bff7-07e70daf4fd1.jpg",
      features: ["Подогрев до +40°C", "Охлаждение до +15°C", "Водонепроницаемость"]
    },
    {
      id: 2,
      name: "ThermoSport Elite",
      price: "₽24 999", 
      image: "/img/c79c12b0-8975-4938-b3c2-90e48c40a677.jpg",
      features: ["Быстрый нагрев", "Eco-режим", "Беспроводная зарядка"]
    },
    {
      id: 3,
      name: "ThermoUrban",
      price: "₽19 999",
      image: "/img/d0796b6d-7109-4dd9-bff7-07e70daf4fd1.jpg", 
      features: ["Городской стиль", "8 часов работы", "Умное управление"]
    }
  ];

  const technologies = [
    {
      id: "heating",
      title: "Система подогрева",
      description: "Встроенные нагревательные элементы с температурой до +40°C",
      icon: "Flame",
      color: "text-heating"
    },
    {
      id: "cooling", 
      title: "Система охлаждения",
      description: "Активное охлаждение с циркуляцией воздуха до +15°C",
      icon: "Snowflake",
      color: "text-cooling"
    },
    {
      id: "smart",
      title: "Умное управление",
      description: "Мобильное приложение и автоматическая регуляция",
      icon: "Smartphone",
      color: "text-premium"
    },
    {
      id: "battery",
      title: "Долгая работа",
      description: "До 12 часов автономной работы на одном заряде", 
      icon: "Battery",
      color: "text-premium"
    }
  ];

  const handleOrderCall = () => {
    window.location.href = 'tel:89030752010';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-silver/30 to-cooling/10 font-body">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-silver/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-premium">
              THERMOSNEAKERS
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-premium hover:text-heating transition-colors">Каталог</a>
              <a href="#technology" className="text-premium hover:text-heating transition-colors">Технологии</a>
              <a href="#about" className="text-premium hover:text-heating transition-colors">О бренде</a>
              <a href="#contacts" className="text-premium hover:text-heating transition-colors">Контакты</a>
            </nav>
            <Button 
              onClick={handleOrderCall}
              className="bg-heating hover:bg-heating/90 text-white font-medium"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-premium mb-6 leading-tight">
              Будущее
              <br />
              <span className="bg-gradient-to-r from-heating to-cooling bg-clip-text text-transparent">
                На Ваших Ногах
              </span>
            </h2>
            <p className="text-xl text-premium/80 mb-8 max-w-2xl mx-auto">
              Инновационные кроссовки с технологией терморегуляции. 
              Подогрев зимой, охлаждение летом — комфорт в любую погоду.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={handleOrderCall}
                className="bg-heating hover:bg-heating/90 text-white px-8 py-4 text-lg font-medium"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                8 (903) 075-20-10
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-premium text-premium hover:bg-premium hover:text-white px-8 py-4 text-lg"
              >
                Смотреть каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-premium mb-4">
              Революционные Технологии
            </h3>
            <p className="text-lg text-premium/70 max-w-3xl mx-auto">
              Каждая пара ThermoSneakers оснащена передовыми системами климат-контроля
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <Card 
                key={tech.id}
                className="border-silver/50 hover:border-heating/30 transition-all duration-300 hover:shadow-xl animate-scale-in cursor-pointer"
                onMouseEnter={() => setHoveredTech(tech.id)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-silver to-white flex items-center justify-center ${tech.color}`}>
                    <Icon name={tech.icon} size={32} />
                  </div>
                  <CardTitle className="text-premium font-heading">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-premium/70">
                    {tech.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-premium mb-4">
              Каталог Продукции
            </h3>
            <p className="text-lg text-premium/70">
              Выберите модель, подходящую именно вам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="border-silver/50 hover:border-heating/30 transition-all duration-300 hover:shadow-2xl group animate-scale-in">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-silver/20 to-white">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-premium font-heading mb-2">{product.name}</CardTitle>
                  <div className="text-2xl font-bold text-heating mb-4">{product.price}</div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-premium/80 text-sm">
                        <Icon name="Check" size={16} className="text-cooling mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-premium hover:bg-premium/90 text-white font-medium"
                    onClick={handleOrderCall}
                  >
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-premium/5 to-cooling/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-heading font-bold text-premium mb-8">
              О Бренде ThermoSneakers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-premium/80 mb-6">
                  Мы создаем будущее обуви сегодня. Наши инженеры разработали уникальную 
                  технологию терморегуляции, которая адаптируется к любым погодным условиям.
                </p>
                <p className="text-lg text-premium/80 mb-8">
                  Более 5 лет исследований и разработок привели к созданию первых в мире 
                  кроссовок с активным климат-контролем.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-heating">50K+</div>
                    <div className="text-sm text-premium/70">Довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cooling">24/7</div>
                    <div className="text-sm text-premium/70">Поддержка</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-premium">2 года</div>
                    <div className="text-sm text-premium/70">Гарантия</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-heating/20 via-cooling/20 to-premium/20 rounded-2xl flex items-center justify-center">
                  <Icon name="Zap" size={80} className="text-premium/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-heading font-bold text-premium mb-8">
            Свяжитесь с Нами
          </h3>
          <p className="text-lg text-premium/70 mb-12">
            Готовы испытать революцию в обуви? Позвоните нам прямо сейчас!
          </p>
          
          <div className="max-w-md mx-auto">
            <Card className="border-heating/30 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon name="Phone" size={48} className="text-heating mx-auto mb-4" />
                  <h4 className="text-2xl font-heading font-bold text-premium mb-2">
                    Заказ по телефону
                  </h4>
                  <p className="text-premium/70">
                    Звоните ежедневно с 9:00 до 21:00
                  </p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-heating mb-2">
                    8 (903) 075-20-10
                  </div>
                </div>
                
                <Button 
                  size="lg"
                  onClick={handleOrderCall}
                  className="w-full bg-heating hover:bg-heating/90 text-white font-medium py-4"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Icon name="Truck" size={32} className="text-cooling mx-auto mb-4" />
              <h5 className="font-heading font-semibold text-premium mb-2">Быстрая доставка</h5>
              <p className="text-premium/70">По всей России за 1-3 дня</p>
            </div>
            <div className="text-center">
              <Icon name="Shield" size={32} className="text-heating mx-auto mb-4" />
              <h5 className="font-heading font-semibold text-premium mb-2">Гарантия качества</h5>
              <p className="text-premium/70">2 года полной гарантии</p>
            </div>
            <div className="text-center">
              <Icon name="RefreshCw" size={32} className="text-premium mx-auto mb-4" />
              <h5 className="font-heading font-semibold text-premium mb-2">Обмен и возврат</h5>
              <p className="text-premium/70">14 дней на возврат</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-premium text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h4 className="text-3xl font-heading font-bold mb-4">THERMOSNEAKERS</h4>
            <p className="text-white/80 max-w-2xl mx-auto">
              Инновационные кроссовки с технологией терморегуляции. 
              Ваш комфорт — наша миссия.
            </p>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © 2024 ThermoSneakers. Все права защищены.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="tel:89030752010" className="text-white/80 hover:text-white transition-colors">
                  <Icon name="Phone" size={20} />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;