'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, XCircle, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

interface Question {
  question: string
  options: string[]
  correct: number
  explanation: string
}

const questions: Question[] = [
  {
    question: "What is the current atmospheric CO₂ concentration?",
    options: ["350 ppm", "420 ppm", "500 ppm", "280 ppm"],
    correct: 1,
    explanation: "As of 2024, atmospheric CO₂ levels are around 420 ppm, the highest in over 3 million years."
  },
  {
    question: "Which sector produces the most greenhouse gas emissions globally?",
    options: ["Transportation", "Agriculture", "Energy Production", "Industry"],
    correct: 2,
    explanation: "Energy production (electricity and heat) accounts for about 25% of global greenhouse gas emissions."
  },
  {
    question: "How much has global temperature risen since pre-industrial times?",
    options: ["0.5°C", "1.1°C", "2.0°C", "0.8°C"],
    correct: 1,
    explanation: "Global average temperature has risen by approximately 1.1°C since the late 1800s."
  },
  {
    question: "What percentage of climate scientists agree that climate change is human-caused?",
    options: ["75%", "85%", "90%", "97%"],
    correct: 3,
    explanation: "Multiple studies show that 97% or more of actively publishing climate scientists agree that climate change is primarily caused by human activities."
  },
  {
    question: "Which renewable energy source has grown fastest in recent years?",
    options: ["Wind", "Solar", "Hydroelectric", "Geothermal"],
    correct: 1,
    explanation: "Solar energy has experienced the most rapid growth, with costs falling dramatically over the past decade."
  }
]

export function ClimateQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(prev => prev + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setQuizCompleted(false)
  }

  if (quizCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">
              {score}/{questions.length}
            </div>
            <div className="text-xl mb-6">
              You scored {Math.round((score / questions.length) * 100)}%
            </div>
            <div className="mb-6">
              {score === questions.length && (
                <p className="text-green-600">Perfect! You&apos;re a climate expert! 🌍</p>
              )}
              {score >= questions.length * 0.8 && score < questions.length && (
                <p className="text-blue-600">Great job! You know a lot about climate change! 🌱</p>
              )}
              {score >= questions.length * 0.6 && score < questions.length * 0.8 && (
                <p className="text-yellow-600">Good effort! Keep learning about climate science! 📚</p>
              )}
              {score < questions.length * 0.6 && (
                <p className="text-orange-600">There&apos;s room to learn more about climate change! 🤔</p>
              )}
            </div>
            <Button onClick={resetQuiz}>Take Quiz Again</Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-purple-600" />
            <span>Climate Knowledge Quiz</span>
          </CardTitle>
          <div className="text-sm text-gray-600">
            {currentQuestion + 1} of {questions.length}
          </div>
        </div>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} />
      </CardHeader>
      <CardContent>
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-6">{question.question}</h3>
          
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={
                  selectedAnswer === null 
                    ? "outline" 
                    : index === question.correct 
                      ? "default" 
                      : selectedAnswer === index 
                        ? "destructive" 
                        : "outline"
                }
                className="w-full text-left justify-start h-auto p-4"
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
              >
                <div className="flex items-center space-x-3">
                  {selectedAnswer !== null && (
                    <>
                      {index === question.correct && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                      {selectedAnswer === index && index !== question.correct && (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </>
                  )}
                  <span>{option}</span>
                </div>
              </Button>
            ))}
          </div>

          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
            >
              <p className="text-blue-800">{question.explanation}</p>
            </motion.div>
          )}

          {showExplanation && (
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Score: {score}/{currentQuestion + 1}
              </div>
              <Button onClick={nextQuestion}>
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
              </Button>
            </div>
          )}
        </motion.div>
      </CardContent>
    </Card>
  )
}