// components/Header.tsx

"use client"
import { Recycle } from "lucide-react"
import { useCategory } from "@/context/CategoryContext"

export default function Header() {
  const { language, setLanguage } = useCategory()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-full">
            <Recycle className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">EcoLearn</h1>
            <p className="text-sm text-gray-600">Master the Art of Recycling</p>
          </div>

          <div className="mt-4 flex justify-end">
            {/* Language Toggle button*/}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              {language === "en" ? "ES" : "EN"}
            </button>

          </div>
        </div>
      </div>
    </header>
  )
}
