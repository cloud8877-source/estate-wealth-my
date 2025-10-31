import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  ClockIcon, 
  CheckBadgeIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  HeartIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary-700 mb-6">
                <ShieldCheckIcon className="h-4 w-4" />
                Trusted by 500+ Malaysian Families
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Protect Your Family's Future with a Proper{' '}
                <span className="gradient-text">Estate Plan</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Take our 2-minute quiz to discover your personalized estate planning roadmap. 
                Get instant insights tailored to your unique family situation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/quiz">
                    Start Free Quiz →
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link href="/services">
                    View Services
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <CheckBadgeIcon className="h-4 w-4 text-trust-600" />
                  No obligation
                </span>
                <span className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-trust-600" />
                  2 minutes
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4 text-trust-600" />
                  Instant results
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Your Estate Planning Journey Starts Here
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Answer 7 simple questions about your family and goals to get your personalized action plan.
                  </p>
                  <Button variant="primary" className="w-full" asChild>
                    <Link href="/quiz">
                      Begin Your Free Assessment
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Confidential</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Without Proper Estate Planning, Your Family Could Face
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't leave your family's future to chance. Understand the risks and discover how we can help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problems */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Common Challenges</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: HomeIcon,
                    title: 'Legal Battles',
                    description: 'Family disputes over inheritance can drag on for years in court.'
                  },
                  {
                    icon: BuildingStorefrontIcon,
                    title: 'Frozen Assets',
                    description: 'Your family may not access funds for months during probate.'
                  },
                  {
                    icon: HeartIcon,
                    title: 'Wrong Beneficiaries',
                    description: 'Without clear instructions, assets may go to unintended recipients.'
                  },
                  {
                    icon: ChartBarIcon,
                    title: 'Unnecessary Taxes',
                    description: 'Poor planning can result in higher inheritance taxes and fees.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Solutions */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Our Solutions</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: ShieldCheckIcon,
                    title: 'Clear Legal Documentation',
                    description: 'Proper wills and trusts prevent disputes and ensure your wishes are followed.'
                  },
                  {
                    icon: UserGroupIcon,
                    title: 'Family Protection',
                    description: 'Designate guardians for children and provide for loved ones seamlessly.'
                  },
                  {
                    icon: CheckBadgeIcon,
                    title: 'Asset Distribution',
                    description: 'Control exactly who receives what, when, and under what conditions.'
                  },
                  {
                    icon: ClockIcon,
                    title: 'Tax Optimization',
                    description: 'Minimize inheritance taxes and legal fees through strategic planning.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-trust-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Preview */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover Your Estate Planning Gaps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our personalized quiz helps you understand exactly where you stand and what steps you need to take.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Answer 7 Questions',
                description: 'Quick questions about your family, assets, and goals.'
              },
              {
                step: '2',
                title: 'Get Personalized Insights',
                description: 'Instant analysis of your current estate planning situation.'
              },
              {
                step: '3',
                title: 'Receive Action Plan',
                description: 'Clear next steps tailored to your specific needs.'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" asChild>
              <Link href="/quiz">
                Take the Quiz Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Estate Planning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to protect your family's future and preserve your legacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Will Writing',
                description: 'Legally binding documents to ensure your wishes are followed.',
                price: 'From RM 2,500'
              },
              {
                title: 'Trust Creation',
                description: 'Protect assets and provide for loved ones with strategic trusts.',
                price: 'From RM 6,000'
              },
              {
                title: 'Estate Planning',
                description: 'Comprehensive protection for your entire estate and family.',
                price: 'From RM 12,000'
              },
              {
                title: 'Business Succession',
                description: 'Ensure your business continues smoothly for future generations.',
                price: 'Custom Quote'
              }
            ].map((service, index) => (
              <Card key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-primary-600 font-semibold">{service.price}</div>
                <Button variant="ghost" className="w-full mt-4" asChild>
                  <Link href="/services">
                    Learn More
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from Malaysian families who have protected their futures with our help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ahmad & Family',
                role: 'Young Parents',
                content: 'Finally have peace of mind knowing our children are protected. The process was much simpler than we expected.',
                rating: 5
              },
              {
                name: 'Sarah Tan',
                role: 'Business Owner',
                content: 'The business succession planning saved my company and provided for my family. Professional and thorough.',
                rating: 5
              },
              {
                name: 'Mr. & Mrs. Lim',
                role: 'Retired Couple',
                content: 'Clear guidance that helped us minimize taxes and ensure our assets go to the right people. Highly recommended.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <div className="flex items-center mb-4">
                  {'★'.repeat(testimonial.rating)}
                  <span className="text-gray-400 ml-1">
                    {'★'.repeat(5 - testimonial.rating)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-600 section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Family's Future?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards peace of mind. Get your personalized estate planning roadmap in just 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/quiz">
                Take Free Quiz →
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10" asChild>
              <Link href="/contact">
                Book Consultation
              </Link>
            </Button>
          </div>
          <p className="text-primary-200 mt-6 text-sm">
            No credit card required • 100% confidential • No obligation
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
