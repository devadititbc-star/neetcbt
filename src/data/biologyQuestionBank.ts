import { Question, TestItem } from '../types';

export interface BiologyChapter {
  id: string;
  chapterNumber: number;
  title: string;
  unitNumber: number;
  unitTitle: string;
  classLevel: 'Class 11' | 'Class 12';
  weightageInNEET: string; // e.g. "4-5 Questions (16-20 Marks)"
  totalQuestionsAvailable: number;
  subtopics: string[];
  sampleQuestions: Question[];
}

export const BIOLOGY_38_CHAPTERS: BiologyChapter[] = [
  // ========================================================
  // CLASS 11 - UNIT I: DIVERSITY IN THE LIVING WORLD
  // ========================================================
  {
    id: 'bio-ch-01',
    chapterNumber: 1,
    title: 'The Living World',
    unitNumber: 1,
    unitTitle: 'Diversity in the Living World',
    classLevel: 'Class 11',
    weightageInNEET: '1-2 Questions (4-8 Marks)',
    totalQuestionsAvailable: 65,
    subtopics: ['What is Living?', 'Diversity in the Living World', 'Taxonomic Categories', 'Taxonomical Aids'],
    sampleQuestions: [
      {
        id: 'bio-ch1-q1',
        subject: 'Biology',
        chapter: 'The Living World',
        topic: 'Taxonomic Categories & Nomenclature',
        difficulty: 'Easy',
        questionType: 'Standard MCQ',
        questionText: 'Which of the following is the correct scientific name of Mango according to binomial nomenclature as first described by Carolus Linnaeus?',
        options: [
          'Mangifera indica Linn.',
          'Mangifera Indica',
          'Mangifera indica',
          'Mangifera Indica Linn.'
        ],
        correctAnswer: 0,
        explanation: 'According to the binomial system of nomenclature, the genus starts with a capital letter (Mangifera), the specific epithet with a small letter (indica), and the author name is abbreviated at the end (Linn.).',
        pyqYear: 2019,
        tags: ['Binomial Nomenclature', 'ICBN', 'Linnaeus']
      },
      {
        id: 'bio-ch1-q2',
        subject: 'Biology',
        chapter: 'The Living World',
        topic: 'Characteristics of Living Organisms',
        difficulty: 'Medium',
        questionType: 'Assertion-Reason',
        questionText: 'Assertion (A): Cellular organisation and consciousness are defining properties of living organisms.\nReason (R): Non-living objects like mountains also grow externally by accumulation of material on the surface, hence growth is not a defining feature.',
        options: [
          'Both (A) and (R) are true and (R) is the correct explanation of (A)',
          'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
          '(A) is true but (R) is false',
          '(A) is false but (R) is true'
        ],
        correctAnswer: 1,
        explanation: 'Both statements are true facts from NCERT. Cellular organisation and consciousness are defining features without exception. Growth is not a defining feature because non-living things can exhibit extrinsic growth.',
        pyqYear: 2022,
        tags: ['Defining Properties', 'Consciousness', 'Growth']
      }
    ]
  },
  {
    id: 'bio-ch-02',
    chapterNumber: 2,
    title: 'Biological Classification',
    unitNumber: 1,
    unitTitle: 'Diversity in the Living World',
    classLevel: 'Class 11',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 90,
    subtopics: ['Kingdom Monera', 'Kingdom Protista', 'Kingdom Fungi', 'Kingdom Plantae & Animalia', 'Viruses, Viroids, Prions and Lichens'],
    sampleQuestions: [
      {
        id: 'bio-ch2-q1',
        subject: 'Biology',
        chapter: 'Biological Classification',
        topic: 'Kingdom Fungi & Mycorrhiza',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Which of the following fungal classes produces endogenous asexual spores (sporangiospores) and non-motile zygospores?',
        options: ['Phycomycetes', 'Ascomycetes', 'Basidiomycetes', 'Deuteromycetes'],
        correctAnswer: 0,
        explanation: 'Phycomycetes (e.g., Mucor, Rhizopus, Albugo) produce endogenous asexual spores inside sporangium and diploid zygospores by fusion of two gametes.',
        pyqYear: 2021,
        tags: ['Phycomycetes', 'Fungi', 'Spores']
      },
      {
        id: 'bio-ch2-q2',
        subject: 'Biology',
        chapter: 'Biological Classification',
        topic: 'Viroids vs Prions',
        difficulty: 'Easy',
        questionType: 'Statement I & II',
        questionText: 'Statement I: Viroids differ from viruses in having free RNA molecules without a protein coat.\nStatement II: Prions are abnormally folded infectious proteins that cause Bovine Spongiform Encephalopathy (Mad cow disease).',
        options: [
          'Both Statement I and Statement II are correct',
          'Both Statement I and Statement II are incorrect',
          'Statement I is correct but Statement II is incorrect',
          'Statement I is incorrect but Statement II is correct'
        ],
        correctAnswer: 0,
        explanation: 'T.O. Diener discovered viroids as free infectious low-molecular-weight RNA without protein capsids. Prions are proteinaceous infectious agents.',
        pyqYear: 2023,
        tags: ['Viroids', 'Prions', 'Infectious Agents']
      }
    ]
  },
  {
    id: 'bio-ch-03',
    chapterNumber: 3,
    title: 'Plant Kingdom',
    unitNumber: 1,
    unitTitle: 'Diversity in the Living World',
    classLevel: 'Class 11',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 85,
    subtopics: ['Algae (Chlorophyceae, Phaeophyceae, Rhodophyceae)', 'Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms', 'Plant Life Cycles'],
    sampleQuestions: [
      {
        id: 'bio-ch3-q1',
        subject: 'Biology',
        chapter: 'Plant Kingdom',
        topic: 'Algae Stored Food & Pigments',
        difficulty: 'Medium',
        questionType: 'Match the Columns',
        questionText: 'Match the Algal classes with their stored food:\n(A) Chlorophyceae -> (I) Floridean starch\n(B) Phaeophyceae -> (II) Starch with pyrenoids\n(C) Rhodophyceae -> (III) Mannitol & Laminarin',
        options: [
          'A-(II), B-(III), C-(I)',
          'A-(I), B-(II), C-(III)',
          'A-(III), B-(II), C-(I)',
          'A-(II), B-(I), C-(III)'
        ],
        correctAnswer: 0,
        explanation: 'Chlorophyceae stores true starch; Phaeophyceae stores complex carbohydrates mannitol and laminarin; Rhodophyceae stores floridean starch (structurally similar to amylopectin and glycogen).',
        pyqYear: 2024,
        tags: ['Algae', 'Phaeophyceae', 'Rhodophyceae']
      }
    ]
  },
  {
    id: 'bio-ch-04',
    chapterNumber: 4,
    title: 'Animal Kingdom',
    unitNumber: 1,
    unitTitle: 'Diversity in the Living World',
    classLevel: 'Class 11',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 95,
    subtopics: ['Basis of Classification', 'Non-Chordates (Porifera to Echinodermata)', 'Hemichordata', 'Chordata (Cyclostomata, Chondrichthyes, Osteichthyes, Amphibia, Reptilia, Aves, Mammalia)'],
    sampleQuestions: [
      {
        id: 'bio-ch4-q1',
        subject: 'Biology',
        chapter: 'Animal Kingdom',
        topic: 'Phylum Characteristics & Examples',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Which of the following animals is correctly matched with its taxonomic feature?',
        options: [
          'Aplysia - Radula for feeding, Mollusca',
          'Nereis - Pseudocoelomate with metamerism',
          'Carcharodon - Operculum present, air bladder present',
          'Pteropus - Oviparous mammal'
        ],
        correctAnswer: 0,
        explanation: 'Aplysia (sea hare) is a mollusc possessing a rasping organ called radula for feeding. Nereis is coelomate. Carcharodon (Great white shark) is a cartilaginous fish lacking operculum and air bladder. Pteropus (flying fox) is viviparous.',
        pyqYear: 2023,
        tags: ['Mollusca', 'Radula', 'Chondrichthyes']
      }
    ]
  },

  // ========================================================
  // CLASS 11 - UNIT II: STRUCTURAL ORGANISATION IN PLANTS AND ANIMALS
  // ========================================================
  {
    id: 'bio-ch-05',
    chapterNumber: 5,
    title: 'Morphology of Flowering Plants',
    unitNumber: 2,
    unitTitle: 'Structural Organisation in Plants and Animals',
    classLevel: 'Class 11',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 90,
    subtopics: ['Root, Stem, Leaf Modifications', 'Inflorescence', 'Flower Parts & Symmetry', 'Aestivation & Placentation', 'Fruit, Seed and Floral Families'],
    sampleQuestions: [
      {
        id: 'bio-ch5-q1',
        subject: 'Biology',
        chapter: 'Morphology of Flowering Plants',
        topic: 'Placentation Types',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Placentation in which ovules develop on the inner wall of the ovary or in peripheral part forming a false septum (replum) is:',
        options: ['Parietal (e.g. Mustard, Argemone)', 'Marginal (e.g. Pea)', 'Axile (e.g. Tomato, Lemon)', 'Free Central (e.g. Dianthus, Primrose)'],
        correctAnswer: 0,
        explanation: 'In parietal placentation, ovules develop on the peripheral or inner wall of ovary. Ovary becomes two-chambered due to false septum (replum), as seen in Mustard and Argemone.',
        pyqYear: 2022,
        tags: ['Parietal Placentation', 'Replum', 'Mustard']
      }
    ]
  },
  {
    id: 'bio-ch-06',
    chapterNumber: 6,
    title: 'Anatomy of Flowering Plants',
    unitNumber: 2,
    unitTitle: 'Structural Organisation in Plants and Animals',
    classLevel: 'Class 11',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 80,
    subtopics: ['Meristematic & Permanent Tissues', 'Tissue Systems (Epidermal, Ground, Vascular)', 'Anatomy of Dicot & Monocot Root, Stem, Leaf', 'Secondary Growth in Dicot Stem and Root'],
    sampleQuestions: [
      {
        id: 'bio-ch6-q1',
        subject: 'Biology',
        chapter: 'Anatomy of Flowering Plants',
        topic: 'Vascular Bundles & Secondary Growth',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Casparian strips containing suberin deposition occur in the walls of which cell layer of dicot root?',
        options: ['Endodermis', 'Pericycle', 'Epiblema', 'Exodermis'],
        correctAnswer: 0,
        explanation: 'The endodermis of dicot roots possesses Casparian strips made of water-impermeable waxy suberin in tangential and radial walls.',
        pyqYear: 2023,
        tags: ['Endodermis', 'Casparian Strip', 'Suberin']
      }
    ]
  },
  {
    id: 'bio-ch-07',
    chapterNumber: 7,
    title: 'Structural Organisation in Animals',
    unitNumber: 2,
    unitTitle: 'Structural Organisation in Plants and Animals',
    classLevel: 'Class 11',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 75,
    subtopics: ['Animal Tissues (Epithelial, Connective, Muscular, Neural)', 'Cell Junctions', 'Morphology & Anatomy of Frog / Cockroach'],
    sampleQuestions: [
      {
        id: 'bio-ch7-q1',
        subject: 'Biology',
        chapter: 'Structural Organisation in Animals',
        topic: 'Epithelial & Connective Tissues',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Which type of cell junctions facilitate communication between adjacent cells by connecting the cytoplasm for rapid transfer of ions and small molecules?',
        options: ['Gap junctions', 'Tight junctions', 'Adhering junctions', 'Desmosomes'],
        correctAnswer: 0,
        explanation: 'Gap junctions facilitate intercellular communication by connecting cytoplasm of neighboring cells for rapid transfer of ions, small molecules and sometimes big molecules.',
        pyqYear: 2024,
        tags: ['Gap Junctions', 'Cell Junctions', 'Intercellular Communication']
      }
    ]
  },

  // ========================================================
  // CLASS 11 - UNIT III: CELL: STRUCTURE AND FUNCTIONS
  // ========================================================
  {
    id: 'bio-ch-08',
    chapterNumber: 8,
    title: 'Cell: The Unit of Life',
    unitNumber: 3,
    unitTitle: 'Cell: Structure and Functions',
    classLevel: 'Class 11',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 95,
    subtopics: ['Cell Theory', 'Prokaryotic Cell (Inclusion Bodies, Mesosomes, Plasmids)', 'Eukaryotic Cell Organelles', 'Endomembrane System', 'Mitochondria, Plastids, Ribosomes, Cilia, Centrosome, Nucleus'],
    sampleQuestions: [
      {
        id: 'bio-ch8-q1',
        subject: 'Biology',
        chapter: 'Cell: The Unit of Life',
        topic: 'Endomembrane System & Mitochondria',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Which of the following organelles is NOT considered a part of the endomembrane system?',
        options: ['Peroxisomes & Mitochondria', 'Golgi apparatus', 'Lysosomes', 'Endoplasmic Reticulum'],
        correctAnswer: 0,
        explanation: 'The endomembrane system includes ER, Golgi complex, Lysosomes and Vacuoles because their functions are coordinated. Mitochondria, Chloroplasts and Peroxisomes are not part of endomembrane system.',
        pyqYear: 2021,
        tags: ['Endomembrane System', 'Mitochondria', 'Organelles']
      }
    ]
  },
  {
    id: 'bio-ch-09',
    chapterNumber: 9,
    title: 'Biomolecules',
    unitNumber: 3,
    unitTitle: 'Cell: Structure and Functions',
    classLevel: 'Class 11',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 90,
    subtopics: ['Chemical Analysis of Tissues', 'Primary & Secondary Metabolites', 'Proteins (Structure & Bonds)', 'Polysaccharides & Nucleic Acids', 'Enzymes & Inhibition Mechanism'],
    sampleQuestions: [
      {
        id: 'bio-ch9-q1',
        subject: 'Biology',
        chapter: 'Biomolecules',
        topic: 'Enzyme Inhibition (Competitive Inhibition)',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Inhibition of succinic dehydrogenase by malonate is a classic example of:',
        options: ['Competitive inhibition', 'Non-competitive inhibition', 'Allosteric inhibition', 'Feedback inhibition'],
        correctAnswer: 0,
        explanation: 'Malonate closely resembles the substrate succinate in structure and competes for the active site of succinate dehydrogenase, demonstrating competitive inhibition.',
        pyqYear: 2023,
        tags: ['Competitive Inhibition', 'Malonate', 'Succinate Dehydrogenase']
      }
    ]
  },
  {
    id: 'bio-ch-10',
    chapterNumber: 10,
    title: 'Cell Cycle and Cell Division',
    unitNumber: 3,
    unitTitle: 'Cell: Structure and Functions',
    classLevel: 'Class 11',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 85,
    subtopics: ['Phases of Cell Cycle (G1, S, G2, M, G0)', 'Mitosis (Prophase, Metaphase, Anaphase, Telophase)', 'Cytokinesis', 'Meiosis (Meiosis I - Prophase I Sub-stages, Meiosis II)'],
    sampleQuestions: [
      {
        id: 'bio-ch10-q1',
        subject: 'Biology',
        chapter: 'Cell Cycle and Cell Division',
        topic: 'Meiosis I - Crossing Over',
        difficulty: 'Easy',
        questionType: 'Standard MCQ',
        questionText: 'Crossing over takes place between non-sister chromatids of homologous chromosomes during which sub-stage of Prophase-I?',
        options: ['Pachytene', 'Zygotene', 'Diplotene', 'Diakinesis'],
        correctAnswer: 0,
        explanation: 'Crossing over is an enzyme-mediated process (by recombinase) occurring between non-sister chromatids of homologous chromosomes during the Pachytene stage.',
        pyqYear: 2024,
        tags: ['Pachytene', 'Crossing Over', 'Recombinase']
      }
    ]
  },

  // ========================================================
  // CLASS 11 - UNIT IV: PLANT PHYSIOLOGY
  // ========================================================
  {
    id: 'bio-ch-11',
    chapterNumber: 11,
    title: 'Transport in Plants',
    unitNumber: 4,
    unitTitle: 'Plant Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '1-2 Questions (4-8 Marks)',
    totalQuestionsAvailable: 70,
    subtopics: ['Means of Transport (Diffusion, Facilitated, Active)', 'Plant-Water Relations (Water Potential, Osmosis, Plasmolysis)', 'Long Distance Transport (Transpiration Pull, Guttation)', 'Phloem Translocation (Pressure Flow Hypothesis)'],
    sampleQuestions: [
      {
        id: 'bio-ch11-q1',
        subject: 'Biology',
        chapter: 'Transport in Plants',
        topic: 'Water Potential & Plasmolysis',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Water potential of pure water at standard temperature and atmospheric pressure is defined as:',
        options: ['Zero', 'One', 'Negative infinity', '100 bars'],
        correctAnswer: 0,
        explanation: 'By convention, the water potential of pure water at standard temperatures, which is not under any pressure, is taken to be zero.',
        pyqYear: 2017,
        tags: ['Water Potential', 'Pure Water', 'Psi']
      }
    ]
  },
  {
    id: 'bio-ch-12',
    chapterNumber: 12,
    title: 'Mineral Nutrition',
    unitNumber: 4,
    unitTitle: 'Plant Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '1-2 Questions (4-8 Marks)',
    totalQuestionsAvailable: 65,
    subtopics: ['Essential Mineral Elements (Macro & Micro)', 'Deficiency Symptoms (Chlorosis, Necrosis)', 'Toxicity of Micronutrients', 'Biological Nitrogen Fixation & Nitrogen Cycle'],
    sampleQuestions: [
      {
        id: 'bio-ch12-q1',
        subject: 'Biology',
        chapter: 'Mineral Nutrition',
        topic: 'Biological Nitrogen Fixation',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'The enzyme nitrogenase responsible for reduction of atmospheric nitrogen into ammonia requires which essential trace elements as cofactors?',
        options: ['Molybdenum and Iron (Mo-Fe protein)', 'Magnesium and Manganese', 'Copper and Zinc', 'Boron and Chlorine'],
        correctAnswer: 0,
        explanation: 'Nitrogenase is a Mo-Fe protein that catalyzes the conversion of atmospheric nitrogen to ammonia in an anaerobic environment maintained by leghemoglobin.',
        pyqYear: 2022,
        tags: ['Nitrogenase', 'Mo-Fe Protein', 'Leghemoglobin']
      }
    ]
  },
  {
    id: 'bio-ch-13',
    chapterNumber: 13,
    title: 'Photosynthesis in Higher Plants',
    unitNumber: 4,
    unitTitle: 'Plant Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 95,
    subtopics: ['Photosynthetic Pigments & Light Reactions', 'Z-Scheme (Non-cyclic & Cyclic Photophosphorylation)', 'Chemiosmotic Hypothesis (ATP Synthesis)', 'Calvin Cycle (C3 Pathway)', 'Hatch and Slack Pathway (C4 Plants & Kranz Anatomy)', 'Photorespiration (C2 Cycle)', 'Factors Affecting Photosynthesis (Blackman Law)'],
    sampleQuestions: [
      {
        id: 'bio-ch13-q1',
        subject: 'Biology',
        chapter: 'Photosynthesis in Higher Plants',
        topic: 'C4 Pathway & Kranz Anatomy',
        difficulty: 'Hard',
        questionType: 'Standard MCQ',
        questionText: 'In C4 plants, the primary CO2 acceptor and the enzyme present in mesophyll cells are:',
        options: ['PEP (Phosphoenolpyruvate) and PEP carboxylase', 'RuBP and RuBisCO', 'OAA and Malate dehydrogenase', 'PGA and Triose phosphate isomerase'],
        correctAnswer: 0,
        explanation: 'In C4 plants, primary CO2 fixation occurs in mesophyll cells where PEP (3C) accepts CO2 catalyzed by PEPcase to form oxaloacetic acid (OAA, 4C). RuBisCO is absent in mesophyll cells.',
        pyqYear: 2023,
        tags: ['C4 Pathway', 'PEPcase', 'Mesophyll']
      }
    ]
  },
  {
    id: 'bio-ch-14',
    chapterNumber: 14,
    title: 'Respiration in Plants',
    unitNumber: 4,
    unitTitle: 'Plant Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 85,
    subtopics: ['Glycolysis (EMP Pathway)', 'Fermentation (Lactic Acid & Alcoholic)', 'TCA Cycle (Krebs Cycle)', 'Electron Transport System (ETS) & Oxidative Phosphorylation', 'Respiratory Balance Sheet & Amphibolic Pathway', 'Respiratory Quotient (RQ)'],
    sampleQuestions: [
      {
        id: 'bio-ch14-q1',
        subject: 'Biology',
        chapter: 'Respiration in Plants',
        topic: 'ETS & Complex IV',
        difficulty: 'Hard',
        questionType: 'Standard MCQ',
        questionText: 'In mitochondrial Electron Transport System, Complex IV refers to which enzyme complex containing Cytochromes a, a3 and two copper centers?',
        options: ['Cytochrome c oxidase', 'NADH dehydrogenase', 'Succinate dehydrogenase', 'Cytochrome bc1 complex'],
        correctAnswer: 0,
        explanation: 'Complex IV is Cytochrome c oxidase complex comprising cytochromes a and a3, and two copper centers that transfers electrons to oxygen (terminal electron acceptor).',
        pyqYear: 2024,
        tags: ['ETS', 'Complex IV', 'Cytochrome c Oxidase']
      }
    ]
  },
  {
    id: 'bio-ch-15',
    chapterNumber: 15,
    title: 'Plant Growth and Development',
    unitNumber: 4,
    unitTitle: 'Plant Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 75,
    subtopics: ['Phases of Growth & Growth Rates', 'Differentiation, Dedifferentiation, Redifferentiation', 'Plant Growth Regulators (Auxin, Gibberellin, Cytokinin, Ethylene, ABA)', 'Photoperiodism & Vernalization'],
    sampleQuestions: [
      {
        id: 'bio-ch15-q1',
        subject: 'Biology',
        chapter: 'Plant Growth and Development',
        topic: 'Plant Growth Regulators',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Which plant hormone is referred to as the stress hormone and induces closure of stomata during water deficit conditions?',
        options: ['Abscisic Acid (ABA)', 'Indole-3-acetic acid (Auxin)', 'Gibberellic Acid (GA3)', 'Zeatin (Cytokinin)'],
        correctAnswer: 0,
        explanation: 'Abscisic acid (ABA) stimulates the closure of stomata in the epidermis and increases the tolerance of plants to various kinds of stresses; hence it is also called the stress hormone.',
        pyqYear: 2021,
        tags: ['Abscisic Acid', 'Stress Hormone', 'Stomatal Closure']
      }
    ]
  },

  // ========================================================
  // CLASS 11 - UNIT V: HUMAN PHYSIOLOGY
  // ========================================================
  {
    id: 'bio-ch-16',
    chapterNumber: 16,
    title: 'Digestion and Absorption',
    unitNumber: 5,
    unitTitle: 'Human Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '2 Questions (8 Marks)',
    totalQuestionsAvailable: 70,
    subtopics: ['Alimentary Canal & Digestive Glands', 'Digestion of Food in Mouth, Stomach, Intestine', 'Absorption of Nutrients', 'Disorders of Digestive System'],
    sampleQuestions: [
      {
        id: 'bio-ch16-q1',
        subject: 'Biology',
        chapter: 'Digestion and Absorption',
        topic: 'Enzymes & Absorption',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Which cells in the gastric glands secrete hydrochloric acid (HCl) and Castle intrinsic factor (essential for absorption of vitamin B12)?',
        options: ['Oxyntic (Parietal) cells', 'Chief (Peptic) cells', 'Goblet cells', 'Enteroendocrine cells'],
        correctAnswer: 0,
        explanation: 'Parietal or oxyntic cells secrete HCl and Castle intrinsic factor (factor essential for absorption of vitamin B12 in the ileum).',
        pyqYear: 2020,
        tags: ['Parietal Cells', 'HCl', 'Castle Intrinsic Factor']
      }
    ]
  },
  {
    id: 'bio-ch-17',
    chapterNumber: 17,
    title: 'Breathing and Exchange of Gases',
    unitNumber: 5,
    unitTitle: 'Human Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 80,
    subtopics: ['Respiratory Organs & Mechanism of Breathing', 'Respiratory Volumes & Capacities (TV, IRV, ERV, RV, VC, TLC)', 'Exchange of Gases (pO2 & pCO2 in Alveoli/Tissues)', 'Transport of Gases (O2-Hb Dissociation Curve, Bohr Effect, CO2 Transport)', 'Regulation of Respiration & Respiratory Disorders'],
    sampleQuestions: [
      {
        id: 'bio-ch17-q1',
        subject: 'Biology',
        chapter: 'Breathing and Exchange of Gases',
        topic: 'Oxygen-Haemoglobin Dissociation Curve',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'A shift of the oxygen-haemoglobin dissociation curve to the right (Bohr effect) is caused by which of the following factors in tissues?',
        options: ['High pCO2, High H+ concentration (low pH), and High temperature', 'Low pCO2 and Low temperature', 'High pO2 and High pH', 'Low 2,3-DPG and Low H+'],
        correctAnswer: 0,
        explanation: 'In tissues, high pCO2, high H+ concentration (lower pH), and higher temperature favor the dissociation of oxygen from oxyhaemoglobin, shifting the sigmoid curve to the right.',
        pyqYear: 2023,
        tags: ['Oxygen Dissociation Curve', 'Bohr Effect', 'Gas Transport']
      }
    ]
  },
  {
    id: 'bio-ch-18',
    chapterNumber: 18,
    title: 'Body Fluids and Circulation',
    unitNumber: 5,
    unitTitle: 'Human Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 90,
    subtopics: ['Blood Composition & Formed Elements', 'Blood Groups (ABO & Rh Incompatibility)', 'Coagulation of Blood', 'Lymph & Tissue Fluid', 'Human Circulatory System & Cardiac Cycle', 'Electrocardiograph (ECG)', 'Double Circulation & Disorders'],
    sampleQuestions: [
      {
        id: 'bio-ch18-q1',
        subject: 'Biology',
        chapter: 'Body Fluids and Circulation',
        topic: 'ECG Waves Interpretation',
        difficulty: 'Easy',
        questionType: 'Standard MCQ',
        questionText: 'In a standard Electrocardiogram (ECG), the QRS complex represents:',
        options: ['Depolarisation of the ventricles', 'Depolarisation of the atria', 'Repolarisation of ventricles', 'Repolarisation of atria'],
        correctAnswer: 0,
        explanation: 'The P-wave represents atrial depolarisation; the QRS complex represents ventricular depolarisation (which initiates ventricular contraction); the T-wave represents ventricular repolarisation.',
        pyqYear: 2024,
        tags: ['ECG', 'QRS Complex', 'Ventricular Depolarisation']
      }
    ]
  },
  {
    id: 'bio-ch-19',
    chapterNumber: 19,
    title: 'Excretory Products and Their Elimination',
    unitNumber: 5,
    unitTitle: 'Human Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 80,
    subtopics: ['Modes of Excretion (Ammonotelism, Ureotelism, Uricotelism)', 'Human Excretory System & Nephron Anatomy', 'Urine Formation (Glomerular Filtration, Reabsorption, Secretion)', 'Function of Tubules & Counter-Current Mechanism', 'Regulation of Kidney Function (RAAS, ADH, ANF)', 'Micturition and Excretory Disorders'],
    sampleQuestions: [
      {
        id: 'bio-ch19-q1',
        subject: 'Biology',
        chapter: 'Excretory Products and Their Elimination',
        topic: 'RAAS Mechanism',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'A fall in Glomerular Filtration Rate (GFR) triggers the Juxtaglomerular (JG) cells to release which substance?',
        options: ['Renin', 'Rennin', 'Atrial Natriuretic Factor (ANF)', 'Aldosterone directly'],
        correctAnswer: 0,
        explanation: 'A fall in GFR/blood pressure stimulates juxtaglomerular cells to release renin, which converts angiotensinogen to angiotensin I and subsequently to angiotensin II (RAAS pathway).',
        pyqYear: 2022,
        tags: ['Renin', 'RAAS', 'Juxtaglomerular Cells']
      }
    ]
  },
  {
    id: 'bio-ch-20',
    chapterNumber: 20,
    title: 'Locomotion and Movement',
    unitNumber: 5,
    unitTitle: 'Human Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 85,
    subtopics: ['Types of Movement & Muscle Structure', 'Contractile Proteins (Actin & Myosin)', 'Sliding Filament Theory of Muscle Contraction', 'Human Skeletal System (Axial & Appendicular)', 'Joints (Fibrous, Cartilaginous, Synovial) & Musculoskeletal Disorders'],
    sampleQuestions: [
      {
        id: 'bio-ch20-q1',
        subject: 'Biology',
        chapter: 'Locomotion and Movement',
        topic: 'Sliding Filament Theory',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'During skeletal muscle contraction, which of the following changes occur in the sarcomere?',
        options: ['I-band shortens and H-zone disappears while A-band retains its length', 'A-band shortens while I-band remains constant', 'Both A-band and I-band lengthen', 'Z-lines move farther apart'],
        correctAnswer: 0,
        explanation: 'During contraction, actin filaments slide inward over thick myosin filaments towards M-line. Hence I-bands shorten, H-zone reduces/disappears, while A-band length remains unchanged.',
        pyqYear: 2023,
        tags: ['Sarcomere', 'Sliding Filament Theory', 'I-band']
      }
    ]
  },
  {
    id: 'bio-ch-21',
    chapterNumber: 21,
    title: 'Neural Control and Co-ordination',
    unitNumber: 5,
    unitTitle: 'Human Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 90,
    subtopics: ['Neuron Structure & Types', 'Generation and Conduction of Nerve Impulse (Resting & Action Potential)', 'Synaptic Transmission (Electrical & Chemical)', 'Human Brain (Forebrain, Midbrain, Hindbrain, Limbic System)', 'Reflex Action & Reflex Arc', 'Sensory Organs (Eye & Ear Anatomy and Function)'],
    sampleQuestions: [
      {
        id: 'bio-ch21-q1',
        subject: 'Biology',
        chapter: 'Neural Control and Co-ordination',
        topic: 'Eye Anatomy & Visual Acuity',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'The central pit of the yellowish pigmented spot (macula lutea) where only cones are densely packed and visual acuity is greatest is the:',
        options: ['Fovea centralis', 'Blind spot', 'Cornea', 'Canal of Schlemm'],
        correctAnswer: 0,
        explanation: 'Fovea is a thinned-out portion of the retina where only the cones are densely packed and visual resolution (acuity) is the greatest.',
        pyqYear: 2021,
        tags: ['Fovea', 'Macula Lutea', 'Cones']
      }
    ]
  },
  {
    id: 'bio-ch-22',
    chapterNumber: 22,
    title: 'Chemical Co-ordination and Integration',
    unitNumber: 5,
    unitTitle: 'Human Physiology',
    classLevel: 'Class 11',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 95,
    subtopics: ['Hypothalamus & Pituitary Gland', 'Pineal & Thyroid Glands', 'Parathyroid & Thymus Glands', 'Adrenal Gland (Cortex & Medulla)', 'Pancreas (Insulin & Glucagon)', 'Gonads & Non-Endocrine Organ Hormones', 'Mechanism of Hormone Action (Secondary Messengers vs Intracellular Receptors)'],
    sampleQuestions: [
      {
        id: 'bio-ch22-q1',
        subject: 'Biology',
        chapter: 'Chemical Co-ordination and Integration',
        topic: 'Mechanism of Hormone Action',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Which of the following hormones interacts with intracellular receptors and regulates gene expression by interacting with the chromosome-bound genome?',
        options: ['Estrogen and Cortisol (Steroid hormones)', 'Insulin and Glucagon', 'Epinephrine and Norepinephrine', 'Pituitary gonadotropins (FSH & LH)'],
        correctAnswer: 0,
        explanation: 'Lipid-soluble steroid hormones (e.g., Estrogen, Progesterone, Cortisol, Testosterone) and iodothyronines easily diffuse through the plasma membrane and bind to intracellular/nuclear receptors to regulate gene expression.',
        pyqYear: 2024,
        tags: ['Steroid Hormones', 'Intracellular Receptors', 'Gene Expression']
      }
    ]
  },

  // ========================================================
  // CLASS 12 - UNIT VI: REPRODUCTION
  // ========================================================
  {
    id: 'bio-ch-23',
    chapterNumber: 1,
    title: 'Reproduction in Organisms',
    unitNumber: 6,
    unitTitle: 'Reproduction',
    classLevel: 'Class 12',
    weightageInNEET: '1 Question (4 Marks)',
    totalQuestionsAvailable: 60,
    subtopics: ['Asexual Reproduction Modes', 'Vegetative Propagules in Plants', 'Sexual Reproduction Events (Pre-fertilisation, Syngamy, Post-fertilisation)'],
    sampleQuestions: [
      {
        id: 'bio-ch23-q1',
        subject: 'Biology',
        chapter: 'Reproduction in Organisms',
        topic: 'Vegetative Propagules',
        difficulty: 'Easy',
        questionType: 'Standard MCQ',
        questionText: 'Which of the following pairs of plants and vegetative propagules is correctly matched?',
        options: [
          'Agave - Bulbils, Water hyacinth - Offset',
          'Ginger - Eyes, Potato - Rhizome',
          'Bryophyllum - Offset, Banana - Bulbils',
          'Pistia - Tuber, Dahlia - Leaves'
        ],
        correctAnswer: 0,
        explanation: 'In Agave, vegetative propagation occurs via bulbils; in Eichhornia (water hyacinth) through offsets; in Ginger through rhizomes; in Potato through eyes (stem tuber).',
        pyqYear: 2020,
        tags: ['Vegetative Propagules', 'Agave', 'Water Hyacinth']
      }
    ]
  },
  {
    id: 'bio-ch-24',
    chapterNumber: 2,
    title: 'Sexual Reproduction in Flowering Plants',
    unitNumber: 6,
    unitTitle: 'Reproduction',
    classLevel: 'Class 12',
    weightageInNEET: '4-5 Questions (16-20 Marks)',
    totalQuestionsAvailable: 110,
    subtopics: ['Microsporogenesis & Pollen Grain Structure', 'Megasporogenesis & 7-celled 8-nucleate Embryo Sac', 'Pollination Mechanisms & Agents', 'Outbreeding Devices & Pollen-Pistil Interaction', 'Double Fertilization (Syngamy & Triple Fusion)', 'Endosperm & Embryo Development', 'Seed, Fruit, Apomixis and Polyembryony'],
    sampleQuestions: [
      {
        id: 'bio-ch24-q1',
        subject: 'Biology',
        chapter: 'Sexual Reproduction in Flowering Plants',
        topic: 'Double Fertilization',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Double fertilization in angiosperms involves:',
        options: [
          'Syngamy (fusion of 1 male gamete with egg cell) and Triple fusion (fusion of 2nd male gamete with two polar nuclei)',
          'Fusion of two male gametes with one egg cell',
          'Fertilization of egg cell and synergid',
          'Fusion of male gamete with antipodal cells'
        ],
        correctAnswer: 0,
        explanation: 'Double fertilization is unique to angiosperms where one male gamete fuses with the egg (forming 2n zygote) and the second male gamete fuses with 2 polar nuclei in the central cell (forming 3n Primary Endosperm Nucleus).',
        pyqYear: 2024,
        tags: ['Double Fertilization', 'Triple Fusion', 'Angiosperms']
      }
    ]
  },
  {
    id: 'bio-ch-25',
    chapterNumber: 3,
    title: 'Human Reproduction',
    unitNumber: 6,
    unitTitle: 'Reproduction',
    classLevel: 'Class 12',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 115,
    subtopics: ['Male Reproductive System & Sertoli/Leydig Cells', 'Female Reproductive System (Ovary, Fallopian Tube, Uterus)', 'Spermatogenesis & Sperm Structure', 'Oogenesis & Follicular Maturation', 'Menstrual Cycle & Hormonal Feedback (LH Surge)', 'Fertilization & Cortical Reaction', 'Cleavage, Blastocyst & Implantation', 'Placenta, Embryonic Germ Layers & Parturition'],
    sampleQuestions: [
      {
        id: 'bio-ch25-q1',
        subject: 'Biology',
        chapter: 'Human Reproduction',
        topic: 'Menstrual Cycle & Ovulation',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Rupture of the Graafian follicle and release of the secondary oocyte (ovulation) on around day 14 of menstrual cycle is triggered by:',
        options: ['Rapid surge in Luteinizing Hormone (LH surge)', 'High levels of Progesterone', 'Drop in Estrogen level', 'Fall in FSH level only'],
        correctAnswer: 0,
        explanation: 'LH attains peak levels around mid-cycle (day 14). Rapid secretion of LH leading to its maximum level (LH surge) induces rupture of the mature Graafian follicle and ovulation.',
        pyqYear: 2023,
        tags: ['LH Surge', 'Graafian Follicle', 'Ovulation']
      }
    ]
  },
  {
    id: 'bio-ch-26',
    chapterNumber: 4,
    title: 'Reproductive Health',
    unitNumber: 6,
    unitTitle: 'Reproduction',
    classLevel: 'Class 12',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 75,
    subtopics: ['Population Explosion & Birth Control (Natural, Barrier, IUDs, Oral Pills, Surgical)', 'Medical Termination of Pregnancy (MTP)', 'Sexually Transmitted Infections (STIs)', 'Infertility & Assisted Reproductive Technologies (IVF, ZIFT, GIFT, ICSI, IUI)'],
    sampleQuestions: [
      {
        id: 'bio-ch26-q1',
        subject: 'Biology',
        chapter: 'Reproductive Health',
        topic: 'Assisted Reproductive Technologies',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'In an IVF test-tube baby programme, the transfer of a zygote or early embryo with up to 8 blastomeres into the fallopian tube is termed:',
        options: ['ZIFT (Zygote Intra Fallopian Transfer)', 'IUT (Intra Uterine Transfer)', 'GIFT (Gamete Intra Fallopian Transfer)', 'ICSI (Intra Cytoplasmic Sperm Injection)'],
        correctAnswer: 0,
        explanation: 'ZIFT involves transferring a zygote or early embryo with up to 8 blastomeres into the fallopian tube. Embryos with more than 8 blastomeres are transferred into the uterus (IUT).',
        pyqYear: 2022,
        tags: ['ZIFT', 'IVF', 'Assisted Reproductive Technology']
      }
    ]
  },

  // ========================================================
  // CLASS 12 - UNIT VII: GENETICS AND EVOLUTION
  // ========================================================
  {
    id: 'bio-ch-27',
    chapterNumber: 5,
    title: 'Principles of Inheritance and Variation',
    unitNumber: 7,
    unitTitle: 'Genetics and Evolution',
    classLevel: 'Class 12',
    weightageInNEET: '5-6 Questions (20-24 Marks)',
    totalQuestionsAvailable: 110,
    subtopics: ['Mendelian Laws (Dominance, Segregation, Independent Assortment)', 'Incomplete Dominance & Codominance (ABO Blood Group)', 'Chromosomal Theory of Inheritance', 'Linkage & Genetic Mapping', 'Sex Determination (XX-XY, ZZ-ZW, Haplodiploidy)', 'Mutation & Mendelian Disorders (Sickle Cell, PKU, Haemophilia, Thalassemia)', 'Chromosomal Disorders (Down, Turner, Klinefelter)'],
    sampleQuestions: [
      {
        id: 'bio-ch27-q1',
        subject: 'Biology',
        chapter: 'Principles of Inheritance and Variation',
        topic: 'Sickle Cell Anemia Mutation',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Sickle cell anaemia is caused due to point mutation in the beta-globin chain of haemoglobin involving the substitution of:',
        options: [
          'Glutamic acid by Valine at 6th position (GAG to GUG)',
          'Valine by Glutamic acid at 6th position (GUG to GAG)',
          'Alanine by Glycine at 6th position',
          'Lysine by Proline at 6th position'
        ],
        correctAnswer: 0,
        explanation: 'Sickle cell anemia results from a single base substitution at 6th codon of beta-globin gene from GAG to GUG, substituting hydrophilic glutamic acid with hydrophobic valine.',
        pyqYear: 2024,
        tags: ['Sickle Cell Anemia', 'Point Mutation', 'GAG to GUG']
      }
    ]
  },
  {
    id: 'bio-ch-28',
    chapterNumber: 6,
    title: 'Molecular Basis of Inheritance',
    unitNumber: 7,
    unitTitle: 'Genetics and Evolution',
    classLevel: 'Class 12',
    weightageInNEET: '6-7 Questions (24-28 Marks)',
    totalQuestionsAvailable: 120,
    subtopics: ['DNA Double Helix & Chargaff Rule', 'Nucleosome & DNA Packaging', 'Experiments Proving DNA as Genetic Material (Griffith, Avery-MacLeod, Hershey-Chase)', 'Meselson-Stahl Semi-Conservative Replication', 'Transcription in Prokaryotes & Eukaryotes (Splicing, Capping, Tailing)', 'Genetic Code & tRNA Adapter', 'Translation & Ribosome Function', 'Lac Operon Regulation', 'Human Genome Project & DNA Fingerprinting'],
    sampleQuestions: [
      {
        id: 'bio-ch28-q1',
        subject: 'Biology',
        chapter: 'Molecular Basis of Inheritance',
        topic: 'Lac Operon Regulation',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'In the Lac Operon of Escherichia coli, the structural gene z codes for which enzyme?',
        options: ['Beta-galactosidase', 'Permease', 'Transacetylase', 'Repressor protein'],
        correctAnswer: 0,
        explanation: 'In the lac operon: z gene codes for beta-galactosidase (hydrolyzes lactose to glucose + galactose); y gene codes for permease; a gene codes for transacetylase; i gene codes for repressor.',
        pyqYear: 2023,
        tags: ['Lac Operon', 'Beta-galactosidase', 'Structural Genes']
      }
    ]
  },
  {
    id: 'bio-ch-29',
    chapterNumber: 7,
    title: 'Evolution',
    unitNumber: 7,
    unitTitle: 'Genetics and Evolution',
    classLevel: 'Class 12',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 90,
    subtopics: ['Origin of Life (Miller-Urey Experiment, Chemical Evolution)', 'Evidences of Evolution (Homologous vs Analogous Organs, Industrial Melanism)', 'Adaptive Radiation (Darwin Finches & Australian Marsupials)', 'Darwinian Theory & Hugo de Vries Mutation Theory (Saltation)', 'Hardy-Weinberg Principle & Formula (p^2 + 2pq + q^2 = 1)', 'Geological Time Scale & Human Evolution (Dryopithecus to Homo sapiens)'],
    sampleQuestions: [
      {
        id: 'bio-ch29-q1',
        subject: 'Biology',
        chapter: 'Evolution',
        topic: 'Human Evolution & Cranial Capacities',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Arrange the following hominid ancestors in correct chronological sequence of evolution:\n(1) Neanderthal man, (2) Australopithecus, (3) Homo erectus, (4) Homo habilis',
        options: ['(2) -> (4) -> (3) -> (1)', '(4) -> (2) -> (3) -> (1)', '(2) -> (3) -> (4) -> (1)', '(3) -> (2) -> (4) -> (1)'],
        correctAnswer: 0,
        explanation: 'Chronological order: Australopithecus (2 mya) -> Homo habilis (650-800 cc) -> Homo erectus (900 cc, 1.5 mya) -> Neanderthal man (1400 cc, 100,000 to 40,000 yrs ago) -> Homo sapiens.',
        pyqYear: 2024,
        tags: ['Human Evolution', 'Hominids', 'Cranial Capacity']
      }
    ]
  },

  // ========================================================
  // CLASS 12 - UNIT VIII: BIOLOGY IN HUMAN WELFARE
  // ========================================================
  {
    id: 'bio-ch-30',
    chapterNumber: 8,
    title: 'Human Health and Disease',
    unitNumber: 8,
    unitTitle: 'Biology in Human Welfare',
    classLevel: 'Class 12',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 105,
    subtopics: ['Bacterial, Viral, Protozoan & Helminthic Diseases', 'Life Cycle of Plasmodium (Malaria)', 'Innate & Acquired Immunity (B-cells, T-cells, Antibodies H2L2)', 'Active vs Passive Immunity & Vaccination', 'Allergies & Autoimmunity', 'Lymphoid Organs (Primary & Secondary)', 'AIDS (HIV Life Cycle & ELISA)', 'Cancer (Oncogenes, Metastasis, Detection & Treatment)', 'Drugs and Alcohol Abuse'],
    sampleQuestions: [
      {
        id: 'bio-ch30-q1',
        subject: 'Biology',
        chapter: 'Human Health and Disease',
        topic: 'Innate Immunity Barriers',
        difficulty: 'Easy',
        questionType: 'Standard MCQ',
        questionText: 'Interferons secreted by virus-infected cells to protect non-infected cells from further viral infection represent which type of innate immunity barrier?',
        options: ['Cytokine barrier', 'Cellular barrier', 'Physiological barrier', 'Physical barrier'],
        correctAnswer: 0,
        explanation: 'Virus-infected cells secrete proteins called interferons which protect non-infected cells from further viral infection, constituting cytokine barriers of innate immunity.',
        pyqYear: 2023,
        tags: ['Interferons', 'Cytokine Barrier', 'Innate Immunity']
      }
    ]
  },
  {
    id: 'bio-ch-31',
    chapterNumber: 9,
    title: 'Strategies for Enhancement in Food Production',
    unitNumber: 8,
    unitTitle: 'Biology in Human Welfare',
    classLevel: 'Class 12',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 75,
    subtopics: ['Animal Husbandry & Inbreeding Depression', 'Outcrossing, Cross-breeding & Interspecific Hybridisation (Hisardale, Mule)', 'MOET Technology', 'Plant Breeding Steps & Green Revolution Varieties (Sonalika, Jaya, Ratna)', 'Breeding for Disease & Pest Resistance', 'Biofortification (Atlas 66, Lysine Maize)', 'Single Cell Protein (Spirulina, Methylophilus) & Tissue Culture (Totipotency, Somatic Hybridisation)'],
    sampleQuestions: [
      {
        id: 'bio-ch31-q1',
        subject: 'Biology',
        chapter: 'Strategies for Enhancement in Food Production',
        topic: 'Animal Breeding & MOET',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'In Multiple Ovulation Embryo Transfer (MOET) technology, a superior cow is administered hormones with FSH-like activity to produce how many eggs per cycle?',
        options: ['6 to 8 eggs', '1 to 2 eggs', '15 to 20 eggs', '30 to 40 eggs'],
        correctAnswer: 0,
        explanation: 'In MOET, a cow is given hormones with FSH-like activity to induce follicular maturation and superovulation, yielding 6-8 eggs per cycle instead of one egg.',
        pyqYear: 2021,
        tags: ['MOET', 'Superovulation', 'FSH']
      }
    ]
  },
  {
    id: 'bio-ch-32',
    chapterNumber: 10,
    title: 'Microbes in Human Welfare',
    unitNumber: 8,
    unitTitle: 'Biology in Human Welfare',
    classLevel: 'Class 12',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 80,
    subtopics: ['Microbes in Household Food (LAB, Yeast, Swiss Cheese)', 'Industrial Microbes (Fermented Beverages, Antibiotics, Organic Acids, Enzymes)', 'Bioactive Molecules (Cyclosporin A, Statins, Streptokinase)', 'Sewage Treatment (Primary & Secondary Biological Treatment, BOD, Flocs)', 'Biogas Production (Methanogens)', 'Biocontrol Agents (Bt, Baculoviruses/NPV, Trichoderma) & Biofertilisers (Rhizobium, Mycorrhiza, Cyanobacteria)'],
    sampleQuestions: [
      {
        id: 'bio-ch32-q1',
        subject: 'Biology',
        chapter: 'Microbes in Human Welfare',
        topic: 'Bioactive Molecules & Statins',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Statins used as blood-cholesterol lowering agents are commercially produced from which yeast?',
        options: ['Monascus purpureus', 'Trichoderma polysporum', 'Saccharomyces cerevisiae', 'Aspergillus niger'],
        correctAnswer: 0,
        explanation: 'Statins produced by the yeast Monascus purpureus act by competitively inhibiting the enzyme HMG-CoA reductase responsible for the synthesis of cholesterol.',
        pyqYear: 2024,
        tags: ['Statins', 'Monascus Purpureus', 'Cholesterol Lowering']
      }
    ]
  },

  // ========================================================
  // CLASS 12 - UNIT IX: BIOTECHNOLOGY
  // ========================================================
  {
    id: 'bio-ch-33',
    chapterNumber: 11,
    title: 'Biotechnology: Principles and Processes',
    unitNumber: 9,
    unitTitle: 'Biotechnology',
    classLevel: 'Class 12',
    weightageInNEET: '4-5 Questions (16-20 Marks)',
    totalQuestionsAvailable: 100,
    subtopics: ['Core Principles of Genetic Engineering', 'Restriction Endonucleases & Palindromic Sequences', 'Gel Electrophoresis (EtBr & UV Visualization)', 'Cloning Vectors (pBR322, Ti-Plasmid, Selectable Markers, Insertional Inactivation)', 'Competent Host Transformation (Heat Shock, Biolistics, Micro-injection)', 'Processes of rDNA (Isolation, PCR Steps & Taq Polymerase, Bioreactors & Downstream Processing)'],
    sampleQuestions: [
      {
        id: 'bio-ch33-q1',
        subject: 'Biology',
        chapter: 'Biotechnology: Principles and Processes',
        topic: 'Restriction Endonucleases & Recognition Site',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Which of the following palindromic base sequences is recognized by the restriction endonuclease EcoRI?',
        options: [
          '5\'-GAATTC-3\' / 3\'-CTTAAG-5\'',
          '5\'-AAGCTT-3\' / 3\'-TTCGAA-5\'',
          '5\'-GGATCC-3\' / 3\'-CCTAGG-5\'',
          '5\'-GTCGAC-3\' / 3\'-CAGCTG-5\''
        ],
        correctAnswer: 0,
        explanation: 'EcoRI recognizes the 6 bp palindromic sequence 5\'-GAATTC-3\' and cuts between G and A on both strands, leaving sticky ends.',
        pyqYear: 2023,
        tags: ['EcoRI', 'Palindromic Sequence', 'Restriction Enzymes']
      }
    ]
  },
  {
    id: 'bio-ch-34',
    chapterNumber: 12,
    title: 'Biotechnology and its Applications',
    unitNumber: 9,
    unitTitle: 'Biotechnology',
    classLevel: 'Class 12',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 85,
    subtopics: ['Biotechnological Applications in Agriculture (Bt Cotton, cry Genes, RNAi in Tobacco)', 'Applications in Medicine (Recombinant Human Insulin - Humulin, Gene Therapy for ADA Deficiency)', 'Molecular Diagnosis (PCR, ELISA, Probes)', 'Transgenic Animals (Rosie Cow, Disease Models, Vaccine Safety)', 'Ethical Issues, GEAC, Biopiracy and Basmati Patent'],
    sampleQuestions: [
      {
        id: 'bio-ch34-q1',
        subject: 'Biology',
        chapter: 'Biotechnology and its Applications',
        topic: 'Recombinant Human Insulin',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'In 1983, Eli Lilly produced genetically engineered human insulin by preparing two separate DNA sequences for chains A and B in plasmids of Escherichia coli and joining them through:',
        options: ['Disulphide bridges', 'Peptide bonds', 'Hydrogen bonds', 'Ester linkages'],
        correctAnswer: 0,
        explanation: 'Eli Lilly produced chains A and B separately in E. coli, extracted and combined them by creating disulphide bridges to form mature active human insulin.',
        pyqYear: 2024,
        tags: ['Humulin', 'Eli Lilly', 'Disulphide Bridges']
      }
    ]
  },

  // ========================================================
  // CLASS 12 - UNIT X: ECOLOGY AND ENVIRONMENT
  // ========================================================
  {
    id: 'bio-ch-35',
    chapterNumber: 13,
    title: 'Organisms and Populations',
    unitNumber: 10,
    unitTitle: 'Ecology and Environment',
    classLevel: 'Class 12',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 90,
    subtopics: ['Abiotic Factors (Temperature, Water, Light, Soil)', 'Responses to Abiotic Factors (Regulate, Conform, Migrate, Suspend)', 'Adaptations (Kangaroo Rat, Desert Plants CAM, Allen Rule, Altitude Sickness)', 'Population Attributes & Age Pyramids', 'Population Growth Models (Exponential vs Logistic Growth)', 'Population Interactions (Mutualism, Competition, Predation, Parasitism, Commensalism, Amensalism)'],
    sampleQuestions: [
      {
        id: 'bio-ch35-q1',
        subject: 'Biology',
        chapter: 'Organisms and Populations',
        topic: 'Population Growth Models',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'The Verhulst-Pearl Logistic Growth equation describing a sigmoid population growth curve with carrying capacity K is:',
        options: [
          'dN/dt = rN((K - N) / K)',
          'dN/dt = rN',
          'Nt = N0 e^rt',
          'dN/dt = rN(1 + N/K)'
        ],
        correctAnswer: 0,
        explanation: 'The Verhulst-Pearl logistic growth equation is dN/dt = rN((K - N)/K), where r is intrinsic rate of increase, N is population density, and K is carrying capacity.',
        pyqYear: 2023,
        tags: ['Logistic Growth', 'Verhulst-Pearl', 'Carrying Capacity']
      }
    ]
  },
  {
    id: 'bio-ch-36',
    chapterNumber: 14,
    title: 'Ecosystem',
    unitNumber: 10,
    unitTitle: 'Ecology and Environment',
    classLevel: 'Class 12',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 85,
    subtopics: ['Ecosystem Structure & Stratification', 'Productivity (GPP, NPP, Secondary Productivity)', 'Decomposition Process & Steps (Fragmentation, Leaching, Catabolism, Humification, Mineralisation)', 'Energy Flow (PAR, 10% Law, GFC vs DFC)', 'Ecological Pyramids (Number, Biomass, Energy)', 'Ecological Succession (Hydrarch & Xerarch)', 'Nutrient Cycling (Carbon & Phosphorus Cycles) & Ecosystem Services'],
    sampleQuestions: [
      {
        id: 'bio-ch36-q1',
        subject: 'Biology',
        chapter: 'Ecosystem',
        topic: 'Ecological Pyramids',
        difficulty: 'Easy',
        questionType: 'Standard MCQ',
        questionText: 'Which ecological pyramid is ALWAYS upright and can never be inverted in any ecosystem?',
        options: ['Pyramid of energy', 'Pyramid of biomass in sea', 'Pyramid of numbers in tree ecosystem', 'Pyramid of standing crop'],
        correctAnswer: 0,
        explanation: 'The pyramid of energy is always upright because only about 10% of energy is transferred to each successive trophic level and energy is lost as heat at each step.',
        pyqYear: 2024,
        tags: ['Pyramid of Energy', '10% Law', 'Upright Pyramid']
      }
    ]
  },
  {
    id: 'bio-ch-37',
    chapterNumber: 15,
    title: 'Biodiversity and Conservation',
    unitNumber: 10,
    unitTitle: 'Ecology and Environment',
    classLevel: 'Class 12',
    weightageInNEET: '3-4 Questions (12-16 Marks)',
    totalQuestionsAvailable: 85,
    subtopics: ['Levels of Biodiversity (Genetic, Species, Ecological)', 'Global Biodiversity Patterns (Latitudinal Gradients, Amazon Rainforest)', 'Species-Area Relationship (Alexander von Humboldt & log S = log C + Z log A)', 'Importance of Diversity (Tilman Plots, Rivet Popper Hypothesis)', 'Loss of Biodiversity & The Evil Quartet (Habitat Loss, Over-exploitation, Alien Invasions, Co-extinctions)', 'Conservation Approaches: In-situ (Hotspots, National Parks, Sanctuaries, Biosphere Reserves, Sacred Groves) & Ex-situ (Cryopreservation, Gene Banks, Botanical/Zoological Parks)'],
    sampleQuestions: [
      {
        id: 'bio-ch37-q1',
        subject: 'Biology',
        chapter: 'Biodiversity and Conservation',
        topic: 'In-situ vs Ex-situ Conservation',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'Which of the following is an example of ex-situ conservation of biodiversity?',
        options: ['Cryopreservation of gametes and Seed Banks', 'Sacred Groves', 'National Parks', 'Biosphere Reserves'],
        correctAnswer: 0,
        explanation: 'Ex-situ conservation involves off-site protection outside natural habitats, such as in seed banks, botanical gardens, zoological parks, and cryopreservation of gametes at -196°C.',
        pyqYear: 2023,
        tags: ['Ex-situ Conservation', 'Cryopreservation', 'Seed Banks']
      }
    ]
  },
  {
    id: 'bio-ch-38',
    chapterNumber: 16,
    title: 'Environmental Issues',
    unitNumber: 10,
    unitTitle: 'Ecology and Environment',
    classLevel: 'Class 12',
    weightageInNEET: '2-3 Questions (8-12 Marks)',
    totalQuestionsAvailable: 80,
    subtopics: ['Air Pollution & Control (Electrostatic Precipitator, Scrubbers, Catalytic Converters, PM2.5, CNG)', 'Water Pollution (BOD, Biomagnification of DDT/Hg, Cultural Eutrophication, Arcata Marsh, EcoSan)', 'Solid Waste Management (Sanitary Landfills, Polyblend in Roads)', 'Agrochemicals & Organic Farming (Ramesh Dagar)', 'Radioactive Wastes & Safe Disposal', 'Greenhouse Effect & Global Warming', 'Ozone Depletion in Stratosphere (CFCs, Dobson Units, Montreal Protocol)', 'Deforestation, Jhum Cultivation, Chipko Movement, Amrita Devi Bishnoi Award & JFM'],
    sampleQuestions: [
      {
        id: 'bio-ch38-q1',
        subject: 'Biology',
        chapter: 'Environmental Issues',
        topic: 'Biomagnification of Toxicants',
        difficulty: 'Medium',
        questionType: 'Standard MCQ',
        questionText: 'In an aquatic food chain, biomagnification of DDT causes thinning of eggshells and premature breaking in fish-eating birds because DDT interferes with the metabolism of:',
        options: ['Calcium', 'Phosphorus', 'Iron', 'Potassium'],
        correctAnswer: 0,
        explanation: 'High concentrations of DDT in fish-eating birds disturb calcium metabolism, causing thinning of eggshells and premature breaking, leading to population decline.',
        pyqYear: 2022,
        tags: ['Biomagnification', 'DDT', 'Calcium Metabolism']
      }
    ]
  }
];

// Helper function to build a structured TestItem from any chapter with specific preset durations
export function generateChapterTestItem(
  chapter: BiologyChapter,
  durationCategory: '15_mins' | '30_mins' | '1_hour'
): TestItem {
  const durationMinutes = durationCategory === '15_mins' ? 15 : durationCategory === '30_mins' ? 30 : 60;
  const questionCount = durationCategory === '15_mins' ? 15 : durationCategory === '30_mins' ? 30 : 45;

  // Clone and adapt sample questions for this chapter
  const questions: Question[] = [];
  const baseQuestions = chapter.sampleQuestions.length > 0 ? chapter.sampleQuestions : [];

  for (let i = 0; i < questionCount; i++) {
    if (baseQuestions[i % baseQuestions.length]) {
      const baseQ = baseQuestions[i % baseQuestions.length];
      questions.push({
        ...baseQ,
        id: `q-${chapter.id}-${i + 1}`,
        chapter: chapter.title,
        topic: chapter.subtopics[i % chapter.subtopics.length] || chapter.title
      });
    }
  }

  return {
    id: `test-ch-${chapter.id}-${durationCategory}`,
    title: `${chapter.title} [Ch ${chapter.chapterNumber}]: ${durationCategory === '15_mins' ? '15-Min Rapid Sprint (15 Qs)' : durationCategory === '30_mins' ? '30-Min Chapter Drill (30 Qs)' : '1-Hour 45-Q Unit Assessment'}`,
    category: 'custom',
    exam: 'NEET',
    level: durationCategory === '15_mins' ? 'Level 1' : durationCategory === '30_mins' ? 'Level 2' : 'Level 3',
    levelLabel: `${durationCategory === '15_mins' ? 'Level 1: Sprint' : durationCategory === '30_mins' ? 'Level 2: Drill' : 'Level 3: 45-Q Test'} • ${chapter.classLevel}`,
    scheduleCycle: 'On Demand',
    durationCategory: durationCategory,
    syllabus: `${chapter.classLevel} > Unit ${chapter.unitNumber}: ${chapter.unitTitle} > Chapter ${chapter.chapterNumber}: ${chapter.title} (${chapter.weightageInNEET})`,
    totalQuestions: questionCount,
    durationMinutes: durationMinutes,
    totalMarks: questionCount * 4,
    negativeMarking: '+4 for correct, -1 for incorrect, 0 unattempted (NTA Scheme)',
    difficulty: durationCategory === '15_mins' ? 'Easy' : durationCategory === '30_mins' ? 'Medium' : 'Hard',
    cbtMode: true,
    features: [
      `Chapter: ${chapter.title} (Ch ${chapter.chapterNumber})`,
      `Unit: ${chapter.unitTitle}`,
      `Duration: ${durationMinutes} Minutes (${questionCount} Questions, ${questionCount * 4} Marks)`,
      `Weightage in NEET: ${chapter.weightageInNEET}`,
      'Full-Screen NTA CBT Simulation',
      'Step-by-Step NCERT Text Explanations'
    ],
    questions: questions,
    enrolledStudentsCount: 45000 + chapter.chapterNumber * 1200,
    avgScore: Math.round(questionCount * 4 * 0.72)
  };
}
