"use client"

import { Button } from "@/components/ui/button"
import { Mic } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Linkedin, Github } from "lucide-react"

export default function KoilabReplica() {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const suggestedQuestions = [
    "I need to automate internal workflows. How could Koilab help?",
    "We want to build a custom SaaS platform.",
    "How can I integrate AI into my company?"
  ]

  const testimonials = [
    {
      name: "Sarah Whitmore",
      role: "Product Manager at Nimbus Analytics",
      image: "/testimonials/woman1.jpg",
      quote: "Koilab transformed our vague idea into a fully functional product. Their mix of design thinking, deep technical knowledge, and AI expertise helped us move faster than we thought possible. They didn't just deliver what we asked for, they pushed the project forward in ways we hadn't considered."
    },
    {
      name: "Michael Brown",
      role: "Product Manager at UNNIQ",
      image: "/testimonials/man1.jpg",
      quote: "Our vague idea into a fully functional product. Their mix of design thinking, deep technical knowledge, and AI expertise helped us move faster than we thought possible. They didn't just deliver what we asked for."
    },
    {
      name: "Rachel Thompson",
      role: "Product Manager at Nimbus Analytics",
      image: "/testimonials/woman2.jpg",
      quote: "Koilab transformed our vague idea into a fully functional product. Their mix of design thinking, deep technical knowledge, and AI expertise helped us move faster than we thought possible. They didn't just deliver what we asked for, they pushed the project forward in ways we hadn't considered."
    },
    {
      name: "Louis Richards",
      role: "Product Manager at UNNIQ",
      image: "/testimonials/man2.jpg",
      quote: "Our vague idea into a fully functional product. Their mix of design thinking, deep technical knowledge, and AI expertise helped us move faster than we thought possible. They didn't just deliver what we asked for."
    },
  ]

  const totalSlides = 3 // 3 slides (showing 2 testimonials each)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#191919]">
      {/* Header - Pill Style */}
      <header className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="bg-[#1f1f1f] rounded-full px-6 py-2 flex items-center justify-between border border-[#2a2a2a]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/koilab-logo-dark.svg" 
              alt="KoiLab Logo" 
              width={194} 
              height={56} 
              className="h-14 w-auto"
            />
          </Link>
          
          {/* Navigation + CTA */}
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm">
                Projects
              </Link>
              <Link href="#blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link href="#signin" className="text-gray-300 hover:text-white transition-colors text-sm">
                Sign in
              </Link>
            </nav>
            
            <Button className="bg-[#E55948] hover:bg-[#d54838] text-white rounded-full px-6 py-2 text-sm font-normal">
              Start a Project
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center flex flex-col justify-center max-w-6xl py-32">
        <h1 className="text-6xl md:text-7xl font-light text-white mb-12 leading-[1.15] tracking-[-0.04em]">
          Empowering Businesses with{" "}
          <span className="text-[#E55948]">Technology, Software,</span> and{" "}
          <span className="text-[#E55948]">Artificial Intelligence</span>
        </h1>
        
        <p className="text-gray-300 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
          We help companies transform their operations, build scalable digital products, 
          and integrate AI-driven solutions that deliver real impact.
        </p>

        <div className="flex gap-4 justify-center">
          <Button className="bg-[#E55948] hover:bg-[#d54838] text-white rounded-full px-8 py-3 text-base font-normal h-auto">
            Start a Project
          </Button>
          <button 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-2 border-[#E55948] text-[#E55948] hover:bg-[#E55948] hover:text-white bg-transparent px-8 py-3 h-auto"
          >
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Ask AI Section */}
      <section className="container mx-auto px-4 pt-10 pb-20 max-w-[1100px]">
        <div className="bg-[#1f1f1f] rounded-[32px] border border-[#2a2a2a] p-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white mb-4 tracking-[-0.02em]">
              Ask Koilab AI how we can help your business
            </h2>
            <p className="text-gray-400 text-lg">
              Instant answers powered by AI
            </p>
          </div>

          {/* Input with Mic */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask Koilab AI anything about your business"
                className="w-full bg-transparent border border-[#3a3a3a] rounded-full px-8 py-5 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-[#E55948] transition-colors"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-[#2a2a2a] rounded-full transition-colors">
                <Mic className="w-5 h-5 text-[#E55948]" />
              </button>
            </div>
          </div>

          {/* Suggested Questions */}
          <div className="space-y-3">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setSelectedQuestion(question)}
                className="w-full text-left bg-transparent border border-[#3a3a3a] hover:border-[#4a4a4a] rounded-full px-8 py-4 text-gray-300 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="w-full bg-[#0f0f0f] py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-light text-white text-center mb-20 tracking-[-0.02em]">
            Our services
          </h2>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Technology Strategy */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image 
                  src="/icons/code-i.svg" 
                  alt="Technology Strategy Icon" 
                  width={96} 
                  height={96}
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">
                Technology Strategy<br />& Consulting
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We define your digital strategy, identify opportunities for automation 
                and optimisation, and guide your organisation through technology-driven transformation.
              </p>
            </div>

            {/* Custom Software */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image 
                  src="/icons/code-i.svg" 
                  alt="Custom Software Icon" 
                  width={96} 
                  height={96}
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">
                Custom Software<br />Development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                From web platforms to mobile apps and backend systems, we design 
                and build reliable, scalable software tailored to your business needs.
              </p>
            </div>

            {/* AI & Automation */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image 
                  src="/icons/code-i.svg" 
                  alt="AI & Automation Icon" 
                  width={96} 
                  height={96}
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">
                Artificial Intelligence<br />& Automation
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We integrate AI and machine learning to streamline processes, 
                enhance decision-making, and create intelligent digital experiences.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Cloud Architecture */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image 
                  src="/icons/code-i.svg" 
                  alt="Cloud Architecture Icon" 
                  width={96} 
                  height={96}
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">
                Cloud Architecture<br />& DevOps
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We design cloud-native architectures, modernise infrastructures, and 
                implement DevOps practices that improve performance, reliability, and team velocity.
              </p>
            </div>

            {/* Integration */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image 
                  src="/icons/code-i.svg" 
                  alt="Integration Icon" 
                  width={96} 
                  height={96}
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">
                Integration &<br />API Development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We build secure, extensible integrations that seamlessly connect 
                your systems, tools, and data flows.
              </p>
            </div>

            {/* Support */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image 
                  src="/icons/code-i.svg" 
                  alt="Support Icon" 
                  width={96} 
                  height={96}
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">
                Ongoing Support &<br />Continuous Improvement
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Long-term partnership with continuous monitoring, optimisation 
                and feature development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full bg-[#191919] py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-light text-white text-center mb-20 tracking-[-0.02em]">
            Featured Projects
          </h2>

          {/* Project 1 - AI Knowledge Engine */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-light text-white mb-4 tracking-[-0.02em]">
                AI Knowledge Engine
              </h3>
              <p className="text-xl font-semibold text-white mb-4">
                SomeEnterprise
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We built a custom AI engine that centralises documents, learns from internal data, 
                and answers employee questions instantly.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Technologies:</p>
                <p className="text-gray-300 text-sm">
                  Python · FastAPI · Vector DB · OpenAI · Azure
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Outcome:</p>
                <p className="text-gray-300 text-sm">
                  40% faster onboarding · 30H/week saved in support requests
                </p>
              </div>
            </div>
            <div className="bg-[#252222] rounded-2xl h-[400px] flex items-center justify-center">
              <span className="text-gray-600 text-sm">Project Image Placeholder</span>
            </div>
          </div>

          {/* Project 2 - High-Performance Web Platform */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#252222] rounded-2xl h-[400px] flex items-center justify-center order-2 md:order-1">
              <span className="text-gray-600 text-sm">Project Image Placeholder</span>
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h3 className="text-3xl font-light text-white mb-4 tracking-[-0.02em]">
                High-Performance Web Platform
              </h3>
              <p className="text-xl font-semibold text-white mb-4">
                MultiBuild
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A complete redesign and rebuild of their customer portal: faster, scalable, 
                fully API-driven and integrated with AI for automated insights.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Technologies:</p>
                <p className="text-gray-300 text-sm">
                  Next.js · Node.js · PostgreSQL · Redis · AWS
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Outcome:</p>
                <p className="text-gray-300 text-sm">
                  Page load time -60% · User engagement +30%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-[#0f0f0f] py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}
            >
              {/* Cada testimonial ocupa 50% del ancho */}
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-[50%] px-4">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-4xl overflow-hidden">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400 mb-6">{testimonial.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-6 mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-[#E55948]" : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#191919] py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-5xl font-light text-white mb-6 tracking-[-0.02em]">
            Let's build something meaningful together
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Tell us about your project and we'll help you turn your ideas into reality.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-[#E55948] hover:bg-[#d54838] text-white rounded-full px-8 py-3 text-base font-normal h-auto">
              Start a Project
            </Button>
            <button 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-2 border-[#E55948] text-[#E55948] hover:bg-[#E55948] hover:text-white bg-transparent px-8 py-3 h-auto"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0f0f0f] py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-5 gap-12">
            {/* Logo & Copyright */}
            <div className="col-span-1">
              <div className="mb-6">
                <Image 
                  src="/koilab-logo-kois.svg" 
                  alt="KoiLab Logo" 
                  width={48} 
                  height={48} 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-500 text-xs">
                KOILAB © 2025.<br />
                All rights reserved.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-normal mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</Link></li>
                <li><Link href="#faqs" className="text-gray-400 hover:text-white text-sm transition-colors">FAQs</Link></li>
                <li><Link href="#blog" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Get in touch */}
            <div>
              <h4 className="text-white font-normal mb-4">Get in touch</h4>
              <ul className="space-y-3">
                <li><Link href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
                <li><Link href="#start-project" className="text-gray-400 hover:text-white text-sm transition-colors">Start a project</Link></li>
                <li><Link href="#consultation" className="text-gray-400 hover:text-white text-sm transition-colors">Book a consultation</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-normal mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">Legal Terms</Link></li>
                <li><Link href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy policy</Link></li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 items-start">
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </Link>
              <Link 
                href="https://github.com" 
                target="_blank"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Github className="w-5 h-5 text-black" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}