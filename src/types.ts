export type ExamType = 'NEET' | 'JEE_MAIN' | 'JEE_ADVANCED' | 'CUET' | 'OLYMPIAD' | 'FOUNDATION' | 'BOARDS';

export type TestCategory =
  | 'sunday_major'
  | 'ten_day_cycle'
  | 'minor'
  | 'major'
  | 'part'
  | 'full'
  | 'neet_mock'
  | 'custom'
  | 'dpp';

export type TestLevel = 'Level 1' | 'Level 2' | 'Level 3' | 'Level 4' | 'Mixed' | 'Adaptive';

export type ScheduleCycle =
  | '1st Sunday'
  | '2nd Sunday'
  | '3rd Sunday'
  | '4th Sunday'
  | '5th Sunday'
  | 'Day 10 Cycle'
  | 'Day 20 Cycle'
  | 'Day 30 Cycle'
  | 'Day 40 Cycle'
  | 'On Demand';

export type DurationCategory = '15_mins' | '30_mins' | '1_hour' | 'full_mock';

export type QuestionType =
  | 'Standard MCQ'
  | 'Assertion-Reason'
  | 'Statement I & II'
  | 'Match the Columns'
  | 'Numerical Value';

export interface Question {
  id: string;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics';
  chapter: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questionType?: QuestionType;
  questionText: string;
  image?: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  pyqYear?: number;
  tags?: string[];
}

export interface TestItem {
  id: string;
  title: string;
  category: TestCategory;
  exam: ExamType;
  level: TestLevel;
  levelLabel?: string;
  scheduleCycle?: ScheduleCycle;
  durationCategory: DurationCategory;
  syllabus: string;
  totalQuestions: number;
  durationMinutes: number; // 15, 30, 60, 180, 200
  totalMarks: number;
  negativeMarking: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Mixed';
  scheduledDate?: string;
  cbtMode: boolean;
  features: string[];
  questions: Question[];
  enrolledStudentsCount?: number;
  avgScore?: number;
}

export interface TargetBatchPackage {
  id: string;
  title: string;
  packageType:
    | 'Sunday Major Test Series'
    | '10-Day Cycle Series'
    | 'High Yield 80/20 (HYTS)'
    | 'Target 360/360 Biology Series'
    | 'Classroom Pen & Paper (CTS)'
    | 'Custom Test Generator Pack';
  targetExam: ExamType;
  duration: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  enrolledCount: number;
  badge?: string;
  testCountSummary: string; // e.g. "40 Total Tests (10 Sunday Majors + 20 10-Day Cycles + 10 Full Mocks)"
  features: string[];
  deliverables: {
    testsIncluded: string;
    durationOptions: string; // "15m, 30m, 1hr, 200m CBT"
    solutionSupport: string;
    analytics: string;
    omrSupport: string;
  };
}

export interface CustomTestConfig {
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics' | 'Combined PCB';
  chapter: string;
  topic: string;
  difficulty: TestLevel;
  durationMinutes: number; // 15, 30, 60
  questionCount: number; // 15, 30, 45, 60
  questionStyles: QuestionType[];
  selectedFeatures: string[];
}

export interface Flashcard {
  id: string;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics';
  category: 'Formulas' | 'Reactions' | 'Diagrams' | 'Concepts';
  topic: string;
  frontTitle: string;
  frontContent: string;
  frontFormula?: string;
  backExplanation: string;
  backKeyPoints: string[];
  mnemonic?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface MindMapNode {
  id: string;
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics';
  description: string;
  children?: {
    title: string;
    details: string[];
    subTopics?: string[];
  }[];
}

export interface BookItem {
  id: string;
  title: string;
  category: 'NCERT notes' | 'Revision notes' | 'Formula books' | 'eBooks' | 'PDFs';
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics' | 'All';
  pages: number;
  size: string;
  description: string;
  downloadUrl?: string;
  rating: number;
  highlights: string[];
}

export interface PYQItem {
  id: string;
  exam: 'NEET' | 'JEE Main' | 'JEE Advanced';
  year: number;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics';
  chapter: string;
  topic: string;
  question: Question;
  frequency: string;
  conceptWeightage: string;
}

export interface RankerStory {
  id: string;
  name: string;
  exam: 'NEET' | 'JEE';
  air: number;
  score: string;
  college: string;
  image: string;
  quote: string;
  state: string;
  year: number;
  category: string;
  keyStrategy: string;
}

export interface CollegeInfo {
  id: string;
  name: string;
  type: 'AIIMS' | 'Government' | 'Private' | 'IIT / NIT';
  location: string;
  totalSeats: number;
  closingRankGen: number;
  closingRankOBC: number;
  closingRankSC: number;
  closingRankST: number;
  approxFeePerYear: string;
  nirfRank: number;
}

export interface UserTestResult {
  testId: string;
  testTitle: string;
  score: number;
  totalMarks: number;
  correctAnswers: number;
  wrongAnswers: number;
  unattempted: number;
  timeSpentSeconds: number;
  accuracyPercentage: number;
  predictedAIR: number;
  nationalPercentile: number;
  subjectBreakdown: {
    subject: string;
    correct: number;
    wrong: number;
    unattempted: number;
    score: number;
  }[];
  weakChapters: string[];
  strongChapters: string[];
  revisionSuggestions: string[];
  answers: Record<number, number>; // questionIdx -> selectedOption
}
