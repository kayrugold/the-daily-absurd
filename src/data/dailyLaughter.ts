export type LaughterCategory = 'all' | 'aviation' | 'work' | 'everyday';

export interface ScriptDialogueLine {
  speaker: string;
  line: string;
  isPunchline?: boolean;
}

export interface DailyLaughterItem {
  id: string;
  rubric: string;
  category: Exclude<LaughterCategory, 'all'>;
  title: string;
  setting?: string;
  dialogue: ScriptDialogueLine[];
  contributor: string;
}

export const DAILY_LAUGHTER_SCRIPTS: DailyLaughterItem[] = [
  {
    id: 'tower-coffee',
    rubric: 'Life at the Gate',
    category: 'aviation',
    title: 'Priority Boarding',
    setting: 'Overheard at Concourse B, 6:40 a.m.',
    dialogue: [
      {
        speaker: 'GATE AGENT',
        line: 'We are now boarding Group 1, Diamond Medallion, and anyone who emotionally identifies as an early riser.',
      },
      {
        speaker: 'PASSENGER',
        line: 'What about Group 7?',
      },
      {
        speaker: 'GATE AGENT',
        line: 'Group 7 is currently scheduled to board directly into the Tuesday flight.',
        isPunchline: true,
      },
    ],
    contributor: '— Contributed by R. Pendelton, Toledo',
  },
  {
    id: 'committee-minutes',
    rubric: "All in a Day's Work",
    category: 'work',
    title: 'Action Items',
    setting: 'Third-floor conference room, minute 84.',
    dialogue: [
      {
        speaker: 'CHAIR',
        line: 'Before we adjourn, has anybody actually read the 90-page efficiency report?',
      },
      {
        speaker: 'ANALYST',
        line: 'No, but I did highlight the cover in three inspiring shades of yellow.',
      },
      {
        speaker: 'CHAIR',
        line: 'Brilliant. Let’s schedule a follow-up Tuesday to admire the highlights.',
        isPunchline: true,
      },
    ],
    contributor: '— Submitted by E. Inkwell, Washington',
  },
  {
    id: 'hold-music',
    rubric: 'Everyday Absurd',
    category: 'everyday',
    title: 'Valued Caller',
    setting: 'Customer service line, hour two.',
    dialogue: [
      {
        speaker: 'RECORDING',
        line: 'Your call is very important to us. Please continue holding.',
      },
      {
        speaker: 'CALLER',
        line: 'I’ve listened to the same eight bars of smooth saxophone forty-nine times.',
      },
      {
        speaker: 'RECORDING',
        line: 'Thank you for holding. Your call is slightly less important than the jazz.',
        isPunchline: true,
      },
    ],
    contributor: '— Sent in by D. Marlowe, Des Moines',
  },
  {
    id: 'cockpit-glitch',
    rubric: 'Humor in Uniform',
    category: 'aviation',
    title: 'Technical Difficulties',
    setting: 'Tarmac hold, Row 19.',
    dialogue: [
      {
        speaker: 'CAPTAIN',
        line: 'Folks, air-traffic control says all screens are frozen across the eastern seaboard.',
      },
      {
        speaker: 'CO-PILOT',
        line: 'Should I read the backup paper map?',
      },
      {
        speaker: 'CAPTAIN',
        line: 'Relax. I’m waiting for my nephew to finish rebooting the breakroom router.',
        isPunchline: true,
      },
    ],
    contributor: '— Anonymous Pilot, Gate 14',
  },
  {
    id: 'clipboard-promotion',
    rubric: "All in a Day's Work",
    category: 'work',
    title: 'Executive Presence',
    setting: 'Ministry elevator, 8:55 a.m.',
    dialogue: [
      {
        speaker: 'INTERN',
        line: 'Why does Director Beam always sprint toward the stairwell holding two blank clipboards?',
      },
      {
        speaker: 'SENIOR CLERK',
        line: 'Because nobody stops a man who looks like he’s auditing a fire.',
        isPunchline: true,
      },
    ],
    contributor: '— Contributed by C. Twill, Capital Plaza',
  },
  {
    id: 'bakery-budget',
    rubric: 'Quotable Quips',
    category: 'everyday',
    title: 'Sweet Inflation',
    setting: 'Downtown bakery counter.',
    dialogue: [
      {
        speaker: 'CUSTOMER',
        line: 'How much is that birthday sheet cake?',
      },
      {
        speaker: 'BAKER',
        line: 'Thirty-eight dollars for the sponge, and nineteen-fifty a month for the sprinkles.',
      },
      {
        speaker: 'CUSTOMER',
        line: 'Fine. Put me down for a thirty-year fixed cupcake.',
        isPunchline: true,
      },
    ],
    contributor: '— Submitted by S. Ledger, Chicago',
  },
  {
    id: 'pretzel-declaration',
    rubric: 'Life at the Gate',
    category: 'aviation',
    title: 'Customs Inspection',
    setting: 'Terminal security arch.',
    dialogue: [
      {
        speaker: 'OFFICER',
        line: 'Sir, this jar of existential dread looks over 3.4 fluid ounces.',
      },
      {
        speaker: 'TRAVELER',
        line: 'It’s mostly airline delay anxiety and lukewarm coffee.',
      },
      {
        speaker: 'OFFICER',
        line: 'Drink the coffee now or check the anxiety with oversized luggage.',
        isPunchline: true,
      },
    ],
    contributor: '— Overheard by K. Vance, Newark',
  },
  {
    id: 'it-democracy',
    rubric: "All in a Day's Work",
    category: 'work',
    title: 'Help Desk Ticket #1',
    setting: 'Cabinet IT Support Desk.',
    dialogue: [
      {
        speaker: 'MINISTER',
        line: 'The consensus meter is blinking angry red again!',
      },
      {
        speaker: 'TECH SUPPORT',
        line: 'Did you try clearing the press release cache and blaming Tuesday?',
      },
      {
        speaker: 'MINISTER',
        line: 'Twice! Now it’s blinking beige and demanding a subcommittee.',
        isPunchline: true,
      },
    ],
    contributor: '— Filed by P. Civic, Annex B',
  },
  {
    id: 'weather-forecast',
    rubric: 'Domestic Dispatches',
    category: 'everyday',
    title: 'Local Forecast',
    setting: 'Kitchen table, morning coffee.',
    dialogue: [
      {
        speaker: 'WIFE',
        line: 'The TV says 0% chance of rain, yet you’re wearing galoshes and carrying a canoe paddle.',
      },
      {
        speaker: 'HUSBAND',
        line: 'The TV also promised our flights were on time.',
        isPunchline: true,
      },
    ],
    contributor: '— Contributed by L. Mercer, Seattle',
  },
];
