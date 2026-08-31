import React, { useState } from 'react';
import {
  Trophy,
  Award,
  Star,
  Users,
  Building2,
  TrendingUp,
  Quote,
  Sparkles,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { RANKER_STORIES } from '../data/mockData';

export const ResultsSection: React.FC = () => {
  const [filterExam, setFilterExam] = useState<'All' | 'NEET' | 'JEE'>('All');

  const filteredRankers = RANKER_STORIES.filter(
    r => filterExam === 'All' || r.exam === filterExam
  );

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-amber-50 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-amber-200">
              <Trophy className="w-3 h-3 text-amber-600" />
              <span>Hall of Fame & Results</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-gray-900">
              6. Our Results & Success Stories
            </h1>
            <p className="mt-0.5 text-xs text-gray-500 max-w-3xl">
              Top rankers, student testimonials, admission statistics and achievement gallery.
            </p>
          </div>
        </div>

        {/* Admission Statistics Numbers */}
        <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-2.5 rounded bg-gray-50 border border-gray-200 text-center">
            <div className="text-base sm:text-lg font-bold text-amber-600 font-mono">AIR 1</div>
            <div className="text-[11px] text-gray-500">All India Rank 1 (NEET)</div>
          </div>
          <div className="p-2.5 rounded bg-gray-50 border border-gray-200 text-center">
            <div className="text-base sm:text-lg font-bold text-emerald-600 font-mono">94.8%</div>
            <div className="text-[11px] text-gray-500">Qualification Rate</div>
          </div>
          <div className="p-2.5 rounded bg-gray-50 border border-gray-200 text-center">
            <div className="text-base sm:text-lg font-bold text-blue-600 font-mono">14,200+</div>
            <div className="text-[11px] text-gray-500">Govt MBBS & IIT Admits</div>
          </div>
          <div className="p-2.5 rounded bg-gray-50 border border-gray-200 text-center">
            <div className="text-base sm:text-lg font-bold text-purple-600 font-mono">450+</div>
            <div className="text-[11px] text-gray-500">AIIMS & JIPMER Selections</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-1.5">
        {['All', 'NEET', 'JEE'].map(f => (
          <button
            key={f}
            onClick={() => setFilterExam(f as any)}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
              filterExam === f
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {f === 'All' ? 'All Top Rankers' : `${f} Rankers`}
          </button>
        ))}
      </div>

      {/* Top Rankers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredRankers.map(ranker => (
          <div
            key={ranker.id}
            className="rounded-lg bg-white border border-gray-200 p-4 flex flex-col justify-between hover:border-gray-300 transition-colors shadow-xs"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={ranker.image}
                    alt={ranker.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-amber-300 shadow-xs"
                  />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900">{ranker.name}</h3>
                    <div className="text-[11px] text-gray-500 flex items-center space-x-1 mt-0.5">
                      <Building2 className="w-3 h-3 text-blue-600" />
                      <span className="text-gray-700 font-semibold">{ranker.college}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 font-mono">
                    AIR {ranker.air}
                  </span>
                  <div className="text-[11px] font-bold text-emerald-700 font-mono mt-0.5">{ranker.score}</div>
                </div>
              </div>

              {/* Student Testimonial Quote */}
              <div className="p-3 rounded bg-gray-50 border border-gray-200 relative">
                <Quote className="w-3.5 h-3.5 text-gray-400 absolute top-2 right-2" />
                <p className="text-xs text-gray-700 italic leading-relaxed pr-5">
                  "{ranker.quote}"
                </p>
              </div>

              {/* Key Strategy */}
              <div className="mt-2.5 text-xs text-gray-600 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>
                  <strong className="text-gray-900 font-semibold">Success Habit:</strong> {ranker.keyStrategy}
                </span>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
              <span>Exam Year: {ranker.year} &bull; {ranker.category}</span>
              <span>State: {ranker.state}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Gallery & Media Ticker */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-3 shadow-xs">
        <div>
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 flex items-center space-x-1.5">
            <Award className="w-4 h-4 text-amber-600" />
            <span>National Achievement Gallery & Felicitations</span>
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Snapshots of student celebrations, AIIMS campus orientation, and top ranker honors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
          {[
            { title: 'AIIMS Delhi Felicitation', sub: 'Class of 2024 Honours' },
            { title: 'IIT Bombay Batch Meet', sub: '120+ Selections' },
            { title: 'Annual Toppers Award', sub: 'Cash Grants & Medals' },
            { title: 'Parent & Mentor Summit', sub: 'National Convention' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded bg-gray-50 border border-gray-200 text-center space-y-1 hover:border-gray-300 transition-colors"
            >
              <div className="w-7 h-7 mx-auto rounded bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <ImageIcon className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-bold text-gray-900">{item.title}</div>
              <div className="text-[10px] text-gray-500">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
