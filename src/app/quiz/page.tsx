import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Link from 'next/link'

export default function QuizLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary-700 mb-6">
              <span>🛡️</span>
              FREE 2-Minute Quiz
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Your Estate Planning Gaps
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get personalized insights and a custom action plan in just 2 minutes. 
              Understand exactly what you need to protect your family's future.
            </p>
            
            <Button variant="primary" size="lg" asChild>
              <Link href="/quiz/questions">
                Start Quiz Now →
              </Link>
            </Button>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span>✓</span>
                100% Free
              </span>
              <span className="flex items-center gap-2">
                <span>✓</span>
                No obligation
              </span>
              <span className="flex items-center gap-2">
                <span>✓</span>
                Private & confidential
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Discover */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Discover
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In just 2 minutes, you'll get clear insights about your estate planning needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: '📊',
                title: 'Your Current Preparedness Level',
                description: 'Understand exactly where you stand with your estate planning.'
              },
              {
                icon: '📝',
                title: 'Personalized Action Plan',
                description: 'Get clear next steps tailored to your unique situation.'
              },
              {
                icon: '📥',
                title: 'Free Downloadable Guide',
                description: 'Receive a comprehensive guide to help you get started.'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and completely confidential.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Answer 7 Quick Questions',
                  description: 'Simple questions about your family, assets, and goals. Takes just 2 minutes.'
                },
                {
                  step: '2',
                  title: 'Get Instant Personalized Results',
                  description: 'Our smart algorithm analyzes your answers and provides tailored insights.'
                },
                {
                  step: '3',
                  title: 'Download Your Free Guide',
                  description: 'Receive your custom roadmap and actionable checklist.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Protect Your Family's Future?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards peace of mind. Your personalized estate planning roadmap is just 2 minutes away.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/quiz/questions">
              Start Free Quiz Now →
            </Link>
          </Button>
          <p className="text-gray-500 mt-6 text-sm">
            No credit card required • 100% confidential • No obligation
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
