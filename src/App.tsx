import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar, TabType } from './components/Sidebar';
import { TestSeriesSection } from './components/TestSeriesSection';
import { TargetBatchSection } from './components/TargetBatchSection';
import { WhatExtraSection } from './components/WhatExtraSection';
import { AboutExamSection } from './components/AboutExamSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ResultsSection } from './components/ResultsSection';
import { SupportSection } from './components/SupportSection';
import { CBTTestModal } from './components/CBTTestModal';
import { LiveDoubtModal } from './components/LiveDoubtModal';
import { BookReaderModal } from './components/BookReaderModal';

import {
  TEST_SERIES_DATA,
  TARGET_BATCH_PACKAGES,
  FLASHCARDS_DATA,
  MIND_MAPS_DATA,
  BOOKS_DATA,
  PYQS_DATA
} from './data/mockData';
import { ExamType, TestItem, TargetBatchPackage, BookItem, UserTestResult } from './types';

export default function App() {
  const [activeExam, setActiveExam] = useState<ExamType>('NEET');
  const [activeTab, setActiveTab] = useState<TabType>('test-series');
  const [extraSubTab, setExtraSubTab] = useState<string>('analytics');

  // Modal States
  const [activeTestForCBT, setActiveTestForCBT] = useState<TestItem | null>(null);
  const [isDoubtModalOpen, setIsDoubtModalOpen] = useState(false);
  const [activeBookForReading, setActiveBookForReading] = useState<BookItem | null>(null);

  // User History & Stats
  const [completedTests, setCompletedTests] = useState<UserTestResult[]>([]);
  const [enrolledPackageIds, setEnrolledPackageIds] = useState<string[]>([]);

  const handleStartTest = (test: TestItem) => {
    setActiveTestForCBT(test);
  };

  const handleSaveTestResult = (result: UserTestResult) => {
    setCompletedTests(prev => [result, ...prev]);
  };

  const handleEnrollPackage = (pkg: TargetBatchPackage) => {
    if (!enrolledPackageIds.includes(pkg.id)) {
      setEnrolledPackageIds(prev => [...prev, pkg.id]);
    }
  };

  const handleQuickMockTest = () => {
    const defaultMock = TEST_SERIES_DATA.find(t => t.category === 'sunday_major') || TEST_SERIES_DATA[0];
    setActiveTestForCBT(defaultMock);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#1F2937] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation Header */}
      <Header
        activeExam={activeExam}
        onSelectExam={setActiveExam}
        onOpenQuickTest={handleQuickMockTest}
        onOpenDoubtModal={() => setIsDoubtModalOpen(true)}
        completedTestsCount={completedTests.length}
      />

      {/* Main Layout Container */}
      <div className="flex-1 flex flex-col lg:flex-row w-full mx-auto">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          extraSubTab={extraSubTab}
          onSelectExtraSubTab={setExtraSubTab}
        />

        {/* Dynamic Content Area */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6 overflow-y-auto bg-[#F3F4F6] min-w-0">
          {activeTab === 'test-series' && (
            <TestSeriesSection
              testItems={TEST_SERIES_DATA}
              onStartTest={handleStartTest}
              onNavigateToTargetBatch={() => setActiveTab('target-batch')}
            />
          )}

          {activeTab === 'target-batch' && (
            <TargetBatchSection
              packages={TARGET_BATCH_PACKAGES}
              onStartCustomTest={handleStartTest}
              onEnrollPackage={handleEnrollPackage}
            />
          )}

          {activeTab === 'what-extra' && (
            <WhatExtraSection
              activeSubTab={extraSubTab}
              onSelectSubTab={setExtraSubTab}
              flashcards={FLASHCARDS_DATA}
              mindMaps={MIND_MAPS_DATA}
              books={BOOKS_DATA}
              pyqs={PYQS_DATA}
              onStartCustomTest={handleStartTest}
              onOpenBook={setActiveBookForReading}
              completedTests={completedTests}
            />
          )}

          {activeTab === 'about-exam' && <AboutExamSection />}

          {activeTab === 'about-us' && <AboutUsSection />}

          {activeTab === 'our-results' && <ResultsSection />}

          {activeTab === 'support' && (
            <SupportSection
              onOpenAskDoubtModal={() => setIsDoubtModalOpen(true)}
            />
          )}
        </main>
      </div>

      {/* CBT Test Simulation Modal */}
      {activeTestForCBT && (
        <CBTTestModal
          test={activeTestForCBT}
          onClose={() => setActiveTestForCBT(null)}
          onSaveResult={handleSaveTestResult}
        />
      )}

      {/* 24/7 Academic Doubt Modal */}
      {isDoubtModalOpen && (
        <LiveDoubtModal onClose={() => setIsDoubtModalOpen(false)} />
      )}

      {/* NCERT & Books Reader Modal */}
      {activeBookForReading && (
        <BookReaderModal
          book={activeBookForReading}
          onClose={() => setActiveBookForReading(null)}
        />
      )}
    </div>
  );
}
