import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { getPersonaBySlug, getAllPersonas } from '@/lib/quiz-logic'
import { ShieldCheckIcon, CalendarIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'

// Generate static params for all personas
export async function generateStaticParams() {
  const personas = getAllPersonas()
  return personas.map((persona) => ({
    persona: persona.slug,
  }))
}

export default function ResultsPage({ params }: { params: { persona: string } }) {
  const personaSlug = params.persona
  const persona = getPersonaBySlug(personaSlug)

  if (!persona) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container-custom py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Persona Not Found</h1>
          <p className="text-gray-600 mb-8">The requested persona could not be found.</p>
          <Button variant="primary" asChild>
            <a href="/quiz">Take Quiz Again</a>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'blue':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'purple':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'green':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'teal':
        return 'bg-teal-100 text-teal-800 border-teal-200'
      default:
        return 'bg-primary-100 text-primary-800 border-primary-200'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Persona Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getColorClasses(persona.color)} mb-6`}>
              <span className="text-lg">{persona.icon}</span>
              <span className="font-semibold">Your Profile: {persona.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {persona.headline}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {persona.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Personalized Insights */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Personalized Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Based on your quiz answers, here are the key insights for your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {persona.insights.map((insight, index) => (
              <Card key={index} className="text-center">
                <div className="text-3xl mb-4">{insight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {insight.title}
                </h3>
                <p className="text-gray-600">
                  {insight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Next Steps */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recommended Next Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's your personalized action plan to protect your family's future.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <ul className="space-y-4">
                {persona.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-lg">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Resource Download */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center p-12">
              <DocumentArrowDownIcon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Download Your Free {persona.freeResource.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {persona.freeResource.description}
              </p>
              <Button variant="primary" size="lg" className="flex items-center gap-2 mx-auto">
                <DocumentArrowDownIcon className="h-5 w-5" />
                Download Free Guide
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <section className="bg-primary-600 section-padding">
        <div className="container-custom text-center">
          <CalendarIcon className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {persona.cta.primary}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your personalized estate planning strategy in a free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="#">
                Book Free Consultation
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10" asChild>
              <a href="#">
                {persona.cta.secondary}
              </a>
            </Button>
          </div>
          <p className="text-primary-200 mt-6 text-sm">
            No credit card required • 15-minute call • Expert guidance
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services That Match Your Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Based on your profile, these services would be most beneficial for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {persona.services.map((service, index) => (
              <Card key={index} className="text-center">
                <ShieldCheckIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service}</h3>
                <p className="text-gray-600 mb-4">
                  Professional estate planning service tailored to your specific needs.
                </p>
                <Button variant="ghost" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
