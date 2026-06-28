export interface Event {
  id: string;
  slug: string;
  name: string;
  sanskritName: string;
  tagline: string;
  icon: string;
  poster: string;
  description: string;
  poem: string;
  objectives: string[];
  rules: string[];
  eligibility: string;
  teamSize: string;
  venue: string;
  timeSlot: string;
  coordinator: string;
  coordinatorContact?: string;
  roundStructure?: { title: string; description: string }[];
  judgingCriteria?: string[];
  requirements?: string[];
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  tier: 'title' | 'platinum' | 'gold' | 'silver';
}

export const siteConfig = {
  name: 'Chakravyuh',
  tagline: 'Devise & Dominate',
  date: '2 July 2026',
  email: 'chakravyuh@school.edu',
  instagram: '@chakravyuh',
  whatsapp: '+91XXXXXXXXXX',
  address: 'School Auditorium, Main Campus',
  stats: {
    events: 5,
    participants: 300,
    schools: 40,
    finale: 1,
  },
};

export const events: Event[] = [
  {
    id: '1',
    slug: 'shark-tank',
    name: 'Shark Tank',
    sanskritName: 'Artha Nirmaan',
    tagline: 'Startup Pitching Competition',
    icon: 'Briefcase',
    poster: '/posters/shark-tank.jpg',
    description:
      'Step into the world of entrepreneurship. Teams pitch their innovative business ideas to a panel of "Sharks" — seasoned investors who challenge, critique, and potentially invest in the most promising ventures. This is where raw ideas meet real-world scrutiny.',
    poem: 'An idea sparks, a dream takes flight,\nIn the tank, sharks see the light.\nPitch with passion, stand your ground,\nWhere fortunes are made and legends are crowned.',
    objectives: [
      'Foster entrepreneurial thinking',
      'Develop presentation and pitching skills',
      'Encourage innovative problem-solving',
    ],
    rules: [
      'Each team gets 5 minutes for presentation',
      '2 minutes for Q&A with the Sharks',
      'Use of visual aids is encouraged',
      'Business ideas must be original',
    ],
    eligibility: 'Open to all high school students',
    teamSize: '3-4 members',
    venue: 'Main Auditorium',
    timeSlot: '10:00 AM – 11:00 AM',
    coordinator: 'Mr. Sharma',
    coordinatorContact: 'sharma@school.edu',
    roundStructure: [
      {
        title: 'Elevator Pitch',
        description: 'Teams present a 60-second overview of their business idea.',
      },
      {
        title: 'Detailed Presentation',
        description: 'A 4-minute deep dive into the business model, market analysis, and financials.',
      },
      {
        title: 'Shark Q&A',
        description: 'Sharks grill the team on feasibility, scalability, and risks.',
      },
      {
        title: 'Final Verdict',
        description: 'Sharks decide whether to invest, pass, or make a counter-offer.',
      },
    ],
    judgingCriteria: [
      'Innovation & Creativity',
      'Business Viability',
      'Presentation Quality',
      'Response to Questions',
    ],
    requirements: [
      'Laptop for presentation',
      'Business plan summary (1 page)',
      'Visual aids (optional)',
    ],
  },
  {
    id: '2',
    slug: 'stock-market',
    name: 'Stock Market',
    sanskritName: 'Nivesh Chakra',
    tagline: 'Trading Simulation',
    icon: 'TrendingUp',
    poster: '/posters/stock-market.jpg',
    description:
      'Experience the adrenaline of the stock market floor. Teams navigate a real-time simulated trading environment, making split-second decisions to build the most valuable portfolio. Will you be the next Wolf of Wall Street?',
    poem: 'Numbers rise, fortunes fall,\nIn the market, you must stand tall.\nBuy and sell with steady hand,\nIn Nivesh Chakra, you command.',
    objectives: [
      'Understand stock market fundamentals',
      'Develop analytical decision-making',
      'Experience real-time trading pressure',
    ],
    rules: [
      'Each team starts with virtual capital of ₹10,00,000',
      'Trades must be executed within the platform',
      'No external assistance allowed',
      'Short selling is permitted',
    ],
    eligibility: 'Open to all high school students',
    teamSize: '2-3 members',
    venue: 'Computer Lab 1 & 2',
    timeSlot: '11:15 AM – 12:30 PM',
    coordinator: 'Ms. Patel',
    coordinatorContact: 'patel@school.edu',
    roundStructure: [
      {
        title: 'Tutorial Session',
        description: 'Brief walkthrough of the trading platform and rules.',
      },
      {
        title: 'Practice Round',
        description: '5-minute practice trading session to familiarize with the interface.',
      },
      {
        title: 'Main Trading Round',
        description: '45 minutes of live trading with real-time market fluctuations.',
      },
      {
        title: 'Portfolio Valuation',
        description: 'Final portfolios are valued; the highest returns win.',
      },
    ],
    judgingCriteria: [
      'Portfolio Growth',
      'Risk Management',
      'Trading Strategy',
      'Decision Speed',
    ],
    requirements: [
      'Basic knowledge of stock markets preferred',
      'Calculator (optional)',
    ],
  },
  {
    id: '3',
    slug: 'auction-wars',
    name: 'Auction Wars',
    sanskritName: 'Sangharsh',
    tagline: 'Competitive Auction',
    icon: 'Gavel',
    poster: '/posters/auction-wars.jpg',
    description:
      'Strategy meets spectacle in this high-energy auction competition. Teams bid against each other for valuable assets, form alliances, and deploy tactics to outsmart opponents. Every bid could be your triumph — or your downfall.',
    poem: 'The gavel falls, the crowd is loud,\nIn Sangharsh, the strong are proud.\nBid with wit, play with fire,\nVictory awaits the bold and higher.',
    objectives: [
      'Develop strategic thinking and negotiation skills',
      'Understand auction dynamics and valuation',
      'Foster competitive spirit and teamwork',
    ],
    rules: [
      'Each team receives a fixed budget',
      'Bidding increments are predetermined',
      'Alliances are allowed but must be disclosed',
      'Last bid wins in case of tie (auctioneer discretion)',
    ],
    eligibility: 'Open to all high school students',
    teamSize: '2-3 members',
    venue: 'Seminar Hall',
    timeSlot: '11:15 AM – 12:30 PM',
    coordinator: 'Mr. Verma',
    coordinatorContact: 'verma@school.edu',
    roundStructure: [
      {
        title: 'Asset Preview',
        description: 'Teams receive a catalog of items up for auction with estimated values.',
      },
      {
        title: 'Warm-Up Round',
        description: 'A practice auction round to understand the pace and strategy.',
      },
      {
        title: 'Main Auction',
        description: 'Fast-paced bidding across multiple high-value assets.',
      },
      {
        title: 'Final Showdown',
        description: 'A single high-stakes item where all remaining budgets compete.',
      },
    ],
    judgingCriteria: [
      'Value of Assets Acquired',
      'Budget Efficiency',
      'Strategic Alliances',
      'Bidding Tactics',
    ],
    requirements: [
      'Sharp analytical skills',
      'Quick decision-making',
    ],
  },
  {
    id: '4',
    slug: 'tribunal',
    name: 'Tribunal',
    sanskritName: 'Nyay Sabha',
    tagline: 'Corporate Courtroom',
    icon: 'Scale',
    poster: '/posters/tribunal.jpg',
    description:
      'Justice is the game. Teams step into a simulated corporate courtroom as prosecution, defense, or judges. Present arguments, challenge evidence, and deliver verdicts in high-stakes corporate disputes. The truth is yours to uncover.',
    poem: 'In Nyay Sabha, truth prevails,\nWhere justice walks on winding trails.\nArgue well and stand for right,\nIn this courtroom, you are the light.',
    objectives: [
      'Develop legal reasoning and argumentation',
      'Enhance public speaking and persuasion',
      'Understand corporate law fundamentals',
    ],
    rules: [
      'Teams are assigned roles before each round',
      'Each side gets 5 minutes for opening statements',
      'Evidence must be submitted beforehand',
      'Judges decision is final',
    ],
    eligibility: 'Open to all high school students',
    teamSize: '2-3 members',
    venue: 'Moot Court Room',
    timeSlot: '11:15 AM – 12:30 PM',
    coordinator: 'Ms. Singh',
    coordinatorContact: 'singh@school.edu',
    roundStructure: [
      {
        title: 'Case Briefing',
        description: 'Teams receive the case details and are assigned roles.',
      },
      {
        title: 'Opening Statements',
        description: 'Prosecution and defense present their initial arguments.',
      },
      {
        title: 'Evidence & Cross-Examination',
        description: 'Witness testimonies and evidence are presented and challenged.',
      },
      {
        title: 'Closing Arguments & Verdict',
        description: 'Final arguments are heard, and the judges deliver the verdict.',
      },
    ],
    judgingCriteria: [
      'Legal Reasoning',
      'Presentation & Articulation',
      'Evidence Handling',
      'Team Coordination',
    ],
    requirements: [
      'Formal attire preferred',
      'Case file and notes allowed',
    ],
  },
  {
    id: '5',
    slug: 'grand-finale',
    name: 'Grand Finale',
    sanskritName: 'Antim Chakra',
    tagline: 'The Final Battle',
    icon: 'Trophy',
    poster: '/posters/grand-finale.jpg',
    description:
      'The ultimate test. The top performers from all events unite for the Grand Finale — a multi-disciplinary challenge that demands every skill. Strategy, wit, knowledge, and nerve. Only one team will be crowned Chakravyuh Champion.',
    poem: 'The final ring, the last frontier,\nAntim Chakra draws us near.\nAll roads meet, the best collide,\nOne team wins with arms wide-eyed.',
    objectives: [
      'Test interdisciplinary capabilities',
      'Promote teamwork under pressure',
      'Crown the ultimate champions',
    ],
    rules: [
      'Only qualifying teams from preceding events may participate',
      'Multiple rounds test different skill sets',
      'Points from previous events carry forward partially',
      'The team with the highest cumulative score wins',
    ],
    eligibility: 'Qualifying teams from main events',
    teamSize: 'Entire Team',
    venue: 'Main Auditorium',
    timeSlot: '12:50 PM – 2:20 PM',
    coordinator: 'Event Committee',
    coordinatorContact: 'events@school.edu',
    roundStructure: [
      {
        title: 'Quiz Round',
        description: 'General knowledge and current affairs quiz.',
      },
      {
        title: 'Strategy Round',
        description: 'Teams solve a complex strategic problem.',
      },
      {
        title: 'Rapid Fire',
        description: 'Quick-response challenge testing speed and accuracy.',
      },
      {
        title: 'Final Face-Off',
        description: 'Live head-to-head challenge on the main stage.',
      },
    ],
    judgingCriteria: [
      'Cumulative Points',
      'Round Performance',
      'Team Coordination',
      'Sportsmanship',
    ],
    requirements: [
      'All team members must be present',
      'Carry team credentials',
    ],
  },
];

export const timeline: TimelineItem[] = [
  { time: '7:30 AM', title: 'Arrival & Registration', description: 'Schools arrive and check in at the registration desk. Receive event kits and schedule.' },
  { time: '8:45 AM', title: 'Opening Ceremony', description: 'Welcome address, lamp lighting, and introduction to the day\'s events.' },
  { time: '10:00 AM', title: 'Artha Nirmaan – Shark Tank', description: 'Startup pitching begins in the Main Auditorium.' },
  { time: '11:15 AM', title: 'Parallel Events Begin', description: 'Nivesh Chakra, Sangharsh, and Nyay Sabha run simultaneously.' },
  { time: '12:50 PM', title: 'Antim Chakra – Grand Finale', description: 'The ultimate battle begins in the Main Auditorium.' },
  { time: '2:40 PM', title: 'Closing Ceremony', description: 'Results announced, trophies awarded, and closing remarks.' },
];

export const scheduleData = [
  { time: '7:30 AM – 8:30 AM', activity: 'Arrival & Registration', venue: 'Main Entrance', description: 'Check-in, receive event kits and badges.' },
  { time: '8:45 AM – 9:45 AM', activity: 'Opening Ceremony', venue: 'Main Auditorium', description: 'Welcome address, cultural performance, and introduction.' },
  { time: '10:00 AM – 11:00 AM', activity: 'Artha Nirmaan (Shark Tank)', venue: 'Main Auditorium', description: 'Startup pitching competition.' },
  { time: '11:15 AM – 12:30 PM', activity: 'Nivesh Chakra (Stock Market)', venue: 'Computer Lab 1 & 2', description: 'Real-time trading simulation.' },
  { time: '11:15 AM – 12:30 PM', activity: 'Sangharsh (Auction Wars)', venue: 'Seminar Hall', description: 'Competitive auction challenge.' },
  { time: '11:15 AM – 12:30 PM', activity: 'Nyay Sabha (Tribunal)', venue: 'Moot Court Room', description: 'Corporate courtroom simulation.' },
  { time: '12:30 PM – 12:50 PM', activity: 'Break', venue: 'Throughout Campus', description: 'Lunch and networking break.' },
  { time: '12:50 PM – 2:20 PM', activity: 'Antim Chakra (Grand Finale)', venue: 'Main Auditorium', description: 'The ultimate multi-round challenge.' },
  { time: '2:40 PM – 3:30 PM', activity: 'Closing Ceremony & Awards', venue: 'Main Auditorium', description: 'Results, trophy distribution, and closing remarks.' },
];

export const faqs: FAQItem[] = [
  {
    question: 'Can participants join multiple events?',
    answer: 'Participants can register for multiple events, but overlapping time slots may restrict participation. We recommend focusing on one event per time slot for the best experience.',
  },
  {
    question: 'What is the team size for each event?',
    answer: 'Team sizes vary by event. Shark Tank requires 3–4 members, while Stock Market, Auction Wars, and Tribunal require 2–3 members each. The Grand Finale involves the entire team.',
  },
  {
    question: 'How does scoring work?',
    answer: 'Each event has its own scoring criteria. Points are awarded based on performance, and top scorers qualify for the Grand Finale. Cumulative scores determine the overall champion.',
  },
  {
    question: 'What should participants carry?',
    answer: 'Participants should bring their school ID cards, laptops for relevant events, writing materials, and water bottles. Specific requirements are listed on each event page.',
  },
  {
    question: 'When should schools report?',
    answer: 'Schools are requested to report by 7:30 AM on the day of the event. Registration opens at 7:30 AM and the opening ceremony begins at 8:45 AM sharp.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'Registration details including any fees will be communicated to participating schools upon registration confirmation.',
  },
  {
    question: 'Can spectators attend?',
    answer: 'Yes, spectators are welcome. However, only registered participants will be allowed in competition areas during active rounds.',
  },
  {
    question: 'What is the dress code?',
    answer: 'Formal or smart casual attire is recommended. Participants in Tribunal are requested to wear formal attire.',
  },
];

export const sponsors: Sponsor[] = [
  { name: 'Title Sponsor', logo: '/sponsors/title.png', tier: 'title' },
  { name: 'Platinum Sponsor', logo: '/sponsors/platinum.png', tier: 'platinum' },
  { name: 'Gold Sponsor', logo: '/sponsors/gold.png', tier: 'gold' },
  { name: 'Silver Sponsor', logo: '/sponsors/silver.png', tier: 'silver' },
];

export const teamAllocation = [
  { event: 'Artha Nirmaan (Shark Tank)', size: '3–4 members' },
  { event: 'Nivesh Chakra (Stock Market)', size: '2–3 members' },
  { event: 'Sangharsh (Auction Wars)', size: '2–3 members' },
  { event: 'Nyay Sabha (Tribunal)', size: '2–3 members' },
  { event: 'Antim Chakra (Grand Finale)', size: 'Entire Team' },
];

export const galleryImages = [
  { src: '/gallery/img1.jpg', alt: 'Event photo 1', type: 'image' },
  { src: '/gallery/img2.jpg', alt: 'Event photo 2', type: 'image' },
  { src: '/gallery/img3.jpg', alt: 'Event photo 3', type: 'image' },
  { src: '/gallery/img4.jpg', alt: 'Event photo 4', type: 'image' },
  { src: '/gallery/vid1.mp4', alt: 'Event video 1', type: 'video' },
];
