"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Code,
  Music,
  Phone,
  TrendingUp,
  Mail,
  MessageCircle,
  Instagram,
  Twitter,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description:
        "Building websites, web apps, and digital tools that solve real-world problems with cutting-edge technology.",
      features: ["Web Development", "Mobile Apps", "Digital Solutions", "Custom Software"],
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Artist",
      description:
        "Creating and sharing unique music that resonates with audiences worldwide through innovative soundscapes.",
      features: ["Original Music", "Sound Design", "Music Production", "Creative Direction"],
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Virtual Numbers Service",
      description: "Providing virtual numbers for all countries, perfect for website and app verification needs.",
      features: ["Global Coverage", "Instant Delivery", "Secure Verification", "24/7 Support"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media Growth",
      description: "Helping individuals and brands boost their social media presence with proven growth strategies.",
      features: ["Follower Growth", "Engagement Boost", "Content Strategy", "Analytics Insights"],
    },
  ]

  const projects = [
    {
      title: "Project Coming Soon",
      description: "Exciting new project in development. Stay tuned for updates!",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Coming Soon"],
    },
    {
      title: "Project Coming Soon",
      description: "Another amazing project in the works. More details coming soon!",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Coming Soon"],
    },
    {
      title: "Project Coming Soon",
      description: "Innovation in progress. Check back for the latest updates!",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Coming Soon"],
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-purple-200 dark:border-purple-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              MS2DWRLD
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6">
                <button onClick={() => scrollToSection("about")} className="hover:text-purple-600 transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection("services")} className="hover:text-purple-600 transition-colors">
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-purple-600 transition-colors"
                >
                  Portfolio
                </button>
                <button onClick={() => scrollToSection("contact")} className="hover:text-purple-600 transition-colors">
                  Contact
                </button>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4">
          <div className="container mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                MS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                MS2DWRLD
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
                Multi-Talented | Tech + Music + Digital Services
              </p>
              <div className="flex justify-center gap-2 mb-8">
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                >
                  <Sparkles className="w-4 h-4 mr-1" />
                  Developer
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                >
                  <Music className="w-4 h-4 mr-1" />
                  Artist
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                >
                  <Zap className="w-4 h-4 mr-1" />
                  Entrepreneur
                </Badge>
              </div>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
            <div className="mt-12 animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-purple-600" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
              <p>
                Welcome to my digital universe! I'm MS2DWRLD, a passionate multi-talented creator who thrives at the
                intersection of technology, music, and digital innovation. My journey is driven by an insatiable
                curiosity and a desire to push boundaries in everything I do.
              </p>
              <p>
                From crafting elegant code that solves real-world problems to creating music that moves souls, I believe
                in the power of creativity and technology to transform lives. Whether I'm developing cutting-edge
                software solutions, producing unique musical experiences, or helping brands amplify their digital
                presence, I bring the same level of dedication and innovation to every project.
              </p>
              <p>
                My mission is simple: to help others grow, succeed, and achieve their digital dreams while continuously
                evolving my own craft. Let's build something amazing together!
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              My Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-300">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="border-purple-300 text-purple-700 dark:border-purple-600 dark:text-purple-300"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              Ready to start your next project or just want to say hello? I'd love to hear from you!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Link href="https://wa.me/2349075841361" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-green-200 dark:border-green-800 bg-white/80 dark:bg-gray-800/80">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="w-8 h-8 mx-auto mb-4 text-green-600" />
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">+234 9075841361</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://t.me/ms2dwrld" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                    <h3 className="font-semibold mb-2">Telegram</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">@ms2dwrld</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="mailto:journey.with.ms072@gmail.com" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-red-200 dark:border-red-800 bg-white/80 dark:bg-gray-800/80">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-red-600" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">journey.with.ms072@gmail.com</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://instagram.com/ms2dwrld" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-pink-200 dark:border-pink-800 bg-white/80 dark:bg-gray-800/80">
                  <CardContent className="p-6 text-center">
                    <Instagram className="w-8 h-8 mx-auto mb-4 text-pink-600" />
                    <h3 className="font-semibold mb-2">Instagram</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">@ms2dwrld</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://twitter.com/_heisms" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80">
                  <CardContent className="p-6 text-center">
                    <Twitter className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                    <h3 className="font-semibold mb-2">X/Twitter</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">@_heisms</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
          <div className="container mx-auto text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">MS2DWRLD</h3>
              <div className="flex justify-center gap-6">
                <Link href="https://wa.me/2349075841361" className="hover:text-purple-300 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </Link>
                <Link href="https://t.me/ms2dwrld" className="hover:text-purple-300 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </Link>
                <Link href="https://instagram.com/ms2dwrld" className="hover:text-purple-300 transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="https://twitter.com/_heisms" className="hover:text-purple-300 transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="mailto:journey.with.ms072@gmail.com" className="hover:text-purple-300 transition-colors">
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="border-t border-purple-700 pt-6">
              <p className="text-purple-200">
                © {new Date().getFullYear()} MS2DWRLD. All rights reserved. | Multi-Talented Creator & Digital Innovator
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
