import React, { useState } from 'react';
import {
  Headphones,
  GraduationCap,
  Laptop,
  Users,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Clock,
  Sparkles,
  Bot,
  User,
  Zap,
  RotateCcw
} from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';

interface SupportSectionProps {
  onOpenAskDoubtModal: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export const SupportSection: React.FC<SupportSectionProps> = ({
  onOpenAskDoubtModal
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [counsellingFormSubmitted, setCounsellingFormSubmitted] = useState(false);
  const [counsellingName, setCounsellingName] = useState('');
  const [counsellingPhone, setCounsellingPhone] = useState('');

  const [techTicketSubmitted, setTechTicketSubmitted] = useState(false);
  const [techIssue, setTechIssue] = useState('');

  // AI Support Chatbot State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: 'Hello! I am your 24/7 NEETcbt AI Support & Academic Assistant. How can I assist you today? You can ask me about Sunday Major schedules (Levels 1 to 4), 10-day cyclic tests, the Custom Test Generator (15m/30m/1hr), NTA marking rules, or medical cutoffs.',
      time: 'Just now'
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  const quickPrompts = [
    'How do Sunday Major Levels 1 to 4 work?',
    'What are the 15m, 30m, and 1hr test durations?',
    'Explain the NTA marking scheme (+4 / -1 / 0)',
    'How do I generate a Custom Test in Target Batch?',
    'What is the cutoff for AIIMS New Delhi?'
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || userInput;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    if (!textToSend) setUserInput('');
    setIsBotTyping(true);

    setTimeout(() => {
      let botResponse = '';
      const lower = text.toLowerCase();

      if (lower.includes('sunday') || lower.includes('major') || lower.includes('level')) {
        botResponse = `**Sunday Major Test Series (Levels 1 to 4 Progression):**\n\n- **1st Sunday (Major 1 / Level 1):** Core NCERT Foundations (Class 11 Term 1).\n- **2nd Sunday (Major 2 / Level 2):** Advanced Application & Moderate Traps.\n- **3rd Sunday (Major 3 / Level 3):** All-India Rank Booster (High-order multi-chapter).\n- **4th Sunday (Major 4 / Level 4):** Grand Full Syllabus NTA CBT Simulator (Attempt 180 of 200 Qs).\n- **5th Sunday (Major 5 / Level 4):** AIIMS Ranker Benchmark Mock.\n\nAll tests feature 45 questions per subject (Physics, Chemistry, Botany, Zoology) in a 100% full-screen CBT simulator.`;
      } else if (lower.includes('duration') || lower.includes('15') || lower.includes('30') || lower.includes('1hr') || lower.includes('1 hour')) {
        botResponse = `**Standardized Test Durations on NEETcbt:**\n\n1. **15 Minutes (15 Qs / 60 Marks):** Rapid Sprint Drill for quick formula and reaction recall.\n2. **30 Minutes (30 Qs / 120 Marks):** Chapter Mastery Drill with Assertion-Reason and Statement questions.\n3. **1 Hour (45-60 Qs / 180-240 Marks):** Comprehensive Unit & Part Syllabus Assessment.\n4. **200 Minutes (180 Qs / 720 Marks):** Grand Full NTA Exam Simulator.`;
      } else if (lower.includes('marking') || lower.includes('nta') || lower.includes('pattern') || lower.includes('scheme')) {
        botResponse = `**Official NTA Exam Marking & Structure (nta.ac.in):**\n\n- **Marking Scheme:** **+4 Marks** for each correct response, **-1 Mark** for each incorrect response, **0 Marks** for unattempted.\n- **Section A:** 35 Compulsory questions per subject (140 marks).\n- **Section B:** 15 questions per subject (Attempt any 10 = 40 marks).\n- **Tie-Breaking Rules:** Biology Marks > Chemistry Marks > Physics Marks > Lowest proportion of incorrect responses.`;
      } else if (lower.includes('custom') || lower.includes('target batch') || lower.includes('generator')) {
        botResponse = `**Target Batch "Select What You Get" Custom Test Generator:**\n\n- **Zero Coaching / No Masterclasses:** 100% pure test-series oriented.\n- Customize your subject, chapter, and micro-topic combinations.\n- Select question styles (Assertion-Reason, Statement I/II, Match columns, Numerical).\n- Choose duration presets (**15m, 30m, 1hr**).\n- Launch straight into the full-screen CBT simulator with instant AI error analysis.`;
      } else if (lower.includes('cutoff') || lower.includes('aiims') || lower.includes('seat')) {
        botResponse = `**NEET Medical Cut-offs & AIIMS Matrix:**\n\n- **AIIMS New Delhi (NIRF #1):** General Closing Rank AIR ≤ 55 (Score ~715+/720).\n- **MAMC New Delhi:** General Closing Rank AIR ≤ 90 (Score ~710+/720).\n- **Total Verified MBBS Seats:** 108,000+ across 700+ Government and Private Medical Colleges.\n- **All India Quota (MCC):** 15% seats; **State Quota:** 85% seats.`;
      } else {
        botResponse = `Thank you for your question! As part of NEETcbt's 24/7 Academic Support, you can launch custom tests (15m, 30m, 1hr), attempt scheduled Sunday Major CBT tests (Levels 1 to 4), download watermark-free NCERT textbooks and NTA papers, or connect with our senior faculty panel.`;
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => [...prev, botMsg]);
      setIsBotTyping(false);
    }, 600);
  };

  const handleCounsellingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!counsellingName || !counsellingPhone) return;
    setCounsellingFormSubmitted(true);
    setTimeout(() => {
      setCounsellingFormSubmitted(false);
      setCounsellingName('');
      setCounsellingPhone('');
    }, 4000);
  };

  const handleTechSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!techIssue) return;
    setTechTicketSubmitted(true);
    setTimeout(() => {
      setTechTicketSubmitted(false);
      setTechIssue('');
    }, 4000);
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-blue-200">
              <Headphones className="w-3 h-3" />
              <span>24/7 Student Assistance</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-gray-900">
              7. Support Desk & 24/7 AI Chatbot
            </h1>
            <p className="mt-0.5 text-xs text-gray-500 max-w-3xl">
              Instant 24/7 AI Chatbot, Subject Academic Doubt Desk, Technical Support, 1-on-1 Counselling, Contact Channels and FAQs.
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. INTERACTIVE 24/7 AI SUPPORT CHATBOT */}
      {/* ======================================================== */}
      <div className="rounded-lg bg-white border border-gray-200 shadow-xs overflow-hidden">
        {/* Chatbot Header */}
        <div className="p-4 bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm font-bold">NEETcbt AI Support Assistant</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-300 font-mono">24/7 Online</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Ask about Sunday Major levels, test schedules, custom tests, cutoffs & doubts.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              setChatMessages([
                {
                  id: 'msg-1',
                  sender: 'bot',
                  text: 'Chat history reset. How can I assist you with your NEET/JEE preparation today?',
                  time: 'Just now'
                }
              ])
            }
            className="p-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs flex items-center space-x-1 transition-colors"
            title="Reset Chat"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">Clear</span>
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100 flex items-center space-x-1.5 overflow-x-auto custom-scrollbar">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider shrink-0 flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>Quick:</span>
          </span>
          {quickPrompts.map((prompt, pIdx) => (
            <button
              key={pIdx}
              onClick={() => handleSendMessage(prompt)}
              className="px-2.5 py-1 rounded bg-white hover:bg-blue-50 text-blue-800 text-[11px] font-medium border border-gray-200 hover:border-blue-300 whitespace-nowrap transition-colors shrink-0 shadow-2xs"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat Messages Log */}
        <div className="p-4 sm:p-5 space-y-3 max-h-80 sm:max-h-96 overflow-y-auto bg-gray-50/50 custom-scrollbar">
          {chatMessages.map(msg => {
            const isBot = msg.sender === 'bot';
            return (
              <div
                key={msg.id}
                className={`flex items-start space-x-2.5 ${
                  isBot ? 'justify-start' : 'justify-end'
                }`}
              >
                {isBot && (
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs shadow-xs">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-xl p-3 sm:p-3.5 rounded-lg text-xs leading-relaxed shadow-2xs ${
                    isBot
                      ? 'bg-white border border-gray-200 text-gray-800'
                      : 'bg-blue-600 text-white font-medium rounded-tr-none'
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.text}</div>
                  <div
                    className={`text-[9px] mt-1 font-mono ${
                      isBot ? 'text-gray-400' : 'text-blue-200'
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>

                {!isBot && (
                  <div className="w-7 h-7 rounded-full bg-gray-800 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs shadow-xs">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}

          {isBotTyping && (
            <div className="flex items-center space-x-2 text-xs text-gray-500 font-mono">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                <Bot className="w-3 h-3" />
              </div>
              <div className="flex space-x-1 items-center bg-white px-2.5 py-1.5 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Chat Input Box */}
        <div className="p-3 bg-white border-t border-gray-200 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type your question about tests, schedules, syllabus, cutoffs, or concepts..."
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            className="flex-1 p-2.5 rounded-lg bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!userInput.trim()}
            className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-xs transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>
        </div>
      </div>

      {/* 4 Support Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* 1. Academic Support */}
        <div className="rounded-lg bg-white border border-gray-200 p-4 space-y-3 flex flex-col justify-between shadow-xs">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                1. Academic Support
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                Subject Experts & Doubt Resolution
              </h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Stuck on a tricky organic mechanism or Physics numerical? Submit your question to our senior academic panel for sub-10 minute verified step-by-step solutions.
            </p>
            <div className="text-[11px] text-gray-500 flex items-center space-x-1.5 pt-0.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Available 24/7 &bull; AIIMS & IIT Faculty</span>
            </div>
          </div>

          <button
            onClick={onOpenAskDoubtModal}
            className="w-full py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Instant Doubt Solver</span>
          </button>
        </div>

        {/* 2. Technical Support */}
        <div className="rounded-lg bg-white border border-gray-200 p-4 space-y-3 flex flex-col justify-between shadow-xs">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                2. Technical Support
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                Platform, Login & CBT Assistance
              </h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Instant help with full-screen CBT simulator submission, test re-attempts, OTP login, or payment receipt verification.
            </p>
          </div>

          {techTicketSubmitted ? (
            <div className="p-2.5 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold text-center flex items-center justify-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Ticket #9842 Raised! Agent Connecting</span>
            </div>
          ) : (
            <form onSubmit={handleTechSubmit} className="space-y-2">
              <input
                type="text"
                placeholder="Describe tech issue (e.g. CBT timer sync)..."
                value={techIssue}
                onChange={e => setTechIssue(e.target.value)}
                className="w-full p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Tech Ticket</span>
              </button>
            </form>
          )}
        </div>

        {/* 3. Counselling */}
        <div className="rounded-lg bg-white border border-gray-200 p-4 space-y-3 flex flex-col justify-between shadow-xs">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">
                3. Counselling
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                Study Plan & Rank Strategy
              </h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Book a 1-on-1 strategy session with senior counsellors to formulate your customized Sunday level mock schedule and weak chapter plan.
            </p>
          </div>

          {counsellingFormSubmitted ? (
            <div className="p-2.5 rounded bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold text-center flex items-center justify-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
              <span>Session Scheduled! Callback in 15 Mins</span>
            </div>
          ) : (
            <form onSubmit={handleCounsellingSubmit} className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={counsellingName}
                  onChange={e => setCounsellingName(e.target.value)}
                  className="p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={counsellingPhone}
                  onChange={e => setCounsellingPhone(e.target.value)}
                  className="p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-xs"
              >
                <span>Book 1-on-1 Counselling</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 4. Contact Channels */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs">
        <div className="border-b border-gray-100 pb-3">
          <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
            Direct Helpdesk
          </span>
          <h2 className="text-sm sm:text-base font-bold text-gray-900 mt-0.5">
            Contact Channels (Phone, Email, WhatsApp & Live Chat)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Phone */}
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1">
            <div className="flex items-center space-x-1.5 text-emerald-700">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-bold text-[10px] uppercase">Phone Toll-Free</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-900 font-mono">1800-890-7200</div>
            <div className="text-[11px] text-gray-500">Mon - Sun (8:00 AM - 10:00 PM)</div>
          </div>

          {/* Email */}
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1">
            <div className="flex items-center space-x-1.5 text-blue-700">
              <Mail className="w-3.5 h-3.5" />
              <span className="font-bold text-[10px] uppercase">Official Email</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-900 font-mono">support@neetcbt.com</div>
            <div className="text-[11px] text-gray-500">Sub-2 hour ticket turnaround</div>
          </div>

          {/* WhatsApp */}
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1">
            <div className="flex items-center space-x-1.5 text-emerald-700">
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="font-bold text-[10px] uppercase">WhatsApp Desk</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-900 font-mono">+91 98234 56789</div>
            <div className="text-[11px] text-gray-500">Instant Test Alerts & PDFs</div>
          </div>

          {/* Live Chat */}
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1">
            <div className="flex items-center space-x-1.5 text-amber-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-bold text-[10px] uppercase">Live AI Chat</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-emerald-700">Active (0m Wait)</div>
            <div className="text-[11px] text-gray-500">Connected with Senior Assistant</div>
          </div>
        </div>
      </div>

      {/* 5. Interactive FAQs Accordion */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-3 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-gray-900 flex items-center space-x-1.5">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Frequently Asked Questions (FAQ)</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Instant clarity on test series, CBT mode, syllabus, and enrolment.
            </p>
          </div>
        </div>

        <div className="space-y-2 pt-1">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded bg-gray-50 border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-3 flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {faq.category}
                    </span>
                    <span className="text-xs font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-gray-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-3 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-200 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
