"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle, XCircle, AlertTriangle, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useCategory } from "@/context/CategoryContext"
import { CategoryKey } from "@/types/category"
import { categoryQuizzes } from "@/data/categoryQuizzes"
import { categoryQuizzes_es } from "@/data/categoryQuizzes_es"
import CategoryQuiz from "@/components/CategoryQuiz"

export default function CategoryDetail() {
  const params = useParams()
  const router = useRouter()
  const categoryId = params.id as CategoryKey



  const { getCategoryById } = useCategory()
  const category = getCategoryById(categoryId)

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


        {/* Quiz Section */}

        {categoryQuizzes[categoryId] && (
        <div className="mt-10">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-indigo-700 text-xl">Test Your Knowledge!</CardTitle>
            </CardHeader>
            <CardContent>
              <CategoryQuiz questions={categoryQuizzes[categoryId]} />
            </CardContent>
          </Card>
        </div>
      )}

      </main>

      <Footer />
    </div>
  )
}
