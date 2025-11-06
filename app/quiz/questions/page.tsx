"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

const questions = [
  {
    id: 1,
    question: "What keeps you up at night about your family's future?",
    options: [
      { text: "What happens to my children if something happens to me", value: "concerned-parent", persona: "concerned-parent" },
      { text: "My assets being tied up in legal disputes and delays", value: "wealth-builder", persona: "wealth-builder" },
      { text: "Not having enough time to sort this out properly", value: "busy-achiever", persona: "busy-achiever" },
      { text: "Recent life changes have made me rethink everything", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 2,
    question: "How would you describe your current estate planning status?",
    options: [
      { text: "I have young kids and need to protect them urgently", value: "concerned-parent", persona: "concerned-parent" },
      { text: "I'm building wealth and need sophisticated strategies", value: "wealth-builder", persona: "wealth-builder" },
      { text: "I keep postponing because I'm too busy with work", value: "busy-achiever", persona: "busy-achiever" },
      { text: "Major life event just happened (marriage, divorce, baby, etc.)", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 3,
    question: "What's your biggest concern about estate planning?",
    options: [
      { text: "Ensuring my children are cared for by the right guardians", value: "concerned-parent", persona: "concerned-parent" },
      { text: "Protecting my wealth from taxes and maximizing inheritance", value: "wealth-builder", persona: "wealth-builder" },
      { text: "The process taking too long and being complicated", value: "busy-achiever", persona: "busy-achiever" },
      { text: "Starting fresh and getting it right this time", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 4,
    question: "Which best describes your current situation?",
    options: [
      { text: "Parent with minor children (under 18)", value: "concerned-parent", persona: "concerned-parent" },
      { text: "High-net-worth individual or business owner", value: "wealth-builder", persona: "wealth-builder" },
      { text: "Busy professional with limited time", value: "busy-achiever", persona: "busy-achiever" },
      { text: "Going through major life transition", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 5,
    question: "What's stopping you from setting up estate planning right now?",
    options: [
      { text: "Worried about making wrong decisions for my kids' future", value: "concerned-parent", persona: "concerned-parent" },
      { text: "Want to ensure maximum asset protection and efficiency", value: "wealth-builder", persona: "wealth-builder" },
      { text: "Don't have time for lengthy traditional processes", value: "busy-achiever", persona: "busy-achiever" },
      { text: "Need guidance through my new life circumstances", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 6,
    question: "What outcome would give you the most peace of mind?",
    options: [
      { text: "Knowing my children will be protected and cared for", value: "concerned-parent", persona: "concerned-parent" },
      { text: "Wealth preserved and efficiently transferred to next generation", value: "wealth-builder", persona: "wealth-builder" },
      { text: "Getting this done quickly with minimal hassle", value: "busy-achiever", persona: "busy-achiever" },
      { text: "A fresh start with proper protection in place", value: "life-changer", persona: "life-changer" }
    ]
  }
];

export default function QuizQuestionsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      // Calculate result based on answers
      const score = calculateScore(answers);
      router.push(`/quiz/results/${score}`);
    }, 2000);
  };

  const calculateScore = (answers: Record<number, string>) => {
    // Count persona selections
    const personaCounts: Record<string, number> = {
      'concerned-parent': 0,
      'wealth-builder': 0,
      'busy-achiever': 0,
      'life-changer': 0
    };

    Object.values(answers).forEach(answer => {
      if (personaCounts.hasOwnProperty(answer)) {
        personaCounts[answer]++;
      }
    });

    // Find persona with highest count
    let maxCount = 0;
    let winningPersona = 'concerned-parent'; // default

    Object.entries(personaCounts).forEach(([persona, count]) => {
      if (count > maxCount) {
        maxCount = count;
        winningPersona = persona;
      }
    });

    return winningPersona;
  };

  const canProceed = answers[questions[currentQuestion].id];
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm text-gray-600">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <label 
                key={index}
                className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-gray-50 ${
                  answers[questions[currentQuestion].id] === option.value
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${questions[currentQuestion].id}`}
                  value={option.value}
                  checked={answers[questions[currentQuestion].id] === option.value}
                  onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                  className="mr-4 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-gray-700 font-medium">{option.text}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!canProceed || isLoading}
            className="min-w-24"
          >
            {isLoading ? 'Calculating...' : isLastQuestion ? 'Get Results' : 'Next'}
          </Button>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            🔒 Your answers are 100% confidential and secure. We only use this information to provide you with personalized estate planning recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
