import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Bell,
  MessageCircleQuestion,
  Play,
  Search,
  Award,
  ChevronDown,
  Zap
} from 'lucide-react';
import { ExamType } from '../types';

interface HeaderProps {
  activeExam: ExamType;
  onSelectExam: (exam: ExamType) => void;
  onOpenQuickTest: () => void;
  onOpenDoubtModal: () => void;
  completedTestsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeExam,
  onSelectExam,
  onOpenQuickTest,
  onOpenDoubtModal,
  completedTestsCount
}) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const examOptions: { label: string; value: ExamType; badge?: string }[] = [
    { label: 'NEET (UG) Medical', value: 'NEET', badge: 'Primary' },
    { label: 'JEE Main & Advanced', value: 'JEE_MAIN', badge: 'Engineering' },
    { label: 'CUET UG', value: 'CUET' },
    { label: 'Olympiads & KVPY', value: 'OLYMPIAD' },
    { label: 'Foundation (9th & 10th)', value: 'FOUNDATION' },
    { label: 'Class 11 & 12 Boards', value: 'BOARDS' }
  ];

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 text-[#1F2937] shadow-sm">
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-black text-xs shadow-xs tracking-tight uppercase">
              CBT
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base tracking-tight text-gray-900">
                  NEET<span className="text-blue-600">cbt</span><span className="text-xs text-gray-500 font-semibold">.com</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                  <Zap className="w-2.5 h-2.5 mr-1 text-blue-600" /> NTA CBT Engine
                </span>
              </div>
            </div>
          </div>

          {/* Target Exam Dropdown */}
          <div className="relative">
            <button
              id="exam-selector-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs font-medium text-gray-700 transition-colors"
            >
              <span className="text-[10px] uppercase font-bold text-gray-400">Target:</span>
              <span className="text-blue-700 font-bold">
                {examOptions.find(o => o.value === activeExam)?.label || activeExam}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-1.5 w-64 rounded-md bg-white border border-gray-200 shadow-lg py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                  Select Exam Goal
                </div>
                {examOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSelectExam(option.value);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-gray-50 transition-colors ${
                      activeExam === option.value
                        ? 'text-blue-700 font-semibold bg-blue-50/70'
                        : 'text-gray-700'
                    }`}
                  >
                    <span>{option.label}</span>
                    {option.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-gray-100 text-gray-600 font-semibold uppercase">
                        {option.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats & Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* System / Sync indicator badge */}
            <div className="hidden md:flex items-center gap-2 bg-gray-50 px-2.5 py-1 rounded text-xs text-gray-600 border border-gray-200 font-mono text-[11px]">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase font-bold text-gray-700">NTA Engine Online</span>
            </div>

            {/* Completed Tests Count */}
            <div className="hidden lg:flex items-center space-x-1.5 px-2.5 py-1 rounded bg-gray-50 border border-gray-200 text-xs">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-gray-500 text-[11px]">Attempted:</span>
              <span className="font-bold text-gray-900 bg-white px-1.5 py-0.2 rounded border border-gray-200 text-[11px]">
                {completedTestsCount}
              </span>
            </div>

            {/* Ask Doubt Button */}
            <button
              id="header-ask-doubt-btn"
              onClick={onOpenDoubtModal}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded bg-white hover:bg-gray-50 text-gray-700 text-xs font-medium border border-gray-200 shadow-xs transition"
              title="Instant 24/7 Subject Doubt Resolution"
            >
              <MessageCircleQuestion className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline">Ask Doubt</span>
            </button>

            {/* Launch Mock Test */}
            <button
              id="header-start-mock-btn"
              onClick={onOpenQuickTest}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Start CBT Exam</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
