"use client"

import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import RecyclingCategories from "@/components/RecyclingCategories"
import ImpactStats from "@/components/ImpactStats"
import Quiz from "@/components/QuizSection"
import CallToAction from "@/components/CalltoAction"
import Footer from "@/components/Footer"


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
        <CallToAction />

        {/* Additional Content */}


      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
