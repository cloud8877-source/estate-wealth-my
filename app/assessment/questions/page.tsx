"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

const assessmentQuestions = [
  // CATEGORY 1: FAMILY STRUCTURE (10 questions) - Max 20 points
  {
    id: 1,
    category: "Family Structure",
    question: "What is your current marital status?",
    type: "single",
    options: [
      { text: "Single, never married", value: "single", score: 2 },
      { text: "Married", value: "married", score: 2 },
      { text: "Divorced", value: "divorced", score: 1 },
      { text: "Widowed", value: "widowed", score: 1 },
      { text: "Common-law partnership", value: "common-law", score: 2 }
    ]
  },
  {
    id: 2,
    category: "Family Structure",
    question: "Do you have children?",
    type: "single",
    options: [
      { text: "Yes, minor children (under 18)", value: "minor-children", score: 0 },
      { text: "Yes, adult children only", value: "adult-children", score: 2 },
      { text: "No children", value: "no-children", score: 2 },
      { text: "Yes, both minor and adult children", value: "mixed-children", score: 0 }
    ]
  },
  {
    id: 3,
    category: "Family Structure",
    question: "If you have minor children, have you appointed legal guardians in a will?",
    type: "single",
    options: [
      { text: "Yes, formally documented", value: "guardians-documented", score: 2 },
      { text: "Discussed but not documented", value: "guardians-discussed", score: 1 },
      { text: "Not appointed yet", value: "no-guardians", score: 0 },
      { text: "Not applicable (no minor children)", value: "na-guardians", score: 2 }
    ]
  },
  {
    id: 4,
    category: "Family Structure",
    question: "Do you have any special needs dependents?",
    type: "single",
    options: [
      { text: "Yes, with special trust/care plan", value: "special-needs-planned", score: 2 },
      { text: "Yes, but no plan yet", value: "special-needs-unplanned", score: 0 },
      { text: "No special needs dependents", value: "no-special-needs", score: 2 }
    ]
  },
  {
    id: 5,
    category: "Family Structure",
    question: "Do you have aging parents or dependents who rely on you?",
    type: "single",
    options: [
      { text: "Yes, included in estate plan", value: "parents-planned", score: 2 },
      { text: "Yes, but not in estate plan", value: "parents-unplanned", score: 1 },
      { text: "No aging dependents", value: "no-aging-dependents", score: 2 }
    ]
  },
  {
    id: 6,
    category: "Family Structure",
    question: "Is there a prenuptial or postnuptial agreement?",
    type: "single",
    options: [
      { text: "Yes, current and valid", value: "prenup-valid", score: 2 },
      { text: "Yes, but may need updating", value: "prenup-outdated", score: 1 },
      { text: "No agreement", value: "no-prenup", score: 1 },
      { text: "Not applicable", value: "na-prenup", score: 2 }
    ]
  },
  {
    id: 7,
    category: "Family Structure",
    question: "Are there any complex family situations? (blended families, estranged members, etc.)",
    type: "single",
    options: [
      { text: "Yes, addressed in estate plan", value: "complex-addressed", score: 2 },
      { text: "Yes, not yet addressed", value: "complex-unaddressed", score: 0 },
      { text: "No complex situations", value: "no-complex", score: 2 }
    ]
  },
  {
    id: 8,
    category: "Family Structure",
    question: "Have you discussed your estate plan with your family?",
    type: "single",
    options: [
      { text: "Yes, everyone is informed", value: "family-informed", score: 2 },
      { text: "Partially discussed", value: "family-partial", score: 1 },
      { text: "Not discussed yet", value: "family-not-informed", score: 0 }
    ]
  },
  {
    id: 9,
    category: "Family Structure",
    question: "Do you have pets that need care provisions?",
    type: "single",
    options: [
      { text: "Yes, care plan documented", value: "pets-planned", score: 2 },
      { text: "Yes, but no plan", value: "pets-unplanned", score: 1 },
      { text: "No pets", value: "no-pets", score: 2 }
    ]
  },
  {
    id: 10,
    category: "Family Structure",
    question: "What is your age range?",
    type: "single",
    options: [
      { text: "Under 35", value: "under-35", score: 1 },
      { text: "35-50", value: "35-50", score: 2 },
      { text: "51-65", value: "51-65", score: 2 },
      { text: "Over 65", value: "over-65", score: 1 }
    ]
  },

  // CATEGORY 2: ASSET INVENTORY (12 questions) - Max 25 points
  {
    id: 11,
    category: "Asset Inventory",
    question: "What is your estimated total net worth?",
    type: "single",
    options: [
      { text: "Under RM 500,000", value: "under-500k", score: 2 },
      { text: "RM 500,000 - RM 1 million", value: "500k-1m", score: 2 },
      { text: "RM 1-2 million", value: "1-2m", score: 2 },
      { text: "RM 2-5 million", value: "2-5m", score: 2 },
      { text: "Over RM 5 million", value: "over-5m", score: 2 }
    ]
  },
  {
    id: 12,
    category: "Asset Inventory",
    question: "Do you own your primary residence?",
    type: "single",
    options: [
      { text: "Yes, fully owned", value: "home-owned", score: 2 },
      { text: "Yes, with mortgage", value: "home-mortgage", score: 2 },
      { text: "No, renting", value: "renting", score: 2 }
    ]
  },
  {
    id: 13,
    category: "Asset Inventory",
    question: "Do you own investment properties?",
    type: "single",
    options: [
      { text: "Yes, multiple properties", value: "multiple-properties", score: 2 },
      { text: "Yes, one property", value: "one-property", score: 2 },
      { text: "No investment properties", value: "no-investment-properties", score: 2 }
    ]
  },
  {
    id: 14,
    category: "Asset Inventory",
    question: "Do you have retirement savings? (EPF, PRS, private pensions)",
    type: "single",
    options: [
      { text: "Yes, substantial (over RM 500k)", value: "high-retirement", score: 2 },
      { text: "Yes, moderate (RM 100k-500k)", value: "medium-retirement", score: 2 },
      { text: "Yes, minimal (under RM 100k)", value: "low-retirement", score: 2 },
      { text: "No retirement savings", value: "no-retirement", score: 1 }
    ]
  },
  {
    id: 15,
    category: "Asset Inventory",
    question: "Have you updated your EPF beneficiary nominations?",
    type: "single",
    options: [
      { text: "Yes, within last 2 years", value: "epf-current", score: 2 },
      { text: "Yes, but over 2 years ago", value: "epf-outdated", score: 1 },
      { text: "Never updated/Not sure", value: "epf-never", score: 0 }
    ]
  },
  {
    id: 16,
    category: "Asset Inventory",
    question: "Do you have investment accounts? (stocks, unit trusts, crypto)",
    type: "single",
    options: [
      { text: "Yes, well-documented", value: "investments-documented", score: 2 },
      { text: "Yes, but not documented", value: "investments-undocumented", score: 1 },
      { text: "No investments", value: "no-investments", score: 2 }
    ]
  },
  {
    id: 17,
    category: "Asset Inventory",
    question: "Do you own a business?",
    type: "single",
    options: [
      { text: "Yes, sole proprietor", value: "sole-proprietor", score: 2 },
      { text: "Yes, with partners/shareholders", value: "business-partners", score: 2 },
      { text: "No business ownership", value: "no-business", score: 2 }
    ]
  },
  {
    id: 18,
    category: "Asset Inventory",
    question: "What is the approximate value of your business (if applicable)?",
    type: "single",
    options: [
      { text: "Under RM 1 million", value: "business-under-1m", score: 2 },
      { text: "RM 1-5 million", value: "business-1-5m", score: 2 },
      { text: "Over RM 5 million", value: "business-over-5m", score: 2 },
      { text: "Not applicable", value: "business-na", score: 2 }
    ]
  },
  {
    id: 19,
    category: "Asset Inventory",
    question: "Do you have valuable personal assets? (jewelry, art, collectibles, vehicles)",
    type: "single",
    options: [
      { text: "Yes, documented and insured", value: "valuables-documented", score: 2 },
      { text: "Yes, but not documented", value: "valuables-undocumented", score: 1 },
      { text: "No significant valuables", value: "no-valuables", score: 2 }
    ]
  },
  {
    id: 20,
    category: "Asset Inventory",
    question: "Do you have overseas assets or bank accounts?",
    type: "single",
    options: [
      { text: "Yes, included in estate plan", value: "overseas-planned", score: 2 },
      { text: "Yes, not in estate plan", value: "overseas-unplanned", score: 1 },
      { text: "No overseas assets", value: "no-overseas", score: 2 }
    ]
  },
  {
    id: 21,
    category: "Asset Inventory",
    question: "Do you have outstanding debts or liabilities?",
    type: "single",
    options: [
      { text: "No significant debts", value: "no-debts", score: 2 },
      { text: "Manageable debts (mortgage, car loan)", value: "manageable-debts", score: 2 },
      { text: "Significant debts needing planning", value: "high-debts", score: 1 }
    ]
  },
  {
    id: 22,
    category: "Asset Inventory",
    question: "Have you created a comprehensive asset inventory list?",
    type: "single",
    options: [
      { text: "Yes, current and detailed", value: "inventory-complete", score: 2 },
      { text: "Partial inventory", value: "inventory-partial", score: 1 },
      { text: "No inventory yet", value: "no-inventory", score: 0 }
    ]
  },

  // CATEGORY 3: PROTECTION GAPS (10 questions) - Max 30 points
  {
    id: 23,
    category: "Protection Gaps",
    question: "Do you have a valid will?",
    type: "single",
    options: [
      { text: "Yes, created/updated within last 2 years", value: "will-current", score: 3 },
      { text: "Yes, but 2-5 years old", value: "will-medium", score: 2 },
      { text: "Yes, but over 5 years old", value: "will-old", score: 1 },
      { text: "No will", value: "no-will", score: 0 }
    ]
  },
  {
    id: 24,
    category: "Protection Gaps",
    question: "Have you appointed an executor for your will?",
    type: "single",
    options: [
      { text: "Yes, professional executor", value: "executor-professional", score: 3 },
      { text: "Yes, family member", value: "executor-family", score: 3 },
      { text: "Yes, but not sure if still suitable", value: "executor-uncertain", score: 2 },
      { text: "No executor appointed", value: "no-executor", score: 0 }
    ]
  },
  {
    id: 25,
    category: "Protection Gaps",
    question: "Do you have a living trust?",
    type: "single",
    options: [
      { text: "Yes, active and funded", value: "trust-active", score: 3 },
      { text: "Yes, but needs funding/updating", value: "trust-needs-update", score: 2 },
      { text: "Considering but not set up", value: "trust-considering", score: 1 },
      { text: "No trust", value: "no-trust", score: 0 }
    ]
  },
  {
    id: 26,
    category: "Protection Gaps",
    question: "Do you have a Lasting Power of Attorney (LPA)?",
    type: "single",
    options: [
      { text: "Yes, for both property and personal welfare", value: "lpa-complete", score: 3 },
      { text: "Yes, but only one type", value: "lpa-partial", score: 2 },
      { text: "No LPA", value: "no-lpa", score: 0 }
    ]
  },
  {
    id: 27,
    category: "Protection Gaps",
    question: "Have you prepared advance medical directives/living will?",
    type: "single",
    options: [
      { text: "Yes, documented", value: "medical-directive-yes", score: 3 },
      { text: "Discussed but not documented", value: "medical-directive-discussed", score: 1 },
      { text: "No medical directives", value: "no-medical-directive", score: 0 }
    ]
  },
  {
    id: 28,
    category: "Protection Gaps",
    question: "Are all your insurance policies' beneficiaries up to date?",
    type: "single",
    options: [
      { text: "Yes, all current", value: "insurance-current", score: 3 },
      { text: "Some need updating", value: "insurance-partial", score: 1 },
      { text: "Not sure/Never updated", value: "insurance-never", score: 0 }
    ]
  },
  {
    id: 29,
    category: "Protection Gaps",
    question: "If you own a business, do you have a succession plan?",
    type: "single",
    options: [
      { text: "Yes, comprehensive plan", value: "succession-yes", score: 3 },
      { text: "Informal plan only", value: "succession-informal", score: 1 },
      { text: "No succession plan", value: "no-succession", score: 0 },
      { text: "Not applicable (no business)", value: "succession-na", score: 3 }
    ]
  },
  {
    id: 30,
    category: "Protection Gaps",
    question: "Do you have buy-sell agreements with business partners?",
    type: "single",
    options: [
      { text: "Yes, current agreement", value: "buysell-yes", score: 3 },
      { text: "Outdated agreement", value: "buysell-outdated", score: 1 },
      { text: "No agreement", value: "no-buysell", score: 0 },
      { text: "Not applicable (no partners)", value: "buysell-na", score: 3 }
    ]
  },
  {
    id: 31,
    category: "Protection Gaps",
    question: "Are your digital assets (passwords, crypto, online accounts) documented?",
    type: "single",
    options: [
      { text: "Yes, secure documentation exists", value: "digital-documented", score: 3 },
      { text: "Partial documentation", value: "digital-partial", score: 2 },
      { text: "No documentation", value: "no-digital", score: 0 }
    ]
  },
  {
    id: 32,
    category: "Protection Gaps",
    question: "Where are your important documents stored?",
    type: "single",
    options: [
      { text: "Safe deposit box or professional storage", value: "storage-secure", score: 3 },
      { text: "Home safe with family informed", value: "storage-home", score: 2 },
      { text: "Various locations/not organized", value: "storage-disorganized", score: 0 }
    ]
  },

  // CATEGORY 4: RISK FACTORS (10 questions) - Max 15 points
  {
    id: 33,
    category: "Risk Factors",
    question: "What is your life insurance coverage?",
    type: "single",
    options: [
      { text: "RM 1 million or more", value: "insurance-high", score: 2 },
      { text: "RM 500k - RM 1 million", value: "insurance-medium", score: 1 },
      { text: "Under RM 500k", value: "insurance-low", score: 0 },
      { text: "No life insurance", value: "no-insurance", score: 0 }
    ]
  },
  {
    id: 34,
    category: "Risk Factors",
    question: "Is your life insurance coverage adequate for your family's needs?",
    type: "single",
    options: [
      { text: "Yes, professionally assessed", value: "coverage-adequate", score: 2 },
      { text: "Probably, but not assessed recently", value: "coverage-uncertain", score: 1 },
      { text: "Insufficient coverage", value: "coverage-insufficient", score: 0 }
    ]
  },
  {
    id: 35,
    category: "Risk Factors",
    question: "Do you have critical illness coverage?",
    type: "single",
    options: [
      { text: "Yes, adequate coverage", value: "ci-yes", score: 1 },
      { text: "Limited coverage", value: "ci-limited", score: 0 },
      { text: "No critical illness coverage", value: "no-ci", score: 0 }
    ]
  },
  {
    id: 36,
    category: "Risk Factors",
    question: "Do you have health insurance?",
    type: "single",
    options: [
      { text: "Yes, comprehensive", value: "health-comprehensive", score: 1 },
      { text: "Basic coverage only", value: "health-basic", score: 1 },
      { text: "No health insurance", value: "no-health", score: 0 }
    ]
  },
  {
    id: 37,
    category: "Risk Factors",
    question: "Are you involved in high-risk activities or profession?",
    type: "single",
    options: [
      { text: "Yes, with appropriate coverage", value: "high-risk-covered", score: 2 },
      { text: "Yes, without specific coverage", value: "high-risk-uncovered", score: 0 },
      { text: "No high-risk activities", value: "no-high-risk", score: 2 }
    ]
  },
  {
    id: 38,
    category: "Risk Factors",
    question: "Do you have existing health conditions?",
    type: "single",
    options: [
      { text: "Yes, managed with coverage", value: "health-condition-managed", score: 1 },
      { text: "Yes, without adequate coverage", value: "health-condition-unmanaged", score: 0 },
      { text: "No significant health issues", value: "no-health-conditions", score: 2 }
    ]
  },
  {
    id: 39,
    category: "Risk Factors",
    question: "Is there a history of serious illness in your family?",
    type: "single",
    options: [
      { text: "Yes, planned for", value: "family-history-planned", score: 1 },
      { text: "Yes, not planned for", value: "family-history-unplanned", score: 0 },
      { text: "No significant family history", value: "no-family-history", score: 2 }
    ]
  },
  {
    id: 40,
    category: "Risk Factors",
    question: "Are you the primary income earner?",
    type: "single",
    options: [
      { text: "Yes, with adequate protection", value: "primary-earner-protected", score: 2 },
      { text: "Yes, protection needs review", value: "primary-earner-unprotected", score: 0 },
      { text: "No, dual income household", value: "dual-income", score: 1 }
    ]
  },
  {
    id: 41,
    category: "Risk Factors",
    question: "Do you have emergency funds (6+ months expenses)?",
    type: "single",
    options: [
      { text: "Yes, 6+ months", value: "emergency-adequate", score: 2 },
      { text: "3-6 months", value: "emergency-moderate", score: 1 },
      { text: "Less than 3 months", value: "emergency-insufficient", score: 0 }
    ]
  },
  {
    id: 42,
    category: "Risk Factors",
    question: "Are you exposed to potential lawsuits or liabilities in your profession?",
    type: "single",
    options: [
      { text: "Yes, with liability insurance", value: "liability-covered", score: 1 },
      { text: "Yes, without coverage", value: "liability-uncovered", score: 0 },
      { text: "Low risk profession", value: "low-liability-risk", score: 1 }
    ]
  },

  // CATEGORY 5: PRIORITIES & GOALS (8 questions) - Max 10 points
  {
    id: 43,
    category: "Priorities & Goals",
    question: "What is your primary estate planning goal?",
    type: "single",
    options: [
      { text: "Protect my family's financial future", value: "goal-protect-family", score: 1 },
      { text: "Minimize taxes and maximize inheritance", value: "goal-tax-efficiency", score: 1 },
      { text: "Ensure business continuity", value: "goal-business", score: 1 },
      { text: "Charitable giving", value: "goal-charity", score: 1 },
      { text: "Wealth transfer to next generation", value: "goal-wealth-transfer", score: 1 }
    ]
  },
  {
    id: 44,
    category: "Priorities & Goals",
    question: "When would you like to complete your estate planning?",
    type: "single",
    options: [
      { text: "Immediately (within 1 month)", value: "timeline-immediate", score: 1 },
      { text: "Within 3 months", value: "timeline-3months", score: 1 },
      { text: "Within 6 months", value: "timeline-6months", score: 1 },
      { text: "Within a year", value: "timeline-year", score: 1 }
    ]
  },
  {
    id: 45,
    category: "Priorities & Goals",
    question: "How much do you know about estate planning?",
    type: "single",
    options: [
      { text: "Very knowledgeable", value: "knowledge-high", score: 1 },
      { text: "Some knowledge", value: "knowledge-medium", score: 1 },
      { text: "Limited knowledge", value: "knowledge-low", score: 1 },
      { text: "No knowledge", value: "knowledge-none", score: 1 }
    ]
  },
  {
    id: 46,
    category: "Priorities & Goals",
    question: "How involved do you want to be in the planning process?",
    type: "single",
    options: [
      { text: "Very involved, I want to understand everything", value: "involvement-high", score: 1 },
      { text: "Moderately involved, guide me through key decisions", value: "involvement-medium", score: 1 },
      { text: "Minimal involvement, I trust the experts", value: "involvement-low", score: 1 }
    ]
  },
  {
    id: 47,
    category: "Priorities & Goals",
    question: "What's your budget range for comprehensive estate planning?",
    type: "single",
    options: [
      { text: "Under RM 5,000", value: "budget-under-5k", score: 1 },
      { text: "RM 5,000 - RM 15,000", value: "budget-5k-15k", score: 1 },
      { text: "RM 15,000 - RM 30,000", value: "budget-15k-30k", score: 1 },
      { text: "Over RM 30,000", value: "budget-over-30k", score: 1 },
      { text: "Unsure/Need consultation", value: "budget-unsure", score: 1 }
    ]
  },
  {
    id: 48,
    category: "Priorities & Goals",
    question: "Have you experienced a recent major life event?",
    type: "single",
    options: [
      { text: "Yes, marriage/partnership", value: "life-event-marriage", score: 1 },
      { text: "Yes, birth of child", value: "life-event-baby", score: 1 },
      { text: "Yes, divorce/separation", value: "life-event-divorce", score: 1 },
      { text: "Yes, death of family member", value: "life-event-death", score: 1 },
      { text: "Yes, major financial change", value: "life-event-financial", score: 1 },
      { text: "No recent major events", value: "no-life-event", score: 1 }
    ]
  },
  {
    id: 49,
    category: "Priorities & Goals",
    question: "Do you plan to leave an inheritance to charity?",
    type: "single",
    options: [
      { text: "Yes, specific charities identified", value: "charity-planned", score: 1 },
      { text: "Considering it", value: "charity-considering", score: 1 },
      { text: "No charitable plans", value: "no-charity", score: 1 }
    ]
  },
  {
    id: 50,
    category: "Priorities & Goals",
    question: "How important is privacy in your estate distribution?",
    type: "single",
    options: [
      { text: "Very important (prefer trusts for privacy)", value: "privacy-high", score: 1 },
      { text: "Somewhat important", value: "privacy-medium", score: 1 },
      { text: "Not a major concern", value: "privacy-low", score: 1 }
    ]
  }
];

export default function AssessmentQuestionsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

  const handleAnswer = (questionId: number, value: string, isMultiple: boolean = false) => {
    if (isMultiple) {
      const currentAnswers = answers[questionId] || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(a => a !== value)
        : [...currentAnswers, value];
      
      setAnswers(prev => ({ ...prev, [questionId]: newAnswers }));
    } else {
      setAnswers(prev => ({ ...prev, [questionId]: [value] }));
    }
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
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
    
    // Simulate processing time
    setTimeout(() => {
      const assessment = calculateAssessment(answers);
      router.push(`/assessment/results/${assessment}`);
    }, 3000);
  };

  const calculateAssessment = (answers: Record<number, string[]>) => {
    let totalScore = 0;
    const categoryScores = {
      'Family Structure': 0,
      'Asset Inventory': 0,
      'Protection Gaps': 0,
      'Risk Factors': 0,
      'Priorities & Goals': 0
    };

    // Calculate total score by finding each question's selected option and adding its score
    Object.entries(answers).forEach(([questionIdStr, selectedValues]) => {
      const questionId = parseInt(questionIdStr);
      const question = assessmentQuestions.find(q => q.id === questionId);

      if (question && selectedValues.length > 0) {
        const selectedValue = selectedValues[0]; // single choice
        const selectedOption = question.options.find(opt => opt.value === selectedValue);

        if (selectedOption && selectedOption.score !== undefined) {
          totalScore += selectedOption.score;
          if (question.category && categoryScores[question.category as keyof typeof categoryScores] !== undefined) {
            categoryScores[question.category as keyof typeof categoryScores] += selectedOption.score;
          }
        }
      }
    });

    // Determine assessment level based on score
    // 80-100: Comprehensive planning needed
    // 60-79: Detailed review needed
    // 40-59: Focused improvements needed
    // 0-39: Urgent action required
    let level: string;
    if (totalScore >= 80) level = 'comprehensive';
    else if (totalScore >= 60) level = 'detailed';
    else if (totalScore >= 40) level = 'focused';
    else level = 'urgent';

    return level;
  };

  const canProceed = answers[assessmentQuestions[currentQuestion].id]?.length > 0;
  const isLastQuestion = currentQuestion === assessmentQuestions.length - 1;
  const question = assessmentQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-primary-900">Estate Planning Assessment</h1>
            <span className="text-sm text-gray-600">
              {currentQuestion + 1} of {assessmentQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-primary-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
              {question.category}
            </span>
          </div>
          
          <h2 className="text-2xl font-bold text-primary-900 mb-6">
            {question.question}
          </h2>
          
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = answers[question.id]?.includes(option.value);
              const isMultiple = question.type === "multiple";
              
              return (
                <label 
                  key={index}
                  className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-gray-50 ${
                    isSelected
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200'
                  }`}
                >
                  <input
                    type={isMultiple ? "checkbox" : "radio"}
                    name={`question-${question.id}`}
                    value={option.value}
                    checked={isSelected}
                    onChange={() => handleAnswer(question.id, option.value, isMultiple)}
                    className="mt-1 mr-4 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-gray-700 font-medium leading-relaxed">{option.text}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </Button>
          
          <div className="text-center">
            <Button
              onClick={handleNext}
              disabled={!canProceed || isLoading}
              className="min-w-32"
            >
              {isLoading ? 'Processing...' : isLastQuestion ? 'Get Assessment' : 'Next →'}
            </Button>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            🔒 Your information is completely confidential and secure. We use this detailed assessment to provide you with highly personalized estate planning recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
