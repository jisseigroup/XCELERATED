export const site = {
  name: 'XCELERATED',
  email: 'info@xcelerated.com',
  phone: '(555) 000-0000',
  location: 'California',
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'XSPA', href: '/xspa', description: 'Speed, Performance & Agility camps for serious student athletes.' },
      { label: 'XPT', href: '/xpt', description: 'Focused personal training built around individual goals and measurable progress.' },
      { label: 'XGX', href: '/xgx', description: 'Coach-led group exercise sessions designed for consistency, energy, and accountability.' },
    ],
  },
  { label: 'Register', href: '/register' },
  { label: 'Contact', href: '/contact' },
];

export const pillars = [
  'Respect',
  'Discipline',
  'Effort',
  'Perseverance',
  'Sportsmanship',
  'Task Driven',
  'Mental Toughness',
];

export const credentials = [
  'State of California Credentialed Teacher',
  'Corrective Exercise Specialist (CES)',
  'Performance Enhancement Specialist (PES)',
  'NFHS Level 3 Coach',
  'Certified Interscholastic Coach',
  'Accredited Interscholastic Coach',
];

export const programs = [
  {
    code: 'XSPA',
    title: 'Speed, Performance & Agility',
    href: '/xspa',
    price: 'Full 6 weeks · $800',
    summary: 'The core student-athlete development division focused on speed, movement quality, agility, confidence, injury reduction, mindset, and long-term performance.',
  },
  {
    code: 'XPT',
    title: 'XCELERATED Personal Training',
    href: '/xpt',
    price: '$150 per session',
    summary: 'Individualized training for athletes and active clients who want focused coaching, personalized progression, and performance built around their goals.',
  },
  {
    code: 'XGX',
    title: 'Group Exercise',
    href: '/xgx',
    price: 'Custom scheduling',
    summary: 'Structured coach-led group sessions built to improve fitness, accountability, energy, and consistency in a positive training environment.',
  },
];
