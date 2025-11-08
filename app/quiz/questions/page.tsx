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
  },
  {
    id: 7,
    question: "When you think about your assets, what is your primary thought?",
    options: [
      { text: "My children's education and needs must be fully funded.", value: "concerned-parent", persona: "concerned-parent" },
      { text: "How can I protect my business and investments from taxes or lawsuits?", value: "wealth-builder", persona: "wealth-builder" },
      { text: "I just need a simple list of my assets to get this task done and filed away.", value: "busy-achiever", persona: "busy-achiever" },
      { text: "I need to figure out who owns what, now that my life situation has changed.", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 8,
    question: "What's the ideal first step in this planning process for you?",
    options: [
      { text: "A clear explanation of how to appoint a guardian for my children.", value: "concerned-parent", persona: "concerned-parent" },
      { text: "A deep analysis of my financial structure and tax liabilities.", value: "wealth-builder", persona: "wealth-builder" },
      { text: "An online tool I can complete in 20 minutes to see my gaps.", value: "busy-achiever", persona: "busy-achiever" },
      { text: "A simple consultation to understand my new responsibilities.", value: "life-changer", persona: "life-changer" }
    ]
  },
    {
    id: 9,
    question: "What part of your family situation feels most urgent to plan for?",
    options: [
      { text: "My children are minors and depend entirely on me.", value: "concerned-parent", persona: "concerned-parent" },
      { text: "I have multiple businesses or properties that need a clear succession plan.", value: "wealth-builder", persona: "wealth-builder" },
      { text: "I simply haven't done anything, and the unresolved task is bothering me.", value: "busy-achiever", persona: "busy-achiever" },
      { text: "I just got married/divorced/had a baby and my old documents are now useless.", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 10,
    question: "When you hear 'estate planning,' what tool or concept comes to mind first?",
    options: [
      { text: "A trust to protect my children's inheritance until they are adults.", value: "concerned-parent", persona: "concerned-parent" },
      { text: "A holding structure to protect my business and investment portfolio.", value: "wealth-builder", persona: "wealth-builder" },
      { text: "An efficient online platform to get it all done fast.", value: "busy-achiever", persona: "busy-achiever" },
      { text: "A simple will that reflects my new life status.", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 11,
    question: "What event would most likely trigger you to complete your plan?",
    options: [
      { text: "Hearing a sad story about a friend's children after they passed.", value: "concerned-parent", persona: "concerned-parent" },
      { text: "Acquiring a new, significant asset (like a new business or property).", value: "wealth-builder", persona: "wealth-builder" },
      { text: "Realizing it's taking up mental energy not having it done.", value: "busy-achiever", persona: "busy-achiever" },
      { text: "A major change in my marital or family status (birth, death, marriage).", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 12,
    question: "What's your main priority when choosing an executor for your will?",
    options: [
      { text: "Choosing someone who loves my children and shares my values.", value: "concerned-parent", persona: "concerned-parent" },
      { text: "Appointing a professional or corporate trustee to manage complex assets.", value: "wealth-builder", persona: "wealth-builder" },
      { text: "Someone who is organized, efficient, and will settle things quickly.", value: "busy-achiever", persona: "busy-achiever" },
      { text: "Someone who understands my new family structure (e.g., new spouse).", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 13,
    question: "My single biggest fear is...",
    options: [
      { text: "My children not being raised by the person I choose.", value: "concerned-parent", persona: "concerned-parent" },
      { text: "My business failing because there's no clear succession plan.", value: "wealth-builder", persona: "wealth-builder" },
      { text: "My family having to deal with years of frozen accounts and paperwork.", value: "busy-achiever", persona: "busy-achiever" },
      { text: "My old will benefiting the wrong person after my life changed.", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 14,
    question: "What does 'peace of mind' look like to you?",
    options: [
      { text: "Knowing my children's guardianship and financial future are secure.", value: "concerned-parent", persona: "concerned-parent" },
      { text: "Knowing my wealth is structured intelligently for an orderly transfer.", value: "wealth-builder", persona: "wealth-builder" },
      { text: "Having a completed plan, filed away, so I can move on to the next thing.", value: "busy-achiever", persona: "busy-achiever" },
      { text: "Finally having a plan that reflects my current reality.", value: "life-changer", persona: "life-changer" }
    ]
  },
  {
    id: 15,
    question: "What part of the 'paperwork' seems most annoying?",
    options: [
      { text: "Figuring out the legal details of a trust for my kids.", value: "concerned-parent", persona: "concerned-parent" },
      { text: "The complexity of documenting all my different business assets.", value: "wealth-builder", persona: "wealth-builder" },
      { text: "The thought of having to attend multiple, long, in-person meetings.", value: "busy-achiever", persona: "busy-achiever" },
      { text: "Finding all my old documents, which are now outdated.", value: "life-changer", persona: "life-changer" }
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
