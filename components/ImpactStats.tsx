"use client"

import { useCategory } from "@/context/CategoryContext"




export default function ImpactStats() {

    const { language } = useCategory()
    // Define the texts for different languages
    const texts = {
        en: {
            title: "Environmental Impact",
            stats: [
                "75% less energy used when recycling aluminum vs. making new",
                "1 ton of recycled paper saves 17 trees and 7,000 gallons of water",
                "450 years for a plastic bottle to decompose in landfill",
            ],
        },
        es: {
            title: "Impacto Ambiental",
            stats: [
                "75% menos energía se utiliza al reciclar aluminio en comparación con la fabricación de nuevo",
                "1 tonelada de papel reciclado ahorra 17 árboles y 7,000 galones de agua",
                "450 años para que una botella de plástico se descomponga en un vertedero",
            ],
        },
    }

    const t = texts[language]


    return (
        <section className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">{t.title}</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
                        <p className="text-gray-600">{t.stats[0]} </p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">1 Ton</div>
                        <p className="text-gray-600">{t.stats[1]}</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">450</div>
                        <p className="text-gray-600">{t.stats[2]}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}