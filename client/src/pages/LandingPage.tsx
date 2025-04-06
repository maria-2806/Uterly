"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  Activity,
  Users,
  BookOpen,
  ChevronRight,
  Download,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"

export default function LandingPage() {
  // Register ScrollTrigger plugin
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }
  }, [])

  // Animation references
  const headerRef = useRef<HTMLElement | null>(null)
  const heroTextRef = useRef<HTMLHeadingElement | null>(null)
  const heroSubtitleRef = useRef<HTMLParagraphElement | null>(null)
  const heroButtonsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
    }

    // Hero text animations
    if (heroTextRef.current && heroSubtitleRef.current && heroButtonsRef.current) {
      const heroTl = gsap.timeline()
      heroTl
        .from(heroTextRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          heroSubtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          heroButtonsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
    }

    // Animate content items on scroll
    const animateItems = document.querySelectorAll(".animate-on-scroll")
    animateItems.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
    })

    // Cleanup
    return () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav ref={headerRef} className="bg-white py-5 px-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-pink-500 tracking-tight">Uterly</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              Features
            </a>
            <a href="#ai" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              AI Tools
            </a>
            <a href="#community" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              Community
            </a>
            <a href="#resources" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              Resources
            </a>
            <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white hover:from-pink-500 hover:to-pink-600 px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium flex items-center gap-2">
            <link href='./'>Checkout the App</link>  
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-20 md:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-100 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-100 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-blue-100 rounded-full opacity-40 blur-lg"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-16 md:mb-0">
              <h1
                ref={heroTextRef}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6"
              >
                Feel <span className="text-pink-500">Understood.</span> <br />
                <span className="text-blue-500">Tracked.</span> <br />
                <span className="text-purple-500">Empowered.</span>
              </h1>
              <p ref={heroSubtitleRef} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg">
                Your health, your cycle, your AI-powered guide to wellness and balance.
              </p>
              <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-5">
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download App
                </button>
                <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:-translate-y-1 font-medium flex items-center justify-center gap-2">
                  Explore Features
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg h-96 md:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl transform rotate-3 scale-95 opacity-50"></div>
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl transform -rotate-3 scale-95"></div>
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image
                    src="/cover.jpg"
                    alt="Woman using Uterly app"
                    width={500}
                    height={500}
                    className="object-contain p-6"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hormonal Phases Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll">Hormonal Phases</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-xl animate-on-scroll">
            Understand your body's natural rhythm and optimize your life around your cycle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Menstrual Phase */}
            <div className="animate-on-scroll group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full transition-all duration-500 shadow-md hover:shadow-xl transform hover:-translate-y-2 border border-blue-100 hover:border-blue-200 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-5xl mb-6">🩸</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Menstrual Phase</h3>
                <p className="text-gray-700 mb-4">
                  Rest & restore during this important time. Your body is working hard.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start">
                    <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-blue-700" />
                    </div>
                    <p className="text-gray-600">Lower energy levels</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-blue-700" />
                    </div>
                    <p className="text-gray-600">Focus on self-care</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-blue-700" />
                    </div>
                    <p className="text-gray-600">Iron-rich foods recommended</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follicular Phase */}
            <div className="animate-on-scroll group">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 h-full transition-all duration-500 shadow-md hover:shadow-xl transform hover:-translate-y-2 border border-pink-100 hover:border-pink-200 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-5xl mb-6">🌸</div>
                <h3 className="text-2xl font-bold mb-4 text-pink-600">Follicular Phase</h3>
                <p className="text-gray-700 mb-4">Rise & shine as your energy returns. Time to plan and create.</p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start">
                    <div className="bg-pink-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-pink-700" />
                    </div>
                    <p className="text-gray-600">Increasing energy</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-pink-700" />
                    </div>
                    <p className="text-gray-600">Great for starting new projects</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-pink-700" />
                    </div>
                    <p className="text-gray-600">Antioxidant-rich foods help</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ovulation Phase */}
            <div className="animate-on-scroll group">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 h-full transition-all duration-500 shadow-md hover:shadow-xl transform hover:-translate-y-2 border border-yellow-100 hover:border-yellow-200 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-5xl mb-6">☀️</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">Ovulation Phase</h3>
                <p className="text-gray-700 mb-4">Peak energy and confidence. Your most productive time.</p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-yellow-700" />
                    </div>
                    <p className="text-gray-600">Maximum energy levels</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-yellow-700" />
                    </div>
                    <p className="text-gray-600">Ideal for social activities</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-yellow-700" />
                    </div>
                    <p className="text-gray-600">Fiber-rich foods recommended</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Luteal Phase */}
            <div className="animate-on-scroll group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 h-full transition-all duration-500 shadow-md hover:shadow-xl transform hover:-translate-y-2 border border-purple-100 hover:border-purple-200 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-5xl mb-6">🌙</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Luteal Phase</h3>
                <p className="text-gray-700 mb-4">Slow down, reflect. Time to complete projects and turn inward.</p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start">
                    <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-purple-700" />
                    </div>
                    <p className="text-gray-600">Decreasing energy</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-purple-700" />
                    </div>
                    <p className="text-gray-600">Focus on completing tasks</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1">
                      <ChevronRight size={14} className="text-purple-700" />
                    </div>
                    <p className="text-gray-600">Magnesium-rich foods help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Scan Section */}
      <section id="ai" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-100 rounded-full opacity-30 blur-xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-16 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 animate-on-scroll">
                AI Scan & <span className="text-blue-600">Symptom Prediction</span>
              </h2>
              <p className="text-xl text-gray-700 mb-10 max-w-lg animate-on-scroll">
                Upload a scan or log a symptom—our AI gets to work in seconds, providing insights that matter.
              </p>

              <div className="animate-on-scroll bg-white shadow-xl rounded-2xl p-6 mb-8 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border border-blue-100">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-full mr-5 shadow-md">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-lg mb-2">
                      We detected signs of PCOS. Please consult your doctor.
                    </p>
                    <p className="text-gray-600 mb-3">Based on your scan and reported symptoms</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Irregular cycles</span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        Hormonal imbalance
                      </span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        Ultrasound findings
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll bg-white shadow-xl rounded-2xl p-6 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border border-blue-100">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-4 rounded-full mr-5 shadow-md">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-lg mb-2">Your next period is predicted in 8 days</p>
                    <p className="text-gray-600 mb-3">Based on your 28-day average cycle</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                    <p className="text-gray-500 text-sm">Currently in Luteal Phase (Day 20)</p>
                  </div>
                </div>
              </div>

              <p className="animate-on-scroll text-gray-600 italic mt-8 flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Our AI is trained on thousands of medical scans and symptom patterns to provide accurate insights.
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="animate-on-scroll relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl transform rotate-3 scale-95 opacity-50"></div>
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl transform -rotate-3 scale-95"></div>
                <div className="relative p-6">
                  <Image
                    src="/image.png"
                    alt="Medical scan being analyzed"
                    width={400}
                    height={500}
                    className="object-contain rounded-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Activity size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">AI Analysis</p>
                        <p className="text-xs text-gray-500">Processing...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll">
            Chatbot with <span className="text-purple-600">Medical History</span>
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-xl animate-on-scroll">
            Get personalized insights based on your unique health history and cycle patterns.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="animate-on-scroll bg-white border-2 border-purple-100 rounded-2xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:border-purple-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-3 rounded-full shadow-md">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Uterly Assistant</p>
                    <p className="text-xs text-gray-500">Always available</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500 bg-purple-50 px-3 py-1 rounded-full">Powered by AI</div>
              </div>

              <div className="flex flex-col space-y-6">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-gradient-to-r from-pink-50 to-pink-100 text-gray-800 rounded-2xl rounded-tr-none p-5 shadow-md">
                    <p className="font-medium">I feel low energy lately.</p>
                    <p className="text-xs text-gray-500 mt-3 flex justify-between items-center">
                      <span>10:42 AM</span>
                      <span className="bg-white px-2 py-1 rounded-full text-pink-500 text-xs">
                        Luteal Phase - Day 20
                      </span>
                    </p>
                  </div>
                </div>

                {/* Bot Message */}
                <div className="flex justify-start">
                  <div className="max-w-[80%] bg-gradient-to-r from-purple-50 to-purple-100 text-gray-800 rounded-2xl rounded-tl-none p-5 shadow-md">
                    <p>
                      Based on your history, try magnesium and rest. PMS fatigue is real. Your cycle data shows you're
                      in your luteal phase, when energy typically dips.
                    </p>
                    <div className="mt-3 bg-white p-3 rounded-xl border border-purple-100">
                      <p className="text-sm font-medium text-purple-600">Personalized Recommendation</p>
                      <p className="text-sm">Magnesium-rich foods: dark chocolate, avocados, nuts</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">10:43 AM</p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-gradient-to-r from-pink-50 to-pink-100 text-gray-800 rounded-2xl rounded-tr-none p-5 shadow-md">
                    <p className="font-medium">How long will this last?</p>
                    <p className="text-xs text-gray-500 mt-3">10:45 AM</p>
                  </div>
                </div>

                {/* Bot Message */}
                <div className="flex justify-start">
                  <div className="max-w-[80%] bg-gradient-to-r from-purple-50 to-purple-100 text-gray-800 rounded-2xl rounded-tl-none p-5 shadow-md">
                    <p>
                      According to your previous cycles, you should feel better in about 3-4 days. Would you like me to
                      remind you to check in then?
                    </p>
                    <div className="flex gap-2 mt-4">
                      <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors">
                        Yes, remind me
                      </button>
                      <button className="bg-white text-purple-500 border border-purple-200 px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">
                        No thanks
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">10:46 AM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 relative">
                <input
                  type="text"
                  placeholder="Type your question here..."
                  className="w-full border border-gray-200 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-2 rounded-full hover:shadow-md transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="animate-on-scroll mt-12 bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="text-4xl">"</div>
                <div>
                  <p className="italic text-gray-700 text-lg">
                    "The chatbot knew exactly what I needed before I did. It's like having a doctor and best friend in
                    one app. It's been a game-changer for managing my symptoms."
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center mr-3">
                      <span className="text-yellow-700 font-bold">S</span>
                    </div>
                    <p className="font-semibold">Sarah, 32</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Connectivity Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-purple-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-100 rounded-full opacity-30 blur-xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll">
            Doctor <span className="text-purple-600">Connectivity</span>
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-xl animate-on-scroll">
            No guesswork. Just clarity, fast. Share your cycle data directly with healthcare providers.
          </p>

          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            {/* User Profile Side */}
            <div className="animate-on-scroll md:w-1/2 bg-white shadow-xl rounded-2xl p-8 border border-purple-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-purple-200">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Jane Doe</h3>
                  <p className="text-sm text-gray-500">Last updated: Today at 2:45 PM</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-sm text-gray-500 mb-2">Cycle Day</p>
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-lg">Day 18 (Luteal Phase)</p>
                    <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                      8 days until period
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                    <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-5">
                  <p className="text-sm text-gray-500 mb-2">Recent Symptoms</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-pink-100 text-pink-600 px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      Headache
                    </span>
                    <span className="bg-pink-100 text-pink-600 px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      Fatigue
                    </span>
                    <span className="bg-pink-100 text-pink-600 px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      Bloating
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Symptom Severity</span>
                      <span>Moderate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Notes for Doctor</p>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="italic">
                      Experiencing more severe headaches this cycle, especially in the afternoons. Over-the-counter pain
                      relievers aren't helping as much as usual.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Dashboard Side */}
            <div className="animate-on-scroll md:w-1/2 bg-white shadow-xl rounded-2xl p-8 border border-blue-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-200">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-lg">DR</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Dr. Rebecca Smith</h3>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500">OB/GYN</p>
                    <span className="mx-2 text-gray-300">•</span>
                    <p className="text-sm text-blue-500">Verified Provider</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-sm text-gray-500 mb-2">Patient History</p>
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-lg">6-month cycle data available</p>
                    <button className="text-blue-500 text-sm hover:underline">View Full History</button>
                  </div>
                  <div className="mt-3 bg-blue-50 p-3 rounded-xl">
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
                      <Calendar size={16} />
                      Cycle Analysis
                    </div>
                    <p className="text-sm text-gray-700">Average cycle length: 28 days</p>
                    <p className="text-sm text-gray-700">Luteal phase symptoms: Moderate to severe</p>
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-5">
                  <p className="text-sm text-gray-500 mb-2">Recommendations</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1.5 rounded-full mt-0.5">
                        <ChevronRight size={14} className="text-blue-600" />
                      </div>
                      <p>Consider magnesium supplement for headaches (300-400mg daily)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1.5 rounded-full mt-0.5">
                        <ChevronRight size={14} className="text-blue-600" />
                      </div>
                      <p>Increase water intake during luteal phase</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1.5 rounded-full mt-0.5">
                        <ChevronRight size={14} className="text-blue-600" />
                      </div>
                      <p>Schedule follow-up to discuss hormonal testing</p>
                    </div>
                  </div>
                </div>

                <div>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl font-medium w-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    Schedule Appointment
                  </button>
                  <button className="mt-3 bg-white text-blue-500 border border-blue-200 px-4 py-3 rounded-xl font-medium w-full hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                    <MessageCircle size={18} />
                    Message Doctor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll">
            Join Our <span className="text-pink-500">Community</span>
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-xl animate-on-scroll">
            Connect with others who understand exactly what you're experiencing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Testimonial 1 */}
            <div className="animate-on-scroll group">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-lg p-8 h-full transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-3xl mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 relative z-10">
                  It's like having sisters who truly get it. The community here has been my lifeline through diagnosis
                  and treatment.
                </p>
                <div className="flex items-center mt-auto relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white p-1 mr-3 shadow-md">
                    <div className="w-full h-full rounded-full bg-pink-200 flex items-center justify-center">
                      <span className="text-pink-600 font-bold">J</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Jessica, 28</p>
                    <p className="text-sm text-gray-500">PCOS Warrior</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="animate-on-scroll group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 h-full transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-3xl mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 relative z-10">
                  I finally found people who understand what I'm going through. No more feeling alone with my symptoms
                  or doubting myself.
                </p>
                <div className="flex items-center mt-auto relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white p-1 mr-3 shadow-md">
                    <div className="w-full h-full rounded-full bg-blue-200 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">M</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Michelle, 35</p>
                    <p className="text-sm text-gray-500">Endometriosis Advocate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="animate-on-scroll group">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-lg p-8 h-full transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-3xl mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 relative z-10">
                  The support groups helped me navigate my PCOS diagnosis with confidence and knowledge. I've made
                  lifelong friends here.
                </p>
                <div className="flex items-center mt-auto relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white p-1 mr-3 shadow-md">
                    <div className="w-full h-full rounded-full bg-yellow-200 flex items-center justify-center">
                      <span className="text-yellow-600 font-bold">A</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Aisha, 31</p>
                    <p className="text-sm text-gray-500">Wellness Coach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Join the Sisterhood</h3>
                <p className="text-gray-700 mb-6">
                  Connect with women who understand your journey. Share experiences, get advice, and find support in our
                  growing community of over 50,000 women.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white text-purple-600 px-3 py-1.5 rounded-full text-sm shadow-sm">
                    PCOS Support
                  </span>
                  <span className="bg-white text-purple-600 px-3 py-1.5 rounded-full text-sm shadow-sm">
                    Endometriosis
                  </span>
                  <span className="bg-white text-purple-600 px-3 py-1.5 rounded-full text-sm shadow-sm">Fertility</span>
                  <span className="bg-white text-purple-600 px-3 py-1.5 rounded-full text-sm shadow-sm">Menopause</span>
                  <span className="bg-white text-purple-600 px-3 py-1.5 rounded-full text-sm shadow-sm">+ 12 more</span>
                </div>
              </div>
              <div className="md:w-1/3">
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium w-full flex items-center justify-center gap-2">
                  <Users size={20} />
                  Join the Sisterhood
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">Already 50,000+ members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll">
            Cycle-Synced <span className="text-pink-500">Resources</span>
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-xl animate-on-scroll">
            Curated advice tailored to each phase of your cycle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Resource 1 */}
            <div className="animate-on-scroll group">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 border-t-4 border-blue-500 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-sm font-semibold mb-3 text-blue-600 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-full">
                    <Calendar size={14} className="text-blue-600" />
                  </div>
                  Menstrual Phase
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  Feeling bloated? Here's a food fix.
                </h3>
                <p className="text-gray-700 mb-6">
                  Anti-inflammatory foods that can help reduce menstrual bloating and discomfort.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-blue-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Ginger tea reduces inflammation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-blue-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Leafy greens provide essential nutrients</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-blue-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Avoid excess salt to reduce water retention</p>
                  </div>
                </div>
                <button className="mt-auto text-blue-600 font-medium flex items-center group-hover:underline">
                  Read more
                  <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                </button>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="animate-on-scroll group">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 border-t-4 border-pink-500 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-sm font-semibold mb-3 text-pink-600 flex items-center gap-2">
                  <div className="bg-pink-100 p-1.5 rounded-full">
                    <Calendar size={14} className="text-pink-600" />
                  </div>
                  Follicular Phase
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-600 transition-colors">
                  Energy boosting workouts for high-energy days
                </h3>
                <p className="text-gray-700 mb-6">
                  Take advantage of your natural energy spike with these effective exercises.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="bg-pink-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-pink-600" />
                    </div>
                    <p className="text-gray-600 text-sm">HIIT workouts maximize energy</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-pink-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-pink-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Strength training builds muscle</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-pink-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-pink-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Dance cardio boosts mood & energy</p>
                  </div>
                </div>
                <button className="mt-auto text-pink-600 font-medium flex items-center group-hover:underline">
                  Read more
                  <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                </button>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="animate-on-scroll group">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 border-t-4 border-yellow-500 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-sm font-semibold mb-3 text-yellow-600 flex items-center gap-2">
                  <div className="bg-yellow-100 p-1.5 rounded-full">
                    <Calendar size={14} className="text-yellow-600" />
                  </div>
                  Ovulation Phase
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-600 transition-colors">
                  Maximize productivity during peak days
                </h3>
                <p className="text-gray-700 mb-6">
                  Strategies to harness your cognitive and physical peak during ovulation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-yellow-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Schedule important meetings</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-yellow-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Tackle challenging projects</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-yellow-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Network and socialize more</p>
                  </div>
                </div>
                <button className="mt-auto text-yellow-600 font-medium flex items-center group-hover:underline">
                  Read more
                  <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                </button>
              </div>
            </div>

            {/* Resource 4 */}
            <div className="animate-on-scroll group">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 border-t-4 border-purple-500 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-sm font-semibold mb-3 text-purple-600 flex items-center gap-2">
                  <div className="bg-purple-100 p-1.5 rounded-full">
                    <Calendar size={14} className="text-purple-600" />
                  </div>
                  Luteal Phase
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                  Self-care rituals for PMS symptoms
                </h3>
                <p className="text-gray-700 mb-6">
                  Gentle practices to ease irritability and mood swings during your luteal phase.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="bg-purple-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-purple-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Warm baths with magnesium salts</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-purple-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-purple-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Gentle yoga and stretching</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-purple-100 p-1 rounded-full mt-1">
                      <ChevronRight size={12} className="text-purple-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Journaling for emotional release</p>
                  </div>
                </div>
                <button className="mt-auto text-purple-600 font-medium flex items-center group-hover:underline">
                  Read more
                  <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                </button>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll text-center mt-16">
            <button className="bg-white text-pink-500 border-2 border-pink-200 hover:border-pink-500 px-8 py-4 rounded-xl text-lg transition-all duration-300 font-medium flex items-center gap-2 mx-auto">
              <BookOpen size={20} />
              Browse All Resources
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-pink-50 to-pink-100 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-pink-200 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-100 rounded-full opacity-30 blur-xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="animate-on-scroll text-center mb-16">
            <p className="text-2xl md:text-3xl font-medium text-gray-800 max-w-3xl mx-auto">
              "This isn't just an app—it's time saved, confidence restored, and lives reclaimed."
            </p>
          </div>

          <div className="animate-on-scroll flex flex-col md:flex-row justify-center items-center gap-5 mb-16">
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium flex items-center justify-center gap-2">
              <Download size={20} />
              Download on App Store
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium flex items-center justify-center gap-2">
              <Download size={20} />
              Get it on Google Play
            </button>
          </div>

          <div className="animate-on-scroll flex justify-center space-x-8 mb-12">
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          <div className="animate-on-scroll flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-gray-600 mb-8">
            <a href="#" className="hover:text-pink-500 transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors font-medium">
              Terms of Service
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors font-medium">
              Contact Us
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors font-medium">
              FAQ
            </a>
          </div>

          <div className="animate-on-scroll text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Uterly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

