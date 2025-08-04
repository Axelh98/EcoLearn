"use client"
import { Leaf, CheckCircle, BookOpen, Award } from "lucide-react"
import { useCategory } from "@/context/CategoryContext"

export default function HeroSection() {
  const { language } = useCategory()

  const texts = {
    en: {
      title: "Learn to Recycle Right",
      description:
        "Discover how to properly sort, clean, and recycle materials to make a positive impact on our environment. Every small action counts towards a sustainable future.",
      features: ["Interactive Learning", "Expert Tips", "Knowledge Quiz"],
    },
    es: {
      title: "Aprende a Reciclar Correctamente",
      description:
        "Descubre cómo clasificar, limpiar y reciclar materiales adecuadamente para generar un impacto positivo en nuestro medio ambiente. Cada pequeña acción cuenta para un futuro sostenible.",
      features: ["Aprendizaje Interactivo", "Consejos de Expertos", "Quiz de Conocimiento"],
    },
  }

  const t = texts[language]

  return (
    <section className="text-center mb-12">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <Leaf className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">{t.description}</p>
        <div className="flex justify-center gap-4 text-sm text-gray-500">
          {t.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-1">
              {i === 0 && <CheckCircle className="h-4 w-4 text-green-500" />}
              {i === 1 && <BookOpen className="h-4 w-4 text-blue-500" />}
              {i === 2 && <Award className="h-4 w-4 text-purple-500" />}
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
