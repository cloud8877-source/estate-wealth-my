import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white shadow-md dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
                Estate Wealth MY
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive('/') ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive('/services') ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/assessment" 
                className={`hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive('/assessment') ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Assessment
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive('/contact') ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Theme Toggle for Desktop */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700">
              <Link 
                to="/" 
                className={`block py-2 hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive('/') ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`block py-2 hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive('/services') ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/assessment" 
                className={`block py-2 hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive('/assessment') ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Assessment
              </Link>
              <Link 
                to="/contact" 
                className={`block py-2 hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive('/contact') ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
