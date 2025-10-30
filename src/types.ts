
import React from 'react';

// Question types for score app
export interface QuestionOption {
  label: string;
  score: number;
}

export interface Question {
  id: string;
  question: string;
  description?: string;
  options: QuestionOption[];
}

export interface UserAnswers {
  [questionId: string]: number;
}

export interface ScoreResult {
  totalScore: number;
  maxScore: number;
  urgencyPercentage: number;
  urgencyLevel: 'Critical' | 'High' | 'Moderate' | 'Low';
  urgencyColor: 'red' | 'orange' | 'yellow' | 'green';
  recommendations: string[];
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  role: string;
  content: string;
  service: string;
}

// FAQ types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}