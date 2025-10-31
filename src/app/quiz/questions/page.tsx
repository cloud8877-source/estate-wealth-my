'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/layout/Header'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import quizQuestions from '@/data/quiz-questions.json'
import { QuizAnswers } from '@/lib/quiz-logic'

export default function QuizQuestions() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentQuestion = quizQuestions.questions[currentStep]
  const progress = ((currentStep + 1) / quizQuestions.questions.length) * 100

  useEffect(() => {
    // Load saved progress from session storage
    const savedAnswers = sessionStorage.getItem('quizAnswers')
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers))
    }
  }, [])

  const saveProgress = (newAnswers: QuizAnswers) => {
    const updatedAnswers = { ...answers, ...newAnswers }
    setAnswers(updatedAnswers)
    sessionStorage.setItem('quizAnswers', JSON.stringify(updatedAnswers))
  }

  const handleAnswerSelect = (value: string) => {
    const questionId = currentQuestion.id
    saveProgress({ [questionId]: value })
    
    // Auto-advance after a short delay for better UX
    setTimeout(() => {
      handleNext()
    }, 300)
  }

  const handleNext = () => {
    if (currentStep < quizQuestions.questions.length - 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentStep(prev => prev + 1)
        setIsTransitioning(false)
      }, 300)
    } else {
      // All questions answered, proceed to email capture
      router.push('/quiz/email-capture')
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentStep(prev => prev - 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const getSelectedAnswer = () => {
    return answers[currentQuestion.id as keyof QuizAnswers]
  }

  if (isTransitioning) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading next question...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container-custom py-8">
        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentStep + 1} of {quizQuestions.questions.length}
            </span>
            <span className="text-sm font-medium text-primary-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {currentQuestion.text}
              </h1>
              {currentQuestion.description && (
                <p className="text-gray-600 text-lg">
                  {currentQuestion.description}
                </p>
              )}
            </div>

            {/* Answer Options */}
            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option.value)}
                  className={`w-full p-6 text-left rounded-xl border-2 transition-all duration-200 ${
                    getSelectedAnswer() === option.value
                      ? 'border-primary-500 bg-primary-50 text-primary-900 shadow-md'
                      : 'border-gray-200 bg-white text-gray-900 hover:border-primary-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${
                      getSelectedAnswer() === option.value
                        ? 'border-primary-500 bg-primary-500'
                        : 'border-gray-300'
                    }`}>
                      {getSelectedAnswer() === option.value && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="text-lg font-medium">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back
              </Button>

              <Button
                variant="primary"
                onClick={handleNext}
                disabled={!getSelectedAnswer()}
                className="flex items-center gap-2"
              >
                {currentStep === quizQuestions.questions.length - 1 ? 'See Results' : 'Next'}
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Quiz Info */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>✓ Your answers are saved automatically</p>
            <p>✓ You can go back and change your answers anytime</p>
            <p>✓ This information is private and confidential</p>
          </div>
        </div>
      </main>
    </div>
  )
}
