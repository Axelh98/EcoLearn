"use client"

import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
        <p className="text-xl mb-6 opacity-90">
          Start implementing what you have learned and help create a more sustainable future.
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
  )
}