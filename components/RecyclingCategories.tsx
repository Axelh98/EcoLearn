"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recyclableItems = [
    {
        category: "Paper & Cardboard",
        icon: "📄",
        items: ["Newspapers", "Magazines", "Cardboard boxes", "Office paper"],
        tips: "Remove tape and staples. Keep dry and clean.",
        color: "bg-blue-100 text-blue-800",
    },
    {
        category: "Plastic",
        icon: "🥤",
        items: ["Water bottles", "Food containers", "Plastic bags", "Yogurt cups"],
        tips: "Check recycling numbers. Clean containers before recycling.",
        color: "bg-green-100 text-green-800",
    },
    {
        category: "Glass",
        icon: "🍶",
        items: ["Bottles", "Jars", "Food containers"],
        tips: "Remove lids and caps. Rinse clean of food residue.",
        color: "bg-purple-100 text-purple-800",
    },
    {
        category: "Metal",
        icon: "🥫",
        items: ["Aluminum cans", "Steel cans", "Foil", "Metal lids"],
        tips: "Rinse clean. Aluminum is infinitely recyclable.",
        color: "bg-orange-100 text-orange-800",
    },
]

export default function RecyclingCategories() {
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
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}