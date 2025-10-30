import React from 'react';
import { Testimonial } from '../../types';
import { Card } from '../ui/card';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmad Z.',
    initials: 'AZ',
    role: 'Business Owner, KL',
    content: 'The team at EstateWealthMY made a complex process incredibly simple. I now have peace of mind knowing my family and business are protected. Highly professional and thorough.',
    service: 'Will & Trust Setup',
  },
  {
    id: '2',
    name: 'Puan Siti',
    initials: 'PS',
    role: 'Teacher, Penang',
    content: 'I always thought estate planning was for the very wealthy. They showed me how important it is for everyone. The free assessment was a real eye-opener.',
    service: 'Free Assessment',
  },
  {
    id: '3',
    name: 'Mr. & Mrs. Tan',
    initials: 'T',
    role: 'Retirees, Johor',
    content: 'We had an old will that needed updating. Their advice was practical and tailored to our needs. We feel much more secure about our grandchildren\'s future.',
    service: 'Will Updating',
  },
];

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
    <Card className="p-8 h-full flex flex-col">
        <p className="text-primary-700 dark:text-primary-300 flex-grow">"{testimonial.content}"</p>
        <div className="mt-6 flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-800 dark:bg-primary-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{testimonial.initials}</span>
            </div>
            <div className="ml-4">
                <p className="font-bold text-primary-900 dark:text-primary-100">{testimonial.name}</p>
                <p className="text-sm text-primary-600 dark:text-primary-400">{testimonial.role} | Service: {testimonial.service}</p>
            </div>
        </div>
    </Card>
);

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary-100 dark:bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary-900 sm:text-4xl dark:text-primary-50">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-primary-600 dark:text-primary-300">
            Real stories from families we've helped protect.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
