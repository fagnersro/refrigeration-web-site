"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselSlide {
  image: string
  title: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

interface HeroCarouselProps {
  slides: CarouselSlide[]
  autoplaySpeed?: number
}

export default function HeroCarousel({ slides, autoplaySpeed = 5000 }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [slides.length])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [nextSlide, autoplaySpeed, isPaused])

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="relative bg-gradient-to-b from-cooltech-700 to-cooltech-700 text-white dark:from-slate-900 dark:to-slate-800">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover opacity-50"
                  priority
                />
              </div>
              <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
                <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
                  <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{slide.title}</h1>
                    <p className="text-xl text-slate-300 max-w-lg">{slide.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="bg-cooltech-500 hover:bg-cooltech-600 dark:bg-sky-600 dark:hover:bg-sky-700"
                      >
                        <Link href={slide.primaryCta.href}>{slide.primaryCta.text}</Link>
                      </Button>
                      {slide.secondaryCta && (
                        <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-white text-black dark:text-white hover:bg-white/10"
                        >
                          <Link href={slide.secondaryCta.href}>{slide.secondaryCta.text}</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              currentSlide === index ? "w-8 bg-cooltech-400 dark:bg-sky-500" : "w-2 bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
