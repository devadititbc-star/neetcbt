import React from 'react';
import {
  Info,
  Target,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Users,
  LineChart,
  BookOpen,
  Headphones,
  Award,
  Sparkles,
  Zap,
  Sliders
} from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-blue-200">
          <Info className="w-3 h-3" />
          <span>Test Series Pedagogy & Story</span>
        </div>
        <h1 className="text-base sm:text-lg font-bold text-gray-900">
          5. About NEETcbt Test Series
        </h1>
        <p className="mt-0.5 text-xs text-gray-500 max-w-3xl">
          India's most authentic NCERT-first test platform (neetcbt.com), empowering over 1,500,000 aspirants with progressive Sunday Major Test Series (Levels 1 to 4), 10-day cyclic drills, and Target Batch Custom Test Generator.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Mission */}
        <div className="p-4 rounded-lg bg-white border border-gray-200 shadow-xs space-y-2">
          <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
            <Target className="w-4 h-4" />
          </div>
          <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
            Our Core Mission
          </div>
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
            100% NCERT Focused Testing & Transparent AIR Rank Tracking
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            We believe that NEET selection is won through rigorous question testing rather than passive watching. By combining strict NCERT question filters, 15m/30m/1hr drills, progressive Sunday Level tests, and AI error diagnosis, we ensure every student practices on an exact NTA CBT simulation.
          </p>
        </div>

        {/* Vision */}
        <div className="p-4 rounded-lg bg-white border border-gray-200 shadow-xs space-y-2">
          <div className="w-8 h-8 rounded bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
            <Eye className="w-4 h-4" />
          </div>
          <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
            Our Vision
          </div>
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
            Empowering Every Aspirant to Enter Top Government Medical Colleges
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            To provide every serious NEET aspirant across India with the exact same high-caliber Q-banks, NTA-standard Section A & B simulations, and scheduled pen-and-paper Classroom Test Series previously exclusive to premier Kota coaching centres.
          </p>
        </div>
      </div>

      {/* Why Choose Us (5 Core Testing Pillars) */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs">
        <div className="border-b border-gray-100 pb-3">
          <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-0.5">
            Why Choose Us
          </div>
          <h2 className="text-sm sm:text-base font-bold text-gray-900">
            5 Core Testing Pillars That Set Us Apart
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Progressive Sunday levels, custom test generator, AI diagnostics, NCERT line-by-line bank, and academic doubt desk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1.5">
            <div className="w-7 h-7 rounded bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-bold text-gray-900">1. Progressive Sunday Tests</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Step-by-step difficulty progression: Level 1 (Core NCERT), Level 2 (Application), Level 3 (Rank Booster), and Level 4 (Grand NTA Simulation).
            </p>
          </div>

          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1.5">
            <div className="w-7 h-7 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <Sliders className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-bold text-gray-900">2. Custom Test Generator</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              "Select What You Get" builder allowing instant test generation with 15m, 30m, and 1hr durations by chapter and question style.
            </p>
          </div>

          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1.5">
            <div className="w-7 h-7 rounded bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-bold text-gray-900">3. Official NTA CBT Simulator</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Exact replica of the NTA Computer-Based Test engine with live countdown timer, Section A & B format, and palette indicators.
            </p>
          </div>

          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1.5">
            <div className="w-7 h-7 rounded bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
              <LineChart className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-bold text-gray-900">4. AI Diagnostic Error Log</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Deep diagnostic scans identify weak sub-topics, calculate average time per question, and simulate national percentiles and AIR.
            </p>
          </div>

          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1.5">
            <div className="w-7 h-7 rounded bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200">
              <Headphones className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-bold text-gray-900">5. 24/7 Doubt Desk & Chatbot</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Verified step-by-step academic solutions, 24/7 AI Support Chatbot, and sub-10 minute query resolution by senior experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
