import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    services: [
      { name: 'Will Writing', href: '/services/will-writing' },
      { name: 'Trust Creation', href: '/services/trust-creation' },
      { name: 'Estate Planning', href: '/services/estate-planning' },
      { name: 'Inheritance Advisory', href: '/services/inheritance-advisory' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    contact: [
      { name: 'info@estatewealthmy.com', href: 'mailto:info@estatewealthmy.com' },
      { name: '+60 3-1234 5678', href: 'tel:+60312345678' },
      { name: 'Kuala Lumpur, Malaysia', href: '#' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              Estate Wealth MY
            </Link>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Professional estate planning services for Malaysian non-Muslim families. 
              Protect your family's future with our expert guidance and personalized solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              {/* Social media links would go here */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Estate Wealth MY. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-300">
              <span>Licensed Estate Planners</span>
              <span>•</span>
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
