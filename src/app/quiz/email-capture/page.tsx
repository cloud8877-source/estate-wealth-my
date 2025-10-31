'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/layout/Header'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import { calculatePersona, QuizAnswers } from '@/lib/quiz-logic'

export default function EmailCapture() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in all fields')
      setIsSubmitting(false)
      return
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    try {
      // Get quiz answers from session storage
      const savedAnswers = sessionStorage.getItem('quizAnswers')
      if (!savedAnswers) {
        throw new Error('Quiz answers not found. Please restart the quiz.')
      }

      const answers: QuizAnswers = JSON.parse(savedAnswers)
      
      // Calculate persona
      const personaSlug = calculatePersona(answers)
      
      // Send data to n8n webhook for processing
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_QUIZ_RESULT
      
      if (webhookUrl && webhookUrl !== 'https://your-n8n-instance.com/webhook/quiz-result') {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            answers: answers,
            persona: personaSlug,
            timestamp: new Date().toISOString(),
            source: 'estate-wealth-my-quiz'
          }),
        })

        if (!response.ok) {
          console.warn('n8n webhook submission failed, but continuing with user flow')
          // Continue even if webhook fails - don't block user experience
        }
      }
      
      // Redirect to results page (regardless of webhook success)
      router.push(`/quiz/results/${personaSlug}`)
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container-custom py-16">
        <div className="max-w-md mx-auto">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Get Your Personalized Results
              </h1>
              <p className="text-gray-600">
                Enter your email to receive your custom roadmap and free guide. 
                Your information is private and never shared.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Your Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                minLength={2}
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-blue-800 text-sm font-medium">
                      Your Privacy Matters
                    </p>
                    <p className="text-blue-700 text-sm mt-1">
                      We respect your privacy and will never share your information. 
                      You can unsubscribe at any time.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  'See My Results →'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
