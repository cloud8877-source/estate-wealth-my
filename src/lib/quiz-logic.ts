import personas from '@/data/personas.json'

export interface QuizAnswers {
  q1?: string
  q2?: string
  q3?: string
  q4?: string
  q5?: string
  q6?: string
  q7?: string
}

export function calculatePersona(answers: QuizAnswers): string {
  const scores = {
    A: 0, // Overwhelmed Parent
    B: 0, // Procrastinating Professional
    C: 0, // Business Owner
    D: 0, // Family Conflict Avoider
    E: 0, // Knowledge Seeker
  }

  // Q1: Family Status
  if (answers.q1 === 'parent-young') scores.A += 10
  if (answers.q1 === 'parent-adult') { scores.A += 5; scores.D += 5 }
  if (answers.q1 === 'business-owner') scores.C += 10
  if (answers.q1 === 'retired') scores.E += 5

  // Q2: Primary Concern (HIGHEST WEIGHT)
  if (answers.q2 === 'protect-children') scores.A += 15
  if (answers.q2 === 'business-survival') scores.C += 15
  if (answers.q2 === 'avoid-conflicts') scores.D += 15
  if (answers.q2 === 'minimize-taxes') scores.E += 10
  if (answers.q2 === 'right-people') scores.D += 10
  if (answers.q2 === 'not-sure') scores.B += 10

  // Q3: Current Status
  if (answers.q3 === 'nothing') scores.B += 10
  if (answers.q3 === 'self-will') scores.B += 5
  if (answers.q3 === 'lawyer-will') scores.E += 5
  if (answers.q3 === 'will-trusts') scores.E += 10
  if (answers.q3 === 'comprehensive') scores.E += 15

  // Q4: Emotional Driver (HIGH WEIGHT)
  if (answers.q4 === 'terrified') scores.A += 15
  if (answers.q4 === 'frustrated') scores.B += 15
  if (answers.q4 === 'confused') scores.B += 10
  if (answers.q4 === 'ex-partner') scores.D += 10
  if (answers.q4 === 'motivated') scores.E += 10

  // Q5: Asset Complexity
  if (answers.q5 === 'simple') scores.B += 5
  if (answers.q5 === 'moderate') scores.E += 5
  if (answers.q5 === 'complex') scores.C += 10

  // Q6: Timeline
  if (answers.q6 === 'urgent') { scores.A += 5; scores.C += 5 }
  if (answers.q6 === 'soon') scores.B += 5
  if (answers.q6 === 'planning') scores.E += 5
  if (answers.q6 === 'researching') scores.B += 5

  // Q7: Budget
  if (answers.q7 === 'affordable') scores.B += 5
  if (answers.q7 === 'quality') Object.keys(scores).forEach(k => scores[k as keyof typeof scores] += 3)
  if (answers.q7 === 'no-concern') { scores.C += 5; scores.E += 5 }

  // Determine winner
  const maxScore = Math.max(...Object.values(scores))
  const winner = Object.keys(scores).find(k => scores[k as keyof typeof scores] === maxScore)

  // Map to persona slug
  const personaMap: Record<string, string> = {
    A: 'overwhelmed-parent',
    B: 'procrastinating-professional',
    C: 'business-owner',
    D: 'family-conflict-avoider',
    E: 'knowledge-seeker',
  }

  // Tie-breaker: Default to B (most common)
  return personaMap[winner!] || 'procrastinating-professional'
}

export function getPersonaBySlug(slug: string) {
  return personas.personas.find(persona => persona.slug === slug)
}

export function getAllPersonas() {
  return personas.personas
}

export function validateAnswers(answers: QuizAnswers): boolean {
  const requiredQuestions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7']
  return requiredQuestions.every(q => answers[q as keyof QuizAnswers])
}
