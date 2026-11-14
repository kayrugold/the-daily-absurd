export type ZodiacSignId =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export interface HoroscopeEntry {
  id: ZodiacSignId;
  name: string;
  dates: string;
  rulingBody: string;
  headline: string;
  forecast: string;
  luckyItem: string;
  threatLevel: string;
  avoid: string;
}

export const HOROSCOPES: HoroscopeEntry[] = [
  {
    id: 'aries',
    name: 'Aries',
    dates: 'Mar 21 – Apr 19',
    rulingBody: 'Mars & Red Emergency Buttons',
    headline: 'Resist the urge to press glowing fixtures.',
    forecast:
      'Mercury enters your House of Unlabeled Switches today. If a shiny red button sits on a pedestal in Cabinet Room B, let a three-month oversight subcommittee stare at it before you poke anything.',
    luckyItem: 'Four-gram airline pretzel bag',
    threatLevel: 'Moderate (Loose Toaster Cord)',
    avoid: 'Volunteering to chair a follow-up committee',
  },
  {
    id: 'taurus',
    name: 'Taurus',
    dates: 'Apr 20 – May 20',
    rulingBody: 'Venus & Lukewarm Breakroom Coffee',
    headline: 'Stubborn patience beats airport turbulence.',
    forecast:
      'Others around Gate B12 may spiral into 2001-grade geopolitical panic over a frozen screen, but Venus rewards the calm Taurus who quietly secures the last cinnamon brown sugar Pop-Tart.',
    luckyItem: 'Laminated 1997 sticky note',
    threatLevel: 'Low (Unless frosting prices spike)',
    avoid: 'Refreshing FlightAware more than 40 times an hour',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    dates: 'May 21 – Jun 20',
    rulingBody: 'Mercury & Two-Sided Clipboards',
    headline: 'Double down on looking gravely busy.',
    forecast:
      'Your natural duality shines when carrying two separate manila folders down Corridor 8 while murmuring "Those Q3 numbers are spicy." Nobody will ask what you actually do until Thursday.',
    luckyItem: 'Two bent paperclips',
    threatLevel: 'Elevated (Surprise elevator small talk)',
    avoid: 'Smiling near senior executives',
  },
  {
    id: 'cancer',
    name: 'Cancer',
    dates: 'Jun 21 – Jul 22',
    rulingBody: 'The Moon & Holding Patterns Over Toledo',
    headline: 'Embrace the comfort of circular progress.',
    forecast:
      'You may feel like you have completed forty-seven scenic laps around the exact same cornfield, yet emotional alignment arrives once Seat 14B shares their neck pillow and establishes municipal zoning laws.',
    luckyItem: 'Complimentary Biscoff biscuit',
    threatLevel: 'Mild (Territorial armrest dispute)',
    avoid: 'Trying to rename regional silos too early',
  },
  {
    id: 'leo',
    name: 'Leo',
    dates: 'Jul 23 – Aug 22',
    rulingBody: 'The Sun & Spinning 3D Broadcast Globes',
    headline: 'Turn a twelve-minute glitch into nine hours of glory.',
    forecast:
      'The stars spotlight your flair for cinematic exaggeration. Even if the problem turns out to be an unplugged cable behind a toaster, command the room with three glowing radar rings and a stern lower-third banner.',
    luckyItem: 'Oversized studio cue card',
    threatLevel: 'Dramatic (9-Hour Special Pending)',
    avoid: 'Letting facts shorten a great monologue',
  },
  {
    id: 'virgo',
    name: 'Virgo',
    dates: 'Aug 23 – Sep 22',
    rulingBody: 'Mercury & Official Rubber Stamps',
    headline: 'Audit the universe, then file it under Miscellaneous.',
    forecast:
      'Your eye for detail detects a smudge of mustard posing as a taxiing 737 on someone else’s screen. Gently break the news, then go check behind the radiator for lost national contingency binders.',
    luckyItem: 'Self-inking "APPROVED" stamp',
    threatLevel: 'Critical (Crooked staples)',
    avoid: 'Explaining browser cookies to senators',
  },
  {
    id: 'libra',
    name: 'Libra',
    dates: 'Sep 23 – Oct 22',
    rulingBody: 'Venus & Courtroom Gavels',
    headline: 'Weigh both sides—preferably on a lease agreement.',
    forecast:
      'Harmony is restored when everyone quietly agrees the outage was definitely another department’s responsibility. Keep scales balanced, wigs powdered, and miniature rodent placards neatly stacked.',
    luckyItem: 'Propeller-topped judge’s hat',
    threatLevel: 'Suspended (Pending cash inspection)',
    avoid: 'Signing clipboards labeled "FOR SALE"',
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    dates: 'Oct 23 – Nov 21',
    rulingBody: 'Pluto & Classified Sticky Notes',
    headline: 'Hidden truths lurk behind the breakroom radiator.',
    forecast:
      'You sense immediately that "routine system maintenance" actually means somebody needed two open outlets for breakfast pastry. Keep that secret vaulted until fiscal Q4 planning.',
    luckyItem: 'Extension cord labeled "DO NOT TOUCH"',
    threatLevel: 'Stealth (4-ounce liquid limit)',
    avoid: 'Trusting any AI that promises fewer meetings',
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    dates: 'Nov 22 – Dec 21',
    rulingBody: 'Jupiter & Coastal Ballot Leaves',
    headline: 'Pack sunglasses—even civic hardware needs PTO.',
    forecast:
      'Wanderlust pulls hard toward an undisclosed sunny beach. Leave a politely worded postcard asking everyone else to resolve one minor disagreement on their own before you return.',
    luckyItem: 'Polarized clip-on sunglasses',
    threatLevel: 'Zero (Out of office till Monday)',
    avoid: 'Cardboard suggestion boxes in the lobby',
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    dates: 'Dec 22 – Jan 19',
    rulingBody: 'Saturn & Subcommittees on Subcommittees',
    headline: 'Automate one task, accidentally invent seven meetings.',
    forecast:
      'Efficiency charts look magnificent before noon, though an enthusiastic algorithm will invite you to fourteen Tuesday syncs to evaluate the font choice on its own invitations. Order lukewarm decaf.',
    luckyItem: '400% efficiency slide deck',
    threatLevel: 'High (Calendar Tetris)',
    avoid: 'Saying "Let’s circle back offline" aloud',
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    dates: 'Jan 20 – Feb 18',
    rulingBody: 'Uranus & Firmware 2.0 Reboots',
    headline: 'Have you tried turning your week off and on again?',
    forecast:
      'Unconventional remedies prevail when conventional wisdom blinks amber. Flip the master toggle for thirty seconds, ignore minor public outcry, and unveil a glossy four-color press release.',
    luckyItem: 'Chrome two-slice router',
    threatLevel: 'Mildly Electrified',
    avoid: 'Holding your phone at arm’s length for signal',
  },
  {
    id: 'pisces',
    name: 'Pisces',
    dates: 'Feb 19 – Mar 20',
    rulingBody: 'Neptune & Buttercream Futures',
    headline: 'Celebrate small victories before frosting inflation hits.',
    forecast:
      'Poetic intuition warns that artisanal sprinkles now require a thirty-year fixed-rate mortgage. Invest emotionally in a fractional one-eighth raisin muffin and toast to surviving another press cycle.',
    luckyItem: 'Emergency celebratory sparkler',
    threatLevel: 'Sweet & Volatile',
    avoid: 'Ordering sheet cakes without outside backing',
  },
];
