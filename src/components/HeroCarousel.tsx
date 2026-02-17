import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroResearch from "@/assets/hero-research.png";
import heroTraining from "@/assets/hero-training.png";
import heroClinical from "@/assets/hero-clinical.png";
import heroSoftware from "@/assets/hero-software.png";
import heroEditorial from "@/assets/hero-editorial.png";

const HeroCarousel = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: heroResearch,
      titleKey: "home.hero.slide.research.title",
      subtitleKey: "home.hero.slide.research.subtitle",
      link: "/services?tab=research",
    },
    {
      image: heroTraining,
      titleKey: "home.hero.slide.training.title",
      subtitleKey: "home.hero.slide.training.subtitle",
      link: "/services?tab=training",
    },
    {
      image: heroClinical,
      titleKey: "home.hero.slide.clinical.title",
      subtitleKey: "home.hero.slide.clinical.subtitle",
      link: "/services?tab=clinical",
    },
    {
      image: heroSoftware,
      titleKey: "home.hero.slide.digital.title",
      subtitleKey: "home.hero.slide.digital.subtitle",
      link: "/services?tab=digital",
    },
    {
      image: heroEditorial,
      titleKey: "home.hero.slide.editorial.title",
      subtitleKey: "home.hero.slide.editorial.subtitle",
      link: "/services?tab=publishing",
    },
  ];

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={t(slide.titleKey)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex items-end z-20">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                {t(slide.titleKey)}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl drop-shadow">
                {t(slide.subtitleKey)}
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to={slide.link}>
                  {t("home.hero.services")} <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
