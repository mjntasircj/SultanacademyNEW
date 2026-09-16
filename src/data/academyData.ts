import { Course, Teacher, CampusImage, AcademyEvent, Testimonial, CampusFeature } from '../types';

export const ACADEMY_INFO = {
  name: 'Sultan Academy',
  tagline: 'Shaping students for a brighter future.',
  motto: 'Where practice meets perfection.',
  founder: 'Sultan Mahmud Shuvo',
  address: 'Taltola Member Line Road, Dhaka 1219, Bangladesh',
  phone: '+880 1708-661040',
  displayPhone: '+880 1708-661040',
  rawPhone: '+8801708661040',
  email: 'sultanacademy2025@gmail.com',
  facebook: 'https://www.facebook.com/people/Sultan-Academy/61589847337711/#',
  instagram: 'https://www.instagram.com/sultanacademy21',
  whatsappUrl: 'https://wa.me/8801708661040?text=Hello%20Sultan%20Academy,%20I%20would%20like%20to%20enquire%20about%20admissions.',
  aim: 'A* is the aim',
  curricula: 'Cambridge & Edexcel (O & A Level)',
  paymentFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSexpXrpco9DCRnn7VdH7VvSUi5k0Kd5losKz2CMPpahoJ_6pg/viewform?usp=header',
  locationShort: 'Taltola Member Line Road, Dhaka',
  googleMapsUrl: 'https://maps.app.goo.gl/ruhp6YcwkfEoQf2P6',
  googleMapsFullUrl: 'https://www.google.com/maps/place/Sultanacademy/@23.754225,90.4226814,16z/data=!4m6!3m5!1s0x3755c1478e165a33:0xa2674876fad7d5f5!8m2!3d23.754225!4d90.4226814!16s%2Fg%2F11nvf85k_l',
  googleDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=23.754225,90.4226814',
  coordinates: {
    lat: 23.754225,
    lng: 90.4226814,
  },
};

export const COURSES_DATA: Course[] = [
  {
    id: 'mathematics-d',
    name: 'Mathematics D',
    category: 'Mathematics',
    level: 'Cambridge + Edexcel · O & A Level',
    examBoards: ['Cambridge', 'Edexcel'],
    description:
      'Covers the full Cambridge and Edexcel O Level and A Level Mathematics syllabus, focusing on building strong concepts, improving problem-solving skills, and preparing students for exams with clear explanations and structured practice.',
    features: [
      'Comprehensive algebraic, geometric, and numerical mastery',
      'Step-by-step past paper walkthroughs with examiners marks schemes',
      'Weekly timed worksheets and personalized doubt clearing',
      'Intensive revision bootcamps before board examination cycles',
    ],
    instructor: 'Sultan Mahmud Shuvo',
    badge: 'Core Subject',
    monthlyFee: '3000 Taka / month',
  },
  {
    id: 'additional-mathematics',
    name: 'Additional Mathematics',
    category: 'Mathematics',
    level: 'Cambridge + Edexcel · O Level',
    examBoards: ['Cambridge', 'Edexcel'],
    description:
      'Covers the Cambridge and Edexcel O Level Additional Mathematics syllabus, helping students master advanced topics, develop logical thinking, and handle complex exam questions with confidence and effective techniques.',
    features: [
      'Rigorous foundation in calculus, trigonometry, and coordinate geometry',
      'Advanced analytical problem-solving frameworks',
      'Focus on error-prone areas and challenging multistep questions',
      'Targeted preparation for students aspiring for STEM excellence in A Level',
    ],
    instructor: 'Sultan Mahmud Shuvo',
    badge: 'Advanced Math',
    monthlyFee: '3000 Taka / month',
  },
  {
    id: 'computer-science',
    name: 'Computer Science',
    category: 'Computer',
    level: 'Cambridge + Edexcel · O & A Level',
    examBoards: ['Cambridge', 'Edexcel'],
    description:
      'Covers the Cambridge and Edexcel O Level and A Level Computer Science syllabus, including core theoretical concepts, problem-solving, and programming fundamentals, ensuring students are well-prepared for both written and practical exam components.',
    features: [
      'Core computational logic, data representation, and systems architecture',
      'Hands-on programming practice (Python / Pseudocode / Algorithm design)',
      'In-depth mastery of Paper 1 (Theory) and Paper 2 (Problem Solving & Programming)',
      'Practical problem drills and real coding problem sets',
    ],
    instructor: 'Sultan Mahmud Shuvo',
    badge: 'High Demand',
    monthlyFee: '3000 Taka / month',
  },
  {
    id: 'physics',
    name: 'Physics',
    category: 'Sciences',
    level: 'Cambridge + Edexcel · O & A Level',
    examBoards: ['Cambridge', 'Edexcel'],
    description:
      'Covers the full Cambridge and Edexcel O Level and A Level Physics syllabus, helping students develop a solid grasp of fundamental principles, formulas, and applications. The teaching approach focuses on concept clarity, logical reasoning, and exam-oriented problem solving, enabling students to understand topics deeply and apply them effectively in both structured and numerical questions.',
    features: [
      'Mechanics, Thermal Physics, Waves, Electricity & Magnetism, Modern Physics',
      'Formula derivations and conceptual intuition before calculation',
      'Alternative to Practical (ATP) and practical reasoning drills',
      'Regular diagnostic exams with individual performance feedback',
    ],
    instructor: 'Mahdi Ahmad',
    badge: 'Science Core',
    monthlyFee: '3000 Taka / month',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    category: 'Sciences',
    level: 'Cambridge + Edexcel · O & A Level',
    examBoards: ['Cambridge', 'Edexcel'],
    description:
      'Covers the full Cambridge and Edexcel O Level and A Level Chemistry syllabus, focusing on building a strong understanding of core concepts, reactions, and problem-solving techniques. Lessons emphasize clear explanations, structured learning, and regular practice to help students master both theoretical and practical aspects of chemistry and perform confidently in exams.',
    features: [
      'Physical, Inorganic, and Organic chemistry structured mastery',
      'Reaction pathways, stoichiometry, and ionic equation drills',
      'Complete coverage of Alternative to Practical (ATP) and qualitative analysis',
      'Comprehensive question bank with yearly exam solutions',
    ],
    instructor: 'Istiak Dihan',
    badge: 'Science Core',
    monthlyFee: '3000 Taka / month',
  },
  {
    id: 'economics',
    name: 'Economics',
    category: 'Business',
    level: 'Cambridge + Edexcel · O & A Level',
    examBoards: ['Cambridge', 'Edexcel'],
    description:
      'Covers the full Cambridge and Edexcel O Level and A Level Economics syllabus, helping students understand microeconomic and macroeconomic principles, develop strong analytical and essay-writing skills, and approach data-response questions with clarity and confidence. Real-world examples make complex economic concepts engaging and easy to grasp.',
    features: [
      'Microeconomic market structures and macroeconomic fiscal/monetary policies',
      'Essay structuring frameworks for high-scoring evaluative answers',
      'Data-response question strategies using actual economic indicators',
      'Real-world case studies contextualizing academic theory',
    ],
    instructor: 'Ashaduzaman Limon',
    badge: 'Commerce & Humanities',
    monthlyFee: '3000 Taka / month',
  },
];

export const TEACHERS_DATA: Teacher[] = [
  {
    id: 'sultan-mahmud-shuvo',
    name: 'Sultan Mahmud Shuvo',
    title: 'Founder & Lead Educator',
    role: 'Founder & Lead Educator',
    subject: 'Mathematics & Computer Science',
    curriculum: 'Cambridge & Edexcel O/A Level',
    photo: '/images/shuvo.png',
    bio: 'Sultan Mahmud Shuvo is a dedicated and passionate educator committed to helping students achieve academic excellence. With years of experience teaching Cambridge and Edexcel O & A Level Mathematics and Computer Science, he is known for breaking down complex concepts into simple, intuitive frameworks. He blends disciplined problem practice with an approachable classroom energy that turns student fear into exam confidence.',
    highlights: [
      'Founder and Academic Director of Sultan Academy',
      'Specialist in Mathematics D, Additional Mathematics, and Computer Science',
      'Pioneer of concept-first problem modeling and disciplined practice',
      'Mentored countless students to straight A* grades in board examinations',
    ],
    quote: 'Good teaching changes how a student sees a problem. When understanding replaces rote memorisation, high marks become the natural byproduct.',
    isFounder: true,
  },
  {
    id: 'mahdi-ahmad',
    name: 'Mahdi Ahmad',
    title: 'Physics Educator',
    role: 'Physics Educator',
    subject: 'Physics',
    curriculum: 'Cambridge & Edexcel O/A Level',
    photo: '/images/mahdi.jpg',
    bio: 'With deep expertise in Cambridge and Edexcel O Level and A Level Physics, Mahdi Ahmad helps students build a strong conceptual foundation, master problem-solving techniques, and develop genuine curiosity for physical sciences. His dynamic teaching style turns challenging mathematical models and abstract theories into approachable, engaging lessons.',
    highlights: [
      'Expert in Cambridge and Edexcel O/A Level Physics syllabuses',
      'Master of numerical problem-solving and conceptual clarity',
      'Dedicated Alternative to Practical (ATP) guidance specialist',
    ],
    quote: 'Physics is not about memorising formulas; it is about understanding how the universe operates and applying logic to solve any challenge.',
  },
  {
    id: 'istiak-dihan',
    name: 'Istiak Dihan',
    title: 'Chemistry Educator',
    role: 'Chemistry Educator',
    subject: 'Chemistry',
    curriculum: 'Cambridge & Edexcel O/A Level',
    photo: '/images/istiak.jpg',
    bio: 'An experienced Chemistry tutor known for his methodical and student-focused approach to teaching. Istiak Dihan specialises in Cambridge and Edexcel O Level and A Level Chemistry, guiding students through organic synthesis, stoichiometry, and physical chemistry with clarity, patience, and exam-tested practice.',
    highlights: [
      'Systematic breakdown of organic and inorganic chemistry mechanisms',
      'Focus on mark-scheme keywords and chemical calculation techniques',
      'Patient mentor ensuring students walk into the exam room fully prepared',
    ],
    quote: 'Once you understand the underlying patterns of chemical behavior, Chemistry transforms from a daunting chore into an intuitive science.',
  },
  {
    id: 'ashaduzaman-limon',
    name: 'Ashaduzaman Limon',
    title: 'Economics Educator',
    role: 'Economics Educator',
    subject: 'Economics',
    curriculum: 'Cambridge & Edexcel O/A Level',
    photo: '/images/limon.jpg',
    bio: 'A passionate educator who makes Economics engaging and highly relevant to real-world understanding. Ashaduzaman Limon covers the complete Cambridge and Edexcel O Level and A Level Economics syllabus, helping students master analytical diagrams, write high-scoring essays, and evaluate data with sharp clarity.',
    highlights: [
      'Comprehensive command of micro and macroeconomic theories',
      'Specialist in high-scoring essay evaluation and data-response papers',
      'Connecting global economic headlines to syllabus mark schemes',
    ],
    quote: 'Economics gives students the analytical lens to understand the decisions shaping countries, businesses, and everyday human life.',
  },
];

export const CAMPUS_IMAGES: CampusImage[] = [
  {
    id: 'campus-1',
    src: '/images/study-environment.jpg',
    title: 'Comfortable Study Environment',
    caption: 'Quiet, air-conditioned, and comfortable study spaces engineered for long hours of focused learning.',
    category: 'Study Environment',
  },
  {
    id: 'campus-2',
    src: '/images/classroom.jpg',
    title: 'Focused Classrooms',
    caption: 'Modern whiteboard-equipped classroom engineered for distraction-free lectures and active student participation.',
    category: 'Classrooms',
  },
  {
    id: 'campus-3',
    src: '/images/sports.jpg',
    title: 'Sports & Student Tournaments',
    caption: 'Annual SA Cup football tournaments, competitive matches, and active team recreation alongside academic excellence.',
    category: 'Sports',
  },
  {
    id: 'campus-4',
    src: '/images/campus-4.jpeg',
    title: 'Taltola Member Line Road Location',
    caption: 'Centrally located and secure coaching facility in Dhaka 1219, accessible for students across the city.',
    category: 'Location',
  },
];

export const CAMPUS_FEATURES: CampusFeature[] = [
  {
    id: 'clean-env',
    title: 'Clean Learning Environment',
    description: 'Maintained to high standards of hygiene and comfort, ensuring students can spend long study hours feeling fresh and focused.',
    iconName: 'Sparkles',
  },
  {
    id: 'focused-classrooms',
    title: 'Focused Classrooms',
    description: 'Optimized batch sizes that facilitate one-on-one attention between educators and each enrolled student.',
    iconName: 'Users',
  },
  {
    id: 'student-friendly',
    title: 'Student-Friendly Atmosphere',
    description: 'A supportive, welcoming environment where students feel safe asking questions, sharing difficulties, and growing academically.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'well-equipped',
    title: 'Well-Equipped Modern Classroom',
    description: 'High-definition projectors, digital presentation aids, and curated print resources for syllabus topics.',
    iconName: 'Projector',
  },
  {
    id: 'peaceful-atmosphere',
    title: 'Peaceful Atmosphere',
    description: 'Quiet academic zone shielded from external street distractions, allowing uninterrupted concentration.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'convenient-location',
    title: 'Convenient Dhaka Location',
    description: 'Situated at Taltola Member Line Road, Dhaka 1219, with excellent transport connectivity for students across the capital.',
    iconName: 'MapPin',
  },
];

export const EVENTS_DATA: AcademyEvent[] = [
  {
    id: 'sa-cup-season-3',
    title: 'SA CUP — SEASON 3',
    season: 'Season 3',
    category: 'Football Event',
    date: 'Annual Academy Championship',
    location: 'Dhaka Sports Arena',
    status: 'Upcoming',
    bannerImage: '/images/sa-cup-tournament.jpg',
    description:
      'The premier annual football tournament of Sultan Academy! Bringing together students, alumni, and faculty for high-energy matches, team bonding, and athletic excellence. Designed to foster sportsmanship, teamwork, and healthy recreation alongside intense academic preparation.',
    activities: [
      '7-a-side Football Tournament',
      'Group Stage & Knockout Rounds',
      'Golden Boot & Best Goalkeeper Awards',
      'Faculty vs Students Exhibition Match',
      'Trophy Presentation Ceremony',
    ],
    rules: [
      'Open to all registered Sultan Academy students and verified alumni',
      'Standard FIFA mini-pitch guidelines apply with referee supervision',
      'Fair play and respect for match officials and opponents are mandatory',
      'Team jerseys and safety gear are coordinated by student organizers',
    ],
    highlights: [
      'Over 8 competitive student teams',
      'High-voltage penalty shootouts and matchday energy',
      'Community building celebrating work-life balance for O/A Level candidates',
    ],
  },
  {
    id: 'indoor-event-season-2',
    title: 'INDOOR EVENT — SEASON 2',
    season: 'Season 2',
    category: 'Indoor Sports & Esports',
    date: 'Mid-Year Academy Festival',
    location: 'Sultan Academy Student Hub',
    status: 'Upcoming',
    bannerImage: '/images/indoor-event-trophies.jpg',
    description:
      'A thrilling indoor sports and esports showcase packed with friendly competition! Featuring high-stakes gaming battles, arcade challenges, and precision sports to give students a rewarding break from academic stress.',
    activities: [
      'EA Sports FC 26 Console Tournament',
      'Indoor Mini-Basketball Shootout',
      'Penalty Kicks Precision Challenge',
      'Precision Darts Championship',
      'Table Games & Board Strategy Arena',
    ],
    rules: [
      'Solo and duo entry slots available across gaming and target sports',
      'Single-elimination bracket for the FC 26 Championship',
      'Top scorers across all events earn custom Sultan Academy commemorative medals',
    ],
    highlights: [
      'Live tournament bracket streaming on academy screens',
      'Snack lounge and community commentary',
      'Celebration of strategy, reflexes, and friendly banter',
    ],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-mahadi',
    name: 'Mahadi',
    subject: 'O Levels Computer',
    quote:
      'Sultan Academy is the best. I used to waste so much time but after being taught by Shuvo sir, I gained my confidence back and started taking my studies seriously. I owe a lot to sir — thank you for everything.',
    initials: 'M',
    verified: true,
  },
  {
    id: 't-musfhiq',
    name: 'Musfhiq',
    subject: 'Sultan Academy Reels Editor',
    quote:
      'I was the reels editor of Sultan Academy. Sir used to be very chill with us but also strict when it came to studies. I learned a lot from sir — thanks for all the lessons. Truly you are the best.',
    initials: 'M',
    verified: true,
  },
  {
    id: 't-rishan',
    name: 'Rishan',
    subject: 'O Levels Math — A*',
    grade: 'A*',
    quote:
      'Sir was the best. I was always low on confidence but sir helped me a lot in studies. Also beside coaching he was also my gym partner — thanks sir for every moment we spent together.',
    initials: 'R',
    verified: true,
  },
  {
    id: 't-medhansh',
    name: 'Medhansh Sharle',
    subject: 'Maths and Sciences — A*',
    grade: 'A*',
    quote:
      'Best academy in the world. I got 98.89 percentage all because of sir.',
    initials: 'MS',
    verified: true,
  },
];

export const HOME_STATS = [
  { label: 'Campus & Location', value: 'Dhaka · Malibhag' },
  { label: 'Curricula Covered', value: 'Cambridge & Edexcel' },
  { label: 'Academic Levels', value: 'O + A Levels' },
  { label: 'Core Disciplines', value: '06 Core Subjects' },
  { label: 'Founder & Lead', value: 'Sultan Mahmud Shuvo' },
  { label: 'Academy Standard', value: 'A* is the Aim' },
];
