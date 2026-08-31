import {
  TestItem,
  TargetBatchPackage,
  Flashcard,
  MindMapNode,
  BookItem,
  PYQItem,
  RankerStory,
  CollegeInfo,
  Question
} from '../types';
import { BIOLOGY_38_CHAPTERS, generateChapterTestItem } from './biologyQuestionBank';

export { BIOLOGY_38_CHAPTERS, generateChapterTestItem };


export const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 'q1',
    subject: 'Biology',
    chapter: 'Human Physiology',
    topic: 'Neural Control and Coordination',
    difficulty: 'Medium',
    questionType: 'Standard MCQ',
    questionText: 'During the transmission of nerve impulse through a nerve fibre, the potential on the inner side of the axonal membrane has which type of electric charge?',
    options: [
      'First positive, then negative and continue to be negative',
      'First negative, then positive and continue to be positive',
      'First positive, then negative and again back to positive',
      'First negative, then positive and again back to negative'
    ],
    correctAnswer: 3,
    explanation: 'During resting state, axonal membrane is negatively charged inside (-70mV). Upon depolarization due to Na+ influx, it becomes positive (+30mV). During repolarization due to K+ efflux, it returns to negative resting potential (-70mV).',
    pyqYear: 2023,
    tags: ['Nerve Impulse', 'Resting Potential', 'Action Potential']
  },
  {
    id: 'q2',
    subject: 'Physics',
    chapter: 'Electrodynamics',
    topic: 'Current Electricity & Kirchhoff Laws',
    difficulty: 'Medium',
    questionType: 'Numerical Value',
    questionText: 'A potentiometer wire of length 100 cm has a resistance of 10 Ω. It is connected in series with a resistance of 40 Ω and a battery of EMF 2 V. The potential gradient along the wire is:',
    options: [
      '0.4 V/m',
      '0.2 V/m',
      '0.04 V/m',
      '4.0 V/m'
    ],
    correctAnswer: 0,
    explanation: 'Total resistance R_total = 10 + 40 = 50 Ω. Current I = V / R_total = 2 / 50 = 0.04 A. Voltage across wire V_wire = I * R_wire = 0.04 * 10 = 0.4 V. Wire length = 1 m. Potential Gradient = V_wire / L = 0.4 V / 1 m = 0.4 V/m.',
    pyqYear: 2024,
    tags: ['Potentiometer', 'Current Electricity', 'Potential Gradient']
  },
  {
    id: 'q3',
    subject: 'Chemistry',
    chapter: 'Organic Chemistry',
    topic: 'Aldehydes, Ketones and Carboxylic Acids',
    difficulty: 'Hard',
    questionType: 'Standard MCQ',
    questionText: 'Which of the following compounds will give a positive Iodoform test upon reaction with I2 and NaOH?',
    options: [
      'Benzophenone (C6H5-CO-C6H5)',
      '3-Pentanone (CH3-CH2-CO-CH2-CH3)',
      'Acetophenone (C6H5-CO-CH3)',
      'Benzaldehyde (C6H5-CHO)'
    ],
    correctAnswer: 2,
    explanation: 'The Iodoform test is given by compounds containing the CH3-C=O (methyl ketone) group or CH3-CH(OH)- group. Acetophenone contains C6H5-CO-CH3 with a methyl keto group, forming yellow CHI3 precipitate.',
    pyqYear: 2023,
    tags: ['Iodoform Test', 'Carbonyl Compounds', 'Named Reactions']
  },
  {
    id: 'q4',
    subject: 'Biology',
    chapter: 'Genetics and Evolution',
    topic: 'Molecular Basis of Inheritance',
    difficulty: 'Easy',
    questionType: 'Statement I & II',
    questionText: 'Given below are two statements:\nStatement I: The coding strand has the same polarity and base sequence as mRNA, except T is replaced by U.\nStatement II: RNA polymerase catalyzes transcription in the 3\' to 5\' direction.\nChoose the correct answer:',
    options: [
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct',
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect'
    ],
    correctAnswer: 0,
    explanation: 'Statement I is correct: coding strand sequence is identical to mRNA with T in place of U. Statement II is incorrect: RNA polymerase catalyzes polymerization only in 5\' to 3\' direction.',
    pyqYear: 2024,
    tags: ['Transcription', 'Central Dogma', 'RNA Polymerase']
  },
  {
    id: 'q5',
    subject: 'Physics',
    chapter: 'Modern Physics',
    topic: 'Photoelectric Effect',
    difficulty: 'Easy',
    questionType: 'Standard MCQ',
    questionText: 'When light of frequency 2ν₀ (where ν₀ is threshold frequency) is incident on a metal plate, the maximum velocity of electrons emitted is v₁. When the frequency of incident radiation is increased to 5ν₀, the maximum velocity of electrons emitted is v₂. The ratio v₁/v₂ is:',
    options: [
      '1 : 2',
      '1 : 4',
      '1 : √2',
      '4 : 1'
    ],
    correctAnswer: 0,
    explanation: 'By Einstein\'s equation: 1/2 m v₁² = h(2ν₀ - ν₀) = hν₀. For 5ν₀: 1/2 m v₂² = h(5ν₀ - ν₀) = 4hν₀. Dividing gives (v₁/v₂)² = 1/4 => v₁/v₂ = 1/2.',
    pyqYear: 2021,
    tags: ['Photoelectric Effect', 'Work Function', 'Threshold Frequency']
  },
  {
    id: 'q6',
    subject: 'Chemistry',
    chapter: 'Physical Chemistry',
    topic: 'Chemical Kinetics',
    difficulty: 'Medium',
    questionType: 'Assertion-Reason',
    questionText: 'Assertion (A): For a first order reaction, the half-life period (t1/2) is independent of the initial concentration of reactants.\nReason (R): For a first order reaction, rate = k[A] and t1/2 = 0.693 / k.\nChoose the correct option:',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    correctAnswer: 0,
    explanation: 'For a first order reaction, integrated rate equation yields t1/2 = ln(2)/k = 0.693/k, which does not contain the initial concentration term [A]0.',
    pyqYear: 2023,
    tags: ['Chemical Kinetics', 'Half-life', 'First Order']
  },
  {
    id: 'q7',
    subject: 'Biology',
    chapter: 'Cell Biology & Biomolecules',
    topic: 'Cell Division - Meiosis',
    difficulty: 'Medium',
    questionType: 'Match the Columns',
    questionText: 'Match List I with List II:\n(A) Pachytene -> (I) Dissolution of synaptonemal complex\n(B) Diplotene -> (II) Crossing over & Recombination\n(C) Diakinesis -> (III) Synapsis & Bivalent formation\n(D) Zygotene -> (IV) Terminalization of chiasmata',
    options: [
      'A-(II), B-(I), C-(IV), D-(III)',
      'A-(III), B-(I), C-(IV), D-(II)',
      'A-(II), B-(IV), C-(I), D-(III)',
      'A-(I), B-(II), C-(III), D-(IV)'
    ],
    correctAnswer: 0,
    explanation: 'Zygotene involves synapsis (pairing of homologous chromosomes). Pachytene involves crossing over mediated by recombinase. Diplotene is marked by dissolution of synaptonemal complex and X-shaped chiasmata. Diakinesis is marked by terminalization of chiasmata.',
    pyqYear: 2024,
    tags: ['Meiosis', 'Prophase I', 'Crossing Over']
  },
  {
    id: 'q8',
    subject: 'Physics',
    chapter: 'Ray Optics and Optical Instruments',
    topic: 'Total Internal Reflection & Prisms',
    difficulty: 'Hard',
    questionType: 'Standard MCQ',
    questionText: 'A ray of light is incident at an angle of 60° on one face of a prism with refracting angle A = 30°. The ray emerges normally from the other face. The refractive index of the material of the prism is:',
    options: [
      '√3',
      '1.5',
      '√2',
      '2.0'
    ],
    correctAnswer: 0,
    explanation: 'Since the ray emerges normally, angle of emergence e = 0° and r2 = 0°. Thus r1 = A - r2 = 30° - 0° = 30°. By Snell\'s Law at first surface: μ = sin(i) / sin(r1) = sin(60°) / sin(30°) = (√3 / 2) / (1 / 2) = √3 ≈ 1.732.',
    pyqYear: 2023,
    tags: ['Ray Optics', 'Prism Formula', 'Snell Law']
  }
];

export const TEST_SERIES_DATA: TestItem[] = [
  // ==========================================
  // 1. SUNDAY MAJOR SERIES (LEVELS 1 TO 4 PROGRESSION - 45 Qs PER SUBJECT)
  // ==========================================
  {
    id: 'test-sunday-major-01',
    title: '1st Sunday Major 1 (Level 1: Core NCERT Foundations)',
    category: 'sunday_major',
    exam: 'NEET',
    level: 'Level 1',
    levelLabel: 'Level 1: Core NCERT Foundation',
    scheduleCycle: '1st Sunday',
    durationCategory: 'full_mock',
    syllabus: 'Class 11 Term 1 Core (Physics: Mechanics [45 Qs], Chemistry: Physical & Inorganic [45 Qs], Botany: Cell & Plant [45 Qs], Zoology: Biomolecules & Animal [45 Qs])',
    totalQuestions: 200,
    durationMinutes: 200,
    totalMarks: 720,
    negativeMarking: '+4 for correct, -1 for incorrect (Attempt 180 Qs as per NTA Section A/B rules)',
    difficulty: 'Easy',
    scheduledDate: '1st Sunday (Aug 24, 2026)',
    cbtMode: true,
    features: [
      '1st Sunday Progressive Major Test',
      '45 Questions each in Physics, Chemistry, Botany & Zoology',
      '100% Verbatim NCERT Core Questions',
      'NTA Section A (35 Qs) & Section B (15 Qs) Format',
      'National Percentile & AIR Rank Predictor'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 64200,
    avgScore: 512
  },
  {
    id: 'test-sunday-major-02',
    title: '2nd Sunday Major 2 (Level 2: Application & Moderate Traps)',
    category: 'sunday_major',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: Advanced Application & Traps',
    scheduleCycle: '2nd Sunday',
    durationCategory: 'full_mock',
    syllabus: 'Class 11 Term 2 + Class 12 Unit 1 (Physics: Electrodynamics [45 Qs], Chemistry: Organic Reactions [45 Qs], Botany: Genetics & Biotech [45 Qs], Zoology: Human Reproduction [45 Qs])',
    totalQuestions: 200,
    durationMinutes: 200,
    totalMarks: 720,
    negativeMarking: '+4 for correct, -1 for incorrect (Attempt 180 Qs)',
    difficulty: 'Medium',
    scheduledDate: '2nd Sunday (Aug 31, 2026)',
    cbtMode: true,
    features: [
      '2nd Sunday Progressive Major Test',
      '45 Questions each in Physics, Chemistry, Botany & Zoology',
      'Statement I & II and Assertion-Reason Traps',
      'All India Rank & State Quota Benchmarking',
      'Sub-Topic Weak Area Diagnostic Map'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 71800,
    avgScore: 488
  },
  {
    id: 'test-sunday-major-03',
    title: '3rd Sunday Major 3 (Level 3: Rank Booster / Hard Multi-Chapter)',
    category: 'sunday_major',
    exam: 'NEET',
    level: 'Level 3',
    levelLabel: 'Level 3: AIR Top 100 Rank Booster',
    scheduleCycle: '3rd Sunday',
    durationCategory: 'full_mock',
    syllabus: 'Heavyweight Multi-Chapters (Physics: Optics & Modern [45 Qs], Chemistry: Coordination & Electro [45 Qs], Botany: Ecology & Physiology [45 Qs], Zoology: Human Physiology Systems [45 Qs])',
    totalQuestions: 200,
    durationMinutes: 200,
    totalMarks: 720,
    negativeMarking: '+4 for correct, -1 for incorrect (Attempt 180 Qs)',
    difficulty: 'Hard',
    scheduledDate: '3rd Sunday (Sep 07, 2026)',
    cbtMode: true,
    features: [
      '3rd Sunday Progressive Major Test',
      '45 Questions each in Physics, Chemistry, Botany & Zoology',
      'Challenging Multi-Layered Numerical & Reasoning Problems',
      'AIIMS / Premier Institute Benchmark Level',
      'Instant Speed & Accuracy Heatmap'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 83500,
    avgScore: 462
  },
  {
    id: 'test-sunday-major-04',
    title: '4th Sunday Major 4 (Level 4: Grand Full Syllabus NTA CBT Simulator)',
    category: 'sunday_major',
    exam: 'NEET',
    level: 'Level 4',
    levelLabel: 'Level 4: Grand Exam Simulation',
    scheduleCycle: '4th Sunday',
    durationCategory: 'full_mock',
    syllabus: '100% Complete NEET-UG Syllabus (Physics [45 Qs], Chemistry [45 Qs], Botany [45 Qs], Zoology [45 Qs])',
    totalQuestions: 200,
    durationMinutes: 200,
    totalMarks: 720,
    negativeMarking: '+4 for correct, -1 for incorrect (Attempt any 180 of 200)',
    difficulty: 'Mixed',
    scheduledDate: '4th Sunday (Sep 14, 2026)',
    cbtMode: true,
    features: [
      '4th Sunday Grand Milestone Simulation',
      'Full-Screen NTA CBT Exam Interface',
      'Real-Time Normalized Percentile Calculation',
      'Medical College Seat Allotment Probability Matrix',
      'Complete Chapter-by-Chapter Error Audit'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 112400,
    avgScore: 535
  },
  {
    id: 'test-sunday-major-05',
    title: '5th Sunday Major 5 (Level 4: AIIMS Ranker Grand Mock Test)',
    category: 'sunday_major',
    exam: 'NEET',
    level: 'Level 4',
    levelLabel: 'Level 4: AIIMS Ranker Benchmark',
    scheduleCycle: '5th Sunday',
    durationCategory: 'full_mock',
    syllabus: '100% Complete Full Syllabus with High-Yield NCERT Diagram & Experimental Questions (45 Qs per subject)',
    totalQuestions: 200,
    durationMinutes: 200,
    totalMarks: 720,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    scheduledDate: '5th Sunday (Sep 21, 2026)',
    cbtMode: true,
    features: [
      '5th Sunday Grand Final Challenger',
      '45 Questions each covering all subtopics',
      'Experimental Skill Questions as per 2026 NTA Notification',
      'National Leaderboard & Top 100 AIR Certificate'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 96000,
    avgScore: 520
  },

  // ==========================================
  // 2. 10-DAY CYCLIC TESTS (15 MINS, 30 MINS, 1 HR DRILLS - 45 Qs UNIT TESTS)
  // ==========================================
  {
    id: 'test-cycle-10-sprint',
    title: 'Day 10 Rapid Sprint Test: Kinematics & Cell Cycle',
    category: 'ten_day_cycle',
    exam: 'NEET',
    level: 'Level 1',
    levelLabel: 'Level 1: 15-Min Rapid Recall',
    scheduleCycle: 'Day 10 Cycle',
    durationCategory: '15_mins',
    syllabus: 'Physics (Motion in Straight Line & Vectors) + Biology (Cell Cycle & Cell Division)',
    totalQuestions: 15,
    durationMinutes: 15,
    totalMarks: 60,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Easy',
    scheduledDate: 'Day 10 (Sep 03, 2026)',
    cbtMode: true,
    features: [
      '15-Minute Ultra Fast Recall Sprint',
      '15 High-Frequency MCQs (60 Marks)',
      '1-Minute per question speed pacing drill',
      'Instant Scorecard & Time-per-question analysis'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 38400,
    avgScore: 48
  },
  {
    id: 'test-cycle-10-mastery',
    title: 'Day 10 Chapter Mastery Test: Mechanics & Cell Biology',
    category: 'ten_day_cycle',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 30-Min Chapter Drill',
    scheduleCycle: 'Day 10 Cycle',
    durationCategory: '30_mins',
    syllabus: 'Laws of Motion, Work Energy Power & Cell: Unit of Life + Biomolecules',
    totalQuestions: 30,
    durationMinutes: 30,
    totalMarks: 120,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    scheduledDate: 'Day 10 (Sep 03, 2026)',
    cbtMode: true,
    features: [
      '30-Minute High-Yield Chapter Test',
      '30 Curated MCQs with Assertion-Reason',
      'Instant weak area tagging',
      'Verified NCERT Step Solutions'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 42100,
    avgScore: 94
  },
  {
    id: 'test-cycle-20-unit',
    title: 'Day 20 Part Syllabus Test (PST-01): Physical Chemistry & Plant Physiology',
    category: 'ten_day_cycle',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 1-Hour 45-Question Unit Assessment',
    scheduleCycle: 'Day 20 Cycle',
    durationCategory: '1_hour',
    syllabus: 'Solutions, Chemical Kinetics, Electrochemistry + Photosynthesis & Respiration in Plants (45 Questions covering all subtopics)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    scheduledDate: 'Day 20 (Sep 13, 2026)',
    cbtMode: true,
    features: [
      '1-Hour Comprehensive Unit Test (60 Mins)',
      '45 NTA Standard Questions covering all unit subtopics (180 Marks)',
      'Multi-concept numericals & formula drills',
      'Simulated national percentile ranking'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 49800,
    avgScore: 142
  },
  {
    id: 'test-cycle-30-part',
    title: 'Day 30 Multi-Unit Part Test (PST-02): Organic Chemistry & Genetics',
    category: 'ten_day_cycle',
    exam: 'NEET',
    level: 'Level 3',
    levelLabel: 'Level 3: 1-Hour Multi-Unit Part Mock',
    scheduleCycle: 'Day 30 Cycle',
    durationCategory: '1_hour',
    syllabus: 'Aldehydes, Ketones, Amines + Principles of Inheritance & Molecular Basis (45 Questions covering reaction mechanisms & pedigree)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    scheduledDate: 'Day 30 (Sep 23, 2026)',
    cbtMode: true,
    features: [
      '1-Hour Advanced Part Mock (60 Mins)',
      '45 High-Yield Questions (180 Marks)',
      'NCERT Line-by-Line Examiner Traps',
      'AI Error Log & Weak Spot Diagnosis'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 54300,
    avgScore: 138
  },
  {
    id: 'test-cycle-40-booster',
    title: 'Day 40 High-Yield Booster: Electrodynamics & Biotechnology',
    category: 'ten_day_cycle',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 30-Min Rapid Booster',
    scheduleCycle: 'Day 40 Cycle',
    durationCategory: '30_mins',
    syllabus: 'Current Electricity, Moving Charges & Magnetism + Biotechnology Principles & Applications',
    totalQuestions: 30,
    durationMinutes: 30,
    totalMarks: 120,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    scheduledDate: 'Day 40 (Oct 03, 2026)',
    cbtMode: true,
    features: [
      '30-Minute Speed & Accuracy Drill',
      '30 High-Probability NTA Questions',
      'Instant audio and text explanations',
      'AIR Rank prediction'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 36700,
    avgScore: 98
  },

  // ==========================================
  // 3. RAPID 15-MIN, 30-MIN & 1-HOUR (45 Qs) SECTIONAL TESTS
  // ==========================================
  {
    id: 'test-rapid-15-organic',
    title: '15-Min Sprint: Organic Chemistry Named Reactions',
    category: 'minor',
    exam: 'NEET',
    level: 'Level 1',
    levelLabel: 'Level 1: 15-Min Sprint',
    scheduleCycle: 'On Demand',
    durationCategory: '15_mins',
    syllabus: 'Aldol, Cannizzaro, Sandmeyer, Reimer-Tiemann, Kolbe & Gabriel Phthalimide Reactions',
    totalQuestions: 15,
    durationMinutes: 15,
    totalMarks: 60,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Easy',
    cbtMode: true,
    features: [
      '15 Questions in 15 Minutes',
      'Direct Reaction Mechanism Recall',
      'Zero Fluff, 100% High Yield',
      'Instant Answer Key & Audio Hint'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 29500,
    avgScore: 50
  },
  {
    id: 'test-rapid-30-optics',
    title: '30-Min Drill: Ray Optics & Wave Optics Numerical Mastery',
    category: 'minor',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 30-Min Drill',
    scheduleCycle: 'On Demand',
    durationCategory: '30_mins',
    syllabus: 'Refraction through Prisms, Lens Maker Formula, Compound Microscope & YDSE Interference',
    totalQuestions: 30,
    durationMinutes: 30,
    totalMarks: 120,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: [
      '30 Questions in 30 Minutes',
      'Numerical Calculation & Sign Convention Checks',
      'Detailed Step-by-Step Derivations',
      'Speed Benchmarking vs Toppers'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 33100,
    avgScore: 88
  },
  {
    id: 'test-1hr-physics-full-unit',
    title: '1-Hour 45-Question Sectional Drill: Modern Physics & Semiconductor Devices',
    category: 'part',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 1-Hour 45 Qs Drill',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Dual Nature of Matter, Atoms (Bohr Model), Nuclei (Radioactivity) & Semiconductor Logic Gates (45 Questions covering all subtopics)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: [
      '45 Questions in 60 Minutes (1 Hour)',
      '100% NCERT Formula & Graph Based',
      'Full subtopic coverage (Photoelectric, De Broglie, Bohr, Logic Gates)',
      'Instant Performance Analytics'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 47200,
    avgScore: 146
  },
  // ==========================================
  // 3B. CHAPTER-WISE GRAND PRACTICE TESTS (LEGACY HIGH-DENSITY DRILLS)
  // ==========================================
  {
    id: 'test-vectors-book',
    title: 'Vectors Chapter Grand Test (143 Qs)',
    category: 'minor',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: Physics Drill',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Vectors: Fundamentals, Resolution, Dot & Cross Product, Relative Velocity & Equilibrium',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['143 Question Practice Bank', '45 Selected for CBT Drill', 'Dot & Cross Product Traps', 'Instant Solutions'],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 41200,
    avgScore: 132
  },
  {
    id: 'test-units-book',
    title: 'Units & Dimensions Chapter Practice Test (142 Qs)',
    category: 'minor',
    exam: 'NEET',
    level: 'Level 1',
    levelLabel: 'Level 1: Physics Drill',
    scheduleCycle: 'On Demand',
    durationCategory: '30_mins',
    syllabus: 'Units, Dimensional Analysis, Error Propagation & Vernier/Screw Gauge',
    totalQuestions: 30,
    durationMinutes: 30,
    totalMarks: 120,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Easy',
    cbtMode: true,
    features: ['142 Question Practice Bank', '30 Selected for CBT Drill', 'Dimensional Analysis Mastery'],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 38900,
    avgScore: 96
  },
  {
    id: 'test-motion-book',
    title: 'Motion in One Dimension Chapter Practice Test (86 Qs)',
    category: 'minor',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: Physics Drill',
    scheduleCycle: 'On Demand',
    durationCategory: '30_mins',
    syllabus: 'Kinematics Equations, Graphs (s-t, v-t), Free Fall & Relative Motion in 1D',
    totalQuestions: 30,
    durationMinutes: 30,
    totalMarks: 120,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['86 Question Practice Bank', 'Kinematics Graph Specialists', 'Free Fall Traps'],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 35600,
    avgScore: 92
  },
  {
    id: 'test-electrostatics-book',
    title: 'Electrostatics Chapter Practice Test (88 Qs)',
    category: 'minor',
    exam: 'NEET',
    level: 'Level 3',
    levelLabel: 'Level 3: Physics Drill',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Coulomb Law, Electric Field, Gauss Law, Electric Potential & Capacitors',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['88 Question Practice Bank', 'Gauss Theorem & Capacitance', 'Full-Screen CBT Mode'],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 44300,
    avgScore: 126
  },
  {
    id: 'test-gravitation-book',
    title: 'Gravitation Chapter Practice Test (125 Qs)',
    category: 'minor',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: Physics Drill',
    scheduleCycle: 'On Demand',
    durationCategory: '30_mins',
    syllabus: 'Universal Gravitation, Acceleration due to Gravity variations, Kepler Laws & Escape Velocity',
    totalQuestions: 30,
    durationMinutes: 30,
    totalMarks: 120,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['125 Question Practice Bank', 'Satellite Orbital Motion', 'Kepler Law Calculations'],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 37800,
    avgScore: 94
  },
  {
    id: 'test-thermodynamics-book',
    title: 'Thermodynamics Chapter Practice Test (153 Qs)',
    category: 'minor',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: Physics Drill',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'First Law of Thermodynamics, PV Indicator Diagrams, Carnot Engine & Efficiency',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['153 Question Practice Bank', 'PV Diagram Indicator Calculations', 'Carnot Cycle Drills'],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 46100,
    avgScore: 134
  },
  {
    id: 'test-magnetism-book',
    title: 'Magnetism Chapter Practice Test (177 Qs)',
    category: 'minor',
    exam: 'NEET',
    level: 'Level 3',
    levelLabel: 'Level 3: Physics Drill',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Biot-Savart Law, Ampere Circuital Law, Magnetic Dipole, Earth Magnetism & Cyclotron',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['177 Question Practice Bank', 'Moving Charges & Magnetic Properties', 'All India Benchmarks'],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 42900,
    avgScore: 128
  },
  {
    id: 'test-hyts-01',
    title: 'High Yield Test Series (HYTS): 80/20 Core Chapters',
    category: 'full',
    exam: 'NEET',
    level: 'Level 3',
    levelLabel: 'Level 3: HYTS 80/20 Rule',
    scheduleCycle: 'On Demand',
    durationCategory: 'full_mock',
    syllabus: 'High-Weightage Chapters in Mechanics, Genetics, Thermodynamics & Organic Chemistry (45 Qs per subject)',
    totalQuestions: 200,
    durationMinutes: 200,
    totalMarks: 720,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    scheduledDate: '2026-08-28',
    cbtMode: true,
    features: [
      'Focus on top 20% syllabus that yields 80% marks',
      'NCERT line-by-line concept coverage',
      'Detailed text and step explanations',
      'All India Rank & percentile snapshot'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 76500,
    avgScore: 558
  },
  {
    id: 'test-bio-360',
    title: 'Target 360/360 Biology 45-Q Specialist Test: Full Botany & Zoology',
    category: 'major',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: NCERT Line-by-Line',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: '100% NCERT Class 11 & 12 Biology (Botany + Zoology) with 45 High-Yield Assertion-Reason and Statement Questions',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    scheduledDate: '2026-08-30',
    cbtMode: true,
    features: [
      'Strictly NCERT Word-by-Word Questions',
      'Assertion-Reason & Statement-based questions',
      'Diagram-based traps from NCERT',
      'Instant audio and text explanations'
    ],
    questions: SAMPLE_QUESTIONS,
    enrolledStudentsCount: 94000,
    avgScore: 162
  },

  // ==========================================
  // 4. 10 NCERT BIOLOGY UNIT TESTS (45 Qs • 1 HOUR • 180 MARKS)
  // ==========================================
  {
    id: 'test-unit-01-diversity',
    title: 'Unit 1 Test: Diversity in the Living World (Ch 1 to 4)',
    category: 'part',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 1-Hour Unit Mock • Class 11',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'The Living World, Biological Classification, Plant Kingdom, Animal Kingdom (45 Questions covering all subtopics)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect, 0 unattempted',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 Questions from Unit 1', 'Class 11 NCERT Line-by-Line', 'Full-Screen CBT Simulation', 'Detailed Explanations'],
    questions: BIOLOGY_38_CHAPTERS[1]?.sampleQuestions || SAMPLE_QUESTIONS,
    enrolledStudentsCount: 51200,
    avgScore: 136
  },
  {
    id: 'test-unit-02-structure',
    title: 'Unit 2 Test: Structural Organisation in Plants & Animals (Ch 5 to 7)',
    category: 'part',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 1-Hour Unit Mock • Class 11',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Morphology of Flowering Plants, Anatomy of Flowering Plants, Structural Organisation in Animals (45 Questions)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 Questions covering Anatomy & Morphology', 'Tissue systems & Floral diagrams', 'Full-Screen CBT Mode'],
    questions: BIOLOGY_38_CHAPTERS[4]?.sampleQuestions || SAMPLE_QUESTIONS,
    enrolledStudentsCount: 48900,
    avgScore: 130
  },
  {
    id: 'test-unit-03-cell',
    title: 'Unit 3 Test: Cell: Structure and Functions (Ch 8 to 10)',
    category: 'part',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 1-Hour Unit Mock • Class 11',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Cell: The Unit of Life, Biomolecules, Cell Cycle and Cell Division (45 Questions)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 Questions from Cell Biology & Biomolecules', 'Enzyme kinetics & Meiosis stages', 'Instant Performance Analytics'],
    questions: BIOLOGY_38_CHAPTERS[7]?.sampleQuestions || SAMPLE_QUESTIONS,
    enrolledStudentsCount: 62400,
    avgScore: 144
  },
  {
    id: 'test-unit-04-plantphys',
    title: 'Unit 4 Test: Plant Physiology (Ch 11 to 15)',
    category: 'part',
    exam: 'NEET',
    level: 'Level 3',
    levelLabel: 'Level 3: 1-Hour Unit Mock • Class 11',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Transport in Plants, Mineral Nutrition, Photosynthesis, Respiration in Plants, Plant Growth & Development (45 Questions)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 High-Yield Questions in Plant Physiology', 'C3/C4 cycles, Glycolysis, ETS, Hormones', 'Full-Screen CBT Simulator'],
    questions: BIOLOGY_38_CHAPTERS[12]?.sampleQuestions || SAMPLE_QUESTIONS,
    enrolledStudentsCount: 57800,
    avgScore: 128
  },
  {
    id: 'test-unit-05-humanphys',
    title: 'Unit 5 Test: Human Physiology (Ch 16 to 22)',
    category: 'part',
    exam: 'NEET',
    level: 'Level 3',
    levelLabel: 'Level 3: 1-Hour Unit Mock • Class 11',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Digestion, Respiration, Circulation, Excretion, Locomotion, Neural & Chemical Coordination (45 Questions)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 Questions from all 7 Human Physiology chapters', 'ECG, Nephron, Reflexes & Endocrine pathways', 'Instant All-India Rank'],
    questions: BIOLOGY_38_CHAPTERS[17]?.sampleQuestions || SAMPLE_QUESTIONS,
    enrolledStudentsCount: 71200,
    avgScore: 138
  },
  {
    id: 'test-unit-06-reproduction',
    title: 'Unit 6 Test: Reproduction (Ch 1 to 4 Class 12)',
    category: 'part',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 1-Hour Unit Mock • Class 12',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Reproduction in Organisms, Sexual Reproduction in Flowering Plants, Human Reproduction, Reproductive Health (45 Questions)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 Questions covering Embryology, Menstrual Cycle & ART', 'Double fertilization & Hormonal feedback', 'Full-Screen CBT Simulator'],
    questions: BIOLOGY_38_CHAPTERS[23]?.sampleQuestions || SAMPLE_QUESTIONS,
    enrolledStudentsCount: 68500,
    avgScore: 146
  },
  {
    id: 'test-unit-07-genetics',
    title: 'Unit 7 Test: Genetics & Evolution (Ch 5 to 7 Class 12)',
    category: 'part',
    exam: 'NEET',
    level: 'Level 3',
    levelLabel: 'Level 3: 1-Hour Unit Mock • Class 12',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Principles of Inheritance, Molecular Basis of Inheritance, Evolution (45 Questions)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Hard',
    cbtMode: true,
    features: ['45 Questions covering Lac Operon, Pedigree & Genetic Code', 'Heavyweight 20% Biology marks coverage', 'AIIMS Ranker Level'],
    questions: BIOLOGY_38_CHAPTERS[27]?.sampleQuestions || SAMPLE_QUESTIONS,
    enrolledStudentsCount: 82400,
    avgScore: 132
  },
  {
    id: 'test-unit-08-welfare',
    title: 'Unit 8 Test: Biology in Human Welfare (Ch 8 to 10 Class 12)',
    category: 'part',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 1-Hour Unit Mock • Class 12',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Human Health & Disease, Strategies for Food Enhancement, Microbes in Human Welfare (45 Questions)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 Questions on Immunity, MOET, Microbes & Biogas', 'Antibodies, Life cycles & Fermentation', 'Full-Screen CBT Interface'],
    questions: BIOLOGY_38_CHAPTERS[29]?.sampleQuestions || SAMPLE_QUESTIONS,
    enrolledStudentsCount: 54100,
    avgScore: 142
  },
  {
    id: 'test-unit-09-biotech',
    title: 'Unit 9 Test: Biotechnology (Ch 11 & 12 Class 12)',
    category: 'part',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 1-Hour Unit Mock • Class 12',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Biotechnology: Principles and Processes, Biotechnology and its Applications (45 Questions)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 Questions on Restriction Enzymes, Vectors, PCR & GMOs', 'Bt cotton, Humulin & Gene therapy', 'Step-by-step solutions'],
    questions: BIOLOGY_38_CHAPTERS[32]?.sampleQuestions || SAMPLE_QUESTIONS,
    enrolledStudentsCount: 59300,
    avgScore: 140
  },
  {
    id: 'test-unit-10-ecology',
    title: 'Unit 10 Test: Ecology & Environment (Ch 13 to 16 Class 12)',
    category: 'part',
    exam: 'NEET',
    level: 'Level 2',
    levelLabel: 'Level 2: 1-Hour Unit Mock • Class 12',
    scheduleCycle: 'On Demand',
    durationCategory: '1_hour',
    syllabus: 'Organisms & Populations, Ecosystem, Biodiversity & Conservation, Environmental Issues (45 Questions)',
    totalQuestions: 45,
    durationMinutes: 60,
    totalMarks: 180,
    negativeMarking: '+4 for correct, -1 for incorrect',
    difficulty: 'Medium',
    cbtMode: true,
    features: ['45 Questions on Population models, Pyramids & Conservation', 'Verhulst-Pearl, Evil Quartet & Biomagnification', 'Full-Screen CBT Mode'],
    questions: BIOLOGY_38_CHAPTERS[34]?.sampleQuestions || SAMPLE_QUESTIONS,
    enrolledStudentsCount: 63700,
    avgScore: 145
  },

  // ==========================================
  // 5. ALL 38 NCERT BIOLOGY CHAPTER TESTS (30-MIN DRILLS)
  // ==========================================
  ...BIOLOGY_38_CHAPTERS.map(ch => generateChapterTestItem(ch, '30_mins'))
];


export const TARGET_BATCH_PACKAGES: TargetBatchPackage[] = [
  {
    id: 'pkg-sunday-majors',
    title: 'Target Batch 2026: Sunday Major Test Series (Levels 1 to 4)',
    packageType: 'Sunday Major Test Series',
    targetExam: 'NEET',
    duration: 'Full Academic Year (52 Scheduled Sunday CBT Mocks)',
    price: '₹3,999',
    originalPrice: '₹7,999',
    discount: '50% OFF',
    rating: 4.98,
    enrolledCount: 68400,
    badge: 'Flagship Sunday Series',
    testCountSummary: '52 Full Sunday Major Tests (Levels 1 to 4 Progression)',
    features: [
      '1st Sunday (Level 1: Core NCERT Foundations - 45 Qs/subject)',
      '2nd Sunday (Level 2: Advanced Application & Moderate Traps)',
      '3rd Sunday (Level 3: All-India Rank Booster)',
      '4th Sunday (Level 4: Grand NTA Full Simulation)',
      'Real-Time National Percentile & Medical College Predictor',
      'Step-by-Step NTA Verified Text & Audio Solutions'
    ],
    deliverables: {
      testsIncluded: '52 Sunday Major Full-Length CBT Tests (720 Marks)',
      durationOptions: '200 Mins (Standard NTA Exam Mode)',
      solutionSupport: '100% Verified Step-by-Step Solutions with NCERT Page Tags',
      analytics: 'AI Error Log, Weak Sub-Topic Heatmaps & National AIR',
      omrSupport: 'Instant Online Full-Screen CBT + Downloadable Printable OMR'
    }
  },
  {
    id: 'pkg-10-day-cyclic',
    title: '10-Day Interval Cyclic Part & Minor Test Series',
    packageType: '10-Day Cycle Series',
    targetExam: 'NEET',
    duration: 'Cyclic Cadence (Day 10, Day 20, Day 30, Day 40)',
    price: '₹2,499',
    originalPrice: '₹4,999',
    discount: '50% OFF',
    rating: 4.95,
    enrolledCount: 41200,
    badge: '15m / 30m / 1hr Speed Booster',
    testCountSummary: '48 Cyclic Tests (15-min Sprints, 30-min Drills & 1-hr 45-Q Unit Tests)',
    features: [
      'Day 10 Cycle: 15-min Rapid Sprints (15 Qs) & 30-min Chapter Mastery (30 Qs)',
      'Day 20 Cycle: 1-hour Part Syllabus Tests (45 Qs covering all subtopics)',
      'Day 30 Cycle: 1-hour Multi-Unit Part Assessments (45 Qs)',
      'Day 40 Cycle: 30-min High-Yield Booster Drills',
      'Rapid retention pacing to eliminate forgetfulness curve',
      'Customized micro-target question generator included'
    ],
    deliverables: {
      testsIncluded: '48 Cyclic Tests (12 Sprints + 24 Topic Tests + 12 Unit Tests)',
      durationOptions: '15 Mins, 30 Mins, 1 Hour Modes',
      solutionSupport: 'Instant Explanations & High-Yield Reagents/Formula Hints',
      analytics: 'Time-Per-Question Speed Diagnostics (< 45s target)',
      omrSupport: 'Full-Screen Speed CBT Interface'
    }
  },
  {
    id: 'pkg-custom-generator',
    title: 'Target Batch: "Select What You Get" Custom Test Generator',
    packageType: 'Custom Test Generator Pack',
    targetExam: 'NEET',
    duration: 'Unlimited On-Demand Custom Tests for 2026',
    price: '₹1,999',
    originalPrice: '₹3,999',
    discount: '50% OFF',
    rating: 4.99,
    enrolledCount: 52100,
    badge: '100% Student Customizable',
    testCountSummary: 'Unlimited Self-Generated Tests (15m, 30m, 1hr Presets)',
    features: [
      'Select any subject: Physics, Chemistry, Botany, Zoology, Mathematics',
      'Select any chapter and micro-topic combination',
      'Select question types: Assertion-Reason, Statement I/II, Match, Numerical',
      'Select duration: 15 mins (15 Qs), 30 mins (30 Qs), 1 hr (45 Qs)',
      'Select difficulty: Level 1 Easy, Level 2 Moderate, Level 3 Hard, Level 4 Adaptive',
      'Instant test compilation and full-screen CBT launch with zero delay'
    ],
    deliverables: {
      testsIncluded: 'Unlimited Custom Tests Generated on Demand',
      durationOptions: '15 mins, 30 mins, 1 hr, 200 mins (Custom Slider)',
      solutionSupport: '100,000+ Verified NCERT Question Bank with Solutions',
      analytics: 'Custom Test Scorecards, AI Weak-Chapter Diagnostic Alerts',
      omrSupport: 'Instant Full-Screen CBT Simulator & PDF Question Paper'
    }
  },
  {
    id: 'pkg-hyts-80-20',
    title: 'High Yield Test Series (HYTS 80/20 Core)',
    packageType: 'High Yield 80/20 (HYTS)',
    targetExam: 'NEET',
    duration: '6 Months Intensive High-Yield Program',
    price: '₹2,999',
    originalPrice: '₹5,999',
    discount: '50% OFF',
    rating: 4.96,
    enrolledCount: 38700,
    badge: 'Score 650+ Guaranteed Strategy',
    testCountSummary: '30 High-Yield Part & Full Mocks (80/20 Rule)',
    features: [
      'Targeted on the top 20% core syllabus that produces 80% of NEET marks',
      'Eliminates low-yield memorization, focuses on high-frequency concepts',
      '30 Full & Part tests with detailed examiner trap analysis',
      'National percentile benchmark with AIIMS Delhi rankers'
    ],
    deliverables: {
      testsIncluded: '30 HYTS Tests (10 Unit + 10 Part + 10 Full Mocks)',
      durationOptions: '1 Hour (Part) & 200 Mins (Full) CBT Modes',
      solutionSupport: 'High-Yield Trap Analysis & NCERT Verbatim Notes',
      analytics: 'National Percentile, High-Yield Mastery Tracker',
      omrSupport: 'Full-Screen CBT Simulator & Printable PDF Worksheets'
    }
  },
  {
    id: 'pkg-bio-360',
    title: 'Target 360/360 in Biology NCERT Line-by-Line Test Series',
    packageType: 'Target 360/360 Biology Series',
    targetExam: 'NEET',
    duration: '38 Chapters Complete NCERT Mastery',
    price: '₹1,499',
    originalPrice: '₹2,999',
    discount: '50% OFF',
    rating: 4.99,
    enrolledCount: 74200,
    badge: '360/360 Biology Target',
    testCountSummary: '60 Biology Chapter & Full Mocks (15m, 30m, 1hr 45-Q Drills)',
    features: [
      '6,000+ NCERT Line-by-Line MCQs curated by senior biology experts',
      'Assertion-Reason, Statement-based & Diagram-based NCERT traps',
      '38 Chapter-wise 30-min tests + 15 Unit 45-Q 1-hr tests + 7 Full Grand Mocks',
      'NCERT page number referenced with every single question'
    ],
    deliverables: {
      testsIncluded: '60 Biology Specialist Tests (38 Chapter + 15 Unit + 7 Grand)',
      durationOptions: '15 Mins, 30 Mins, 1 Hour, 90 Mins',
      solutionSupport: 'Word-by-Word NCERT Line Citations & Diagram Keys',
      analytics: 'Plant vs Animal Physiology & Genetics Accuracy Metrics',
      omrSupport: 'Online Full-Screen CBT & Downloadable Chapter Test PDFs'
    }
  },
  {
    id: 'pkg-cts-offline',
    title: 'Classroom Pen & Paper OMR Test Series (CTS 2026)',
    packageType: 'Classroom Pen & Paper (CTS)',
    targetExam: 'NEET',
    duration: 'Physical OMR in 150+ Cities Across India',
    price: '₹5,999',
    originalPrice: '₹9,999',
    discount: '40% OFF',
    rating: 4.94,
    enrolledCount: 31500,
    badge: 'Real Physical OMR Experience',
    testCountSummary: '25 Physical OMR Tests (Conducted on Scheduled Sundays)',
    features: [
      'Physical Pen & Paper tests conducted on scheduled Sundays in 150+ cities',
      'Same-day OMR machine scanning with instant AIR generation on portal',
      'Includes free complete access to the Online NEETcbt CBT Engine',
      'Printed Question Booklets with detailed step-by-step solution guides'
    ],
    deliverables: {
      testsIncluded: '25 Offline OMR Tests + Unlimited Online Re-attempts',
      durationOptions: '200 Mins Physical Sunday Exam Environment',
      solutionSupport: 'Printed Detailed Solutions + Video/Audio Discussions',
      analytics: 'Pan-India Offline & Online Combined Rank List',
      omrSupport: 'Physical OMR Sheets & Digital OMR Analyzer'
    }
  }
];

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 'fc-1',
    subject: 'Physics',
    category: 'Formulas',
    topic: 'Modern Physics - De Broglie Wavelength',
    frontTitle: 'De Broglie Wavelength of an Electron',
    frontContent: 'What is the relation between accelerating potential (V) and De Broglie wavelength (λ)?',
    frontFormula: 'λ = h / p = h / √(2mE)',
    backExplanation: 'For an electron accelerated through potential difference V in volts:\nλ = 12.27 / √V Å (Angstroms) or 1.227 / √V nm.',
    backKeyPoints: [
      'Mass of electron m = 9.1 x 10^-31 kg',
      'Charge e = 1.6 x 10^-19 C',
      'Useful for quick 5-second calculation in NEET/JEE'
    ],
    mnemonic: 'Remember: 12.27 over root V in Angstroms!',
    difficulty: 'Easy'
  },
  {
    id: 'fc-2',
    subject: 'Chemistry',
    category: 'Reactions',
    topic: 'Organic - Named Reactions',
    frontTitle: 'Aldol Condensation vs Cannizzaro Reaction',
    frontContent: 'What is the fundamental structural requirement distinguishing Aldol from Cannizzaro reaction?',
    backExplanation: 'Aldol Condensation requires at least one α-hydrogen atom (in presence of dil. NaOH). Cannizzaro Reaction occurs in aldehydes that do NOT have any α-hydrogen (in presence of conc. 50% NaOH), undergoing disproportionation to alcohol and carboxylate salt.',
    backKeyPoints: [
      'Aldol: Acetaldehyde, Acetone (has α-H)',
      'Cannizzaro: Formaldehyde (HCHO), Benzaldehyde (C6H5CHO) (no α-H)',
      'Cross Aldol produces 4 products if both partners have α-H'
    ],
    mnemonic: 'Alpha-H = Aldol! Cannizzaro = CANNOT have alpha-H!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-3',
    subject: 'Biology',
    category: 'Concepts',
    topic: 'Genetics - Mendelian Dihybrid Ratio',
    frontTitle: 'Mendelian Dihybrid Phenotypic & Genotypic Ratio',
    frontContent: 'What are the classic F2 Phenotypic and Genotypic ratios in a Dihybrid cross (independent assortment)?',
    backExplanation: 'Phenotypic Ratio = 9 : 3 : 3 : 1 (9 Round Yellow, 3 Round Green, 3 Wrinkled Yellow, 1 Wrinkled Green).\nGenotypic Ratio = 1:2:1 : 2:4:2 : 1:2:1 (122412121 mnemonic).',
    backKeyPoints: [
      'Based on Law of Independent Assortment',
      'Total combinations = 16 zygotic combinations, 9 genotypes, 4 phenotypes',
      'Deviation occurs when genes are linked (Morgan experiment)'
    ],
    mnemonic: 'PhoneNumber Trick: 122-412-121 for genotypes!',
    difficulty: 'Medium'
  },
  {
    id: 'fc-4',
    subject: 'Biology',
    category: 'Diagrams',
    topic: 'Plant Physiology - C4 Pathway (Hatch & Slack)',
    frontTitle: 'Primary CO2 Acceptor & First Stable Product in C4 Plants',
    frontContent: 'Identify the primary CO2 acceptor and the enzyme in mesophyll cells, along with the first 4-carbon compound formed.',
    backExplanation: 'Primary CO2 acceptor: Phosphoenolpyruvate (PEP) - 3 carbon compound.\nEnzyme: PEP carboxylase (PEPcase) - lacks RuBisCO in mesophyll cells.\nFirst stable product: Oxaloacetic acid (OAA) - 4 carbon dicarboxylic acid.',
    backKeyPoints: [
      'Kranz anatomy: Bundle sheath cells with agranal chloroplasts and RuBisCO',
      'Zero photorespiration: Higher photosynthetic efficiency under high light and temp',
      'Examples: Maize, Sugarcane, Sorghum'
    ],
    mnemonic: 'PEP catches CO2 to make OAA in the Mesophyll!',
    difficulty: 'Hard'
  },
  {
    id: 'fc-5',
    subject: 'Physics',
    category: 'Formulas',
    topic: 'Electromagnetism - Biot-Savart Law',
    frontTitle: 'Magnetic Field at Center of Circular Coil',
    frontContent: 'Magnetic induction B at the center of a circular loop of N turns and radius R carrying current I.',
    frontFormula: 'B = (μ₀ * N * I) / (2 * R)',
    backExplanation: 'At the exact center of a circular coil of radius R, the field vectors from every element add up constructively along the normal axis.\nFor semi-circle: B = μ₀I / (4R).\nFor arc subtending θ rad: B = (μ₀I / 4πR) * θ.',
    backKeyPoints: [
      'Direction given by Right Hand Thumb Rule',
      'At axial distance x: B = (μ₀ N I R²) / (2 (R² + x²)^(3/2))'
    ],
    mnemonic: 'Center is maximum: μ₀NI over 2R',
    difficulty: 'Easy'
  },
  {
    id: 'fc-6',
    subject: 'Chemistry',
    category: 'Concepts',
    topic: 'Inorganic - Periodic Trends & Lanthanoid Contraction',
    frontTitle: 'Lanthanoid Contraction & Pair Radii Match',
    frontContent: 'Why do 4d and 5d transition elements (like Zr/Hf and Nb/Ta) have almost identical atomic/ionic radii?',
    backExplanation: 'Due to the poor shielding effect of intervening 4f-electrons before 5d series filling, the effective nuclear charge increases significantly, pulling outer electrons closer and cancelling expected size increase.',
    backKeyPoints: [
      'Zr (4d) ~ 160 pm and Hf (5d) ~ 159 pm (Nearly identical chemical twins)',
      'Increases ionization energy and density of 5d elements',
      'Makes separation of Zr and Hf difficult'
    ],
    mnemonic: 'Poor f-shielding pulls 5d tight!',
    difficulty: 'Medium'
  }
];

export const MIND_MAPS_DATA: MindMapNode[] = [
  {
    id: 'mm-bio-1',
    subject: 'Biology',
    title: 'Genetics & Molecular Inheritance',
    description: 'Complete visual roadmap of Mendelian principles, DNA structure, replication, transcription, translation & regulation.',
    children: [
      {
        title: 'Mendelian Genetics',
        details: ['Monohybrid cross (3:1, 1:2:1)', 'Dihybrid cross (9:3:3:1)', 'Incomplete dominance (Mirabilis jalapa 1:2:1)', 'Codominance (ABO Blood group)'],
        subTopics: ['Chromosomal theory (Sutton & Boveri)', 'Linkage & Recombination (T.H. Morgan on Drosophila)', 'Sex determination (XX-XY, ZZ-ZW, Haplodiploidy)']
      },
      {
        title: 'Structure of Genetic Material',
        details: ['Double helix model (Watson & Crick)', 'B-DNA pitch 3.4 nm, 10 bp per turn', 'Histone octamer (H2A, H2B, H3, H4) + H1 linker', '200 bp in nucleosome core'],
        subTopics: ['Chargaff rules: A+G = T+C', 'Transforming principle (Griffith S/R strain)', 'Hershey-Chase bacteriophage T2 experiment']
      },
      {
        title: 'Central Dogma & Processes',
        details: ['Semi-conservative replication (Meselson-Stahl 15N/14N)', 'Transcription in Eukaryotes (Pol I, II, III)', 'Post-transcriptional splicing, capping (m7G), tailing (Poly-A)'],
        subTopics: ['Genetic code: Universal, degenerate, non-overlapping, AUG start', 'Lac Operon (Jacob & Monod): Inducible, Repressor-Operator binding']
      }
    ]
  },
  {
    id: 'mm-phy-1',
    subject: 'Physics',
    title: 'Thermodynamics & Thermal Physics',
    description: 'State variables, laws of thermodynamics, cyclic processes, heat engines, Carnot efficiency and kinetic theory.',
    children: [
      {
        title: 'Zeroth & First Law',
        details: ['Zeroth law defines Temperature (Thermal equilibrium)', 'First law: dQ = dU + dW (Conservation of energy)', 'Internal energy U = (f/2) nRT (Depends only on temperature)'],
        subTopics: ['Isothermal process (T=const, dU=0, W = nRT ln(V2/V1))', 'Adiabatic process (dQ=0, PV^γ = const, W = (P1V1 - P2V2)/(γ - 1))', 'Isochoric (dV=0, W=0, dQ=dU)', 'Isobaric (dP=0, W=P(V2-V1))']
      },
      {
        title: 'Heat Engines & Second Law',
        details: ['Kelvin-Planck statement (No engine with 100% efficiency)', 'Clausius statement (Heat cannot flow cold to hot without external work)', 'Carnot cycle: 2 Isothermal + 2 Adiabatic steps'],
        subTopics: ['Carnot Efficiency η = 1 - (T_cold / T_hot) = 1 - (Q2 / Q1)', 'Refrigerator COP β = Q2 / W = T_cold / (T_hot - T_cold)']
      }
    ]
  },
  {
    id: 'mm-chem-1',
    subject: 'Chemistry',
    title: 'Organic Reaction Mechanisms Roadmap',
    description: 'Nucleophilic substitution, elimination, electrophilic aromatic substitution, and carbonyl reactions.',
    children: [
      {
        title: 'Alkyl Halides (SN1 vs SN2)',
        details: ['SN1: 2 steps, carbocation intermediate, racemization, 3° > 2° > 1°, polar protic solvent', 'SN2: 1 step, backside attack, Walden inversion, 1° > 2° > 3°, polar aprotic solvent'],
        subTopics: ['E1 vs E2: Saytzeff (more substituted alkene) vs Hofmann rule', 'Elimination favored at high temperature with bulky strong base']
      },
      {
        title: 'Carbonyl Chemistry',
        details: ['Nucleophilic addition to C=O', 'Grignard reagent addition to aldehydes/ketones -> 1°, 2°, 3° alcohols', 'Aldol & Cross Aldol, Cannizzaro, Clemmensen reduction (Zn-Hg/HCl)'],
        subTopics: ['Wolff-Kishner reduction (NH2NH2/KOH/glycol)', 'Tollens and Fehling tests for aldehydes']
      }
    ]
  }
];

// ========================================================
// WATERMARK-FREE OFFICIAL NCERT TEXTBOOKS & NTA FREE PAPERS
// ========================================================
export const BOOKS_DATA: BookItem[] = [
  {
    id: 'book-ncert-bio-official',
    title: 'Official NCERT Biology (Class 11 & 12 Complete Textbook & Notes)',
    category: 'NCERT notes',
    subject: 'Biology',
    pages: 420,
    size: '16.8 MB',
    description: 'Original watermark-free official NCERT Biology textbook covering all 38 chapters with diagram keys and high-yield line-by-line concept summaries.',
    rating: 4.98,
    highlights: ['100% Watermark-free official NCERT text', 'High-Yield subtopic highlights', 'Complete Class 11 & 12 Botany & Zoology']
  },
  {
    id: 'book-ncert-phy-official',
    title: 'Official NCERT Physics (Class 11 & 12 Derivations & Formula Handbook)',
    category: 'Formula books',
    subject: 'Physics',
    pages: 310,
    size: '14.2 MB',
    description: 'Complete official NCERT Physics reference covering mechanics, electrodynamics, optics, and modern physics with standard sign conventions and derivations.',
    rating: 4.94,
    highlights: ['Clean formula handbook without watermarks', 'All standard SI units & dimensional formulas', 'Graph cheat sheets for quick morning revision']
  },
  {
    id: 'book-ncert-chem-official',
    title: 'Official NCERT Chemistry (Organic Mechanisms & Inorganic Tables)',
    category: 'Revision notes',
    subject: 'Chemistry',
    pages: 280,
    size: '13.5 MB',
    description: 'Original NCERT Chemistry guide with reaction mechanisms, periodic tables, coordination nomenclature, and physical kinetics formulas.',
    rating: 4.92,
    highlights: ['Watermark-free named reaction roadmap', 'Official reagents reference table', 'Complete organic conversion pathways']
  },
  {
    id: 'book-nta-abhyas-free',
    title: 'Official NTA National Abhyas Solved Mock Test Papers (PDF)',
    category: 'eBooks',
    subject: 'All',
    pages: 520,
    size: '28.0 MB',
    description: 'Direct official practice mock test papers released by the National Testing Agency (NTA) for NEET and JEE Main with verified step-by-step keys.',
    rating: 4.99,
    highlights: ['100% Authentic NTA papers without watermarks', 'Tagged by difficulty & subtopics', 'Complete official answer keys']
  },
  {
    id: 'book-nta-pyq-official',
    title: 'Official NTA Previous Year Question Papers (2020-2025 Solved Archive)',
    category: 'PDFs',
    subject: 'All',
    pages: 480,
    size: '24.5 MB',
    description: 'Official original NTA question papers from 2020 to 2025 with complete question breakdowns and official NTA final answer keys.',
    rating: 4.97,
    highlights: ['Clean original paper format', 'Subtopic weightage distribution', 'Error-free NTA key verified solutions']
  },
  {
    id: 'book-ncert-exemplar-solutions',
    title: 'Official NCERT Exemplar Problems & High-Order Solutions (PCB)',
    category: 'eBooks',
    subject: 'All',
    pages: 360,
    size: '19.4 MB',
    description: 'Official NCERT Exemplar high-order thinking problems (HOTs) covering Physics, Chemistry, and Biology with multi-concept analytical solutions.',
    rating: 4.95,
    highlights: ['Exemplar multi-correct & reasoning questions', 'Clean non-watermarked text', 'Recommended for AIIMS / Top 100 AIR rankers']
  }
];

export const PYQS_DATA: PYQItem[] = [
  {
    id: 'pyq-2024-bio-1',
    exam: 'NEET',
    year: 2024,
    subject: 'Biology',
    chapter: 'Genetics and Evolution',
    topic: 'Molecular Basis of Inheritance',
    frequency: 'High (4-5 Qs per year)',
    conceptWeightage: '8.5% of Biology Paper',
    question: {
      id: 'pyq-q-1',
      subject: 'Biology',
      chapter: 'Genetics and Evolution',
      topic: 'Molecular Basis of Inheritance',
      difficulty: 'Medium',
      questionType: 'Standard MCQ',
      questionText: '[NEET 2024] Which of the following statements about the Lac operon is INCORRECT?',
      options: [
        'Lactose binds to the repressor protein and inactivates it',
        'The structural gene z codes for beta-galactosidase',
        'In the absence of lactose, the repressor binds to the operator region',
        'RNA polymerase binds directly to the operator region to start transcription'
      ],
      correctAnswer: 3,
      explanation: 'Statement 4 is incorrect because RNA polymerase binds to the PROMOTER region (p gene), not the operator region. The operator is the binding site for the repressor protein.',
      pyqYear: 2024
    }
  },
  {
    id: 'pyq-2023-phy-1',
    exam: 'NEET',
    year: 2023,
    subject: 'Physics',
    chapter: 'Ray Optics and Optical Instruments',
    topic: 'Refraction at Spherical Surfaces & Lenses',
    frequency: 'Very High (3 Qs per year)',
    conceptWeightage: '6.2% of Physics Paper',
    question: {
      id: 'pyq-q-2',
      subject: 'Physics',
      chapter: 'Ray Optics and Optical Instruments',
      topic: 'Refraction at Spherical Surfaces & Lenses',
      difficulty: 'Hard',
      questionType: 'Standard MCQ',
      questionText: '[NEET 2023] A biconvex lens has radii of curvature 20 cm each. If the refractive index of the material of the lens is 1.5, the power of the lens is:',
      options: [
        '+5 D',
        '+20 D',
        '+2.5 D',
        '+10 D'
      ],
      correctAnswer: 0,
      explanation: 'Lens Maker\'s Formula: 1/f = (μ - 1)(1/R1 - 1/R2) = (1.5 - 1)(1/20 - 1/(-20)) = 0.5 * (2/20) = 1/20 cm^-1. Focal length f = 20 cm = 0.2 m. Power P = 1 / f(m) = 1 / 0.2 = +5 D.',
      pyqYear: 2023
    }
  },
  {
    id: 'pyq-2023-chem-1',
    exam: 'NEET',
    year: 2023,
    subject: 'Chemistry',
    chapter: 'Coordination Compounds',
    topic: 'Crystal Field Theory & Isomerism',
    frequency: 'High (3 Qs per year)',
    conceptWeightage: '5.5% of Chemistry Paper',
    question: {
      id: 'pyq-q-3',
      subject: 'Chemistry',
      chapter: 'Coordination Compounds',
      topic: 'Crystal Field Theory & Isomerism',
      difficulty: 'Medium',
      questionType: 'Standard MCQ',
      questionText: '[NEET 2023] The correct order of ligand field strength in the spectrochemical series is:',
      options: [
        'I⁻ < Br⁻ < SCN⁻ < Cl⁻ < S²⁻ < F⁻ < OH⁻ < C2O4²⁻ < H2O < NCS⁻ < EDTA⁴⁻ < NH3 < en < CN⁻ < CO',
        'CO < CN⁻ < en < NH3 < EDTA⁴⁻ < NCS⁻ < H2O < C2O4²⁻ < OH⁻ < F⁻ < S²⁻ < Cl⁻ < SCN⁻ < Br⁻ < I⁻',
        'Cl⁻ < F⁻ < OH⁻ < I⁻ < Br⁻ < H2O < NH3 < CN⁻ < CO',
        'H2O < NH3 < en < CN⁻ < CO < I⁻ < Br⁻ < Cl⁻ < F⁻'
      ],
      correctAnswer: 0,
      explanation: 'According to Crystal Field Theory (Spectrochemical series): Halide donors < O-donors < N-donors < C-donors. I⁻ is weakest, CO is strongest.',
      pyqYear: 2023
    }
  }
];

export const RANKER_STORIES: RankerStory[] = [
  {
    id: 'ranker-1',
    name: 'Tathagat Awatar',
    exam: 'NEET',
    air: 1,
    score: '720 / 720',
    college: 'AIIMS New Delhi',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'Attempting the Sunday Major Tests (Levels 1 to 4) on NEETcbt full-screen CBT simulator gave me the mental calm to score 720/720 on exam day without panic.',
    state: 'Delhi',
    year: 2024,
    category: 'General',
    keyStrategy: 'Solved 15-min speed sprint tests daily for rapid recall + weekly Sunday Major Mocks.'
  },
  {
    id: 'ranker-2',
    name: 'Aditya Sharma',
    exam: 'NEET',
    air: 4,
    score: '716 / 720',
    college: 'AIIMS New Delhi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'The 10-Day Cyclic Part Tests on NEETcbt helped me identify recurring mistakes in ionic equilibrium and electrodynamics before they cost me marks.',
    state: 'Rajasthan',
    year: 2024,
    category: 'General',
    keyStrategy: 'Religiously audited the AI Error Log after every 1-hour unit mock.'
  },
  {
    id: 'ranker-3',
    name: 'Suhani Goyal',
    exam: 'NEET',
    air: 12,
    score: '715 / 720',
    college: 'Maulana Azad Medical College (MAMC)',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    quote: 'Target Batch Custom Test Generator allowed me to generate targeted 30-min Assertion-Reason drills for full 360/360 in Biology.',
    state: 'Punjab',
    year: 2024,
    category: 'General',
    keyStrategy: 'Generated custom 30-min topic tests for all 38 NCERT biology chapters.'
  }
];

export const COLLEGES_DATA: CollegeInfo[] = [
  {
    id: 'clg-1',
    name: 'All India Institute of Medical Sciences (AIIMS)',
    type: 'AIIMS',
    location: 'New Delhi',
    totalSeats: 132,
    closingRankGen: 55,
    closingRankOBC: 240,
    closingRankSC: 850,
    closingRankST: 2100,
    approxFeePerYear: '₹1,628 / yr',
    nirfRank: 1
  },
  {
    id: 'clg-2',
    name: 'Maulana Azad Medical College (MAMC)',
    type: 'Government',
    location: 'New Delhi',
    totalSeats: 250,
    closingRankGen: 90,
    closingRankOBC: 410,
    closingRankSC: 1800,
    closingRankST: 3500,
    approxFeePerYear: '₹3,200 / yr',
    nirfRank: 3
  },
  {
    id: 'clg-3',
    name: 'JIPMER Pondicherry',
    type: 'AIIMS',
    location: 'Puducherry',
    totalSeats: 200,
    closingRankGen: 260,
    closingRankOBC: 890,
    closingRankSC: 3100,
    closingRankST: 7800,
    approxFeePerYear: '₹12,400 / yr',
    nirfRank: 5
  },
  {
    id: 'clg-4',
    name: 'King George Medical University (KGMU)',
    type: 'Government',
    location: 'Lucknow, Uttar Pradesh',
    totalSeats: 250,
    closingRankGen: 1850,
    closingRankOBC: 2900,
    closingRankSC: 14500,
    closingRankST: 32000,
    approxFeePerYear: '₹54,000 / yr',
    nirfRank: 12
  }
];

export const FAQS_DATA = [
  {
    category: 'Test Series & Schedule',
    question: 'How is the Sunday Major Test Series structured across Levels 1 to 4?',
    answer: 'The Sunday Major Test Series follows a progressive difficulty path: 1st Sunday (Level 1: Core NCERT Foundations), 2nd Sunday (Level 2: Advanced Application & Moderate Traps), 3rd Sunday (Level 3: All-India Rank Booster), and 4th Sunday (Level 4: Grand Full Syllabus NTA CBT Simulator). Every test has 45 questions per subject and simulates real NTA timings and Section A/B optionality.'
  },
  {
    category: 'Durations & Drills',
    question: 'What test duration options are available on NEETcbt?',
    answer: 'We provide four standardized durations: 15 Minutes (Rapid Sprint Drill - 15 Qs), 30 Minutes (Chapter Mastery Test - 30 Qs), 1 Hour (Unit/Part Mock - 45 Qs), and 200 Minutes (Full NTA Grand Mock - 200 Qs with 180 to attempt).'
  },
  {
    category: 'Target Batch Custom Generator',
    question: 'What is the Target Batch "Select What You Get" Custom Test Generator?',
    answer: 'Target Batch is 100% test-series oriented (strictly NO masterclass or video coaching clutter). It allows you to generate custom tests on-demand by selecting your exact subjects, chapters, question styles (Assertion-Reason, Statement I/II, Match the columns, Numerical), difficulty levels, and durations (15m, 30m, 1hr).'
  },
  {
    category: 'NTA CBT & Scoring',
    question: 'Does the CBT simulator strictly follow the NTA marking scheme?',
    answer: 'Yes. Scoring is calculated as +4 for correct, -1 for incorrect, and 0 for unattempted. The simulator features NTA-standard question palettes (Answered, Not Answered, Marked for Review, Answered & Marked for Review, Not Visited) and generates instant normalized percentiles and AIR predictions.'
  }
];
