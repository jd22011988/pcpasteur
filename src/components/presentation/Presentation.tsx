import { useState, useEffect, useCallback } from "react";
import { TitleSlide } from "./slides/TitleSlide";
import { AssumptionsSlide } from "./slides/AssumptionsSlide";
import { ProblemSlide } from "./slides/ProblemSlide";
import { NonAssignmentSlide } from "./slides/NonAssignmentSlide";
import { RefundsSlide } from "./slides/RefundsSlide";
import { ROISlide } from "./slides/ROISlide";
import { OfferSlide } from "./slides/OfferSlide";
import { ClientsSlide } from "./slides/ClientsSlide";
import { CoverageSlide } from "./slides/CoverageSlide";
import { GuaranteesSlide } from "./slides/GuaranteesSlide";
import { SlideIndicator } from "./SlideIndicator";
import { NavigationControls } from "./NavigationControls";

const slides = [
  { component: TitleSlide, key: "title" },
  { component: AssumptionsSlide, key: "assumptions" },
  { component: ProblemSlide, key: "problem" },
  { component: NonAssignmentSlide, key: "flows" },
  { component: RefundsSlide, key: "incidents" },
  { component: ROISlide, key: "roi" },
  { component: OfferSlide, key: "offer" },
  { component: ClientsSlide, key: "clients" },
  { component: CoverageSlide, key: "coverage" },
  { component: GuaranteesSlide, key: "guarantees" },
];

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  }, [isTransitioning]);

  const goNext = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const goPrevious = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrevious]);

  // Touch/swipe navigation
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goNext();
        } else {
          goPrevious();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrevious]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Logo */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(193 100% 45%)' }}>
          <span className="text-white font-bold text-sm">P</span>
        </div>
        <span className="font-semibold text-foreground">Picker</span>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-6 right-6 z-50 text-sm text-muted-foreground">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Slide Content */}
      <div
        key={slides[currentSlide].key}
        className="w-full h-full"
      >
        <CurrentSlideComponent />
      </div>

      {/* Navigation */}
      <NavigationControls
        onPrevious={goPrevious}
        onNext={goNext}
        canGoPrevious={currentSlide > 0}
        canGoNext={currentSlide < slides.length - 1}
      />

      {/* Slide Indicator */}
      <SlideIndicator
        totalSlides={slides.length}
        currentSlide={currentSlide}
        onSlideClick={goToSlide}
      />

      {/* Keyboard hint */}
      <div className="fixed bottom-8 right-8 text-xs text-muted-foreground hidden md:block">
        ← → o Espacio para navegar
      </div>
    </div>
  );
};
