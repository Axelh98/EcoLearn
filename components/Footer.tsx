"use client" 

import { Recycle } from "lucide-react"

export default function Footer() {
  return (
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
  )
}