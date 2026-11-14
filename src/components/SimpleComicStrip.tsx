import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { playComicSfx, ComicSfxTone } from '../utils/comicSfx';

interface ComicPanel {
  bg: string;
  speaker: 'grim' | 'beam' | 'both';
  grimMood: 'deadpan' | 'smug' | 'shocked';
  beamMood: 'neutral' | 'panicked' | 'smug' | 'deadpan' | 'shocked';
  bubbleSpeaker: string;
  bubbleText: string;
  replySpeaker?: string;
  replyText?: string;
  sfx?: string;
  sfxTone?: ComicSfxTone;
  prop?: 'lamp' | 'phone' | 'clipboard';
}

interface ComicStripIssue {
  number: string;
  title: string;
  byline: string;
  panels: [ComicPanel, ComicPanel, ComicPanel];
}

const COMIC_STRIPS: ComicStripIssue[] = [
  {
    number: 'Strip No. 042',
    title: 'The Blinking Warning Lamp',
    byline: 'By B. Quirk · Minister Grim & Director Beam',
    panels: [
      {
        bg: '#f7e5c4',
        speaker: 'beam',
        grimMood: 'deadpan',
        beamMood: 'panicked',
        bubbleSpeaker: 'BEAM',
        bubbleText: 'Minister! The red warning lamp on Console 4 is blinking!',
        replySpeaker: 'GRIM',
        replyText: 'Crisis level?',
        prop: 'lamp',
        sfxTone: 'alert',
      },
      {
        bg: '#d7e6ee',
        speaker: 'beam',
        grimMood: 'deadpan',
        beamMood: 'deadpan',
        bubbleSpeaker: 'BEAM',
        bubbleText: 'Hold on... let me put my glasses on. It says "COFFEE POT READY."',
        prop: 'lamp',
        sfx: 'BLINK!',
        sfxTone: 'boing',
      },
      {
        bg: '#f8cf7d',
        speaker: 'grim',
        grimMood: 'smug',
        beamMood: 'shocked',
        bubbleSpeaker: 'GRIM',
        bubbleText: 'Good. Declare a Level-4 Espresso Emergency and cancel noon meetings.',
        prop: 'clipboard',
        sfx: 'STAMP!',
        sfxTone: 'ding',
      },
    ],
  },
  {
    number: 'Strip No. 041',
    title: 'Aviation Tech Support',
    byline: 'By B. Quirk · Minister Grim & Director Beam',
    panels: [
      {
        bg: '#d7e6ee',
        speaker: 'beam',
        grimMood: 'deadpan',
        beamMood: 'panicked',
        bubbleSpeaker: 'BEAM',
        bubbleText: 'I’ve been on hold with Radar Tech Support for forty-five minutes!',
        prop: 'phone',
        sfxTone: 'clunk',
      },
      {
        bg: '#f7e5c4',
        speaker: 'grim',
        grimMood: 'shocked',
        beamMood: 'deadpan',
        bubbleSpeaker: 'GRIM',
        bubbleText: 'Did anyone pick up?',
        replySpeaker: 'BEAM',
        replyText: 'Briefly. They sighed loudly and hit hold again.',
        prop: 'phone',
        sfx: 'CLICK!',
        sfxTone: 'sigh',
      },
      {
        bg: '#f2c185',
        speaker: 'both',
        grimMood: 'smug',
        beamMood: 'smug',
        bubbleSpeaker: 'BEAM',
        bubbleText: 'Honestly, it still felt like the most productive Tuesday we’ve had.',
        prop: 'phone',
        sfx: 'DING!',
        sfxTone: 'ding',
      },
    ],
  },
  {
    number: 'Strip No. 040',
    title: 'The Empty Clipboard',
    byline: 'By B. Quirk · Minister Grim & Director Beam',
    panels: [
      {
        bg: '#f8cf7d',
        speaker: 'grim',
        grimMood: 'smug',
        beamMood: 'neutral',
        bubbleSpeaker: 'GRIM',
        bubbleText: 'Walk swiftly down Hallway B and stare gravely at this clipboard.',
        prop: 'clipboard',
        sfxTone: 'clunk',
      },
      {
        bg: '#f7e5c4',
        speaker: 'beam',
        grimMood: 'deadpan',
        beamMood: 'shocked',
        bubbleSpeaker: 'BEAM',
        bubbleText: 'Wait—the page on here is completely blank!',
        prop: 'clipboard',
        sfx: 'FLIP!',
        sfxTone: 'boing',
      },
      {
        bg: '#d7e6ee',
        speaker: 'grim',
        grimMood: 'smug',
        beamMood: 'smug',
        bubbleSpeaker: 'GRIM',
        bubbleText: 'Exactly. Nobody dares interrupt a man auditing invisible numbers.',
        prop: 'clipboard',
        sfx: 'TA-DA!',
        sfxTone: 'ding',
      },
    ],
  },
];

function MiniCastIllustration({ panel }: { panel: ComicPanel }) {
  const grimTalking = panel.speaker === 'grim' || panel.speaker === 'both';
  const beamTalking = panel.speaker === 'beam' || panel.speaker === 'both';

  return (
    <svg
      viewBox="0 0 280 155"
      className="w-full h-[145px] sm:h-[155px] block select-none"
      aria-hidden="true"
    >
      {/* Subtle newsprint floor horizon */}
      <line x1="0" y1="138" x2="280" y2="138" stroke="#251a20" strokeWidth="2.5" strokeDasharray="5 4" opacity="0.35" />

      {/* Minister Grim (left) */}
      <g transform="translate(22 22)">
        <path d="M12 135 Q4 88 26 76 L72 76 Q92 92 82 135 Z" fill="#8c3536" stroke="#251a20" strokeWidth="4.5" />
        <path d="M35 80 L48 128 L58 80" fill="#f2ca8e" stroke="#251a20" strokeWidth="3.5" />
        <ellipse cx="48" cy="48" rx="34" ry="40" fill="#e5a071" stroke="#251a20" strokeWidth="4.5" />
        <path d="M14 28 Q16 2 49 4 Q80 6 82 33 Q64 16 48 22 Q29 17 14 28 Z" fill="#383037" stroke="#251a20" strokeWidth="3.5" />
        {/* Eyes */}
        <ellipse cx="36" cy="48" rx="7" ry={panel.grimMood === 'shocked' ? 9 : 7} fill="#fff" stroke="#251a20" strokeWidth="2.5" />
        <ellipse cx="59" cy="48" rx="7" ry={panel.grimMood === 'shocked' ? 9 : 7} fill="#fff" stroke="#251a20" strokeWidth="2.5" />
        <circle cx="38" cy="50" r="2.6" fill="#251a20" />
        <circle cx="58" cy="50" r="2.6" fill="#251a20" />
        {/* Brows */}
        <path
          d={panel.grimMood === 'smug' ? 'M27 37 L43 40 M53 40 L68 36' : 'M27 39 L43 38 M53 38 L68 39'}
          stroke="#251a20"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Mouth */}
        {grimTalking ? (
          <ellipse cx="48" cy="70" rx="7" ry="6" fill="#501b27" stroke="#251a20" strokeWidth="2.5" />
        ) : (
          <path d="M39 70 Q48 66 57 70" fill="none" stroke="#251a20" strokeWidth="3" strokeLinecap="round" />
        )}
      </g>

      {/* Center Prop */}
      {panel.prop === 'lamp' && (
        <g transform="translate(122 86)">
          <rect x="4" y="24" width="28" height="22" fill="#253c5b" stroke="#251a20" strokeWidth="3" />
          <circle cx="18" cy="14" r="10" fill="#bf302e" stroke="#251a20" strokeWidth="3" />
          <circle cx="15" cy="11" r="3" fill="#ffe15f" />
        </g>
      )}
      {panel.prop === 'phone' && (
        <g transform="translate(122 92)">
          <rect x="4" y="12" width="28" height="20" rx="3" fill="#251a20" stroke="#251a20" strokeWidth="3" />
          <path d="M0 10 Q18 0 36 10" fill="none" stroke="#bf302e" strokeWidth="6" strokeLinecap="round" />
        </g>
      )}
      {panel.prop === 'clipboard' && (
        <g transform="translate(121 82)">
          <rect x="4" y="8" width="28" height="36" fill="#a45b41" stroke="#251a20" strokeWidth="3" />
          <rect x="9" y="14" width="18" height="25" fill="#fff1d6" stroke="#251a20" strokeWidth="2" />
          <rect x="12" y="4" width="12" height="6" fill="#f6ba36" stroke="#251a20" strokeWidth="2.5" />
        </g>
      )}

      {/* Director Beam (right) */}
      <g transform="translate(162 24)">
        <path d="M12 135 Q4 88 26 76 L72 76 Q92 92 82 135 Z" fill="#496e7b" stroke="#251a20" strokeWidth="4.5" />
        <path d="M35 80 L48 128 L58 80" fill="#e9d6a7" stroke="#251a20" strokeWidth="3.5" />
        <ellipse cx="48" cy="48" rx="34" ry="40" fill="#efbd8b" stroke="#251a20" strokeWidth="4.5" />
        <path d="M14 28 Q16 2 49 4 Q80 6 82 33 Q64 16 48 22 Q29 17 14 28 Z" fill="#e5e1d1" stroke="#251a20" strokeWidth="3.5" />
        {/* Eyes */}
        <ellipse
          cx="36"
          cy="48"
          rx="7"
          ry={panel.beamMood === 'panicked' || panel.beamMood === 'shocked' ? 9 : 6.5}
          fill="#fff"
          stroke="#251a20"
          strokeWidth="2.5"
        />
        <ellipse
          cx="59"
          cy="48"
          rx="7"
          ry={panel.beamMood === 'panicked' || panel.beamMood === 'shocked' ? 9 : 6.5}
          fill="#fff"
          stroke="#251a20"
          strokeWidth="2.5"
        />
        <circle cx="37" cy="49" r="2.6" fill="#251a20" />
        <circle cx="58" cy="49" r="2.6" fill="#251a20" />
        {/* Brows */}
        <path
          d={
            panel.beamMood === 'panicked'
              ? 'M26 35 L42 39 M54 39 L70 35'
              : 'M27 38 L43 37 M53 37 L68 38'
          }
          stroke="#4d4041"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        {/* Mouth */}
        {beamTalking ? (
          <ellipse cx="48" cy="70" rx="7" ry="6" fill="#501b27" stroke="#251a20" strokeWidth="2.5" />
        ) : (
          <path d="M39 70 Q48 75 57 70" fill="none" stroke="#251a20" strokeWidth="3" strokeLinecap="round" />
        )}
      </g>
    </svg>
  );
}

export function SimpleComicStrip() {
  const [stripIndex, setStripIndex] = useState(0);
  const strip = COMIC_STRIPS[stripIndex] ?? COMIC_STRIPS[0];

  const handleNext = () => {
    setStripIndex((prev) => (prev + 1) % COMIC_STRIPS.length);
  };

  const handlePrev = () => {
    setStripIndex((prev) => (prev - 1 + COMIC_STRIPS.length) % COMIC_STRIPS.length);
  };

  return (
    <section className="mt-12" id="comic-strip" aria-labelledby="comic-strip-heading">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
        <div className="flex-1">
          <h2
            id="comic-strip-heading"
            className="flex items-center gap-4 font-serif text-[26px] sm:text-[32px] font-black tracking-[-0.04em] uppercase after:content-[''] after:h-[3px] after:bg-[#251a20] after:flex-1"
          >
            The Daily Strip
          </h2>
          <p className="font-sans text-xs text-[#5c4a40] mt-1 mb-0">
            {strip.number} · <strong>{strip.title}</strong> — {strip.byline} (tap any panel for sound).
          </p>
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous comic strip"
            className="inline-flex items-center gap-1 bg-[#fff1d6] hover:bg-[#f6ba36] border-2 border-[#251a20] px-2.5 py-1.5 font-sans text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0_#24131c] transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Prev
          </button>
          <span className="font-sans text-[11px] font-black px-2 text-[#251a20] tabular-nums">
            {stripIndex + 1} / {COMIC_STRIPS.length}
          </span>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next comic strip"
            className="inline-flex items-center gap-1 bg-[#f6ba36] hover:bg-[#ffe15f] border-2 border-[#251a20] px-2.5 py-1.5 font-sans text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0_#24131c] transition-colors"
          >
            Next
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Newspaper 3-Panel Frame */}
      <div className="bg-[#fff1d6] border-4 border-[#251a20] shadow-[7px_8px_0_#24131c] p-3 sm:p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {strip.panels.map((panel, idx) => (
            <button
              key={`${strip.number}-${idx}`}
              type="button"
              onClick={() => {
                if (panel.sfxTone) playComicSfx(panel.sfxTone);
              }}
              style={{ backgroundColor: panel.bg }}
              className="border-[3px] border-[#251a20] flex flex-col justify-between text-left overflow-hidden relative group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bf302e]"
            >
              {/* Panel Corner Number + Optional SFX Burst */}
              <div className="flex items-start justify-between gap-2 px-3 pt-2.5">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest bg-[#251a20] text-[#fff1d6] px-1.5 py-0.5">
                  {idx + 1}
                </span>
                {panel.sfx && (
                  <span className="bg-[#ffe15f] text-[#bf302e] border-2 border-[#251a20] px-2 py-0.5 font-sans text-[10px] font-black uppercase tracking-wider -rotate-3 shadow-[2px_2px_0_#24131c]">
                    {panel.sfx}
                  </span>
                )}
              </div>

              {/* Clean Speech Bubbles */}
              <div className="px-3 pt-2 pb-1 space-y-2">
                <div className="bg-white border-2 border-[#251a20] rounded-xl px-3 py-2 shadow-[2px_2px_0_#24131c]">
                  <span className="font-sans text-[9px] font-black uppercase tracking-widest text-[#bf302e] mr-1">
                    {panel.bubbleSpeaker}:
                  </span>
                  <span className="font-sans text-xs font-semibold leading-snug text-[#251a20]">
                    {panel.bubbleText}
                  </span>
                </div>

                {panel.replyText && (
                  <div className="bg-[#fff8e6] border-2 border-[#251a20] rounded-xl px-3 py-1.5 ml-6 shadow-[2px_2px_0_#24131c]">
                    <span className="font-sans text-[9px] font-black uppercase tracking-widest text-[#253c5b] mr-1">
                      {panel.replySpeaker}:
                    </span>
                    <span className="font-sans text-xs font-semibold leading-snug text-[#251a20]">
                      {panel.replyText}
                    </span>
                  </div>
                )}
              </div>

              {/* Anchored Character Artwork */}
              <div className="mt-auto transition-transform duration-150 group-hover:scale-[1.02]">
                <MiniCastIllustration panel={panel} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
