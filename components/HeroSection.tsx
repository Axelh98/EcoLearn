"use client"
import { Leaf, CheckCircle, BookOpen, Award } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="text-center mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full">
                        <Leaf className="h-12 w-12 text-green-600" />
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn to Recycle Right</h2>
                <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                    Discover how to properly sort, clean, and recycle materials to make a positive impact on our environment.
                    Every small action counts towards a sustainable future.
                </p>
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Interactive Learning</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-blue-500" />
                        <span>Expert Tips</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-purple-500" />
                        <span>Knowledge Quiz</span>
                    </div>
                </div>
            </div>
        </section>
    )

}