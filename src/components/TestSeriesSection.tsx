import React, { useState } from 'react';
import {
  FileCheck2,
  Clock,
  Award,
  Calendar,
  Layers,
  ChevronRight,
  Filter,
  CheckCircle2,
  Zap,
  TrendingUp,
  AlertCircle,
  Play,
  CalendarDays,
  Target,
  Sparkles,
  ArrowRight,
  BookOpen,
  Check,
  Search,
  BookMarked
} from 'lucide-react';
import { TestItem, TestCategory, TestLevel, DurationCategory } from '../types';
import { BIOLOGY_38_CHAPTERS, generateChapterTestItem, BiologyChapter } from '../data/biologyQuestionBank';

interface TestSeriesSectionProps {
  testItems: TestItem[];
  onStartTest: (test: TestItem) => void;
  onNavigateToTargetBatch?: () => void;
}

export const TestSeriesSection: React.FC<TestSeriesSectionProps> = ({
  testItems,
  onStartTest,
  onNavigateToTargetBatch
}) => {
  const [activeViewMode, setActiveViewMode] = useState<'scheduled' | 'biology_38_chapters'>('scheduled');

  // Scheduled tests filters
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 38 Chapters filters
  const [bioClassFilter, setBioClassFilter] = useState<'all' | 'Class 11' | 'Class 12'>('all');
  const [bioUnitFilter, setBioUnitFilter] = useState<number | 'all'>('all');
  const [bioSearchQuery, setBioSearchQuery] = useState<string>('');

  const categories: { id: string; label: string; badge?: string }[] = [
    { id: 'all', label: 'All Scheduled Tests' },
    { id: 'sunday_major', label: 'Sunday Major Series (Levels 1-4)', badge: 'Sundays' },
    { id: 'ten_day_cycle', label: '10-Day Cyclic Tests', badge: '10-Day Intervals' },
    { id: 'minor', label: '15m / 30m Minor Tests' },
    { id: 'part', label: '1-Hour Unit / Part Tests' },
    { id: 'full', label: 'Full Syllabus Grand Mocks' }
  ];

  const durationFilters: { id: string; label: string; iconLabel: string }[] = [
    { id: 'all', label: 'All Durations', iconLabel: 'All' },
    { id: '15_mins', label: '15 Mins (Rapid Sprint)', iconLabel: '15m' },
    { id: '30_mins', label: '30 Mins (Chapter Mastery)', iconLabel: '30m' },
    { id: '1_hour', label: '1 Hour (Unit Mock)', iconLabel: '1 hr' },
    { id: 'full_mock', label: 'Full Mock (200 Mins)', iconLabel: '200m' }
  ];

  const levelFilters: { id: string; label: string }[] = [
    { id: 'all', label: 'All Levels' },
    { id: 'Level 1', label: 'Level 1: Core NCERT' },
    { id: 'Level 2', label: 'Level 2: Advanced Application' },
    { id: 'Level 3', label: 'Level 3: Rank Booster' },
    { id: 'Level 4', label: 'Level 4: Grand Simulator' }
  ];

  const filteredTests = testItems.filter(test => {
    const matchesCategory =
      selectedCategory === 'all' ||
      test.category === selectedCategory ||
      (selectedCategory === 'full' && (test.category === 'full' || test.category === 'neet_mock'));

    const matchesDuration =
      selectedDuration === 'all' || test.durationCategory === selectedDuration;

    const matchesLevel = selectedLevel === 'all' || test.level === selectedLevel;

    const matchesQuery =
      test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.syllabus.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (test.levelLabel && test.levelLabel.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesDuration && matchesLevel && matchesQuery;
  });

  const filteredBioChapters = BIOLOGY_38_CHAPTERS.filter(ch => {
    const matchesClass = bioClassFilter === 'all' || ch.classLevel === bioClassFilter;
    const matchesUnit = bioUnitFilter === 'all' || ch.unitNumber === bioUnitFilter;
    const matchesQuery =
      ch.title.toLowerCase().includes(bioSearchQuery.toLowerCase()) ||
      ch.unitTitle.toLowerCase().includes(bioSearchQuery.toLowerCase()) ||
      ch.subtopics.some(s => s.toLowerCase().includes(bioSearchQuery.toLowerCase()));

    return matchesClass && matchesUnit && matchesQuery;
  });

  const handleLaunchChapterTest = (chapter: BiologyChapter, durationCategory: '15_mins' | '30_mins' | '1_hour') => {
    const testItem = generateChapterTestItem(chapter, durationCategory);
    onStartTest(testItem);
  };

  return (
    <div className="space-y-4">
      {/* Header Banner & NTA Standard Matrix */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5">
              <Zap className="w-3 h-3 text-blue-600" /> Official NTA CBT Exam Engine & Test Series
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              1. Scheduled Test Series & Complete Question Bank (CBT)
            </h1>
            <p className="mt-1 text-xs text-gray-600 max-w-3xl">
              Strictly test series oriented. Structured Sunday Major tests (Level 1 on 1st Sunday, Level 2 on 2nd Sunday, Level 3 on 3rd Sunday, Level 4 on 4th Sunday), 10-day cyclic interval tests, and the complete 38-chapter NCERT Biology question bank.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto shrink-0">
            <span className="text-[10px] font-mono uppercase bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded font-bold">
              ● NTA Marking: +4 / -1 / 0
            </span>
            <span className="text-[10px] font-mono uppercase bg-blue-50 text-blue-700 border border-blue-200 px-2 py-1 rounded font-bold">
              Zero Coaching &bull; 100% Test Series
            </span>
          </div>
        </div>

        {/* High Density Metric Cards */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Sunday Major Series</div>
            <div className="text-xl font-bold text-blue-700 mt-0.5">Levels 1 to 4</div>
            <div className="text-[10px] text-green-600 font-semibold mt-0.5 font-mono">1st, 2nd, 3rd, 4th Sundays</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">10-Day Cyclic Cadence</div>
            <div className="text-xl font-bold text-purple-700 mt-0.5">Day 10 - 40</div>
            <div className="text-[10px] text-blue-600 font-semibold mt-0.5 font-mono">15m, 30m, 1hr Interval Tests</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">38-Chapter Bio Bank</div>
            <div className="text-xl font-bold text-emerald-700 mt-0.5">All 38 Chapters</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5 font-mono">Class 11 & 12 • 10 Units</div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">NTA Question Bank</div>
            <div className="text-xl font-bold text-amber-700 mt-0.5">100,000+</div>
            <div className="text-[10px] text-amber-600 font-semibold mt-0.5 font-mono">100% NCERT Verified</div>
          </div>
        </div>

        {/* PRIMARY VIEW MODE SWITCHER TABS */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
          <button
            onClick={() => setActiveViewMode('scheduled')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-2 ${
              activeViewMode === 'scheduled'
                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/20'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Scheduled CBT Series (Sunday Majors & 10-Day Cycles)</span>
          </button>

          <button
            onClick={() => setActiveViewMode('biology_38_chapters')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-2 ${
              activeViewMode === 'biology_38_chapters'
                ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-600/20'
                : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>38-Chapter NCERT Biology Question Bank & Test Series (All 10 Units)</span>
            <span className="px-1.5 py-0.2 rounded bg-emerald-700 text-white text-[9px] uppercase font-mono">
              38 Chapters
            </span>
          </button>
        </div>
      </div>

      {/* VIEW 1: SCHEDULED CBT TESTS */}
      {activeViewMode === 'scheduled' && (
        <>
          {/* SUNDAY MAJOR PROGRESSION ROADMAP (LEVELS 1 TO 4) */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <CalendarDays className="w-4 h-4 text-blue-600" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800">
                  Sunday Major Test Progression (Levels 1 to 4 Roadmap)
                </h2>
              </div>
              <span className="text-[10px] text-blue-700 font-mono font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Consecutive Sunday Schedule Cycle
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {/* 1st Sunday */}
              <div
                onClick={() => {
                  setSelectedCategory('sunday_major');
                  setSelectedLevel('Level 1');
                }}
                className="cursor-pointer p-3 rounded-lg border border-blue-200 bg-blue-50/50 hover:bg-blue-50 transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-600 text-white uppercase font-mono">
                    1st Sunday
                  </span>
                  <span className="text-[10px] font-bold text-blue-700 font-mono">Level 1</span>
                </div>
                <div className="text-xs font-bold text-gray-900">Major 1: Core NCERT</div>
                <p className="text-[11px] text-gray-600 leading-snug">
                  Class 11 Term 1 foundations (Mechanics, Cell Biology & Physical Chem).
                </p>
                <div className="text-[10px] text-blue-700 font-semibold font-mono">
                  200 Mins &bull; 720 Marks &bull; Easy/Foundation
                </div>
              </div>

              {/* 2nd Sunday */}
              <div
                onClick={() => {
                  setSelectedCategory('sunday_major');
                  setSelectedLevel('Level 2');
                }}
                className="cursor-pointer p-3 rounded-lg border border-purple-200 bg-purple-50/50 hover:bg-purple-50 transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-purple-600 text-white uppercase font-mono">
                    2nd Sunday
                  </span>
                  <span className="text-[10px] font-bold text-purple-700 font-mono">Level 2</span>
                </div>
                <div className="text-xs font-bold text-gray-900">Major 2: Application</div>
                <p className="text-[11px] text-gray-600 leading-snug">
                  Class 11 Term 2 + Class 12 Unit 1 (Electrodynamics, Genetics & Organic).
                </p>
                <div className="text-[10px] text-purple-700 font-semibold font-mono">
                  200 Mins &bull; 720 Marks &bull; Moderate Traps
                </div>
              </div>

              {/* 3rd Sunday */}
              <div
                onClick={() => {
                  setSelectedCategory('sunday_major');
                  setSelectedLevel('Level 3');
                }}
                className="cursor-pointer p-3 rounded-lg border border-amber-200 bg-amber-50/50 hover:bg-amber-50 transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-600 text-white uppercase font-mono">
                    3rd Sunday
                  </span>
                  <span className="text-[10px] font-bold text-amber-700 font-mono">Level 3</span>
                </div>
                <div className="text-xs font-bold text-gray-900">Major 3: Rank Booster</div>
                <p className="text-[11px] text-gray-600 leading-snug">
                  Heavyweight chapters (Optics, Coordination, Physiology & Biotech).
                </p>
                <div className="text-[10px] text-amber-700 font-semibold font-mono">
                  200 Mins &bull; 720 Marks &bull; Hard/AIIMS Benchmark
                </div>
              </div>

              {/* 4th Sunday */}
              <div
                onClick={() => {
                  setSelectedCategory('sunday_major');
                  setSelectedLevel('Level 4');
                }}
                className="cursor-pointer p-3 rounded-lg border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-600 text-white uppercase font-mono">
                    4th Sunday
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 font-mono">Level 4</span>
                </div>
                <div className="text-xs font-bold text-gray-900">Major 4: Grand Simulator</div>
                <p className="text-[11px] text-gray-600 leading-snug">
                  100% Complete syllabus full simulation with exact NTA Section A/B rules.
                </p>
                <div className="text-[10px] text-emerald-700 font-semibold font-mono">
                  200 Mins &bull; 720 Marks &bull; Real Exam Replica
                </div>
              </div>
            </div>
          </div>

          {/* FILTER CONTROLS BAR: Category, Duration, Level & Search */}
          <div className="bg-white p-3.5 rounded-lg border border-gray-200 space-y-3 shadow-xs">
            {/* Category Buttons */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-0.5 custom-scrollbar">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors flex items-center space-x-1.5 ${
                      selectedCategory === cat.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {cat.badge && (
                      <span
                        className={`text-[9px] px-1 py-0.2 rounded font-bold uppercase ${
                          selectedCategory === cat.id ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {cat.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-60">
                <input
                  type="text"
                  placeholder="Search test, chapter, level..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-3 pr-3 py-1.5 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Secondary Filters: Duration (15m, 30m, 1hr, Full) & Level */}
            <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
              {/* Duration Pills */}
              <div className="flex items-center space-x-1 overflow-x-auto custom-scrollbar">
                <span className="text-[11px] font-bold text-gray-500 mr-1.5 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Duration:</span>
                </span>
                {durationFilters.map(dur => (
                  <button
                    key={dur.id}
                    onClick={() => setSelectedDuration(dur.id)}
                    className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedDuration === dur.id
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {dur.label}
                  </button>
                ))}
              </div>

              {/* Level Pills */}
              <div className="flex items-center space-x-1 overflow-x-auto custom-scrollbar">
                <span className="text-[11px] font-bold text-gray-500 mr-1.5 flex items-center space-x-1">
                  <Layers className="w-3.5 h-3.5 text-purple-600" />
                  <span>Level:</span>
                </span>
                {levelFilters.map(lvl => (
                  <button
                    key={lvl.id}
                    onClick={() => setSelectedLevel(lvl.id)}
                    className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedLevel === lvl.id
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* TEST ITEMS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredTests.map(test => (
              <div
                key={test.id}
                className="rounded-lg bg-white border border-gray-200 hover:border-blue-400 p-4 shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Header Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center space-x-1.5 flex-wrap">
                      {test.scheduleCycle && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-mono">
                          {test.scheduleCycle}
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono ${
                          test.level === 'Level 1'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : test.level === 'Level 2'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : test.level === 'Level 3'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-purple-50 text-purple-700 border border-purple-200'
                        }`}
                      >
                        {test.level}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded flex items-center space-x-1 font-mono ${
                          test.durationMinutes <= 15
                            ? 'bg-emerald-100 text-emerald-800'
                            : test.durationMinutes <= 30
                            ? 'bg-blue-100 text-blue-800'
                            : test.durationMinutes <= 60
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        <span>{test.durationMinutes} mins</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Level Label */}
                  <h3 className="text-sm font-bold text-gray-900 leading-snug">
                    {test.title}
                  </h3>

                  {test.levelLabel && (
                    <div className="text-[11px] font-semibold text-blue-700 mt-0.5">
                      {test.levelLabel}
                    </div>
                  )}

                  <p className="text-xs text-gray-600 mt-1.5 line-clamp-2">
                    <strong className="text-gray-800">Syllabus:</strong> {test.syllabus}
                  </p>

                  {/* Badges / Key Specs */}
                  <div className="grid grid-cols-3 gap-2 my-3 py-1.5 px-2.5 rounded bg-gray-50 border border-gray-200 text-center font-mono">
                    <div>
                      <div className="text-[9px] uppercase text-gray-400 font-semibold">Questions</div>
                      <div className="text-xs font-bold text-gray-800">{test.totalQuestions} Qs</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase text-gray-400 font-semibold">Total Marks</div>
                      <div className="text-xs font-bold text-blue-700">{test.totalMarks} M</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase text-gray-400 font-semibold">Marking</div>
                      <div className="text-xs font-bold text-amber-600">+4 / -1</div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1 mb-3">
                    <div className="flex flex-wrap gap-1">
                      {test.features.slice(0, 3).map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200 flex items-center space-x-1"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Launch Button & Info */}
                <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
                  {test.scheduledDate ? (
                    <div className="text-xs text-gray-600 flex items-center space-x-1 font-mono">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      <span>
                        Schedule: <strong className="text-gray-900">{test.scheduledDate}</strong>
                      </span>
                    </div>
                  ) : (
                    <div className="text-xs text-gray-600 flex items-center space-x-1 font-mono">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span>
                        Avg: <strong className="text-gray-900">{test.avgScore}/{test.totalMarks}</strong>
                      </span>
                    </div>
                  )}

                  <button
                    id={`btn-launch-test-${test.id}`}
                    onClick={() => onStartTest(test)}
                    className="px-3.5 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center space-x-1.5 transition-all shadow-xs active:scale-95"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Start CBT Test ({test.durationMinutes}m)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No results fallback */}
          {filteredTests.length === 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center space-y-2">
              <AlertCircle className="w-8 h-8 text-gray-400 mx-auto" />
              <h3 className="text-sm font-bold text-gray-800">No Tests Match Your Filters</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try resetting your duration, category, or level filters to view all available tests in the schedule.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDuration('all');
                  setSelectedLevel('all');
                  setSearchQuery('');
                }}
                className="mt-2 px-3 py-1.5 rounded bg-blue-600 text-white text-xs font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </>
      )}

      {/* VIEW 2: 38-CHAPTER BIOLOGY QUESTION BANK & TEST SERIES HUB */}
      {activeViewMode === 'biology_38_chapters' && (
        <div className="space-y-4">
          {/* Chapter Filter Controls */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Class Filter */}
              <div className="flex items-center space-x-1.5 overflow-x-auto custom-scrollbar">
                <button
                  onClick={() => {
                    setBioClassFilter('all');
                    setBioUnitFilter('all');
                  }}
                  className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                    bioClassFilter === 'all'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  All 38 Chapters
                </button>
                <button
                  onClick={() => {
                    setBioClassFilter('Class 11');
                    setBioUnitFilter('all');
                  }}
                  className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                    bioClassFilter === 'Class 11'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  Class 11 (22 Chapters • Units 1 to 5)
                </button>
                <button
                  onClick={() => {
                    setBioClassFilter('Class 12');
                    setBioUnitFilter('all');
                  }}
                  className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                    bioClassFilter === 'Class 12'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  Class 12 (16 Chapters • Units 6 to 10)
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search chapter, subtopic, unit..."
                  value={bioSearchQuery}
                  onChange={e => setBioSearchQuery(e.target.value)}
                  className="w-full pl-3 pr-3 py-1.5 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Unit Selector Pills */}
            <div className="pt-2 border-t border-gray-100 flex items-center space-x-1 overflow-x-auto custom-scrollbar">
              <span className="text-[11px] font-bold text-gray-500 mr-1.5 flex items-center space-x-1 shrink-0">
                <BookMarked className="w-3.5 h-3.5 text-emerald-600" />
                <span>Unit:</span>
              </span>
              <button
                onClick={() => setBioUnitFilter('all')}
                className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap ${
                  bioUnitFilter === 'all'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                All Units
              </button>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(unitNum => (
                <button
                  key={unitNum}
                  onClick={() => setBioUnitFilter(unitNum)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap ${
                    bioUnitFilter === unitNum
                      ? 'bg-emerald-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  Unit {unitNum}
                </button>
              ))}
            </div>
          </div>

          {/* 38 CHAPTERS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredBioChapters.map(ch => (
              <div
                key={ch.id}
                className="rounded-lg bg-white border border-gray-200 hover:border-emerald-500 p-4 shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono">
                        {ch.classLevel} &bull; Unit {ch.unitNumber}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-mono">
                        Ch {ch.chapterNumber}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-mono">
                      Weightage: {ch.weightageInNEET}
                    </span>
                  </div>

                  {/* Chapter Title */}
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {ch.title}
                  </h3>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">
                    Unit {ch.unitNumber}: {ch.unitTitle}
                  </div>

                  {/* Subtopics */}
                  <div className="mt-2.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                      Key Micro-Topics in Question Bank:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {ch.subtopics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-gray-50 text-gray-700 border border-gray-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Question Bank Stats Box */}
                  <div className="grid grid-cols-3 gap-2 my-3 py-2 px-3 rounded bg-emerald-50/60 border border-emerald-200 text-center font-mono">
                    <div>
                      <div className="text-[9px] uppercase text-emerald-800 font-semibold">Available Qs</div>
                      <div className="text-xs font-bold text-emerald-900">{ch.totalQuestionsAvailable}+ Qs</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase text-emerald-800 font-semibold">Question Types</div>
                      <div className="text-xs font-bold text-emerald-900">MCQ + AR + PYQ</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase text-emerald-800 font-semibold">NCERT Line Tag</div>
                      <div className="text-xs font-bold text-emerald-900">100% Page Ref</div>
                    </div>
                  </div>
                </div>

                {/* Direct Test Duration Launch Buttons */}
                <div className="pt-3 border-t border-gray-100 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Instant Full-Screen CBT Test Modes:
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => handleLaunchChapterTest(ch, '15_mins')}
                      className="px-2 py-1.5 rounded bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-800 border border-emerald-300 font-semibold text-[11px] flex flex-col items-center justify-center transition-all"
                    >
                      <span className="font-bold">15m Sprint</span>
                      <span className="text-[9px] opacity-80 font-mono">15 Qs &bull; 60M</span>
                    </button>
                    <button
                      onClick={() => handleLaunchChapterTest(ch, '30_mins')}
                      className="px-2 py-1.5 rounded bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-800 border border-blue-300 font-semibold text-[11px] flex flex-col items-center justify-center transition-all"
                    >
                      <span className="font-bold">30m Drill</span>
                      <span className="text-[9px] opacity-80 font-mono">30 Qs &bull; 120M</span>
                    </button>
                    <button
                      onClick={() => handleLaunchChapterTest(ch, '1_hour')}
                      className="px-2 py-1.5 rounded bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-800 border border-purple-300 font-semibold text-[11px] flex flex-col items-center justify-center transition-all"
                    >
                      <span className="font-bold">1-Hr Test</span>
                      <span className="text-[9px] opacity-80 font-mono">45 Qs &bull; 180M</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBioChapters.length === 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center space-y-2">
              <AlertCircle className="w-8 h-8 text-gray-400 mx-auto" />
              <h3 className="text-sm font-bold text-gray-800">No Chapters Found</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                No biology chapters matched your search query. Try clearing your search text.
              </p>
              <button
                onClick={() => {
                  setBioClassFilter('all');
                  setBioUnitFilter('all');
                  setBioSearchQuery('');
                }}
                className="mt-2 px-3 py-1.5 rounded bg-emerald-600 text-white text-xs font-semibold"
              >
                Show All 38 Chapters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
