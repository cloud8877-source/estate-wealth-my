import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { FAQItem } from '../../types';

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Why do I need a will in Malaysia?',
    answer: 'Without a will, your assets will be distributed according to the Distribution Act 1958, which might not be what you want. This process can be long and costly for your family. A will ensures your wishes are followed and speeds up the process.'
  },
  {
    id: '2',
    question: 'Is estate planning only for the wealthy?',
    answer: 'Not at all. Estate planning is for anyone who has assets (a house, car, savings, EPF) and wants to ensure their loved ones are taken care of. It\'s about protecting your family, regardless of your wealth.'
  },
  {
    id: '3',
    question: 'What is the difference between a will and a trust?',
    answer: 'A will is a document that dictates how your assets are distributed after you pass away. A trust is a legal arrangement that can hold and manage your assets for your beneficiaries both during your lifetime and after. Trusts offer more control and protection.'
  },
  {
    id: '4',
    question: 'How often should I review my estate plan?',
    answer: 'You should review your estate plan every 3-5 years, or after any major life event such as marriage, divorce, the birth of a child, or a significant change in your financial situation.'
  }
];

interface FaqItemComponentProps {
  item: FAQItem;
}

const FaqItemComponent: React.FC<FaqItemComponentProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-primary-200 dark:border-primary-700 py-6">
      <dt>
        <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-start text-left text-primary-600 dark:text-primary-400">
          <span className="text-lg font-medium text-primary-900 dark:text-primary-100">{item.question}</span>
          <span className="ml-6 h-7 flex items-center">
            {isOpen ? <MinusIcon className="h-6 w-6" /> : <PlusIcon className="h-6 w-6" />}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-2 pr-12">
          <p className="text-base text-primary-700 dark:text-primary-300">{item.answer}</p>
        </dd>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-primary-900 sm:text-4xl dark:text-primary-50">
            Frequently Asked Questions
          </h2>
          <dl className="mt-12 space-y-4">
            {faqItems.map((item) => <FaqItemComponent key={item.id} item={item} />)}
          </dl>
        </div>
      </div>
    </section>
  );
}
