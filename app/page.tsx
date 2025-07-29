"use client"

import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import RecyclingCategories from "@/components/RecyclingCategories"
import ImpactStats from "@/components/ImpactStats"
import Quiz from "@/components/QuizSection" // ← Importás el nuevo componente
import { Button } from "@/components/ui/button"
import { Recycle } from "lucide-react"

export default function RecyclingApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Recycling Categories */}
        <RecyclingCategories />

        {/* Environmental Impact Stats */}
        <ImpactStats />

        {/* Interactive Quiz */}
        <Quiz />

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl mb-6 opacity-90">
              Start implementing what you've learned and help create a more sustainable future.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const element = document.querySelector("section:has([data-locator])")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Find Local Recycling Centers
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Share Your Knowledge
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Recycle className="h-6 w-6" />
              <span className="text-lg font-semibold">EcoLearn</span>
            </div>
            <p className="text-gray-400">Empowering communities through recycling education</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
