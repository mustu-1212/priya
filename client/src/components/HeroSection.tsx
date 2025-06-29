import { useState, useEffect } from "react";
import img1 from "@assets/511043215_1211560391010072_4791323343152305853_n_1751196155582.jpg";
import img2 from "@assets/511522037_746173514622628_2628393092737811989_n_1751196155582.jpg";
import img3 from "@assets/513901602_606753255353587_3966542371347645341_n_1751196155583.jpg";

const heroImages = [
  { src: img1, alt: "Priya in elegant traditional Indian wear" },
  { src: img2, alt: "Priya in traditional lehenga" },
  { src: img3, alt: "Priya in golden evening dress" }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-overlay"></div>
      
      {/* Hero Images Carousel */}
      <div className="relative w-full h-screen">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-dm-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              Priya Dhurve
            </h1>
            <p className="font-lora text-lg sm:text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              Fashion | Lifestyle | Exploration
            </p>
            <div className="animate-slide-up">
              <button 
                onClick={scrollToAbout}
                className="inline-block bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Explore My World
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
