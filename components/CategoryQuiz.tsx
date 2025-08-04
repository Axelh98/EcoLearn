"use client"

import { useState } from "react"
import { Award, CheckCircle, XCircle, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Question } from "@/types/quizes"

interface CategoryQuizProps {
  questions: Question[]
}

export default function CategoryQuiz({ questions }: CategoryQuizProps) {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return // evitar clicks adicionales
    setSelectedAnswer(answerIndex)
    setShowResult(true)

    if (answerIndex === questions[currentQuiz].correct) {
      setScore((prev) => prev + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuiz < questions.length - 1) {
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
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Award className="h-8 w-8 text-yellow-500" />
          <h3 className="text-3xl font-bold text-gray-900">Quiz: Test Your Knowledge</h3>
        </div>

        {!quizCompleted ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">
                  Question {currentQuiz + 1} of {questions.length}
                </span>
                <span className="text-sm text-gray-500">Score: {score}</span>
              </div>
              <progress
                value={currentQuiz + 1}
                max={questions.length}
                className="w-full h-2 rounded bg-gray-200"
              />
            </div>

            <h4 className="text-xl font-semibold mb-4 text-gray-900">{questions[currentQuiz].question}</h4>
            <div className="space-y-3 mb-6">
              {questions[currentQuiz].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border transition-colors ${
                    showResult
                      ? index === questions[currentQuiz].correct
                        ? "bg-green-100 border-green-500 text-green-800"
                        : index === selectedAnswer
                        ? "bg-red-100 border-red-500 text-red-800"
                        : "bg-gray-50 border-gray-200"
                      : "hover:bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {showResult && index === questions[currentQuiz].correct && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                    {showResult && index === selectedAnswer && index !== questions[currentQuiz].correct && (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {showResult && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800">
                  <strong>Explanation:</strong> {questions[currentQuiz].explanation}
                </p>
              </div>
            )}

            {showResult && (
              <div className="text-center">
                <Button onClick={nextQuestion} className="bg-green-600 hover:bg-green-700">
                  {currentQuiz < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h4 className="text-2xl font-bold mb-2 text-gray-900">Quiz Complete!</h4>
            <p className="text-lg text-gray-600 mb-4">
              You scored {score} out of {questions.length}
            </p>
            <progress
              value={score}
              max={questions.length}
              className="w-full h-3 rounded bg-gray-200 mb-6"
            />
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
