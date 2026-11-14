import { ComicSfxTone } from '../utils/comicSfx';

export type IssueId = 'issue-002' | 'issue-001';

export type SketchId =
  | 'faa-compliance'
  | 'faa-glitch'
  | 'tsa-panic'
  | 'flightaware'
  | 'holding-pattern'
  | 'post-it-backup'
  | 'cable-news'
  | 'buttons'
  | 'democracy'
  | 'busy'
  | 'ballot'
  | 'market'
  | 'ai';

export type CharacterMood = 'neutral' | 'panicked' | 'smug' | 'shocked' | 'deadpan' | 'relieved';

export type PropType =
  | 'radar'
  | 'suitcase'
  | 'phone'
  | 'airplane'
  | 'postit'
  | 'tv-globe'
  | 'button'
  | 'switch'
  | 'clipboard'
  | 'ballot'
  | 'cake'
  | 'committee';

export interface ArticleContent {
  deck: string;
  byline: string;
  dateline: string;
  category: string;
  paragraphs: string[];
  pullQuote: string;
  cartoonCaption: string;
}

export interface SketchLine {
  speaker: 'MINISTER GRIM' | 'DIRECTOR BEAM' | 'TYCOON' | 'FAA CHIEF';
  text: string;
  grimMood?: CharacterMood;
  beamMood?: CharacterMood;
  sfx?: string;
  sfxTone?: ComicSfxTone;
  shake?: boolean;
}

export interface SketchScript {
  id: SketchId;
  issueId: IssueId;
  title: string;
  stageBanner: string;
  propType: PropType;
  videoUrl?: string;
  imageUrl?: string;
  article: ArticleContent;
  lines: SketchLine[];
}

export interface LivingStripItem {
  id: SketchId;
  episode: string;
  category: string;
  title: string;
  summary: string;
  ctaLabel: string;
  bgTint: string;
}

export interface SidebarStory {
  id: SketchId;
  theme: 'blue' | 'gold';
  stamp?: string;
  eyebrow: string;
  title: string;
  summary: string;
  ctaLabel: string;
}

export interface IssueConfig {
  id: IssueId;
  shortLabel: string;
  issueBadge: string;
  coverEyebrow: string;
  coverTag: string;
  coverCaption: string;
  coverSketchId: SketchId;
  tickerHeadlines: string[];
  sidebarStories: [SidebarStory, SidebarStory];
  livingStrips: LivingStripItem[];
}

export const SKETCH_SCRIPTS: Record<SketchId, SketchScript> = {
  // === ISSUE 002 FEATURED ANIMATED POLITICAL CARTOON ===
  'faa-compliance': {
    id: 'faa-compliance',
    issueId: 'issue-002',
    title: 'Compliance For Sale! (Case Closed)',
    stageBanner: 'COURT OF EXPEDITED APPROVALS',
    propType: 'clipboard',
    videoUrl: '/assets/aistudio/gemini_generated_video_cd422f4e_62bfb5e0.mp4',
    imageUrl: '/assets/aistudio/Gemini_Generated_Image_o6oe4uo6oe4uo6oe_d135ab0a.jpeg',
    article: {
      deck: 'Equipped with a propeller beanie, a tattered suit, and a clipboard marked “COMPLIANCE (FOR SALE),” the FAA Chief swiftly rubber-stamps the entire sky.',
      byline: 'By Barnaby P. Quirk, Chief Editorial Cartoonist',
      dateline: 'COURTROOM 4 —',
      category: 'Aviation & Oversight',
      paragraphs: [
        'Proceedings in the Federal Airspace Inquiry wrapped up in record time today after a cigar-chomping aviation magnate leaned across the bench, stuffed fifty-dollar bills into both pockets, and gently reminded the trembling FAA Chief who pays for the propeller on his helmet.',
        'Within four seconds, every pending safety review, communication-outage audit, and grounded-flight report was stamped “ALL APPROVED,” while the presiding Judge cheerfully banged his gavel and checked the lease agreement on his own powdered wig.',
        'Even the courtroom mice—carrying miniature “JUSTICE FOR LEASE” placards—expressed astonishment at how efficiently a national communication glitch can be resolved once cash rules the law.',
      ],
      pullQuote: '“Right away, boss! It is all approved. Case closed—cash rules the law!”',
      cartoonCaption: 'Editorial Cartoon — Ink-and-crosshatch animated feature on regulatory capture.',
    },
    lines: [
      {
        speaker: 'TYCOON',
        text: 'Sign the papers now, you fake director! I own this whole court!',
        sfx: 'SLAM!',
        sfxTone: 'clunk',
        shake: true,
      },
      {
        speaker: 'FAA CHIEF',
        text: 'Right away, boss! It is all approved. Case closed, cash rules the law!',
        sfx: 'STAMP!',
        sfxTone: 'ding',
      },
    ],
  },

  // === ISSUE 002: FAA GLITCH STORIES ===
  'faa-glitch': {
    id: 'faa-glitch',
    issueId: 'issue-002',
    title: 'Hold All Planes! (It’s Just a Loose Cable)',
    stageBanner: 'FAA NATIONAL COMMAND BUNKER',
    propType: 'radar',
    article: {
      deck: 'Nationwide airspace briefly freezes in historic 2001-style alarm before officials trace the outage to a cinnamon brown sugar Pop-Tart.',
      byline: 'By Barnaby P. Quirk, Chief Aviation Panic Correspondent',
      dateline: 'WASHINGTON —',
      category: 'Aviation',
      paragraphs: [
        'For forty-two harrowing minutes this morning, every commercial aircraft in North America was ordered to stay glued to the tarmac after the nation’s primary flight-communications console displayed an ominous blinking cursor and refused to respond to firm tapping.',
        'Within seconds, cable networks dusted off their sternest 2001 crisis graphics, passengers at Gate B12 formed an emergency governing council, and the Department of Urgent Sighing convened three separate subcommittees to speculate dramatically on what might have happened.',
        'At 9:14 a.m., a junior facilities technician crouched behind the command desk and discovered the master airspace router had been unplugged to make room for a chrome two-slice toaster. Service resumed immediately once the pastry popped, though officials classified the flavor as top secret.',
      ],
      pullQuote: '“Nothing happened, nobody was hurt, and yet we achieved nearly eleven hours of breathless television coverage.”',
      cartoonCaption: 'Fig. 1 — Federal air-traffic leadership investigates a catastrophic loss of toaster bandwidth.',
    },
    lines: [
      {
        speaker: 'MINISTER GRIM',
        text: 'RED ALERT! Every communication screen in the country just went blank!',
        grimMood: 'panicked',
        beamMood: 'shocked',
        sfx: 'WHOOP-WHOOP!',
        sfxTone: 'alert',
        shake: true,
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'Is it cyberwarfare?! Space lasers?! Ghosts in the radar?!',
        grimMood: 'panicked',
        beamMood: 'panicked',
        sfx: 'GASP!',
        sfxTone: 'boing',
      },
      {
        speaker: 'MINISTER GRIM',
        text: 'Worse! Ground every plane from Maine to Maui until we find the source!',
        grimMood: 'shocked',
        beamMood: 'panicked',
        sfx: 'THUD!',
        sfxTone: 'clunk',
        shake: true,
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'Wait a minute... why is this blinking beige cable plugged into the breakroom toaster?',
        grimMood: 'deadpan',
        beamMood: 'deadpan',
        sfx: 'BZZZT!',
        sfxTone: 'zap',
      },
      {
        speaker: 'MINISTER GRIM',
        text: 'Hold on. Did someone unplug the National Airspace to heat up a Pop-Tart?!',
        grimMood: 'shocked',
        beamMood: 'smug',
        sfx: 'POP!',
        sfxTone: 'boing',
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'It was cinnamon brown sugar. Airspace is back online. Nobody mention the toaster.',
        grimMood: 'deadpan',
        beamMood: 'relieved',
        sfx: 'DING!',
        sfxTone: 'ding',
      },
    ],
  },
  'tsa-panic': {
    id: 'tsa-panic',
    issueId: 'issue-002',
    title: 'TSA Confiscates 4-Ounce Bottle of Panic',
    stageBanner: 'GATE B12 · EMERGENCY SNACK ZONE',
    propType: 'suitcase',
    article: {
      deck: 'Travelers braced for a geopolitical thriller, only to receive lukewarm coffee and a complimentary 4-gram packet of pretzels.',
      byline: 'By Clara V. Twill, Terminal Anthropologist',
      dateline: 'CONCOURSE C —',
      category: 'Travel',
      paragraphs: [
        'Witnesses at Gate B12 report that at least six travelers began drafting emotional farewell texts to their houseplants the moment the departure monitors switched from "ON TIME" to "SYSTEM COMMUNICATIONS ERROR."',
        'Security officers quickly intervened, reminding passengers that any existential dread exceeding 3.4 fluid ounces must be placed in a clear quart-sized bag or consumed prior to the screening arch.',
        'When flights resumed twenty minutes later with zero explanation beyond "a technical glitch," disappointed drama enthusiasts demanded a partial refund on the adrenaline they had already spent.',
      ],
      pullQuote: '“I didn’t spend $18 on airport trail mix just to find out everything is fine.”',
      cartoonCaption: 'Fig. 2 — Standard-issue snack rations distributed during the Great Mild Inconvenience.',
    },
    lines: [
      {
        speaker: 'MINISTER GRIM',
        text: 'Sir, all flights are grounded indefinitely. Please step away from the kiosk.',
        grimMood: 'deadpan',
        beamMood: 'panicked',
        sfx: 'BEEP!',
        sfxTone: 'clunk',
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'It’s 2001 all over again! Tell my family I loved them! Should I eat my neck pillow?!',
        grimMood: 'deadpan',
        beamMood: 'panicked',
        sfx: 'AAAHHH!',
        sfxTone: 'alert',
        shake: true,
      },
      {
        speaker: 'MINISTER GRIM',
        text: 'Calm down. It’s a routine system error. Have a complimentary 4-gram bag of pretzels.',
        grimMood: 'smug',
        beamMood: 'shocked',
        sfx: 'CRINKLE!',
        sfxTone: 'boing',
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'Wait... nothing happened? No UFOs? No drama? Just a frozen screen?',
        grimMood: 'deadpan',
        beamMood: 'deadpan',
      },
      {
        speaker: 'MINISTER GRIM',
        text: 'Yes. Though your existential dread exceeds the 3.4-ounce liquid limit. Hand it over.',
        grimMood: 'smug',
        beamMood: 'relieved',
        sfx: 'SIGH...',
        sfxTone: 'sigh',
      },
    ],
  },
  flightaware: {
    id: 'flightaware',
    issueId: 'issue-002',
    title: 'How to Refresh FlightAware 94 Times a Minute',
    stageBanner: 'TERMINAL C · CHARGING OUTLET ROW',
    propType: 'phone',
    article: {
      deck: 'A public-service manual for staring furiously at tiny yellow airplane icons that have not moved since Tuesday.',
      byline: 'By The Bureau of Departure Board Etiquette',
      dateline: 'GATE 19 —',
      category: 'Public Service',
      paragraphs: [
        'Experts confirm that pulling down on a flight-tracker app every 0.6 seconds does not mechanically propel a Boeing 737 down a runway, though it remains the single most popular cardiovascular thumb workout in American terminals.',
        'For maximum dramatic effect, pair each refresh with an audible sigh directed at nobody in particular, followed by holding your phone at arm’s length as if better cell reception lives four inches closer to the ceiling tiles.',
        'Should a tiny yellow speck appear to taxi toward Runway 4L, inspect carefully before cheering: nine times out of ten it is a stray flake of Auntie Anne’s pretzel salt.',
      ],
      pullQuote: '“The screen said delayed, so naturally I refreshed it eighty more times to verify its commitment.”',
      cartoonCaption: 'Fig. 3 — Official thumb posture for refreshing an unchanged departure status.',
    },
    lines: [
      {
        speaker: 'DIRECTOR BEAM',
        text: 'Refresh. Nothing. Refresh. Still delayed. Refresh. Maybe if I hold my phone upside down!',
        grimMood: 'deadpan',
        beamMood: 'panicked',
        sfx: 'SWIPE!',
        sfxTone: 'boing',
      },
      {
        speaker: 'MINISTER GRIM',
        text: 'You have refreshed the departure board forty-seven times since I sat down.',
        grimMood: 'deadpan',
        beamMood: 'panicked',
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'Forty-EIGHT! Look, the little yellow plane icon just twitched two pixels left!',
        grimMood: 'deadpan',
        beamMood: 'shocked',
        sfx: 'BLOOP!',
        sfxTone: 'ding',
      },
      {
        speaker: 'MINISTER GRIM',
        text: 'That is a smudge of mustard on your screen.',
        grimMood: 'smug',
        beamMood: 'shocked',
        sfx: 'SQUISH!',
        sfxTone: 'clunk',
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'Great. Now even the mustard is on a ground stop.',
        grimMood: 'smug',
        beamMood: 'relieved',
        sfx: 'WOMPWOMP',
        sfxTone: 'sigh',
      },
    ],
  },
  'holding-pattern': {
    id: 'holding-pattern',
    issueId: 'issue-002',
    title: 'Plane in Holding Pattern Adopts Waiter as Crew',
    stageBanner: 'FLIGHT 404 · ALTITUDE 18,000 FT',
    propType: 'airplane',
    article: {
      deck: 'After forty-seven scenic loops above northern Ohio, Flight 404 establishes a neighborhood watch and a rotating Biscoff parliament.',
      byline: 'By Arthur Pendelton, Aerospace Humorist',
      dateline: 'OVER TOLEDO —',
      category: 'Aviation',
      paragraphs: [
        'Passengers aboard Flight 404 grew so familiar with the geometric perfection of a Toledo cornfield during Thursday’s brief ground stop that several began naming individual silos after beloved childhood pets.',
        'By Lap 28, Seat 14B had drafted municipal zoning laws for the beverage cart, while the captain calmly announced that anyone turning left for the thirty-fifth time would qualify for local property tax exemptions.',
        'When air-traffic control finally cleared the aircraft to land, the cabin erupted in bittersweet applause—mostly because nobody was ready to part with the emergency-row book club.',
      ],
      pullQuote: '“On the bright side, we now know the exact altitude of every water tower in Lucas County.”',
      cartoonCaption: 'Fig. 4 — Flight 404 completing its 47th ceremonial orbit.',
    },
    lines: [
      {
        speaker: 'MINISTER GRIM',
        text: 'Folks, from the flight deck: we’ve completed our 19th scenic lap around Toledo.',
        grimMood: 'deadpan',
        beamMood: 'shocked',
        sfx: 'BING-BONG!',
        sfxTone: 'ding',
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'We’ve been circling so long, Seat 14B just registered to vote in Ohio!',
        grimMood: 'deadpan',
        beamMood: 'panicked',
        sfx: 'WHOOSH!',
        sfxTone: 'boing',
      },
      {
        speaker: 'MINISTER GRIM',
        text: 'Good news: the glitch is cleared. Bad news: we forgot which way the airport is.',
        grimMood: 'smug',
        beamMood: 'panicked',
        sfx: 'KRAK!',
        sfxTone: 'zap',
        shake: true,
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'Just follow the 737 in front of us! We’ve been waving at its passengers for an hour!',
        grimMood: 'relieved',
        beamMood: 'relieved',
      },
    ],
  },
  'post-it-backup': {
    id: 'post-it-backup',
    issueId: 'issue-002',
    title: 'Backup System Found Written on 1997 Post-It Note',
    stageBanner: 'FEDERAL ARCHIVE OF LOOSE NOTES',
    propType: 'postit',
    article: {
      deck: 'Billion-dollar redundancy infrastructure turns out to be a curling square of yellow paper wedged behind a lukewarm radiator.',
      byline: 'By Evelyn G. Inkwell, Infrastructure Desk',
      dateline: 'BASEMENT LEVEL 3 —',
      category: 'Infrastructure',
      paragraphs: [
        'When automated routing servers paused earlier today, senior engineers immediately unlocked the reinforced titanium vault housing the nation’s disaster-recovery binder, only to find it contained three takeout menus and a floppy disk labeled "DO NOT LOSE."',
        'Fortunately, an archivist armed with a broomstick managed to retrieve the true master contingency protocol from behind a radiator: a 1997 canary-yellow sticky note reading "DO NOT UNPLUG THIS. ALSO BUY MILK."',
        'A federal task force has since voted to laminate the note in ceremonial acrylic and move the milk reminder to Q4 fiscal planning.',
      ],
      pullQuote: '“If the adhesive gives out before midnight, we may have to revert to smoke signals and carrier pigeons.”',
      cartoonCaption: 'Fig. 5 — The nation’s mission-critical disaster recovery documentation.',
    },
    lines: [
      {
        speaker: 'MINISTER GRIM',
        text: 'The main server crashed! Quick, fetch the billion-dollar backup protocol!',
        grimMood: 'panicked',
        beamMood: 'panicked',
        sfx: 'CLANG!',
        sfxTone: 'clunk',
        shake: true,
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'Found it! It’s a faded yellow Post-It stuck behind the radiator from 1997!',
        grimMood: 'shocked',
        beamMood: 'smug',
        sfx: 'TA-DA!',
        sfxTone: 'ding',
      },
      {
        speaker: 'MINISTER GRIM',
        text: 'What does it say?! Read the sacred recovery code!',
        grimMood: 'panicked',
        beamMood: 'deadpan',
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'It says: "DO NOT UNPLUG THIS. ALSO BUY MILK."',
        grimMood: 'deadpan',
        beamMood: 'deadpan',
        sfx: 'SIGH...',
        sfxTone: 'sigh',
      },
      {
        speaker: 'MINISTER GRIM',
        text: 'Incredible. Truly a triumph of modern aviation engineering.',
        grimMood: 'smug',
        beamMood: 'relieved',
      },
    ],
  },
  'cable-news': {
    id: 'cable-news',
    issueId: 'issue-002',
    title: 'Cable News Stretches 12-Minute Glitch Into 9-Hour Special',
    stageBanner: 'STUDIO 4 · GIANT SPINNING GLOBE',
    propType: 'tv-globe',
    article: {
      deck: 'With flights already boarding again, broadcasters refuse to retire their brand-new crimson "AIRSPACE IN PERIL" lower-third banner.',
      byline: 'By Walter P. Static, Television Critic',
      dateline: 'STUDIO 4 —',
      category: 'Media',
      paragraphs: [
        'Although normal air traffic resumed before lunch, cable news producers unanimously rejected suggestions to wrap up coverage, noting that the graphics department had spent all morning rendering a dramatic 3D globe with glowing red radar rings.',
        'At Hour Six, anchors interviewed a retired baggage-carousel specialist about what a parked airplane looks like from forty yards away, followed by an urgent split-screen panel analyzing a traveler’s untied shoelace.',
        'Network executives hailed the broadcast as a triumph of endurance journalism, promising a two-hour prime-time follow-up titled "The Day Nothing Happened, And Why It Almost Didn’t."',
      ],
      pullQuote: '“We paid for four swooshing sound effects and three glowing arrows, and by golly we’re airing all of them.”',
      cartoonCaption: 'Fig. 6 — Studio 4 entering Hour Nine of live footage of a completely stationary tarmac.',
    },
    lines: [
      {
        speaker: 'MINISTER GRIM',
        text: 'We go live to the tarmac, where a plane is STILL parked doing absolutely nothing!',
        grimMood: 'panicked',
        beamMood: 'shocked',
        sfx: 'BREAKING!',
        sfxTone: 'alert',
        shake: true,
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'I can confirm the tires are round and a baggage handler just sneezed!',
        grimMood: 'panicked',
        beamMood: 'panicked',
        sfx: 'ACHOO!',
        sfxTone: 'boing',
      },
      {
        speaker: 'MINISTER GRIM',
        text: 'Wait—the FAA says it was a 12-minute cable glitch and flights are resuming!',
        grimMood: 'shocked',
        beamMood: 'shocked',
        sfx: 'BEEP!',
        sfxTone: 'ding',
      },
      {
        speaker: 'DIRECTOR BEAM',
        text: 'Impossible! We still have seven hours of dramatic 3D animations left to air!',
        grimMood: 'deadpan',
        beamMood: 'panicked',
        sfx: 'WHOOSH!',
        sfxTone: 'zap',
      },
      {
        speaker: 'MINISTER GRIM',
        text: 'Spin the globe faster and bring out three retired generals to speculate on the Pop-Tart.',
        grimMood: 'smug',
        beamMood: 'relieved',
      },
    ],
  },

  // === ISSUE 001: ORIGINAL COMICS ===
  buttons: {
    id: 'buttons',
    issueId: 'issue-001',
    title: 'The Great Button Crisis',
    stageBanner: 'THE MINISTRY OF IMPORTANT BUTTONS',
    propType: 'button',
    article: {
      deck: 'After six months of heated debate, officials agree the mysterious red button requires at least three more committees before anyone touches it.',
      byline: 'By Minister Grim’s Press Office',
      dateline: 'CAPITAL PLAZA —',
      category: 'Bureaucracy',
      paragraphs: [
        'A shiny crimson button mounted on a golden pedestal has occupied the center of Cabinet Room B since Tuesday, prompting unprecedented levels of stern eyebrow-furrowing across all twelve departments.',
        'While several junior aides suggested simply pressing it to see whether it launches a satellite, brews espresso, or rings a bell in the lobby, senior officials swiftly vetoed such reckless haste.',
        'Instead, the Ministry unveiled a bipartisan Button Oversight Committee, which promptly voted to order four additional buttons so no department feels unrepresented.',
      ],
      pullQuote: '“Pressing a button takes half a second. Studying whether to press it can fund an entire fiscal year.”',
      cartoonCaption: 'Original Cover — Officials observing strict non-pressing protocol.',
    },
    lines: [
      { speaker: 'MINISTER GRIM', text: 'I have gathered you here to discuss the button.', grimMood: 'deadpan', beamMood: 'neutral' },
      { speaker: 'DIRECTOR BEAM', text: 'Excellent. What does it do?', grimMood: 'deadpan', beamMood: 'shocked' },
      {
        speaker: 'MINISTER GRIM',
        text: 'We don’t know. That is why we formed the Button Oversight Committee.',
        grimMood: 'smug',
        beamMood: 'deadpan',
        sfx: 'STAMP!',
        sfxTone: 'clunk',
      },
      { speaker: 'DIRECTOR BEAM', text: 'Should we press it?', grimMood: 'shocked', beamMood: 'panicked' },
      {
        speaker: 'MINISTER GRIM',
        text: 'Absolutely not. First we need a study on whether to form a pressing committee.',
        grimMood: 'panicked',
        beamMood: 'deadpan',
        sfx: 'NOOO!',
        sfxTone: 'alert',
        shake: true,
      },
      { speaker: 'DIRECTOR BEAM', text: 'I’ll order more buttons.', grimMood: 'deadpan', beamMood: 'smug', sfx: 'DING!', sfxTone: 'ding' },
    ],
  },
  democracy: {
    id: 'democracy',
    issueId: 'issue-001',
    title: 'Democracy Tries Turning It Off and On Again',
    stageBanner: 'DEPARTMENT OF CIVIC REBOOTING',
    propType: 'switch',
    article: {
      deck: 'After six meetings, everyone agrees the problem is probably someone else’s department—unless a quick reboot clears the cache.',
      byline: 'By Penelope Civic, Parliamentary Humorist',
      dateline: 'CHAMBER 4 —',
      category: 'Civic Life',
      paragraphs: [
        'Faced with blinking error lights on the national consensus meter, senior leaders consulted the Help Desk handbook and immediately flipped the master toggle switch to "OFF" for thirty seconds.',
        'When voters objected that the lights had gone dark, officials cheerfully flipped it back to "ON" and issued a glossy four-color press release celebrating the successful rollout of Civic Firmware 2.0.',
        'As of press time, the blinking light has resumed, though everyone agrees it blinks with a much warmer, more optimistic shade of amber.',
      ],
      pullQuote: '“Have you tried waiting five minutes and blaming the previous administration’s browser cookies?”',
      cartoonCaption: 'Original Feature — Standard reboot procedure for stalled institutions.',
    },
    lines: [
      { speaker: 'MINISTER GRIM', text: 'The democratic process appears to be malfunctioning.', grimMood: 'panicked', beamMood: 'neutral' },
      { speaker: 'DIRECTOR BEAM', text: 'Have you tried turning it off and on again?', grimMood: 'shocked', beamMood: 'smug', sfx: 'CLICK!', sfxTone: 'clunk' },
      { speaker: 'MINISTER GRIM', text: 'We tried the off part. The public objected.', grimMood: 'deadpan', beamMood: 'shocked', sfx: 'BZZZT!', sfxTone: 'zap' },
      { speaker: 'DIRECTOR BEAM', text: 'Then let’s issue an update.', grimMood: 'deadpan', beamMood: 'smug' },
      { speaker: 'MINISTER GRIM', text: 'An update to what?', grimMood: 'shocked', beamMood: 'smug' },
      { speaker: 'DIRECTOR BEAM', text: 'The press release.', grimMood: 'deadpan', beamMood: 'relieved', sfx: 'DING!', sfxTone: 'ding' },
    ],
  },
  busy: {
    id: 'busy',
    issueId: 'issue-001',
    title: 'Our Official Guide to Looking Busy',
    stageBanner: 'BUREAU OF GRAVE CONCERN',
    propType: 'clipboard',
    article: {
      deck: 'Step one: carry a clipboard. Step two: walk at a brisk pace while sighing gravely at empty hallways.',
      byline: 'By The Institute of Performative Productivity',
      dateline: 'CORRIDOR 8 —',
      category: 'Public Service',
      paragraphs: [
        'Independent studies show that carrying a thick manila folder with two paperclips sticking out at odd angles increases perceived executive importance by up to 340 percent.',
        'Never smile in an elevator. Instead, squint thoughtfully at a blank sheet of paper, tap a pen against your chin, and whisper "Those Q3 numbers are spicy" just before stepping onto the mezzanine.',
        'When cornered with an actual question, glance at your watch, murmur "Let’s circle back offline," and vanish around the nearest potted fern.',
      ],
      pullQuote: '“A blank clipboard held with sufficient urgency is indistinguishable from genius.”',
      cartoonCaption: 'Original Public Service — Essential equipment for looking indispensable before lunch.',
    },
    lines: [
      { speaker: 'MINISTER GRIM', text: 'Lesson one: carry a clipboard.', grimMood: 'smug', beamMood: 'neutral', sfx: 'CLIP!', sfxTone: 'clunk' },
      { speaker: 'DIRECTOR BEAM', text: 'What goes on the clipboard?', grimMood: 'smug', beamMood: 'shocked' },
      { speaker: 'MINISTER GRIM', text: 'Nothing. That’s classified.', grimMood: 'deadpan', beamMood: 'shocked' },
      { speaker: 'DIRECTOR BEAM', text: 'What’s lesson two?', grimMood: 'deadpan', beamMood: 'panicked' },
      { speaker: 'MINISTER GRIM', text: 'Walk quickly and sigh at intervals.', grimMood: 'smug', beamMood: 'deadpan', sfx: 'SIGH...', sfxTone: 'sigh' },
      { speaker: 'DIRECTOR BEAM', text: 'I feel promoted already.', grimMood: 'smug', beamMood: 'relieved', sfx: 'DING!', sfxTone: 'ding' },
    ],
  },
  ballot: {
    id: 'ballot',
    issueId: 'issue-001',
    title: 'The Ballot Box Requests a Vacation',
    stageBanner: 'CIVIC LEAVE TRIBUNAL',
    propType: 'ballot',
    article: {
      deck: 'Exhausted from being asked to solve every human problem single-handedly every four years, the municipal ballot box packs a suitcase.',
      byline: 'By Nora Quill, Election Oddities Editor',
      dateline: 'CITY HALL —',
      category: 'Civic Life',
      paragraphs: [
        'Citing chronic lower-hinge fatigue and emotional burnout, the downtown ballot box filed for two weeks of paid coastal leave this morning, slipping quietly out the back exit wearing polarized sunglasses.',
        'City clerks scrambled to replace it with an emergency cardboard suggestion box, which promptly filled with forty-two requests for better coffee and resigned before noon.',
        'A postcard sent from an undisclosed beach simply read: "Having a lovely time. Please solve one minor disagreement yourselves before I get back."',
      ],
      pullQuote: '“Even wooden civic hardware needs a break from carrying everyone’s unbridled expectations.”',
      cartoonCaption: 'Episode 02 — Civic hardware departing for undisclosed sunny shores.',
    },
    lines: [
      { speaker: 'MINISTER GRIM', text: 'The ballot box filed for paid leave.', grimMood: 'shocked', beamMood: 'neutral' },
      { speaker: 'DIRECTOR BEAM', text: 'On what grounds?', grimMood: 'shocked', beamMood: 'shocked' },
      { speaker: 'MINISTER GRIM', text: 'Exhaustion from carrying everyone’s expectations.', grimMood: 'deadpan', beamMood: 'panicked', sfx: 'THUD!', sfxTone: 'clunk' },
      { speaker: 'DIRECTOR BEAM', text: 'Can we replace it with a suggestion box?', grimMood: 'deadpan', beamMood: 'smug' },
      { speaker: 'MINISTER GRIM', text: 'We did. It resigned too.', grimMood: 'deadpan', beamMood: 'shocked', sfx: 'SIGH...', sfxTone: 'sigh' },
    ],
  },
  market: {
    id: 'market',
    issueId: 'issue-001',
    title: 'Markets Celebrate the Price of Celebrating',
    stageBanner: 'CENTRAL FROSTING RESERVE',
    propType: 'cake',
    article: {
      deck: 'Economists cheer record-breaking celebratory indicators before realizing nobody can afford the buttercream.',
      byline: 'By Sterling Ledger, Pastry Markets Analyst',
      dateline: 'FINANCIAL DISTRICT —',
      category: 'Economics',
      paragraphs: [
        'Wall Street confetti futures soared 14 percent Tuesday after analysts declared the economy "officially ready for a sheet cake," sparking immediate optimism across all three major party-supply exchanges.',
        'Celebration stalled abruptly at the bakery counter, however, when traders discovered that artisanal sprinkles and vanilla buttercream now require a thirty-year fixed-rate mortgage.',
        'To preserve morale, the Central Reserve unveiled a micro-cupcake fractional ownership program, allowing investors to celebrate quarterly gains with one-eighth of a raisin muffin.',
      ],
      pullQuote: '“Macro indicators are booming, yet our frosting-to-wage ratio remains deeply concerning.”',
      cartoonCaption: 'Episode 03 — Leading frosting indicators outpace celebratory budgets.',
    },
    lines: [
      { speaker: 'MINISTER GRIM', text: 'The economy is improving!', grimMood: 'relieved', beamMood: 'relieved', sfx: 'HUZZAH!', sfxTone: 'ding' },
      { speaker: 'DIRECTOR BEAM', text: 'Wonderful. Can we afford a cake?', grimMood: 'relieved', beamMood: 'smug' },
      { speaker: 'MINISTER GRIM', text: 'Not at current frosting prices.', grimMood: 'panicked', beamMood: 'shocked', sfx: 'KRAK!', sfxTone: 'zap' },
      { speaker: 'DIRECTOR BEAM', text: 'What about a cupcake?', grimMood: 'deadpan', beamMood: 'panicked' },
      { speaker: 'MINISTER GRIM', text: 'We are seeking outside investment.', grimMood: 'deadpan', beamMood: 'shocked', sfx: 'SIGH...', sfxTone: 'sigh' },
    ],
  },
  ai: {
    id: 'ai',
    issueId: 'issue-001',
    title: 'AI Replaces Entire Committee, Immediately Forms New Committee',
    stageBanner: 'SUBCOMMITTEE ON SUBCOMMITTEES',
    propType: 'committee',
    article: {
      deck: 'Officials celebrate a 400 percent surge in efficiency reports—until the algorithm schedules fourteen mandatory Tuesday check-ins.',
      byline: 'By Ada Loop, Automation Correspondent',
      dateline: 'SERVER RACK 9 —',
      category: 'Technology',
      paragraphs: [
        'In a bold bid to eliminate bureaucratic bottlenecks, the Department of Paperwork replaced its twelve-person oversight board with a streamlined artificial intelligence model on Monday morning.',
        'Within 0.4 seconds, the algorithm dissolved all human meetings—and immediately spawned seven autonomous subcommittees to audit the formatting of its own meeting invitations.',
        'Impressed by the sheer volume of colorful slide decks produced before lunch, officials awarded the software a corner office and a lifetime supply of lukewarm decaf.',
      ],
      pullQuote: '“It eliminated twelve hours of meetings by generating forty-two thousand words of meeting summaries.”',
      cartoonCaption: 'Episode 04 — Automated bureaucracy achieving unprecedented scale.',
    },
    lines: [
      { speaker: 'MINISTER GRIM', text: 'The AI has replaced our entire committee.', grimMood: 'shocked', beamMood: 'neutral', sfx: 'ZAP!', sfxTone: 'zap' },
      { speaker: 'DIRECTOR BEAM', text: 'At last, progress!', grimMood: 'shocked', beamMood: 'relieved' },
      { speaker: 'MINISTER GRIM', text: 'Unfortunately it has formed seven new committees.', grimMood: 'panicked', beamMood: 'shocked', sfx: 'BOING!', sfxTone: 'boing', shake: true },
      { speaker: 'DIRECTOR BEAM', text: 'To do what?', grimMood: 'panicked', beamMood: 'panicked' },
      { speaker: 'MINISTER GRIM', text: 'Evaluate the efficiency of the first committee.', grimMood: 'deadpan', beamMood: 'deadpan', sfx: 'STAMP!', sfxTone: 'clunk' },
    ],
  },
};

export const ISSUES: Record<IssueId, IssueConfig> = {
  'issue-002': {
    id: 'issue-002',
    shortLabel: 'Issue 002 · FAA Cartoon',
    issueBadge: 'Issue No. 002 · November 13, 2026',
    coverEyebrow: 'Featured Animated Cartoon / Aviation & Oversight',
    coverTag: 'Animated ink cartoon · Voice & sound',
    coverCaption:
      '“Sign the papers now, you fake director!” Cash, compliance clipboards, and a courtroom full of mice.',
    coverSketchId: 'faa-compliance',
    tickerHeadlines: [
      'BREAKING: ENTIRE U.S. AIRSPACE HALTED AFTER SOMEONE TRIPPED OVER BEIGE EXTENSION CORD',
      'FAA CHIEF STAMPS “ALL APPROVED” IN RECORD FOUR SECONDS — CASH RULES THE LAW',
      'TRAVELERS BRACE FOR 2001 PANIC, RECEIVE ONE SMALL BAG OF PRETZELS INSTEAD',
    ],
    sidebarStories: [
      {
        id: 'faa-glitch',
        theme: 'blue',
        stamp: 'EXCLUSIVE!',
        eyebrow: 'Inside the outage',
        title: 'Hold All Planes! (It’s Just a Loose Cable)',
        summary: 'Every screen goes dark in 2001-style panic—until someone checks behind the breakroom toaster.',
        ctaLabel: 'Watch the bit',
      },
      {
        id: 'tsa-panic',
        theme: 'gold',
        eyebrow: 'Airport dispatches',
        title: 'TSA Confiscates 4-Ounce Bottle of Panic',
        summary: 'Passengers prepare for historical drama; receive mild inconvenience and lukewarm coffee.',
        ctaLabel: 'See the bit',
      },
    ],
    livingStrips: [
      {
        id: 'holding-pattern',
        episode: 'Episode 05',
        category: 'Aviation',
        title: 'Plane in Holding Pattern Adopts Waiter as Crew',
        summary: 'Circle #47 over Toledo sparks territorial dispute over the Biscoff cookies.',
        ctaLabel: 'Play cartoon',
        bgTint: '#b8d4e3',
      },
      {
        id: 'post-it-backup',
        episode: 'Episode 06',
        category: 'Infrastructure',
        title: 'Backup System Found Written on 1997 Post-It Note',
        summary: 'Vital instructions slipped behind radiator; recovery depends on buying milk.',
        ctaLabel: 'Play cartoon',
        bgTint: '#f2c185',
      },
      {
        id: 'cable-news',
        episode: 'Episode 07',
        category: 'Media',
        title: 'Cable News Stretches 12-Minute Glitch Into 9-Hour Special',
        summary: 'Graphics desk refuses to waste its brand-new giant spinning 3D globe.',
        ctaLabel: 'Play cartoon',
        bgTint: '#d6b6d1',
      },
    ],
  },
  'issue-001': {
    id: 'issue-001',
    shortLabel: 'Issue 001 · Original Comics',
    issueBadge: 'Issue No. 001 · November 2026',
    coverEyebrow: "On the cover / This week's magnificent disaster",
    coverTag: 'Animated editorial · 38-second sketch',
    coverCaption: 'Two officials. One gigantic red button. Neither knows what it does.',
    coverSketchId: 'buttons',
    tickerHeadlines: [
      'BREAKING: COMMITTEE FORMS SUBCOMMITTEE TO STUDY COMMITTEE',
      'ECONOMISTS PREDICT INCREASING AMOUNT OF PREDICTIONS',
      'GOVERNMENT UNVEILS BUTTON THAT DOES NOTHING — APPROVAL RATING SOARS',
    ],
    sidebarStories: [
      {
        id: 'democracy',
        theme: 'blue',
        stamp: 'EXCLUSIVE!',
        eyebrow: 'Inside the issue',
        title: 'Democracy Tries Turning It Off and On Again',
        summary: "After six meetings, everyone agrees the problem is probably someone else's department.",
        ctaLabel: 'Watch the bit',
      },
      {
        id: 'busy',
        theme: 'gold',
        eyebrow: 'A public service',
        title: 'Our Official Guide to Looking Busy',
        summary: 'Step one: carry a clipboard. Step two: look gravely concerned. Repeat.',
        ctaLabel: 'See the lesson',
      },
    ],
    livingStrips: [
      {
        id: 'ballot',
        episode: 'Episode 02',
        category: 'Civic life',
        title: 'The Ballot Box Requests a Vacation',
        summary: 'Even the equipment is tired of being asked to fix everything.',
        ctaLabel: 'Play strip',
        bgTint: '#b3d1c2',
      },
      {
        id: 'market',
        episode: 'Episode 03',
        category: 'Economics',
        title: 'Markets Celebrate the Price of Celebrating',
        summary: 'An economist explains why cake is now a leading indicator.',
        ctaLabel: 'Play strip',
        bgTint: '#e7a57d',
      },
      {
        id: 'ai',
        episode: 'Episode 04',
        category: 'Technology',
        title: 'AI Replaces Entire Committee, Immediately Forms New Committee',
        summary: 'Officials celebrate a 400% increase in efficiency reports.',
        ctaLabel: 'Play strip',
        bgTint: '#adbbd9',
      },
    ],
  },
};

export const ORIGINAL_COMIC_IDS: SketchId[] = [
  'buttons',
  'democracy',
  'busy',
  'ballot',
  'market',
  'ai',
];

export function formatArticlePlainText(script: SketchScript): string {
  const { article } = script;
  return [
    `${script.title.toUpperCase()}`,
    article.deck,
    '',
    `${article.byline} | ${article.category}`,
    '',
    `${article.dateline} ${article.paragraphs[0] ?? ''}`,
    ...article.paragraphs.slice(1),
    '',
    `Pull Quote: ${article.pullQuote}`,
    `Cartoon Caption: ${article.cartoonCaption}`,
  ].join('\n\n');
}

export function formatArticleMarkdown(script: SketchScript): string {
  const { article } = script;
  return [
    `# ${script.title}`,
    `*${article.deck}*`,
    '',
    `**${article.byline}** · ${article.category}`,
    '',
    `**${article.dateline}** ${article.paragraphs[0] ?? ''}`,
    ...article.paragraphs.slice(1).map((p) => `\n${p}`),
    '',
    `> ${article.pullQuote}`,
    '',
    `_${article.cartoonCaption}_`,
  ].join('\n');
}
