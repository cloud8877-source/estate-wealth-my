
import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'age',
    question: 'What is your age range?',
    description: 'Age is a key factor in estate planning urgency.',
    options: [
      { label: 'Under 30', score: 5 },
      { label: '30-45', score: 10 },
      { label: '46-60', score: 20 },
      { label: 'Over 60', score: 30 },
    ],
  },
  {
    id: 'dependents',
    question: 'Do you have dependents (e.g., minor children, elderly parents)?',
    description: 'Dependents significantly increase the need for estate planning.',
    options: [
      { label: 'No dependents', score: 0 },
      { label: '1-2 dependents', score: 15 },
      { label: '3+ dependents', score: 25 },
    ],
  },
  {
    id: 'assets',
    question: 'What is your approximate total asset value?',
    description: 'Including property, savings, investments, and insurance.',
    options: [
      { label: 'Under RM 100,000', score: 5 },
      { label: 'RM 100,000 - RM 500,000', score: 15 },
      { label: 'RM 500,000 - RM 1,000,000', score: 25 },
      { label: 'Over RM 1,000,000', score: 30 },
    ],
  },
  {
    id: 'will',
    question: 'Do you currently have a valid will?',
    description: "A will is the foundation of any estate plan. A high percentage of Malaysians don't have one.",
    options: [
      { label: 'Yes, updated within last 2 years', score: 0 },
      { label: 'Yes, but it\'s more than 2 years old', score: 20 },
      { label: 'No, I don\'t have a will', score: 30 },
    ],
  },
  {
    id: 'insurance',
    question: 'Do you have life or TPD (Total Permanent Disability) insurance?',
    description: 'Adequate coverage protects your family from financial hardship.',
    options: [
      { label: 'Yes, coverage exceeds 10x my annual income', score: 0 },
      { label: 'Yes, but I\'m unsure if it\'s adequate', score: 15 },
      { label: 'Yes, but coverage is less than 5x my annual income', score: 20 },
      { label: 'No, I do not have life insurance', score: 25 },
    ],
  },
  {
    id: 'beneficiaries',
    question: 'Have you nominated beneficiaries for your EPF and insurance policies?',
    description: 'Proper nomination ensures your assets go to the right people without delay.',
    options: [
      { label: 'Yes, all are nominated and updated', score: 0 },
      { label: 'Yes, but they haven\'t been updated in years', score: 15 },
      { label: 'Only some of my accounts have nominations', score: 20 },
      { label: 'No, I have not made any nominations', score: 25 },
    ],
  },
];

// Maximum possible score
export const MAX_SCORE = questions.reduce(
  (sum, q) => sum + Math.max(...q.options.map(o => o.score)),
  0
);
