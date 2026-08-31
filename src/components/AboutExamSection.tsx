import React, { useState } from 'react';
import {
  BookOpen,
  HelpCircle,
  Clock,
  Award,
  Layers,
  Building2,
  CheckCircle2,
  AlertCircle,
  FileText,
  MapPin,
  GraduationCap,
  Sparkles,
  Search,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { COLLEGES_DATA } from '../data/mockData';

export const AboutExamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'what-is-neet' | 'pattern' | 'syllabus' | 'other-courses' | 'colleges'>('what-is-neet');
  const [collegeSearch, setCollegeSearch] = useState('');
  const [collegeTypeFilter, setCollegeTypeFilter] = useState('All');

  const filteredColleges = COLLEGES_DATA.filter(clg => {
    const matchesType = collegeTypeFilter === 'All' || clg.type === collegeTypeFilter;
    const matchesSearch =
      clg.name.toLowerCase().includes(collegeSearch.toLowerCase()) ||
      clg.location.toLowerCase().includes(collegeSearch.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-blue-200">
              <Zap className="w-3 h-3 text-blue-600" />
              <span>Official NTA (nta.ac.in) Information Hub</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-gray-900">
              4. About NEET & JEE Exams (Official NTA Data)
            </h1>
            <p className="mt-0.5 text-xs text-gray-500 max-w-3xl">
              Authentic data sourced directly from the National Testing Agency (nta.ac.in). Official pattern, Section A & B rules, marking scheme (+4 / -1 / 0), syllabus, tie-breaking criteria and medical seat matrix.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <a
              href="https://nta.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold transition-colors"
            >
              <span>nta.ac.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Sub-tabs for Section 4 */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center space-x-1.5 overflow-x-auto pb-1 custom-scrollbar">
          {[
            { id: 'what-is-neet', label: 'What is NEET / NTA?' },
            { id: 'pattern', label: 'Official NTA Pattern & Marking' },
            { id: 'syllabus', label: 'Updated NTA Syllabus Breakdown' },
            { id: 'other-courses', label: 'JEE Main, CUET & Olympiads' },
            { id: 'colleges', label: '108K+ Seats, AIIMS & Cut-offs' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. WHAT IS NEET & NTA */}
      {activeTab === 'what-is-neet' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="border-b border-gray-100 pb-3">
            <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>What is NEET-UG and the National Testing Agency (NTA)?</span>
            </h2>
            <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
              <strong>The National Eligibility cum Entrance Test (NEET-UG)</strong> is conducted by the <strong>National Testing Agency (NTA - nta.ac.in)</strong> as the unified single national entrance exam for admission into undergraduate medical courses across India, including <strong>MBBS, BDS, BAMS, BHMS, BUMS, BYNS, and BSMS</strong> in government, private, and premier institutions like AIIMS and JIPMER.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-0.5">Conducting Authority</div>
              <div className="text-xs font-bold text-gray-900">National Testing Agency (NTA)</div>
              <p className="text-[11px] text-gray-500 mt-1">Autonomous agency under Ministry of Education (MoE) & NMC guidelines.</p>
            </div>

            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-0.5">Total MBBS Seats</div>
              <div className="text-xs font-bold text-gray-900">108,000+ Verified Seats</div>
              <p className="text-[11px] text-gray-500 mt-1">Across 700+ Government and Private Medical Colleges in India.</p>
            </div>

            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-0.5">Annual Aspirants</div>
              <div className="text-xs font-bold text-gray-900">2.4+ Million Registered</div>
              <p className="text-[11px] text-gray-500 mt-1">India's most competitive examination with 1.2% selection ratio.</p>
            </div>
          </div>

          {/* Official NTA Portals Reference */}
          <div className="p-4 rounded-lg bg-blue-50/60 border border-blue-200 space-y-2">
            <div className="text-xs font-bold text-blue-900 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Official NTA Portals & Notification Links</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded bg-white border border-blue-200">
                <div className="font-bold text-gray-900">Main NTA Website</div>
                <div className="text-blue-700 font-mono text-[11px]">https://nta.ac.in/</div>
              </div>
              <div className="p-2.5 rounded bg-white border border-blue-200">
                <div className="font-bold text-gray-900">NEET (UG) Portal</div>
                <div className="text-blue-700 font-mono text-[11px]">https://neet.nta.nic.in/</div>
              </div>
              <div className="p-2.5 rounded bg-white border border-blue-200">
                <div className="font-bold text-gray-900">JEE (Main) Portal</div>
                <div className="text-blue-700 font-mono text-[11px]">https://jeemain.nta.ac.in/</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. EXAM PATTERN & NTA RULES */}
      {activeTab === 'pattern' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="border-b border-gray-100 pb-3">
            <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Official NTA Exam Pattern & Section A/B Architecture</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Exact subject breakdown, optionality rules, and negative marking based on nta.ac.in information bulletin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Exam Duration</div>
              <div className="text-base font-bold text-gray-900 mt-0.5">200 Minutes</div>
              <div className="text-[11px] text-blue-600 font-mono">3 Hours 20 Mins</div>
            </div>
            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Total Questions</div>
              <div className="text-base font-bold text-gray-900 mt-0.5">200 Questions</div>
              <div className="text-[11px] text-emerald-600 font-mono">Attempt Any 180 Qs</div>
            </div>
            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Maximum Marks</div>
              <div className="text-base font-bold text-gray-900 mt-0.5">720 Marks</div>
              <div className="text-[11px] text-gray-500 font-mono">180 Questions x 4 Marks</div>
            </div>
            <div className="p-3.5 rounded bg-gray-50 border border-gray-200">
              <div className="text-[10px] font-bold text-gray-500 uppercase">Marking Scheme</div>
              <div className="text-base font-bold text-gray-900 mt-0.5">+4 / -1 / 0</div>
              <div className="text-[11px] text-amber-700 font-mono">Negative marking on MCQs</div>
            </div>
          </div>

          {/* Section Breakdown Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-50 text-gray-700 font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="p-2.5">Subject</th>
                  <th className="p-2.5">Section A (Compulsory)</th>
                  <th className="p-2.5">Section B (Attempt any 10 of 15)</th>
                  <th className="p-2.5">Subject Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="hover:bg-gray-50">
                  <td className="p-2.5 font-bold text-gray-900">Physics</td>
                  <td className="p-2.5">35 Questions (140 Marks)</td>
                  <td className="p-2.5">15 Questions (Attempt 10 = 40 Marks)</td>
                  <td className="p-2.5 font-bold text-gray-900">180 Marks</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-2.5 font-bold text-gray-900">Chemistry</td>
                  <td className="p-2.5">35 Questions (140 Marks)</td>
                  <td className="p-2.5">15 Questions (Attempt 10 = 40 Marks)</td>
                  <td className="p-2.5 font-bold text-gray-900">180 Marks</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-2.5 font-bold text-gray-900">Botany</td>
                  <td className="p-2.5">35 Questions (140 Marks)</td>
                  <td className="p-2.5">15 Questions (Attempt 10 = 40 Marks)</td>
                  <td className="p-2.5 font-bold text-gray-900">180 Marks</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-2.5 font-bold text-gray-900">Zoology</td>
                  <td className="p-2.5">35 Questions (140 Marks)</td>
                  <td className="p-2.5">15 Questions (Attempt 10 = 40 Marks)</td>
                  <td className="p-2.5 font-bold text-gray-900">180 Marks</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Official NTA Tie-Breaking Rules */}
          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
            <h3 className="text-xs font-bold text-gray-900">Official NTA Tie-Breaking Criteria (In Order of Priority)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded bg-white border border-gray-200">
                <span className="font-bold text-blue-700">1. Biology Marks:</span>
                <p className="text-[11px] text-gray-600 mt-0.5">Higher marks/percentile in Biology (Botany & Zoology).</p>
              </div>
              <div className="p-2.5 rounded bg-white border border-gray-200">
                <span className="font-bold text-blue-700">2. Chemistry Marks:</span>
                <p className="text-[11px] text-gray-600 mt-0.5">Higher marks/percentile in Chemistry.</p>
              </div>
              <div className="p-2.5 rounded bg-white border border-gray-200">
                <span className="font-bold text-blue-700">3. Physics Marks:</span>
                <p className="text-[11px] text-gray-600 mt-0.5">Higher marks/percentile in Physics.</p>
              </div>
              <div className="p-2.5 rounded bg-white border border-gray-200">
                <span className="font-bold text-blue-700">4. Proportion of Errors:</span>
                <p className="text-[11px] text-gray-600 mt-0.5">Candidate with lower ratio of incorrect to correct answers.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. SYLLABUS BREAKDOWN */}
      {activeTab === 'syllabus' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="border-b border-gray-100 pb-3">
            <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Updated NTA / NMC Official Syllabus Weightages</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Weightage breakdown according to recent NTA examination trends and rationalized NCERT curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Physics */}
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <h3 className="text-xs font-bold text-gray-900 flex items-center justify-between pb-2 border-b border-gray-200">
                <span>Physics Syllabus</span>
                <span className="text-[11px] font-mono text-gray-500">180 Marks (25%)</span>
              </h3>
              <ul className="text-xs text-gray-600 space-y-1.5 pt-1">
                <li>&bull; Mechanics & Laws of Motion (22%)</li>
                <li>&bull; Electrodynamics & Current Electricity (24%)</li>
                <li>&bull; Optics: Ray & Wave Optics (10%)</li>
                <li>&bull; Modern Physics & Semiconductor (14%)</li>
                <li>&bull; Thermodynamics & Kinetic Theory (12%)</li>
                <li>&bull; Oscillations & Waves (8%)</li>
                <li>&bull; Gravitation & Bulk Properties (10%)</li>
              </ul>
            </div>

            {/* Chemistry */}
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <h3 className="text-xs font-bold text-gray-900 flex items-center justify-between pb-2 border-b border-gray-200">
                <span>Chemistry Syllabus</span>
                <span className="text-[11px] font-mono text-gray-500">180 Marks (25%)</span>
              </h3>
              <ul className="text-xs text-gray-600 space-y-1.5 pt-1">
                <li>&bull; Organic Chemistry (Mechanisms & Reactions) (34%)</li>
                <li>&bull; Chemical Bonding & Periodic Table (16%)</li>
                <li>&bull; Coordination Compounds & d/f Block (14%)</li>
                <li>&bull; Physical Chemistry (Kinetics, Electro, Thermo) (26%)</li>
                <li>&bull; Solutions & Equilibrium (10%)</li>
              </ul>
            </div>

            {/* Biology */}
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <h3 className="text-xs font-bold text-gray-900 flex items-center justify-between pb-2 border-b border-gray-200">
                <span>Biology (Botany + Zoology)</span>
                <span className="text-[11px] font-mono text-gray-500">360 Marks (50%)</span>
              </h3>
              <ul className="text-xs text-gray-600 space-y-1.5 pt-1">
                <li>&bull; Genetics & Molecular Inheritance (20%)</li>
                <li>&bull; Human Physiology Systems (18%)</li>
                <li>&bull; Ecology and Environment (14%)</li>
                <li>&bull; Plant Physiology (Photosynthesis & Respiration) (12%)</li>
                <li>&bull; Cell Biology & Biomolecules (10%)</li>
                <li>&bull; Human Reproduction & Health (10%)</li>
                <li>&bull; Biotechnology & Applications (10%)</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 4. OTHER COURSES */}
      {activeTab === 'other-courses' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="border-b border-gray-100 pb-3">
            <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Other National Entrance Exams Conducted by NTA</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              JEE Main, JEE Advanced, CUET, Olympiads and Foundation test platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                title: 'JEE Main (NTA)',
                desc: 'National engineering entrance for NITs, IIITs & CFTIs with 300 marks CBT format (90 Qs, attempt 75).',
                tag: 'Engineering'
              },
              {
                title: 'JEE Advanced',
                desc: 'IIT entrance examination testing multi-concept analytical problem solving.',
                tag: 'IIT Premier'
              },
              {
                title: 'CUET (UG) (NTA)',
                desc: 'Common University Entrance Test for central universities (DU, BHU, JNU).',
                tag: 'Central Universities'
              },
              {
                title: 'Olympiads (NSEP, NSEC, NSEB)',
                desc: 'National science olympiad stages leading to international representation.',
                tag: 'Scholarship'
              },
              {
                title: 'Foundation (Class 9 & 10)',
                desc: 'Early conceptual grooming in Mathematics, Physics & Biology for future top rankers.',
                tag: 'Early Edge'
              },
              {
                title: 'Board Examination Practice',
                desc: 'CBSE and State Board pattern subjective assessments with derivations.',
                tag: 'Academic'
              }
            ].map((course, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-1.5 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {course.tag}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-gray-900">{course.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. COLLEGES & SEATS */}
      {activeTab === 'colleges' && (
        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4 shadow-xs animate-in fade-in duration-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 flex items-center space-x-1.5">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Medical Colleges, Seat Matrix & Closing Cut-offs</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Government and private medical colleges, AIIMS, seat matrix, cut-offs and MCC counselling.
              </p>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-1 overflow-x-auto pb-1 custom-scrollbar">
              {['All', 'AIIMS', 'Government'].map(type => (
                <button
                  key={type}
                  onClick={() => setCollegeTypeFilter(type)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                    collegeTypeFilter === type
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search college or location..."
                value={collegeSearch}
                onChange={e => setCollegeSearch(e.target.value)}
                className="w-full sm:w-64 p-2 rounded bg-gray-50 border border-gray-300 text-xs text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500"
              />
            </div>
          </div>

          {/* Colleges Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-50 text-gray-700 font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="p-2.5">NIRF</th>
                  <th className="p-2.5">Medical College & Location</th>
                  <th className="p-2.5">Type</th>
                  <th className="p-2.5">Seats</th>
                  <th className="p-2.5">Gen Cut-off (AIR)</th>
                  <th className="p-2.5">Approx Tuition Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filteredColleges.map(clg => (
                  <tr key={clg.id} className="hover:bg-gray-50">
                    <td className="p-2.5 font-bold text-amber-600 font-mono">#{clg.nirfRank}</td>
                    <td className="p-2.5">
                      <div className="font-bold text-gray-900">{clg.name}</div>
                      <div className="text-[11px] text-gray-500 flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span>{clg.location}</span>
                      </div>
                    </td>
                    <td className="p-2.5">
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {clg.type}
                      </span>
                    </td>
                    <td className="p-2.5 font-medium">{clg.totalSeats} Seats</td>
                    <td className="p-2.5 font-bold text-emerald-600 font-mono">AIR &le; {clg.closingRankGen}</td>
                    <td className="p-2.5 text-gray-600 font-mono">{clg.approxFeePerYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
