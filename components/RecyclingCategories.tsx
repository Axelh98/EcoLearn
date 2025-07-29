"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recyclableItems = [
  {
    id: "paper-cardboard",
    category: "Paper & Cardboard",
    icon: "📄",
    items: ["Newspapers", "Magazines", "Cardboard boxes", "Office paper"],
    tips: "Remove tape and staples. Keep dry and clean.",
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "plastic",
    category: "Plastic",
    icon: "🥤",
    items: ["Water bottles", "Food containers", "Plastic bags", "Yogurt cups"],
    tips: "Check recycling numbers. Clean containers before recycling.",
    color: "bg-green-100 text-green-800",
  },
  {
    id: "glass",
    category: "Glass",
    icon: "🍶",
    items: ["Bottles", "Jars", "Food containers"],
    tips: "Remove lids and caps. Rinse clean of food residue.",
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "metal",
    category: "Metal",
    icon: "🥫",
    items: ["Aluminum cans", "Steel cans", "Foil", "Metal lids"],
    tips: "Rinse clean. Aluminum is infinitely recyclable.",
    color: "bg-orange-100 text-orange-800",
  },
  {
    id: "electronics",
    category: "Electronics",
    icon: "📱",
    items: ["Phones", "Computers", "Batteries", "Cables"],
    tips: "Remove personal data. Find certified e-waste recyclers.",
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    id: "textiles",
    category: "Textiles",
    icon: "👕",
    items: ["Clothing", "Shoes", "Bedding", "Towels"],
    tips: "Donate wearable items. Recycle damaged textiles separately.",
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: "organic",
    category: "Organic Waste",
    icon: "🍎",
    items: ["Food scraps", "Yard waste", "Coffee grounds", "Eggshells"],
    tips: "Compost at home or use municipal organic waste programs.",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "hazardous",
    category: "Hazardous Materials",
    icon: "⚠️",
    items: ["Paint", "Chemicals", "Motor oil", "Pesticides"],
    tips: "Never put in regular recycling. Use special disposal facilities.",
    color: "bg-red-100 text-red-800",
  },
]

export default function RecyclingCategories() {
  const router = useRouter()

  const handleLearnMore = (categoryId: string) => {
    router.push(`/category/${categoryId}`)
  }

  return (
    <section className="mb-12">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Recycling Categories</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recyclableItems.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <CardTitle className="text-lg">{item.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Common Items:</h4>
                  <div className="flex flex-wrap gap-1">
                    {item.items.map((subItem, subIndex) => (
                      <Badge key={subIndex} variant="secondary" className={item.color}>
                        {subItem}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-1">Pro Tip:</h4>
                  <p className="text-sm text-gray-600">{item.tips}</p>
                </div>
                <Button
                  onClick={() => handleLearnMore(item.id)}
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="sm"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
