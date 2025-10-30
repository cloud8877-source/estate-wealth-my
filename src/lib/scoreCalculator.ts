
import { UserAnswers, ScoreResult } from '../types';
import { MAX_SCORE } from './questions';

export function calculateScore(answers: UserAnswers): ScoreResult {
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const urgencyPercentage = Math.round((totalScore / MAX_SCORE) * 100);
  
  let urgencyLevel: ScoreResult['urgencyLevel'];
  let urgencyColor: ScoreResult['urgencyColor'];
  let recommendations: string[];

  if (urgencyPercentage >= 70) {
    urgencyLevel = 'Critical';
    urgencyColor = 'red';
    recommendations = [
      'Schedule an URGENT consultation with an estate planning professional.',
      'Draft or update your will immediately to protect your loved ones.',
      'Review all insurance policies and beneficiary nominations as a top priority.',
      'Consider setting up a trust for immediate asset protection.',
      'Prepare guardianship documents if you have minor children.',
    ];
  } else if (urgencyPercentage >= 50) {
    urgencyLevel = 'High';
    urgencyColor = 'orange';
    recommendations = [
      'Schedule a consultation within the next month.',
      'Prioritize creating or updating your will.',
      'Review your insurance coverage to ensure it is adequate for your family\'s needs.',
      'Update all beneficiary nominations on EPF, insurance, and other accounts.',
      'Explore trust options for potential tax efficiency and asset management.',
    ];
  } else if (urgencyPercentage >= 30) {
    urgencyLevel = 'Moderate';
    urgencyColor = 'yellow';
    recommendations = [
      'Plan a consultation within the next 3 months to review your situation.',
      'If you have estate planning documents, review them for any needed updates.',
      'Ensure all beneficiaries are up to date.',
      'Start thinking about your long-term wealth transfer goals.',
      'Evaluate your current and future insurance needs.',
    ];
  } else {
    urgencyLevel = 'Low';
    urgencyColor = 'green';
    recommendations = [
      'You are in a good position, but proactive planning is key.',
      'Review your estate plan annually or after major life events (marriage, birth of a child, etc.).',
      'Keep all documents and beneficiary information updated.',
      'Consider advanced planning strategies to optimize your legacy.',
      'Maintain regular check-ins with your estate planner.',
    ];
  }

  return {
    totalScore,
    maxScore: MAX_SCORE,
    urgencyPercentage,
    urgencyLevel,
    urgencyColor,
    recommendations,
  };
}
