"use client"

import { useState } from "react"
import { Award, CheckCircle, XCircle, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const quizQuestions = [
  {
    question: "Which plastic recycling number is most commonly accepted?",
    options: ["#1 (PET)", "#3 (PVC)", "#6 (PS)", "#7 (Other)"],
    correct: 0,
    explanation: "#1 (PET) plastics like water bottles are widely accepted in recycling programs.",
  },
  {
    question: "Should you remove caps from plastic bottles before recycling?",
    options: ["Always remove", "Always keep on", "Depends on local program", "It doesn't matter"],
    correct: 2,
    explanation: "Different recycling programs have different requirements. Check with your local facility.",
  },
  {
    question: "What percentage of aluminum cans are made from recycled content?",
    options: ["25%", "50%", "70%", "90%"],
    correct: 2,
    explanation: "About 70% of aluminum cans contain recycled content, making them highly sustainable.",
  },
]

export default function Quiz() {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowResult(true)

    if (answerIndex === quizQuestions[currentQuiz].correct) {
      setScore((prev) => prev + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(currentQuiz + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuiz(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
  }

  return (
    <section className="mb-12">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Award className="h-8 w-8 text-yellow-500" />
          <h3 className="text-3xl font-bold text-gray-900">Knowledge Quiz</h3>
        </div>

        {!quizCompleted ? (
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">
                  Question {currentQuiz + 1} of {quizQuestions.length}
                </span>
                <span className="text-sm text-gray-500">Score: {score}</span>
              </div>
              <Progress value={((currentQuiz + 1) / quizQuestions.length) * 100} className="h-2" />
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">{quizQuestions[currentQuiz].question}</h4>
              <div className="space-y-3">
                {quizQuestions[currentQuiz].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-lg border transition-colors ${
                      showResult
                        ? index === quizQuestions[currentQuiz].correct
                          ? "bg-green-100 border-green-500 text-green-800"
                          : index === selectedAnswer
                            ? "bg-red-100 border-red-500 text-red-800"
                            : "bg-gray-50 border-gray-200"
                        : "hover:bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {showResult && index === quizQuestions[currentQuiz].correct && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                      {showResult && index === selectedAnswer && index !== quizQuestions[currentQuiz].correct && (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {showResult && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800">
                  <strong>Explanation:</strong> {quizQuestions[currentQuiz].explanation}
                </p>
              </div>
            )}

            {showResult && (
              <div className="text-center">
                <Button onClick={nextQuestion} className="bg-green-600 hover:bg-green-700">
                  {currentQuiz < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center max-w-md mx-auto">
            <div className="mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h4 className="text-2xl font-bold mb-2 text-gray-900">Quiz Complete!</h4>
              <p className="text-lg text-gray-600 mb-4">
                You scored {score} out of {quizQuestions.length}
              </p>
              <div className="mb-6">
                <Progress value={(score / quizQuestions.length) * 100} className="h-3" />
              </div>
            </div>
            <Button onClick={resetQuiz} variant="outline" className="gap-2 bg-transparent">
              <RotateCcw className="h-4 w-4" />
              Take Quiz Again
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
