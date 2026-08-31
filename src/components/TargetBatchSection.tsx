import React, { useState } from 'react';
import {
  Sliders,
  Sparkles,
  Layers,
  Clock,
  CheckCircle2,
  FileCheck,
  CalendarCheck,
  ShieldCheck,
  Play,
  ArrowRight,
  Target,
  Zap,
  BookOpen,
  Check,
  Award,
  BarChart3,
  Flame,
  HelpCircle
} from 'lucide-react';
import { TargetBatchPackage, TestItem, TestLevel, QuestionType, Question } from '../types';
import { SAMPLE_QUESTIONS } from '../data/mockData';
import { BIOLOGY_38_CHAPTERS } from '../data/biologyQuestionBank';

interface TargetBatchSectionProps {
  packages: TargetBatchPackage[];
  onStartCustomTest: (test: TestItem) => void;
  onEnrollPackage: (pkg: TargetBatchPackage) => void;
}

export const TargetBatchSection: React.FC<TargetBatchSectionProps> = ({
  packages,
  onStartCustomTest,
  onEnrollPackage
}) => {
  // Custom Test Generator State
  const [subject, setSubject] = useState<'Physics' | 'Chemistry' | 'Biology' | 'Mathematics' | 'Combined PCB'>('Biology');
  const [chapter, setChapter] = useState<string>('Molecular Basis of Inheritance');
  const [topic, setTopic] = useState<string>('All Micro-Topics in Chapter');
  const [difficulty, setDifficulty] = useState<TestLevel>('Level 2');

  const [durationMinutes, setDurationMinutes] = useState<number>(30);
  const [questionCount, setQuestionCount] = useState<number>(30);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([
    'Standard MCQ',
    'Assertion-Reason',
    'Statement I & II'
  ]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'instant_cbt',
    'air_predictor',
    'error_log',
    'step_solutions',
    'omr_pdf'
  ]);
  const [enrolledSuccessId, setEnrolledSuccessId] = useState<string | null>(null);

  // Duration presets
  const durationPresets = [
    { mins: 15, qCount: 15, label: '15 Mins (Rapid Sprint)', desc: '15 Questions &bull; 60 Marks &bull; Pacing Drill' },
    { mins: 30, qCount: 30, label: '30 Mins (Chapter Mastery)', desc: '30 Questions &bull; 120 Marks &bull; Concept Drill' },
    { mins: 60, qCount: 45, label: '1 Hour (Unit / Part Mock)', desc: '45 Questions &bull; 180 Marks &bull; Sectional Test' },
    { mins: 200, qCount: 180, label: '200 Mins (Full NTA Grand Mock)', desc: '180 Questions &bull; 720 Marks &bull; Real Exam' }
  ];

  const handleSelectDurationPreset = (preset: typeof durationPresets[0]) => {
    setDurationMinutes(preset.mins);
    setQuestionCount(preset.qCount);
  };

  const handleToggleStyle = (style: string) => {
    setSelectedStyles(prev =>
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const handleToggleAddon = (addon: string) => {
    setSelectedAddons(prev =>
      prev.includes(addon) ? prev.filter(a => a !== addon) : [...prev, addon]
    );
  };

  const handleGenerateAndLaunchTest = () => {
    let testQuestions: Question[] = SAMPLE_QUESTIONS;

    if (subject === 'Biology') {
      const bioCh = BIOLOGY_38_CHAPTERS.find(c => c.title === chapter) || BIOLOGY_38_CHAPTERS[0];
      if (bioCh && bioCh.sampleQuestions.length > 0) {
        testQuestions = [];
        for (let i = 0; i < questionCount; i++) {
          const baseQ = bioCh.sampleQuestions[i % bioCh.sampleQuestions.length];
          testQuestions.push({
            ...baseQ,
            id: `custom-q-${bioCh.id}-${i + 1}`,
            chapter: bioCh.title,
            topic: topic === 'All Micro-Topics in Chapter'
              ? (bioCh.subtopics[i % bioCh.subtopics.length] || bioCh.title)
              : topic
          });
        }
      }
    }

    const customTestItem: TestItem = {
      id: `custom-target-${Date.now()}`,
      title: `Target Batch Custom Test: ${subject} - ${chapter}`,
      category: 'custom',
      exam: 'NEET',
      level: difficulty,
      levelLabel: `${difficulty}: ${subject} Drill`,
      scheduleCycle: 'On Demand',
      durationCategory:
        durationMinutes <= 15
          ? '15_mins'
          : durationMinutes <= 30
          ? '30_mins'
          : durationMinutes <= 60
          ? '1_hour'
          : 'full_mock',
      syllabus: `${subject} > ${chapter} > ${topic} (${difficulty})`,
      totalQuestions: questionCount,
      durationMinutes: durationMinutes,
      totalMarks: questionCount * 4,
      negativeMarking: '+4 for correct, -1 for incorrect',
      difficulty: difficulty === 'Level 1' ? 'Easy' : difficulty === 'Level 2' ? 'Medium' : 'Hard',
      cbtMode: true,
      features: [
        `Subject: ${subject}`,
        `Chapter: ${chapter}`,
        `Duration: ${durationMinutes} Mins`,
        `Questions: ${questionCount} Qs`,
        `Level: ${difficulty}`,
        `Question Styles: ${selectedStyles.join(', ')}`
      ],
      questions: testQuestions
    };

    onStartCustomTest(customTestItem);
  };


  const handleEnrollClick = (pkg: TargetBatchPackage) => {
    setEnrolledSuccessId(pkg.id);
    onEnrollPackage(pkg);
    setTimeout(() => {
      setEnrolledSuccessId(null);
    }, 4000);
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5">
              <Sliders className="w-3 h-3 text-blue-600" /> Target Batch 2026: Custom Test Generator
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              2. Target Batch: "Select What You Get" Custom Test Generator
            </h1>
            <p className="mt-1 text-xs text-gray-600 max-w-3xl">
              Strictly test series oriented — zero coaching, no masterclass or video lectures. Customize your exact test duration (15m, 30m, 1hr), select chapters, question styles, and difficulty levels on demand with instant NTA CBT evaluation.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded font-bold">
              ● Custom Test Engine Active
            </span>
          </div>
        </div>

        {/* 4 Feature Pillars of Target Batch Custom Generator */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded bg-gray-50 border border-gray-200 flex items-center space-x-2.5">
            <div className="p-1.5 rounded bg-blue-100 text-blue-700">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">15m / 30m / 1hr</div>
              <div className="text-[10px] text-gray-500 font-mono">Standard Durations</div>
            </div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200 flex items-center space-x-2.5">
            <div className="p-1.5 rounded bg-green-100 text-green-700">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Select What You Get</div>
              <div className="text-[10px] text-gray-500 font-mono">100% Customization</div>
            </div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200 flex items-center space-x-2.5">
            <div className="p-1.5 rounded bg-amber-100 text-amber-700">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">NTA Trap Styles</div>
              <div className="text-[10px] text-gray-500 font-mono">AR & Statement I/II</div>
            </div>
          </div>
          <div className="p-3 rounded bg-gray-50 border border-gray-200 flex items-center space-x-2.5">
            <div className="p-1.5 rounded bg-purple-100 text-purple-700">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Instant AI Diagnosis</div>
              <div className="text-[10px] text-gray-500 font-mono">AIR & Weak Spots</div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. INTERACTIVE "SELECT WHAT YOU GET" CUSTOM TEST BUILDER */}
      {/* ======================================================== */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
              <Sliders className="w-4 h-4 text-blue-600" />
              <span>Interactive Custom Test Configurator</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Assemble your personalized test package. Pick subject, chapter, duration, difficulty, and question formats.
            </p>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 self-start sm:self-auto uppercase">
            No Masterclass &bull; Pure Tests
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Step 1: Subject Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              1. Select Subject Focus
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {(['Biology', 'Physics', 'Chemistry', 'Mathematics', 'Combined PCB'] as const).map(subj => (
                <button
                  key={subj}
                  onClick={() => setSubject(subj)}
                  className={`py-1.5 px-2 rounded text-xs font-semibold transition-colors text-center ${
                    subject === subj
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {subj}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Difficulty Level */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              2. Select Difficulty Level
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {(['Level 1', 'Level 2', 'Level 3', 'Level 4'] as const).map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setDifficulty(lvl)}
                  className={`py-1.5 px-2 rounded text-xs font-semibold transition-colors text-center ${
                    difficulty === lvl
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Chapter Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-between">
              <span>3. Select Chapter</span>
              {subject === 'Biology' && (
                <span className="text-emerald-700 font-mono text-[9px] font-bold">
                  38 NCERT Chapters Available
                </span>
              )}
            </label>
            <select
              value={chapter}
              onChange={e => {
                const newChapter = e.target.value;
                setChapter(newChapter);
                if (subject === 'Biology') {
                  const bioObj = BIOLOGY_38_CHAPTERS.find(c => c.title === newChapter);
                  if (bioObj && bioObj.subtopics.length > 0) {
                    setTopic('All Micro-Topics in Chapter');
                  }
                }
              }}
              className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs font-medium text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white"
            >
              {subject === 'Biology' && (
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
              {subject === 'Physics' && (
                <>
                  <option value="Mechanics & Laws of Motion">Mechanics & Laws of Motion (Kinematics + Dynamics)</option>
                  <option value="Electrodynamics & Current">Electrodynamics, Magnetism & Current</option>
                  <option value="Ray & Wave Optics">Ray & Wave Optics</option>
                  <option value="Modern Physics & Atoms">Modern Physics, Dual Nature & Semiconductors</option>
                  <option value="Thermodynamics & Kinetic Theory">Thermodynamics & Kinetic Theory</option>
                </>
              )}
              {subject === 'Chemistry' && (
                <>
                  <option value="Organic Chemistry Mechanisms">Organic Chemistry (Aldehydes, Ketones & Amines)</option>
                  <option value="Chemical Kinetics & Equilibrium">Chemical Kinetics & Ionic Equilibrium</option>
                  <option value="Coordination Compounds">Coordination Compounds & d/f Block</option>
                  <option value="Electrochemistry & Solutions">Electrochemistry & Solutions</option>
                  <option value="Chemical Bonding & Periodic Table">Chemical Bonding & Periodic Table</option>
                </>
              )}
              {subject === 'Mathematics' && (
                <>
                  <option value="Calculus & Integration">Differential & Integral Calculus</option>
                  <option value="Vectors & 3D Geometry">Vectors & 3D Geometry</option>
                  <option value="Coordinate Geometry">Coordinate Geometry (Conics)</option>
                  <option value="Probability & Statistics">Probability & Statistics</option>
                </>
              )}
              {subject === 'Combined PCB' && (
                <>
                  <option value="Full Class 11 PCB Unit 1">Full Class 11 PCB Unit 1</option>
                  <option value="Full Class 12 PCB High Yield Mix">Full Class 12 PCB High Yield Mix</option>
                  <option value="Complete PCB Grand Mock Blend">Complete PCB Grand Mock Blend</option>
                </>
              )}
            </select>
          </div>

          {/* Step 4: Topic Selection */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              4. Select Sub-Topic Focus
            </label>
            <select
              value={topic}
              onChange={e => setTopic(e.target.value)}
              className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs font-medium text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white"
            >
              {subject === 'Biology' ? (
                <>
                  <option value="All Micro-Topics in Chapter">All Micro-Topics in Chapter (Balanced Full Blend)</option>
                  {(BIOLOGY_38_CHAPTERS.find(c => c.title === chapter)?.subtopics || []).map((sub, idx) => (
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
        </div>


        {/* Step 5: DURATION PRESETS (15 MINS, 30 MINS, 1 HR, 200 MINS) */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold text-gray-700 uppercase tracking-wider flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>5. Select Test Duration & Question Count Preset</span>
            </label>
            <span className="text-xs font-mono font-bold text-blue-700">
              Selected: {durationMinutes} Mins &bull; {questionCount} Questions ({questionCount * 4} Marks)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {durationPresets.map(preset => {
              const isSelected = durationMinutes === preset.mins;
              return (
                <div
                  key={preset.mins}
                  onClick={() => handleSelectDurationPreset(preset)}
                  className={`cursor-pointer p-3 rounded-lg border transition-all ${
                    isSelected
                      ? 'bg-blue-50 border-blue-600 shadow-xs ring-1 ring-blue-500'
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900">{preset.label}</span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.2 rounded font-mono ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {preset.mins}m
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1 font-mono">{preset.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 6: Question Styles (NTA Trap Formats) */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <label className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">
            6. Select Question Formats & NTA Trap Patterns
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'Standard MCQ', label: 'Standard Single-Choice MCQs' },
              { id: 'Assertion-Reason', label: 'Assertion & Reason (AR)' },
              { id: 'Statement I & II', label: 'Statement I & II Analysis' },
              { id: 'Match the Columns', label: 'Match the Columns Matrix' }
            ].map(style => {
              const checked = selectedStyles.includes(style.id);
              return (
                <button
                  key={style.id}
                  onClick={() => handleToggleStyle(style.id)}
                  className={`p-2 rounded text-xs font-medium text-left border flex items-center space-x-2 transition-colors ${
                    checked
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-white'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                      checked ? 'bg-emerald-600 text-white' : 'border border-gray-300 bg-white'
                    }`}
                  >
                    {checked && '✓'}
                  </div>
                  <span className="truncate">{style.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 7: "SELECT WHAT YOU GET" DELIVERABLES CHECKLIST */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <label className="text-[10px] font-bold text-gray-700 uppercase tracking-wider flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>7. "Select What You Get" Add-ons Checklist</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'instant_cbt', label: 'Instant NTA CBT Simulation', desc: 'Real countdown timer + Palette' },
              { id: 'air_predictor', label: 'Predicted AIR & Percentile', desc: 'National rank benchmarking' },
              { id: 'error_log', label: 'AI Error Log & Weak Spot Tag', desc: 'Trap diagnosis & sub-topic review' },
              { id: 'step_solutions', label: 'Step-by-Step Verified Solutions', desc: 'NCERT page references' },
              { id: 'omr_pdf', label: 'Downloadable OMR Sheet & PDF', desc: 'Printable for offline pen practice' }
            ].map(addon => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => handleToggleAddon(addon.id)}
                  className={`p-2.5 rounded border cursor-pointer flex items-start space-x-2 transition-colors ${
                    isChecked
                      ? 'bg-blue-50/70 border-blue-300 text-blue-950'
                      : 'bg-gray-50 border-gray-200 text-gray-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded shrink-0 mt-0.5 flex items-center justify-center text-[10px] ${
                      isChecked ? 'bg-blue-600 text-white' : 'border border-gray-300 bg-white'
                    }`}
                  >
                    {isChecked && '✓'}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate">{addon.label}</div>
                    <div className="text-[10px] text-gray-500">{addon.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Generation Summary & Launch Button */}
        <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="space-y-1 text-xs">
            <div className="text-gray-900 font-bold">
              Ready to Launch: {subject} &bull; {chapter} &bull; {difficulty}
            </div>
            <div className="text-gray-600 font-mono text-[11px]">
              Duration: <span className="text-blue-700 font-bold">{durationMinutes} Mins</span> |{' '}
              Questions: <span className="text-amber-700 font-bold">{questionCount} Qs ({questionCount * 4} Marks)</span> |{' '}
              Marking: +4 / -1
            </div>
          </div>

          <button
            id="btn-launch-custom-target-test"
            onClick={handleGenerateAndLaunchTest}
            className="w-full sm:w-auto px-5 py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition-transform active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Launch Generated CBT Test ({durationMinutes}m)</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. CURATED TARGET BATCH TEST SERIES PACKAGES (NO COACHING) */}
      {/* ======================================================== */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center space-x-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Target Batch: Curated Test Series Packages (Pure Test Series Only)</span>
          </h2>
          <span className="text-[10px] text-gray-500 font-mono">100% CBT & OMR Oriented</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5">
          {packages.map(pkg => {
            const isEnrolled = enrolledSuccessId === pkg.id;

            return (
              <div
                key={pkg.id}
                className="rounded-lg bg-white border border-gray-200 hover:border-gray-300 shadow-xs overflow-hidden flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-mono">
                        {pkg.packageType}
                      </span>
                      {pkg.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                          ⭐ {pkg.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-gray-900 leading-snug">
                      {pkg.title}
                    </h3>

                    <div className="text-xs text-blue-700 font-semibold mt-1 font-mono">
                      {pkg.testCountSummary}
                    </div>

                    <div className="mt-2.5 flex items-baseline space-x-2">
                      <span className="text-xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-xs text-gray-400 line-through font-mono">{pkg.originalPrice}</span>
                      <span className="text-[11px] font-bold text-green-700 bg-green-50 px-1.5 py-0.2 rounded border border-green-200 font-mono">
                        {pkg.discount}
                      </span>
                    </div>
                  </div>

                  {/* Features / Deliverables */}
                  <div className="p-4 space-y-3">
                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center space-x-1">
                        <Sparkles className="w-3 h-3 text-blue-600" />
                        <span>Included Test Series Specifications</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables Box */}
                    <div className="p-2.5 rounded bg-gray-50 border border-gray-200 space-y-1 text-[11px]">
                      <div className="text-gray-700">
                        <strong className="text-gray-900">Durations:</strong> {pkg.deliverables.durationOptions}
                      </div>
                      <div className="text-gray-700">
                        <strong className="text-gray-900">Solutions:</strong> {pkg.deliverables.solutionSupport}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-4 pt-0">
                  {isEnrolled ? (
                    <div className="w-full py-2 rounded bg-green-50 border border-green-300 text-green-800 text-xs font-bold text-center flex items-center justify-center space-x-1.5 animate-in fade-in">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span>Test Series Unlocked Successfully!</span>
                    </div>
                  ) : (
                    <button
                      id={`btn-unlock-pkg-${pkg.id}`}
                      onClick={() => handleEnrollClick(pkg)}
                      className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors active:scale-98"
                    >
                      <span>Unlock {pkg.packageType}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
