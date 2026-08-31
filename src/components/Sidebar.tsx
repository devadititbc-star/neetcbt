import React from 'react';
import {
  FileCheck2,
  Sliders,
  Sparkles,
  BookOpen,
  Info,
  Trophy,
  Headphones,
  Layers,
  Network,
  LineChart,
  FileSpreadsheet,
  BookMarked,
  HelpCircle,
  ShieldCheck,
  Zap,
  CalendarCheck
} from 'lucide-react';

export type TabType =
  | 'test-series'
  | 'target-batch'
  | 'what-extra'
  | 'about-exam'
  | 'about-us'
  | 'our-results'
  | 'support';

interface SidebarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  extraSubTab?: string;
  onSelectExtraSubTab?: (subTab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  extraSubTab,
  onSelectExtraSubTab
}) => {
  const menuItems = [
    {
      id: 'test-series' as TabType,
      label: '1. Scheduled Test Series',
      sublabel: 'Sunday Majors (Levels 1-4) & 10-Day Cycles',
      icon: FileCheck2,
      badge: 'Sundays'
    },
    {
      id: 'target-batch' as TabType,
      label: '2. Target Batch: Custom Tests',
      sublabel: 'Select What You Get (15m, 30m, 1hr Drills)',
      icon: Sliders,
      badge: 'No Masterclass',
      highlight: true
    },
    {
      id: 'what-extra' as TabType,
      label: '3. Student Analytics & Tools',
      sublabel: 'Sub-topic Heatmaps, 10K Flashcards, Mind Maps',
      icon: Sparkles,
      badge: '7 Tools'
    },
    {
      id: 'about-exam' as TabType,
      label: '4. About NEET/JEE (NTA Data)',
      sublabel: 'Official NTA Pattern, Syllabus & 108K+ Seats',
      icon: BookOpen,
      badge: 'nta.ac.in'
    },
    {
      id: 'about-us' as TabType,
      label: '5. About NEETcbt Test Series',
      sublabel: 'Test Series Pedagogy & NCERT Focus',
      icon: Info
    },
    {
      id: 'our-results' as TabType,
      label: '6. Results & AIR Rankers',
      sublabel: 'AIIMS Delhi Selections & AIR 1 Toppers',
      icon: Trophy,
      badge: 'AIR 1'
    },
    {
      id: 'support' as TabType,
      label: '7. Support & AI Chatbot',
      sublabel: '24/7 AI Chatbot & Academic Doubt Desk',
      icon: Headphones,
      badge: 'Chatbot'
    }
  ];

  const extraSubModules = [
    { id: 'analytics', label: 'Performance Analytics', icon: LineChart },
    { id: 'custom-test', label: 'Custom Test Generator', icon: Sliders },
    { id: 'flash-cards', label: 'Interactive Flashcards', icon: Layers },
    { id: 'mind-maps', label: 'Visual Mind Maps', icon: Network },
    { id: 'dpp-generator', label: 'DPP Generator', icon: FileSpreadsheet },
    { id: 'books', label: 'NCERT Textbooks & NTA Papers', icon: BookMarked },
    { id: 'pyqs', label: 'NEET/JEE PYQ Archive', icon: HelpCircle }
  ];

  return (
    <aside className="w-full lg:w-64 bg-[#111827] border-r border-gray-800 flex flex-col shrink-0 text-white select-none">
      {/* Platform Header in Sidebar */}
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-[10px]">
            C
          </div>
          <span className="font-bold text-xs tracking-tight text-white uppercase">
            NEETcbt Engine
          </span>
        </div>
        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
          NTA 2026
        </span>
      </div>

      {/* Main Navigation List */}
      <nav className="p-2 space-y-1 overflow-y-auto flex-1 custom-scrollbar">
        <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
          Test Series Modules
        </div>

        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div key={item.id}>
              <button
                id={`sidebar-tab-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between group ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-100'
                }`}
              >
                <div className="flex items-center space-x-2.5 min-w-0">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-400'
                    }`}
                  />
                  <div className="truncate text-xs font-medium">{item.label}</div>
                </div>

                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-bold uppercase tracking-tight shrink-0 ${
                      isActive
                        ? 'bg-blue-700 text-blue-100'
                        : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>

              {/* Sub-items for "Student Analytics & Tools" when active */}
              {item.id === 'what-extra' && isActive && (
                <div className="ml-4 pl-2 my-1 border-l border-gray-700 space-y-0.5 animate-in fade-in duration-100">
                  {extraSubModules.map(sub => {
                    const SubIcon = sub.icon;
                    const isSubActive = extraSubTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        id={`sidebar-subtab-${sub.id}`}
                        onClick={e => {
                          e.stopPropagation();
                          if (onSelectExtraSubTab) onSelectExtraSubTab(sub.id);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded text-[11px] flex items-center space-x-2 transition-colors ${
                          isSubActive
                            ? 'bg-blue-500/20 text-blue-300 font-semibold'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                        }`}
                      >
                        <SubIcon className="w-3 h-3 shrink-0" />
                        <span className="truncate">{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Trust & Guarantee Footer Card */}
      <div className="p-3 border-t border-gray-800 bg-[#0d121d]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-sm bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-semibold text-gray-200 truncate">NEETcbt Engine v4.2</p>
            <p className="text-[10px] text-gray-500 truncate font-mono">100% Full-Screen CBT</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
