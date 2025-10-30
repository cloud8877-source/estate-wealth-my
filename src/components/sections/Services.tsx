import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    {
      icon: DocumentTextIcon,
      title: 'Will Writing',
      description: 'Comprehensive will drafting and legal documentation to ensure your assets are distributed according to your wishes.',
      features: ['Legal Documentation', 'Asset Distribution', 'Executor Appointment'],
      price: 'From RM 500',
      popular: false
    },
    {
      icon: ShieldCheckIcon,
      title: 'Trust Setup',
      description: 'Establish trusts to protect your assets and provide for your loved ones with professional guidance.',
      features: ['Asset Protection', 'Beneficiary Management', 'Tax Optimization'],
      price: 'From RM 1,500',
      popular: true
    },
    {
      icon: ChartBarIcon,
      title: 'Insurance Review',
      description: 'Comprehensive review of your life insurance policies to ensure adequate coverage for your family.',
      features: ['Policy Analysis', 'Coverage Assessment', 'Premium Optimization'],
      price: 'From RM 300',
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="container-21">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-primary-500/20 px-4 py-2 bg-primary-500/10 dark:bg-primary-500/20 mb-6">
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Comprehensive Estate Planning
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Professional services designed to protect your legacy and secure your family's financial future with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`card-21 relative overflow-hidden animate-fade-in-21`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-21-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardContent className="p-8">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 dark:bg-primary-500/20 rounded-2xl mb-6">
                  <service.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                      <svg className="w-4 h-4 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {service.price}
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">
                      One-time fee
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button className="button-21-primary">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-21-primary rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Secure Your Legacy?
            </h3>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards protecting your family's future with our comprehensive estate planning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessment">
                <Button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-xl transition-all duration-200">
                  Start Free Assessment
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-xl transition-all duration-200">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
