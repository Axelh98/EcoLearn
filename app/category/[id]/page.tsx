"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle, XCircle, AlertTriangle, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const categoryData = {
  "paper-cardboard": {
    title: "Paper & Cardboard",
    icon: "📄",
    description:
      "Paper and cardboard are among the most commonly recycled materials, with high recycling rates and multiple reuse possibilities.",
    acceptedItems: [
      "Newspapers and magazines",
      "Office paper and documents",
      "Cardboard boxes and packaging",
      "Paper bags and wrapping paper",
      "Books and catalogs",
      "Cereal boxes and food packaging",
      "Paper tubes and rolls",
      "Envelopes (including windowed ones)",
    ],
    rejectedItems: [
      "Wax-coated paper",
      "Paper towels and tissues",
      "Carbon paper",
      "Photographs",
      "Paper with food residue",
      "Laminated paper",
      "Paper cups with plastic lining",
    ],
    preparation: [
      "Remove all tape, staples, and metal clips",
      "Keep materials dry and clean",
      "Flatten cardboard boxes to save space",
      "Remove plastic windows from envelopes",
      "Separate different paper types if required locally",
    ],
    environmentalImpact: {
      energySaved: "40%",
      waterSaved: "50%",
      landfillDiverted: "1 ton of paper saves 17 trees",
    },
    tips: [
      "Buy products with minimal packaging",
      "Use both sides of paper before recycling",
      "Choose recycled paper products when possible",
      "Set up a paper recycling station at home or office",
    ],
  },
  plastic: {
    title: "Plastic",
    icon: "🥤",
    description:
      "Plastic recycling varies greatly by type. Understanding recycling codes helps ensure proper disposal and processing.",
    acceptedItems: [
      "#1 PET bottles (water, soda)",
      "#2 HDPE containers (milk jugs, detergent)",
      "#5 PP containers (yogurt cups, bottle caps)",
      "Clear plastic food containers",
      "Plastic shopping bags (at special drop-offs)",
      "Plastic film and wrap (at retailers)",
      "Rigid plastic packaging",
    ],
    rejectedItems: [
      "#3 PVC plastics",
      "#6 Polystyrene (styrofoam)",
      "#7 Other mixed plastics",
      "Plastic bags in curbside bins",
      "Dirty food containers",
      "Plastic utensils and straws",
      "Broken plastic items",
    ],
    preparation: [
      "Check the recycling number on the bottom",
      "Rinse containers clean of food residue",
      "Remove labels if required locally",
      "Keep caps on bottles (newer guidelines)",
      "Take plastic bags to retail drop-off points",
    ],
    environmentalImpact: {
      energySaved: "70%",
      waterSaved: "90%",
      landfillDiverted: "Prevents 450+ years of decomposition time",
    },
    tips: [
      "Reduce single-use plastics",
      "Choose reusable containers",
      "Look for products made from recycled plastic",
      "Support businesses with plastic-free packaging",
    ],
  },
  glass: {
    title: "Glass",
    icon: "🍶",
    description: "Glass is 100% recyclable and can be recycled endlessly without losing quality or purity.",
    acceptedItems: [
      "Glass bottles (all colors)",
      "Glass jars and containers",
      "Food and beverage containers",
      "Cosmetic and medicine bottles",
      "Condiment jars",
      "Baby food jars",
    ],
    rejectedItems: [
      "Window glass",
      "Mirror glass",
      "Light bulbs",
      "Drinking glasses and dishes",
      "Pyrex and heat-resistant glass",
      "Automotive glass",
      "Crystal glassware",
    ],
    preparation: [
      "Remove all caps and lids",
      "Rinse clean of food residue",
      "Remove labels if easily removable",
      "Separate by color if required locally",
      "Handle carefully to avoid breakage",
    ],
    environmentalImpact: {
      energySaved: "30%",
      waterSaved: "50%",
      landfillDiverted: "Glass never decomposes in landfills",
    },
    tips: [
      "Reuse glass jars for storage",
      "Choose glass containers over plastic when possible",
      "Support local glass recycling programs",
      "Buy products in returnable glass bottles",
    ],
  },
  metal: {
    title: "Metal",
    icon: "🥫",
    description:
      "Metals are highly valuable recyclables that can be recycled indefinitely without losing their properties.",
    acceptedItems: [
      "Aluminum cans and bottles",
      "Steel and tin cans",
      "Aluminum foil and trays",
      "Metal bottle caps and lids",
      "Empty aerosol cans",
      "Small metal appliances",
      "Copper and brass items",
    ],
    rejectedItems: [
      "Paint cans with residue",
      "Propane tanks",
      "Motor oil containers",
      "Hazardous material containers",
      "Large appliances (need special handling)",
    ],
    preparation: [
      "Rinse cans clean of food residue",
      "Remove paper labels if easily removable",
      "Empty aerosol cans completely",
      "Separate different metal types if required",
      "Crush cans to save space (optional)",
    ],
    environmentalImpact: {
      energySaved: "95% for aluminum",
      waterSaved: "97%",
      landfillDiverted: "Aluminum cans can be recycled infinitely",
    },
    tips: [
      "Collect aluminum cans for cash rewards",
      "Choose products in metal containers",
      "Participate in scrap metal drives",
      "Look for recycled content in metal products",
    ],
  },
  electronics: {
    title: "Electronics",
    icon: "📱",
    description:
      "Electronic waste contains valuable materials but also hazardous substances requiring special handling.",
    acceptedItems: [
      "Smartphones and tablets",
      "Computers and laptops",
      "Televisions and monitors",
      "Printers and scanners",
      "Gaming consoles",
      "Small appliances",
      "Cables and chargers",
      "Batteries",
    ],
    rejectedItems: [
      "Items with personal data not wiped",
      "Broken CRT monitors (need special handling)",
      "Large appliances with refrigerants",
    ],
    preparation: [
      "Back up and wipe all personal data",
      "Remove batteries if possible",
      "Keep items intact (don't disassemble)",
      "Find certified e-waste recyclers",
      "Check manufacturer take-back programs",
    ],
    environmentalImpact: {
      energySaved: "Recovers precious metals",
      waterSaved: "Prevents toxic contamination",
      landfillDiverted: "Contains lead, mercury, and other toxins",
    },
    tips: [
      "Donate working electronics",
      "Use manufacturer trade-in programs",
      "Buy refurbished electronics",
      "Extend device lifespan with proper care",
    ],
  },
  textiles: {
    title: "Textiles",
    icon: "👕",
    description:
      "Textile recycling reduces waste and conserves resources, though options vary by condition and material type.",
    acceptedItems: [
      "Clothing in any condition",
      "Shoes and accessories",
      "Bedding and linens",
      "Towels and washcloths",
      "Curtains and drapes",
      "Stuffed animals",
      "Fabric scraps",
    ],
    rejectedItems: ["Items with hazardous materials", "Heavily contaminated textiles", "Items with mold or mildew"],
    preparation: [
      "Clean items before donation/recycling",
      "Separate by condition (donate vs. recycle)",
      "Remove non-textile components when possible",
      "Use textile recycling bins for damaged items",
      "Consider upcycling projects first",
    ],
    environmentalImpact: {
      energySaved: "Reduces manufacturing demand",
      waterSaved: "Cotton production uses massive water",
      landfillDiverted: "Textiles can take 200+ years to decompose",
    },
    tips: [
      "Buy quality items that last longer",
      "Repair and mend when possible",
      "Shop at thrift stores and consignment shops",
      "Participate in clothing swaps",
    ],
  },
  organic: {
    title: "Organic Waste",
    icon: "🍎",
    description:
      "Organic waste can be composted to create nutrient-rich soil amendment while reducing methane emissions from landfills.",
    acceptedItems: [
      "Fruit and vegetable scraps",
      "Coffee grounds and tea bags",
      "Eggshells and nutshells",
      "Yard trimmings and leaves",
      "Grass clippings",
      "Small branches and twigs",
      "Paper towels and napkins",
      "Cardboard (uncoated)",
    ],
    rejectedItems: [
      "Meat and fish scraps",
      "Dairy products",
      "Oils and fats",
      "Pet waste",
      "Diseased plants",
      "Weeds with seeds",
      "Treated wood",
    ],
    preparation: [
      "Chop large items into smaller pieces",
      "Mix green and brown materials",
      "Keep compost moist but not soggy",
      "Turn compost regularly for aeration",
      "Monitor temperature for proper decomposition",
    ],
    environmentalImpact: {
      energySaved: "Reduces methane emissions",
      waterSaved: "Improves soil water retention",
      landfillDiverted: "30% of waste stream is organic",
    },
    tips: [
      "Start a backyard compost bin",
      "Use finished compost in gardens",
      "Participate in municipal organics programs",
      "Reduce food waste through meal planning",
    ],
  },
  hazardous: {
    title: "Hazardous Materials",
    icon: "⚠️",
    description: "Hazardous materials require special handling to protect human health and the environment.",
    acceptedItems: [
      "Paint and paint thinners",
      "Motor oil and automotive fluids",
      "Pesticides and herbicides",
      "Cleaning chemicals",
      "Batteries (all types)",
      "Fluorescent bulbs",
      "Propane tanks",
      "Medical sharps",
    ],
    rejectedItems: [
      "Radioactive materials",
      "Explosives",
      "Asbestos materials",
      "Medical waste (except sharps programs)",
    ],
    preparation: [
      "Keep items in original containers",
      "Never mix different chemicals",
      "Transport safely to collection sites",
      "Use up products completely when possible",
      "Follow local collection event schedules",
    ],
    environmentalImpact: {
      energySaved: "Prevents environmental contamination",
      waterSaved: "Protects groundwater",
      landfillDiverted: "Prevents toxic leaching",
    },
    tips: [
      "Buy only what you need",
      "Choose less toxic alternatives",
      "Share unused products with neighbors",
      "Participate in household hazardous waste days",
    ],
  },
}

export default function CategoryDetail() {
  const params = useParams()
  const router = useRouter()
  const categoryId = params.id as string
  const category = categoryData[categoryId as keyof typeof categoryData]

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <Button onClick={() => router.push("/")} className="bg-green-600 hover:bg-green-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button onClick={() => router.push("/")} variant="outline" className="mb-6 bg-white">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Categories
        </Button>

        {/* Header */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="text-center">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Accepted Items */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-6 w-6" />
                What Can Be Recycled
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.acceptedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Rejected Items */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <XCircle className="h-6 w-6" />
                What Cannot Be Recycled
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.rejectedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Preparation Steps */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <AlertTriangle className="h-6 w-6" />
              Preparation Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {category.preparation.map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Environmental Impact */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-green-700">Environmental Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">{category.environmentalImpact.energySaved}</div>
                <p className="text-sm text-gray-600">Energy Saved</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">{category.environmentalImpact.waterSaved}</div>
                <p className="text-sm text-gray-600">Water Saved</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-sm font-bold text-purple-600 mb-2">
                  {category.environmentalImpact.landfillDiverted}
                </div>
                <p className="text-sm text-gray-600">Landfill Impact</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-700">
              <Lightbulb className="h-6 w-6" />
              Pro Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {category.tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
