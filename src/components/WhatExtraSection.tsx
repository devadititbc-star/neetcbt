import React, { useState } from 'react';
import {
  Sparkles,
  Sliders,
  Layers,
  Network,
  LineChart,
  FileSpreadsheet,
  BookMarked,
  HelpCircle,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  AlertTriangle,
  Download,
  BookOpen,
  Eye,
  Search,
  Filter,
  Check,
  ChevronDown,
  ChevronRight,
  Lightbulb,
  Zap,
  Target,
  ArrowRight,
  Award
} from 'lucide-react';
import {
  Flashcard,
  MindMapNode,
  BookItem,
  PYQItem,
  TestItem,
  UserTestResult,
  Question
} from '../types';
import { SAMPLE_QUESTIONS } from '../data/mockData';
import { BIOLOGY_38_CHAPTERS } from '../data/biologyQuestionBank';


interface WhatExtraSectionProps {
  activeSubTab: string;
  onSelectSubTab: (subTab: string) => void;
  flashcards: Flashcard[];
  mindMaps: MindMapNode[];
  books: BookItem[];
  pyqs: PYQItem[];
  onStartCustomTest: (customTest: TestItem) => void;
  onOpenBook: (book: BookItem) => void;
  completedTests: UserTestResult[];
}

export const WhatExtraSection: React.FC<WhatExtraSectionProps> = ({
  activeSubTab,
  onSelectSubTab,
  flashcards,
  mindMaps,
  books,
  pyqs,
  onStartCustomTest,
  onOpenBook,
  completedTests
}) => {
  // Custom Test Builder State
  const [customSubject, setCustomSubject] = useState<'Physics' | 'Chemistry' | 'Biology' | 'Mathematics'>('Biology');
  const [customChapter, setCustomChapter] = useState<string>('Genetics and Evolution');
  const [customTopic, setCustomTopic] = useState<string>('Molecular Basis of Inheritance');
  const [customDifficulty, setCustomDifficulty] = useState<'Easy' | 'Medium' | 'Hard' | 'Adaptive'>('Medium');
  const [customDuration, setCustomDuration] = useState<number>(30);
  const [customQCount, setCustomQCount] = useState<number>(25);

  // Flashcards State
  const [fcSubjectFilter, setFcSubjectFilter] = useState<string>('All');
  const [fcCategoryFilter, setFcCategoryFilter] = useState<string>('All');
  const [activeFcIndex, setActiveFcIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Mind Map State
  const [selectedMindMapId, setSelectedMindMapId] = useState<string>(mindMaps[0]?.id || '');
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    '0': true,
    '1': true
  });

  // DPP Generator State
  const [dppDate, setDppDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [dppSubject, setDppSubject] = useState<string>('All Subjects');
  const [dppLevel, setDppLevel] = useState<string>('NTA Standard Level');
  const [generatedDppSuccess, setGeneratedDppSuccess] = useState<boolean>(false);

  // PYQ Filter State
  const [pyqSubject, setPyqSubject] = useState<string>('All');
  const [pyqYear, setPyqYear] = useState<string>('All');
  const [pyqSearch, setPyqSearch] = useState<string>('');
  const [expandedSolutionId, setExpandedSolutionId] = useState<string | null>(null);

  // Books Filter State
  const [bookCategory, setBookCategory] = useState<string>('All');

  // Sub-tab definitions
  const subModules = [
    { id: 'custom-test', label: 'Custom Test Generator', icon: Sliders, desc: 'Generate tests by subject, chapter, topic, difficulty & duration.' },
    { id: 'flash-cards', label: 'Flash Cards', icon: Layers, desc: 'Quick revision cards for formulas, reactions, diagrams & concepts.' },
    { id: 'mind-maps', label: 'Mind Maps', icon: Network, desc: 'Visual summaries & interactive concept maps.' },
    { id: 'analytics', label: 'Student Analytics', icon: LineChart, desc: 'Score analysis, accuracy, weak topics & progress graphs.' },
    { id: 'dpp-generator', label: 'DPP Generator', icon: FileSpreadsheet, desc: 'Personalized daily practice papers generated on demand.' },
    { id: 'books', label: 'Books & Notes', icon: BookMarked, desc: 'NCERT notes, revision notes, formula books, eBooks & PDFs.' },
    { id: 'pyqs', label: 'NEET/JEE PYQs', icon: HelpCircle, desc: 'Chapter, topic & year-wise previous year questions with solutions.' }
  ];

  // Custom Test Launch Handler
  const handleGenerateAndStartCustomTest = () => {
    let testQuestions: Question[] = SAMPLE_QUESTIONS;

    if (customSubject === 'Biology') {
      const bioCh = BIOLOGY_38_CHAPTERS.find(c => c.title === customChapter) || BIOLOGY_38_CHAPTERS[0];
      if (bioCh && bioCh.sampleQuestions.length > 0) {
        testQuestions = [];
        for (let i = 0; i < customQCount; i++) {
          const baseQ = bioCh.sampleQuestions[i % bioCh.sampleQuestions.length];
          testQuestions.push({
            ...baseQ,
            id: `extra-q-${bioCh.id}-${i + 1}`,
            chapter: bioCh.title,
            topic: customTopic === 'All Micro-Topics in Chapter'
              ? (bioCh.subtopics[i % bioCh.subtopics.length] || bioCh.title)
              : customTopic
          });
        }
      }
    }

    const customTestItem: TestItem = {
      id: `custom-test-${Date.now()}`,
      title: `Custom Test: ${customSubject} - ${customChapter}`,
      category: 'custom',
      exam: 'NEET',
      level: customDifficulty === 'Adaptive' ? 'Adaptive' : (customDifficulty as any),
      levelLabel: `${customDifficulty}: ${customSubject} Drill`,
      scheduleCycle: 'On Demand',
      durationCategory:
        customDuration <= 15
          ? '15_mins'
          : customDuration <= 30
          ? '30_mins'
          : customDuration <= 60
          ? '1_hour'
          : 'full_mock',
      syllabus: `${customSubject} > ${customChapter} > ${customTopic} (${customDifficulty} Level)`,
      totalQuestions: customQCount,
      durationMinutes: customDuration,
      totalMarks: customQCount * 4,
      negativeMarking: '+4 for correct, -1 for incorrect',
      difficulty: customDifficulty === 'Adaptive' ? 'Mixed' : customDifficulty,
      cbtMode: true,
      features: [
        `Custom Subject: ${customSubject}`,
        `Chapter: ${customChapter}`,
        `Topic: ${customTopic}`,
        `Difficulty: ${customDifficulty}`,
        `Duration: ${customDuration} Mins`
      ],
      questions: testQuestions
    };

    onStartCustomTest(customTestItem);
  };


  // Filtered Flashcards
  const filteredFlashcards = flashcards.filter(fc => {
    const matchesSubject = fcSubjectFilter === 'All' || fc.subject === fcSubjectFilter;
    const matchesCategory = fcCategoryFilter === 'All' || fc.category === fcCategoryFilter;
    return matchesSubject && matchesCategory;
  });

  const currentFlashcard = filteredFlashcards[activeFcIndex] || filteredFlashcards[0] || flashcards[0];

  // Filtered PYQs
  const filteredPYQs = pyqs.filter(p => {
    const matchesSubject = pyqSubject === 'All' || p.subject === pyqSubject;
    const matchesYear = pyqYear === 'All' || p.year.toString() === pyqYear;
    const matchesSearch =
      p.chapter.toLowerCase().includes(pyqSearch.toLowerCase()) ||
      p.topic.toLowerCase().includes(pyqSearch.toLowerCase()) ||
      p.question.questionText.toLowerCase().includes(pyqSearch.toLowerCase());
    return matchesSubject && matchesYear && matchesSearch;
  });

  // Filtered Books
  const filteredBooks = books.filter(b => {
    return bookCategory === 'All' || b.category === bookCategory;
  });

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3 h-3 text-blue-600" /> High-Yield Edge Suite
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              3. High-Yield Practice Suite (7 Precision Tools)
            </h1>
            <p className="mt-1 text-xs text-gray-600 max-w-3xl">
              Supercharge your preparation with our proprietary suite of revision, generation, and diagnostic tools designed to maximize retention and accuracy.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0 font-mono text-[10px]">
            <span className="bg-gray-100 text-gray-700 border border-gray-200 px-2 py-1 rounded font-bold">
              MODULES: 7 ACTIVE
            </span>
          </div>
        </div>

        {/* Sub-module Navigation Pills */}
        <div className="mt-4 flex items-center space-x-1.5 overflow-x-auto pb-1 custom-scrollbar">
          {subModules.map(sub => {
            const Icon = sub.icon;
            const isActive = activeSubTab === sub.id;
            return (
              <button
                key={sub.id}
                id={`submodule-tab-${sub.id}`}
                onClick={() => onSelectSubTab(sub.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{sub.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. CUSTOM TEST GENERATOR */}
      {activeSubTab === 'custom-test' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-5 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <Sliders className="w-4 h-4 text-blue-600" />
                <span>Custom Test Generator</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Generate tests by subject, chapter, topic, difficulty and duration on demand.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 self-start sm:self-auto uppercase">
              Dynamic NTA Synthesizer
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Subject Selector */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                1. Select Subject
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {(['Physics', 'Chemistry', 'Biology', 'Mathematics'] as const).map(subj => (
                  <button
                    key={subj}
                    onClick={() => setCustomSubject(subj)}
                    className={`py-1.5 px-2 rounded text-xs font-semibold transition-colors ${
                      customSubject === subj
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {subj}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Selector */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                2. Select Difficulty Level
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {(['Easy', 'Medium', 'Hard', 'Adaptive'] as const).map(diff => (
                  <button
                    key={diff}
                    onClick={() => setCustomDifficulty(diff)}
                    className={`py-1.5 px-2 rounded text-xs font-semibold transition-colors ${
                      customDifficulty === diff
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Chapter Selection */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-between">
                <span>3. Select Chapter</span>
                {customSubject === 'Biology' && (
                  <span className="text-emerald-700 font-mono text-[9px] font-bold">
                    38 NCERT Chapters
                  </span>
                )}
              </label>
              <select
                value={customChapter}
                onChange={e => {
                  const newCh = e.target.value;
                  setCustomChapter(newCh);
                  if (customSubject === 'Biology') {
                    setCustomTopic('All Micro-Topics in Chapter');
                  }
                }}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs font-medium text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white"
              >
                {customSubject === 'Biology' && (
                  <>
                    <optgroup label="Class 11 Biology (Units 1 to 5)">
                      {BIOLOGY_38_CHAPTERS.filter(c => c.classLevel === 'Class 11').map(c => (
                        <option key={c.id} value={c.title}>
                          Ch {c.chapterNumber}: {c.title} ({c.weightageInNEET})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Class 12 Biology (Units 6 to 10)">
                      {BIOLOGY_38_CHAPTERS.filter(c => c.classLevel === 'Class 12').map(c => (
                        <option key={c.id} value={c.title}>
                          Ch {c.chapterNumber}: {c.title} ({c.weightageInNEET})
                        </option>
                      ))}
                    </optgroup>
                  </>
                )}
                {customSubject === 'Physics' && (
                  <>
                    <option value="Electrodynamics & Current">Electrodynamics & Current</option>
                    <option value="Modern Physics & Atoms">Modern Physics & Atoms</option>
                    <option value="Mechanics & Laws of Motion">Mechanics & Laws of Motion</option>
                    <option value="Ray & Wave Optics">Ray & Wave Optics</option>
                  </>
                )}
                {customSubject === 'Chemistry' && (
                  <>
                    <option value="Organic Chemistry Mechanisms">Organic Chemistry Mechanisms</option>
                    <option value="Chemical Kinetics & Equilibrium">Chemical Kinetics & Equilibrium</option>
                    <option value="Coordination Compounds">Coordination Compounds</option>
                    <option value="Electrochemistry">Electrochemistry</option>
                  </>
                )}
                {customSubject === 'Mathematics' && (
                  <>
                    <option value="Calculus & Integration">Calculus & Integration</option>
                    <option value="Vectors & 3D Geometry">Vectors & 3D Geometry</option>
                    <option value="Coordinate Geometry">Coordinate Geometry</option>
                    <option value="Probability & Statistics">Probability & Statistics</option>
                  </>
                )}
              </select>
            </div>

            {/* Topic Selection */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                4. Select Topic
              </label>
              <select
                value={customTopic}
                onChange={e => setCustomTopic(e.target.value)}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs font-medium text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white"
              >
                {customSubject === 'Biology' ? (
                  <>
                    <option value="All Micro-Topics in Chapter">All Micro-Topics in Chapter (Balanced Mix)</option>
                    {(BIOLOGY_38_CHAPTERS.find(c => c.title === customChapter)?.subtopics || []).map((sub, idx) => (
                      <option key={idx} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </>
                ) : (
                  <>
                    <option value="Entire Chapter Mix">Entire Chapter Mix (All Topics)</option>
                    <option value="High-Yield Formula / Theory Traps">High-Yield Formula / Theory Traps</option>
                    <option value="Assertion-Reason Focus">Assertion-Reason & Statement Traps</option>
                    <option value="Previous Year Trend Questions">Previous Year Trend Questions</option>
                  </>
                )}
              </select>
            </div>


            {/* Duration Presets & Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="font-bold text-gray-600 uppercase">5. Test Duration</span>
                <span className="font-bold text-blue-700">{customDuration} Minutes</span>
              </div>
              <div className="grid grid-cols-4 gap-1 pb-1">
                {[
                  { m: 15, q: 15, l: '15m (Sprint)' },
                  { m: 30, q: 30, l: '30m (Topic)' },
                  { m: 60, q: 45, l: '1 hr (Unit)' },
                  { m: 180, q: 90, l: '3 hr (Full)' }
                ].map(p => (
                  <button
                    key={p.m}
                    type="button"
                    onClick={() => {
                      setCustomDuration(p.m);
                      setCustomQCount(p.q);
                    }}
                    className={`py-1 text-[11px] font-mono rounded font-semibold transition-colors ${
                      customDuration === p.m
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {p.l}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="10"
                max="180"
                step="5"
                value={customDuration}
                onChange={e => setCustomDuration(Number(e.target.value))}
                className="w-full accent-blue-600 bg-gray-200 h-1.5 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>10m</span>
                <span>15m</span>
                <span>30m</span>
                <span>60m (1 hr)</span>
                <span>180m</span>
              </div>
            </div>

            {/* Question Count Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="font-bold text-gray-600 uppercase">6. Question Count</span>
                <span className="font-bold text-blue-700">{customQCount} Questions ({customQCount * 4} Marks)</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                step="5"
                value={customQCount}
                onChange={e => setCustomQCount(Number(e.target.value))}
                className="w-full accent-blue-600 bg-gray-200 h-1.5 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>10 Qs</span>
                <span>25 Qs</span>
                <span>45 Qs</span>
                <span>90 Qs</span>
              </div>
            </div>
          </div>

          {/* Test Summary Preview & Launch Button */}
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="space-y-0.5 text-xs">
              <div className="text-gray-600">
                Configuration:{' '}
                <strong className="text-gray-900">
                  {customSubject} &bull; {customChapter} &bull; {customDifficulty} Difficulty
                </strong>
              </div>
              <div className="text-gray-500 font-mono text-[11px]">
                Format:{' '}
                <span className="text-blue-700 font-bold">{customQCount} Questions</span> |{' '}
                <span className="text-amber-700 font-bold">{customDuration} Mins</span> | Marking: +4 / -1
              </div>
            </div>

            <button
              id="btn-start-generated-custom-test"
              onClick={handleGenerateAndStartCustomTest}
              className="w-full sm:w-auto px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch Custom CBT Test</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. FLASH CARDS */}
      {activeSubTab === 'flash-cards' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Interactive Revision Flash Cards</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Quick revision cards for formulas, reactions, diagrams and high-yield concepts.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 font-mono">
                Card {activeFcIndex + 1} of {filteredFlashcards.length}
              </span>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div className="flex items-center space-x-1 overflow-x-auto pb-1 custom-scrollbar">
              <span className="text-xs text-gray-500 mr-1.5 font-semibold">Subject:</span>
              {['All', 'Physics', 'Chemistry', 'Biology'].map(sub => (
                <button
                  key={sub}
                  onClick={() => {
                    setFcSubjectFilter(sub);
                    setActiveFcIndex(0);
                    setIsFlipped(false);
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                    fcSubjectFilter === sub
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-1 overflow-x-auto pb-1 custom-scrollbar">
              <span className="text-xs text-gray-500 mr-1.5 font-semibold">Category:</span>
              {['All', 'Formulas', 'Reactions', 'Diagrams', 'Concepts'].map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setFcCategoryFilter(cat);
                    setActiveFcIndex(0);
                    setIsFlipped(false);
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                    fcCategoryFilter === cat
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Flashcard 3D Interactive Card */}
          {currentFlashcard && (
            <div className="max-w-xl mx-auto py-2">
              <div
                id="flashcard-flip-box"
                onClick={() => setIsFlipped(!isFlipped)}
                className={`cursor-pointer min-h-[260px] p-5 sm:p-6 rounded-lg border transition-all relative flex flex-col justify-between shadow-xs ${
                  isFlipped
                    ? 'bg-purple-50/50 border-purple-300'
                    : 'bg-blue-50/50 border-blue-300'
                }`}
              >
                {/* Card Top Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-blue-700 border border-gray-200 font-mono">
                      {currentFlashcard.subject} &bull; {currentFlashcard.category}
                    </span>
                    <span className="text-xs text-gray-500">{currentFlashcard.topic}</span>
                  </div>
                  <span className="text-xs text-gray-500 flex items-center space-x-1 bg-white px-2 py-0.5 rounded border border-gray-200 font-mono text-[11px]">
                    <RotateCcw className="w-3 h-3 text-blue-600" />
                    <span>Flip Card</span>
                  </span>
                </div>

                {/* Card Center Content */}
                <div className="my-4 text-center">
                  {!isFlipped ? (
                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">
                        {currentFlashcard.frontTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {currentFlashcard.frontContent}
                      </p>
                      {currentFlashcard.frontFormula && (
                        <div className="inline-block px-3 py-1.5 rounded bg-white border border-blue-200 text-blue-800 font-mono text-xs font-bold shadow-xs">
                          {currentFlashcard.frontFormula}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3 text-left">
                      <div className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">
                        Mastery Breakdown & Explanation
                      </div>
                      <p className="text-xs text-gray-800 whitespace-pre-line leading-relaxed">
                        {currentFlashcard.backExplanation}
                      </p>

                      <div className="space-y-1 pt-1.5 border-t border-purple-200">
                        {currentFlashcard.backKeyPoints.map((pt, i) => (
                          <div key={i} className="text-xs text-gray-700 flex items-start space-x-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      {currentFlashcard.mnemonic && (
                        <div className="p-2 rounded bg-white border border-purple-200 text-purple-900 text-xs flex items-center space-x-1.5">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>
                            <strong>Mnemonic:</strong> {currentFlashcard.mnemonic}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Bottom Controls */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200/80">
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setIsFlipped(false);
                      setActiveFcIndex(prev => (prev > 0 ? prev - 1 : filteredFlashcards.length - 1));
                    }}
                    className="px-3 py-1 rounded bg-white hover:bg-gray-100 text-xs text-gray-700 font-semibold border border-gray-200"
                  >
                    &larr; Previous
                  </button>

                  <span className="text-[11px] text-gray-500 font-mono">
                    {isFlipped ? 'Side B (Solution / Explanation)' : 'Side A (Question / Concept)'}
                  </span>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setIsFlipped(false);
                      setActiveFcIndex(prev => (prev < filteredFlashcards.length - 1 ? prev + 1 : 0));
                    }}
                    className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-xs text-white font-semibold shadow-xs"
                  >
                    Next &rarr;
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. MIND MAPS */}
      {activeSubTab === 'mind-maps' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <Network className="w-4 h-4 text-blue-600" />
                <span>Visual Summaries & Concept Mind Maps</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Hierarchical knowledge breakdown for rapid visual revision.
              </p>
            </div>
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-0.5">
              {mindMaps.map(mm => (
                <button
                  key={mm.id}
                  onClick={() => setSelectedMindMapId(mm.id)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                    selectedMindMapId === mm.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {mm.subject}: {mm.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Mind Map Node Tree */}
          {(() => {
            const activeMap = mindMaps.find(m => m.id === selectedMindMapId) || mindMaps[0];
            if (!activeMap) return null;

            return (
              <div className="space-y-3">
                {/* Central Concept Node */}
                <div className="p-3.5 rounded bg-blue-50/70 border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-blue-700 tracking-wider font-mono">
                        Root Node &bull; {activeMap.subject}
                      </span>
                      <h3 className="text-base font-bold text-gray-900">{activeMap.title}</h3>
                      <p className="text-xs text-gray-600 mt-0.5">{activeMap.description}</p>
                    </div>
                  </div>
                </div>

                {/* Sub-branches */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                  {activeMap.children?.map((branch, idx) => {
                    const isExpanded = !!expandedNodes[idx.toString()];
                    return (
                      <div
                        key={idx}
                        className="rounded bg-gray-50 border border-gray-200 p-3 space-y-2 hover:border-gray-300 transition-colors"
                      >
                        <div
                          onClick={() =>
                            setExpandedNodes(prev => ({
                              ...prev,
                              [idx.toString()]: !prev[idx.toString()]
                            }))
                          }
                          className="flex items-center justify-between cursor-pointer"
                        >
                          <h4 className="text-xs font-bold text-blue-800 flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span>{branch.title}</span>
                          </h4>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-gray-400 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </div>

                        <ul className="space-y-1 text-xs text-gray-700 pl-2.5 border-l-2 border-gray-200">
                          {branch.details.map((detail, dIdx) => (
                            <li key={dIdx} className="leading-snug">
                              &bull; {detail}
                            </li>
                          ))}
                        </ul>

                        {branch.subTopics && (
                          <div className="pt-2 border-t border-gray-200">
                            <div className="text-[9px] font-bold text-amber-700 uppercase tracking-wider mb-1">
                              High-Yield Traps:
                            </div>
                            <div className="space-y-1">
                              {branch.subTopics.map((sub, sIdx) => (
                                <div
                                  key={sIdx}
                                  className="text-[11px] text-gray-600 bg-white px-2 py-0.5 rounded border border-gray-200 font-mono"
                                >
                                  {sub}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* 4. STUDENT PERFORMANCE ANALYTICS */}
      {activeSubTab === 'analytics' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-5 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1 border border-blue-200">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span>AI Diagnostic Engine v4.2</span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <LineChart className="w-4 h-4 text-blue-600" />
                <span>Deep Student Performance Analytics & Rank Forecasting</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Sub-topic accuracy heatmaps, negative mark audits, speed pacing analysis, and targeted 15m/30m remedial drills.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                AIR Predictor: Active
              </span>
            </div>
          </div>

          {/* Primary Metric Scorecards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-lg bg-gray-50 border border-blue-200 shadow-2xs">
              <div className="flex items-center justify-between text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                <span>Predicted Rank (NEET)</span>
                <Target className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-2xl font-black text-blue-700 mt-1 font-mono">
                AIR 340
              </div>
              <div className="text-[10px] text-emerald-700 font-bold mt-1 flex items-center space-x-1">
                <TrendingUp className="w-3 h-3" />
                <span>Top 0.15% &bull; AIIMS Safe Zone</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-emerald-200 shadow-2xs">
              <div className="flex items-center justify-between text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                <span>Overall Accuracy</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl font-black text-emerald-700 mt-1 font-mono">
                88.4%
              </div>
              <div className="text-[10px] text-gray-500 mt-1 font-mono">
                +4.2% across last 5 Sunday CBTs
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-amber-200 shadow-2xs">
              <div className="flex items-center justify-between text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                <span>Avg Score (Full Mock)</span>
                <Award className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-2xl font-black text-amber-700 mt-1 font-mono">
                665 / 720
              </div>
              <div className="text-[10px] text-amber-700 font-semibold mt-1 font-mono">
                99.85 Percentile
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-purple-200 shadow-2xs">
              <div className="flex items-center justify-between text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                <span>Time Per Question</span>
                <Clock className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-2xl font-black text-purple-700 mt-1 font-mono">
                48s / Q
              </div>
              <div className="text-[10px] text-emerald-700 font-semibold mt-1 font-mono">
                Optimal speed (&lt; 60s benchmark)
              </div>
            </div>
          </div>

          {/* Subject Mastery Progress Breakdown */}
          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-3">
            <div className="text-xs font-bold text-gray-900 flex items-center justify-between">
              <span>Subject-Wise Score & Accuracy Breakdown (45 Qs Pattern)</span>
              <span className="text-[10px] text-gray-500 font-mono">Target: &gt; 90% in each subject</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-gray-800">Botany (Plant Biology & Genetics)</span>
                    <span className="font-bold text-gray-900 font-mono">172 / 180 (95.5%)</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded" style={{ width: '95.5%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-gray-800">Zoology (Human Physiology & Biotech)</span>
                    <span className="font-bold text-gray-900 font-mono">168 / 180 (93.3%)</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded" style={{ width: '93.3%' }} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-gray-800">Chemistry (Organic & Physical)</span>
                    <span className="font-bold text-gray-900 font-mono">162 / 180 (90.0%)</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                    <div className="bg-blue-600 h-full rounded" style={{ width: '90.0%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-gray-800">Physics (Mechanics & Electrodynamics)</span>
                    <span className="font-bold text-gray-900 font-mono">148 / 180 (82.2%)</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                    <div className="bg-amber-500 h-full rounded" style={{ width: '82.2%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Topic Accuracy Heatmap & Negative Marks Audit */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Sub-Topic Accuracy Heatmap (2 cols) */}
            <div className="lg:col-span-2 p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-gray-900 flex items-center space-x-1.5">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>Sub-Topic Mastery Heatmap (High-Yield Chapters)</span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono">9 Chapters Tracked</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { name: 'Molecular Basis of Inheritance', sub: 'Biology', acc: 96, status: 'Mastered', color: 'emerald' },
                  { name: 'Biotechnology Applications', sub: 'Biology', acc: 94, status: 'Mastered', color: 'emerald' },
                  { name: 'Chemical Kinetics & Rate Laws', sub: 'Chemistry', acc: 90, status: 'Strong', color: 'emerald' },
                  { name: 'Plant Physiology & Photosynthesis', sub: 'Biology', acc: 88, status: 'Strong', color: 'emerald' },
                  { name: 'Ray Optics & Prisms', sub: 'Physics', acc: 82, status: 'Moderate', color: 'blue' },
                  { name: 'Coordination Compounds', sub: 'Chemistry', acc: 74, status: 'Moderate', color: 'blue' },
                  { name: 'Ionic Equilibrium (pH & Ksp)', sub: 'Chemistry', acc: 68, status: 'Weak', color: 'amber' },
                  { name: 'Rotational Mechanics (MOI)', sub: 'Physics', acc: 62, status: 'Weak', color: 'rose' },
                  { name: 'Electromagnetic Induction', sub: 'Physics', acc: 64, status: 'Weak', color: 'rose' }
                ].map((topic, i) => (
                  <div
                    key={i}
                    className={`p-2.5 rounded-lg border bg-white ${
                      topic.acc >= 85
                        ? 'border-emerald-200'
                        : topic.acc >= 70
                        ? 'border-blue-200'
                        : 'border-rose-200 bg-rose-50/20'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] text-gray-500 mb-0.5">
                      <span>{topic.sub}</span>
                      <span
                        className={`font-bold px-1.5 py-0.2 rounded font-mono ${
                          topic.acc >= 85
                            ? 'bg-emerald-100 text-emerald-800'
                            : topic.acc >= 70
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {topic.acc}%
                      </span>
                    </div>
                    <div className="text-xs font-bold text-gray-900 leading-snug line-clamp-1">
                      {topic.name}
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded overflow-hidden mt-1.5">
                      <div
                        className={`h-full rounded ${
                          topic.acc >= 85
                            ? 'bg-emerald-600'
                            : topic.acc >= 70
                            ? 'bg-blue-600'
                            : 'bg-rose-500'
                        }`}
                        style={{ width: `${topic.acc}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Negative Marks Lost Audit & Remedial Action (1 col) */}
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-xs font-bold text-rose-800 flex items-center space-x-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Negative Marks Lost (-24 Marks)</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Avoidable error breakdown from last 3 tests:
                </p>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded bg-white border border-rose-200 flex items-center justify-between">
                    <span>Calculation / Sign Slips</span>
                    <span className="font-bold text-rose-600 font-mono">-12 Marks</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-rose-200 flex items-center justify-between">
                    <span>Missed "INCORRECT" in question</span>
                    <span className="font-bold text-rose-600 font-mono">-8 Marks</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-rose-200 flex items-center justify-between">
                    <span>Reagent Formula Confusion</span>
                    <span className="font-bold text-rose-600 font-mono">-4 Marks</span>
                  </div>
                </div>
              </div>

              {/* Direct Remedial Launch CTA */}
              <div className="pt-2 border-t border-gray-200">
                <button
                  onClick={() => {
                    // Launch a 15-minute rapid remedial drill for weak topics
                    setCustomSubject('Physics');
                    setCustomChapter('Rotational Mechanics');
                    setCustomDuration(15);
                    setCustomQCount(15);
                    handleGenerateAndStartCustomTest();
                  }}
                  className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Launch 15-Min Remedial Drill</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. DPP GENERATOR (Daily Practice Papers) */}
      {activeSubTab === 'dpp-generator' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                <span>Personalized DPP Generator (Daily Practice Papers)</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Personalized daily practice papers tailored to your weak areas and target score.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 self-start sm:self-auto uppercase">
              Auto-Generated Daily
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">DPP Schedule Date</label>
              <input
                type="date"
                value={dppDate}
                onChange={e => setDppDate(e.target.value)}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">Subject Coverage</label>
              <select
                value={dppSubject}
                onChange={e => setDppSubject(e.target.value)}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500"
              >
                <option value="All Subjects">Combined PCB (Physics, Chem, Bio)</option>
                <option value="Physics Only">Physics Specialized Focus</option>
                <option value="Chemistry Only">Chemistry High-Yield Focus</option>
                <option value="Biology Only">Biology NCERT Mastery</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase">Target Standard</label>
              <select
                value={dppLevel}
                onChange={e => setDppLevel(e.target.value)}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500"
              >
                <option value="NTA Standard Level">NTA Standard NEET/JEE Level</option>
                <option value="AIIMS Rankers Booster">AIIMS / Top 100 Rankers Booster</option>
                <option value="Weak Area Remedial">Weak Area Remedial Drill</option>
              </select>
            </div>
          </div>

          {/* Generated DPP Box */}
          <div className="p-4 rounded bg-gray-50 border border-gray-200 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 uppercase font-mono">
                  DPP-#{dppDate.replace(/-/g, '')}
                </span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">
                  Daily Practice Paper for {dppDate} &bull; {dppSubject}
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  25 High-Yield Questions &bull; 45 Minutes Time Target &bull; +4 / -1 Marking
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setGeneratedDppSuccess(true)}
                  className="px-3 py-1.5 rounded bg-white hover:bg-gray-100 text-gray-700 text-xs font-semibold flex items-center space-x-1.5 border border-gray-300 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={handleGenerateAndStartCustomTest}
                  className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Attempt DPP Live</span>
                </button>
              </div>
            </div>

            {generatedDppSuccess && (
              <div className="p-2.5 rounded bg-green-50 border border-green-200 text-green-800 text-xs flex items-center space-x-1.5 animate-in fade-in">
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span>Personalized DPP PDF with solutions generated successfully!</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. BOOKS & NOTES LIBRARY */}
      {activeSubTab === 'books' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <BookMarked className="w-4 h-4 text-blue-600" />
                <span>Books, NCERT Notes & eBooks Library</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                NCERT notes, revision notes, formula books, eBooks and PDFs.
              </p>
            </div>
            <div className="flex items-center space-x-1 overflow-x-auto pb-0.5 custom-scrollbar">
              {['All', 'NCERT notes', 'Revision notes', 'Formula books', 'eBooks', 'PDFs'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setBookCategory(cat)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                    bookCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredBooks.map(book => (
              <div
                key={book.id}
                className="rounded-lg bg-white border border-gray-200 p-4 flex flex-col justify-between hover:border-gray-300 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase font-mono">
                      {book.category}
                    </span>
                    <span className="text-[11px] text-gray-500 font-mono">{book.pages} Pages &bull; {book.size}</span>
                  </div>

                  <h3 className="text-xs font-bold text-gray-900 leading-snug">{book.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{book.description}</p>

                  <div className="mt-2.5 space-y-1">
                    {book.highlights.map((h, i) => (
                      <div key={i} className="text-[11px] text-gray-600 flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-amber-600 font-semibold">★ {book.rating} / 5.0</span>
                  <button
                    onClick={() => onOpenBook(book)}
                    className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center space-x-1 shadow-xs"
                  >
                    <Eye className="w-3 h-3" />
                    <span>Read / Preview</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. NEET / JEE PYQS */}
      {activeSubTab === 'pyqs' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>NEET / JEE Previous Year Questions (PYQs)</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Chapter-wise, topic-wise and year-wise previous year questions with verified step solutions.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 self-start sm:self-auto uppercase">
              37 Years Solved Archive
            </span>
          </div>

          {/* Filter Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase">Filter Subject</label>
              <select
                value={pyqSubject}
                onChange={e => setPyqSubject(e.target.value)}
                className="w-full mt-0.5 p-1.5 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500"
              >
                <option value="All">All Subjects</option>
                <option value="Biology">Biology</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase">Filter Year</label>
              <select
                value={pyqYear}
                onChange={e => setPyqYear(e.target.value)}
                className="w-full mt-0.5 p-1.5 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 focus:bg-white focus:border-blue-500"
              >
                <option value="All">All Years (2020 - 2024)</option>
                <option value="2024">2024 (Latest)</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase">Search Topic / Keyword</label>
              <input
                type="text"
                placeholder="e.g. Lac Operon, Refraction..."
                value={pyqSearch}
                onChange={e => setPyqSearch(e.target.value)}
                className="w-full mt-0.5 p-1.5 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500"
              />
            </div>
          </div>

          {/* PYQ List */}
          <div className="space-y-3">
            {filteredPYQs.map(item => {
              const isSolutionOpen = expandedSolutionId === item.id;

              return (
                <div
                  key={item.id}
                  className="rounded-lg bg-gray-50 border border-gray-200 p-4 space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-200 font-mono">
                        {item.exam} {item.year}
                      </span>
                      <span className="text-xs font-semibold text-blue-700">{item.subject}</span>
                      <span className="text-xs text-gray-500">&bull; {item.chapter}</span>
                    </div>

                    <span className="text-[10px] text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200 font-mono">
                      Freq: {item.frequency} | Weightage: {item.conceptWeightage}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed">
                    {item.question.questionText}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {item.question.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className={`p-2 rounded border text-xs flex items-center space-x-2 ${
                          isSolutionOpen && oIdx === item.question.correctAnswer
                            ? 'bg-green-50 border-green-300 text-green-900 font-bold'
                            : 'bg-white border-gray-200 text-gray-700'
                        }`}
                      >
                        <span className="w-4 h-4 rounded bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-[9px]">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Solution Accordion */}
                  <div className="pt-2 flex items-center justify-between border-t border-gray-200">
                    <button
                      onClick={() =>
                        setExpandedSolutionId(isSolutionOpen ? null : item.id)
                      }
                      className="text-xs text-blue-700 font-semibold flex items-center space-x-1 hover:underline"
                    >
                      <span>{isSolutionOpen ? 'Hide Step-by-Step Solution' : 'View Verified Solution'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          isSolutionOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {isSolutionOpen && (
                    <div className="p-3 rounded bg-white border border-blue-200 space-y-1 animate-in fade-in">
                      <div className="text-xs font-bold text-green-700">
                        Correct Option: {String.fromCharCode(65 + item.question.correctAnswer)}
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
                        {item.question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
