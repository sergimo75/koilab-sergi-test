"use client"

import { Button } from "@/components/ui/button"
import { SergiCard } from "@/components/SergiCard"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Puzzle, Smile, Star, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function KoilabReplica() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      icon: "/icons/display-code-icon.svg",
      title: "Instant Knowledge Base",
      description: "Easily upload and organize your startup's information, from pitch decks to product specs",
    },
    {
      icon: "/icons/puzzle-piece-simple-icon.svg",
      title: "Interactive Exploration",
      description: "Allow users to ask questions and get immediate, relevant answers about your venture",
    },
    {
      icon: "/icons/face-smile-icon.svg",
      title: "Visual Storytelling",
      description: "Share images and rich media to bring your startup's story to life in every interaction",
    },
  ]

  const testimonials = [
    {
      title: "Startup's Virtual Information Booth",
      stars: 5,
      content:
        "As a tech startup, we needed a way to make our product information easily accessible. Diplomat.bot has been a game-changer! We uploaded our pitch deck, product specs, and even links to images. Now, potential investors and customers can ask anything about our startup and get instant, accurate responses. It's like having a 24/7 virtual booth at a tech fair!",
    },
    {
      title: "Bringing Our Social Initiative to Life",
      stars: 5,
      content:
        "Diplomat.bot has become the voice of our new social initiative. We fed it information about our mission, impact stories, and project photos. Now, anyone interested in our cause can have an engaging conversation about our work. The bot even shares relevant images we've uploaded, making the interaction more vivid and compelling. It's helping us spread awareness in a truly interactive way.",
    },
    {
      title: "Ai-Powered Customer engagement",
      stars: 5,
      content:
        "As a tech startup, we needed a way to make our product information easily accessible. Diplomat.bot has been a game-changer! We uploaded our pitch deck, product specs, and even links to images. Now, potential investors and customers can ask anything about our startup and get instant, accurate responses. It's like having a 24/7 virtual booth at a tech fair!",
    },
    {
      title: "4th Testimonial",
      stars: 5,
      content:
        "Diplomat.bot has become the voice of our new social initiative. We fed it information about our mission, impact stories, and project photos. Now, anyone interested in our cause can have an engaging conversation about our work. The bot even shares relevant images we've uploaded, making the interaction more vivid and compelling. It's helping us spread awareness in a truly interactive way.",
    },
  ]

const totalSlides = testimonials.length - 1 // 3 slides (0,1,2)
  
useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000)
    return () => clearInterval(timer)
  }, [totalSlides])



  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="container mx-auto pl-0 pr-4 py-6 flex items-center justify-between max-w-[1200px]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-50 h-10 bg-coral-500 rounded-lg flex items-center justify-center">
            <Image src="/koilab-logo.svg" alt="KoiLab Logo" width={180} height={52} className="rounded-lg" />
          </div>
        </Link>
        <nav>
          <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
<div className="bg-gradient-to-b from-blue-50 to-white pt-20 pb-0">
  <section className="container mx-auto px-4 text-center">
    <h1 className="text-5xl md:text-5xl font-extralight text-gray-800 mb-8 text-balance">
      Conversational AI That Speaks Your Language
    </h1>
    <p className="text-2xl text-gray-600 font-light mb-10 max-w-4xl mx-auto">
      Engage customers naturally with Diplomat.bot's intelligent dialogues
    </p>
    <p className="text-gray-700 font-mono p-5 mb-12 w-full max-w-[1200px] mx-auto leading-relaxed bg-[#eceff3]">
      From WordPress extensions to cutting-edge AI solutions, KoiLab has evolved to meet the changing needs of
      businesses. We're proud to introduce Diplomat.bot, our AI-powered customer engagement platform.
    </p>
  </section>
</div>
<section className="container mx-auto px-4 text-center mb-20">
    <Button
      size="lg"
      variant="default"
      className="bg-[#e55948] hover:bg-[#ffffff] hover:text-[#e55948] border-1 border-[#e55948] text-white font-normal px-8 py-6 text-lg rounded-full transition-all cursor-pointer"
    >
      Start the Conversation
    </Button>
  </section>

      {/* Features Section */}
    <div className="bg-[#eaf1fb] py-0">
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-12 w-full max-w-[1200px] mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center mb-6 h-[160px]">
                <Image 
                  src={feature.icon} 
                  alt={feature.title}
                  width={index === 1 ? 160 : 120}
                  height={index === 1 ? 160 : 120}
                  className={index === 1 ? "w-[160px] h-[160px] object-contain" : "w-[120px] h-[120px] object-contain"}
                />
              </div>
              <h3 className="text-3xl font-extralight text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>

      {/* Testimonials Section con Slider */}
<section className="bg-gradient-to-b from-white to-blue-50 py-20">
  <div className="container w-full max-w-[1200px] mx-auto px-4">
    <h2 className="text-[44px] font-extralight text-gray-800 text-center mb-16 text-balance">
      Engage, Inform, Impress – Your AI Startup Assistant
    </h2>
    
    <div className="max-w-7xl mx-auto overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 50}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-1/2 flex-shrink-0 px-4">
            <Card className="bg-[#eaf1fb] border-none h-full">
              <CardContent className="pt-2 pb-2 px-8">
                <h4 className="text-2xl font-extralight text-gray-800 mb-3">{testimonial.title}</h4>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed font-light">{testimonial.content}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>

    {/* Navegación con puntos */}
    <div className="flex justify-center gap-6 mt-8">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            currentSlide === index ? "bg-gray-800" : "bg-gray-300"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-[#e55948] text-white py-8 mt-auto">
        <div className="container max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <p className="text-m">KOILAB © 2025. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
