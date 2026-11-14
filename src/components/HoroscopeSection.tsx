import { Check, Copy, Grid3X3, Shuffle, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { HOROSCOPES, HoroscopeEntry, ZodiacSignId } from '../data/horoscopes';

function ZodiacGlyph({ id, className = 'w-6 h-6' }: { id: ZodiacSignId; className?: string }) {
  const common = {
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true as const,
  };

  switch (id) {
    case 'aries':
      return (
        <svg {...common}>
          <path d="M16 26V13C16 7 11 5 8 8C6 10 7 13 9 13" />
          <path d="M16 13C16 7 21 5 24 8C26 10 25 13 23 13" />
        </svg>
      );
    case 'taurus':
      return (
        <svg {...common}>
          <circle cx="16" cy="19" r="7" />
          <path d="M9 7C9 11 12 12 16 12C20 12 23 11 23 7" />
        </svg>
      );
    case 'gemini':
      return (
        <svg {...common}>
          <path d="M7 7C12 9 20 9 25 7" />
          <path d="M7 25C12 23 20 23 25 25" />
          <path d="M12 8V24M20 8V24" />
        </svg>
      );
    case 'cancer':
      return (
        <svg {...common}>
          <circle cx="10" cy="12" r="3.5" />
          <path d="M10 8.5C16 7 22 9 25 13" />
          <circle cx="22" cy="20" r="3.5" />
          <path d="M22 23.5C16 25 10 23 7 19" />
        </svg>
      );
    case 'leo':
      return (
        <svg {...common}>
          <circle cx="10" cy="19" r="4" />
          <path d="M13 16C13 9 21 7 23 12C24 15 20 20 20 23C20 25 23 26 25 24" />
        </svg>
      );
    case 'virgo':
      return (
        <svg {...common}>
          <path d="M7 8V22M7 13C9 9 13 9 13 13V22M13 13C15 9 19 9 19 13V23C19 26 23 26 25 22" />
          <path d="M19 14C23 13 26 15 24 19C22 22 18 24 15 25" />
        </svg>
      );
    case 'libra':
      return (
        <svg {...common}>
          <path d="M6 24H26" />
          <path d="M6 19H11C11 14 13 11 16 11C19 11 21 14 21 19H26" />
        </svg>
      );
    case 'scorpio':
      return (
        <svg {...common}>
          <path d="M6 8V21M6 13C8 9 12 9 12 13V21M12 13C14 9 18 9 18 13V21C18 24 21 25 25 23" />
          <path d="M22 20L26 23L23 27" />
        </svg>
      );
    case 'sagittarius':
      return (
        <svg {...common}>
          <path d="M8 24L24 8" />
          <path d="M15 8H24V17" />
          <path d="M10 15L17 22" />
        </svg>
      );
    case 'capricorn':
      return (
        <svg {...common}>
          <path d="M7 9L11 21L15 9C17 14 19 18 22 18C25 18 26 21 24 23C22 25 19 24 19 21C19 17 24 15 26 17" />
        </svg>
      );
    case 'aquarius':
      return (
        <svg {...common}>
          <path d="M6 13L10 9L14 13L18 9L22 13L26 9" />
          <path d="M6 22L10 18L14 22L18 18L22 22L26 18" />
        </svg>
      );
    case 'pisces':
      return (
        <svg {...common}>
          <path d="M9 7C13 12 13 20 9 25" />
          <path d="M23 7C19 12 19 20 23 25" />
          <path d="M7 16H25" />
        </svg>
      );
  }
}

function AllSignsGrid({
  selectedId,
  onSelect,
}: {
  selectedId: ZodiacSignId;
  onSelect: (id: ZodiacSignId) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {HOROSCOPES.map((item) => {
        const isActive = item.id === selectedId;
        return (
          <article
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`border-[3px] border-[#251a20] p-4 flex flex-col justify-between cursor-pointer transition-all ${
              isActive
                ? 'bg-[#f6ba36] shadow-[5px_6px_0_#24131c]'
                : 'bg-[#fff1d6] shadow-[4px_5px_0_#24131c] hover:-translate-x-0.5 hover:-translate-y-0.5'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b-2 border-[#251a20]/25">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#253c5b] text-[#ffe15f] border-2 border-[#251a20] grid place-items-center shrink-0">
                    <ZodiacGlyph id={item.id} className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-black leading-none text-[#251a20]">
                      {item.name}
                    </h3>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#5c4a40]">
                      {item.dates}
                    </span>
                  </div>
                </div>
                <span className="font-sans text-[10px] font-black uppercase tracking-wider text-[#bf302e]">
                  ★
                </span>
              </div>
              <p className="font-serif font-bold text-sm text-[#253c5b] mb-1.5 leading-snug">
                {item.headline}
              </p>
              <p className="font-sans text-xs leading-relaxed text-[#251a20]">
                {item.forecast}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#251a20]/20 font-sans text-[11px] font-bold text-[#5c4a40]">
              Lucky Item: <span className="text-[#251a20]">{item.luckyItem}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function HoroscopeSection() {
  const [selectedId, setSelectedId] = useState<ZodiacSignId>('aries');
  const [showAll, setShowAll] = useState(false);
  const [copied, setCopied] = useState(false);

  const selected: HoroscopeEntry =
    HOROSCOPES.find((h) => h.id === selectedId) ?? HOROSCOPES[0];

  const handleRandomSign = () => {
    const others = HOROSCOPES.filter((h) => h.id !== selectedId);
    const pick = others[Math.floor(Math.random() * others.length)];
    if (pick) setSelectedId(pick.id);
  };

  const handleCopyForecast = async () => {
    const text = [
      `THE DAILY ABSURD HOROSCOPE — ${selected.name.toUpperCase()} (${selected.dates})`,
      `Ruled by: ${selected.rulingBody}`,
      `${selected.headline}`,
      selected.forecast,
      `Lucky Item: ${selected.luckyItem} | Bureaucratic Threat: ${selected.threatLevel} | Avoid: ${selected.avoid}`,
    ].join('\n');
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="mt-12" id="horoscopes" aria-labelledby="horoscopes-heading">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
        <div className="flex-1">
          <h2
            id="horoscopes-heading"
            className="flex items-center gap-4 font-serif text-[26px] sm:text-[32px] font-black tracking-[-0.04em] uppercase after:content-[''] after:h-[3px] after:bg-[#251a20] after:flex-1"
          >
            Absurd Horoscopes
          </h2>
          <p className="font-sans text-xs text-[#5c4a40] mt-1 mb-0">
            Charted via unplugged radar consoles and expired airport pretzels. Accuracy strictly denied.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleRandomSign}
            className="inline-flex items-center gap-1.5 bg-[#fff1d6] hover:bg-[#f6ba36] border-2 border-[#251a20] px-3 py-1.5 font-sans text-[11px] font-black uppercase tracking-wider shadow-[3px_3px_0_#24131c] transition-colors whitespace-nowrap shrink-0"
          >
            <Shuffle className="w-3.5 h-3.5" aria-hidden="true" />
            Random Sign
          </button>
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className={`inline-flex items-center gap-1.5 border-2 border-[#251a20] px-3 py-1.5 font-sans text-[11px] font-black uppercase tracking-wider shadow-[3px_3px_0_#24131c] transition-colors whitespace-nowrap shrink-0 ${
              showAll ? 'bg-[#251a20] text-[#fff1d6]' : 'bg-[#f6ba36] text-[#251a20] hover:bg-[#ffe15f]'
            }`}
          >
            <Grid3X3 className="w-3.5 h-3.5" aria-hidden="true" />
            {showAll ? 'Single Card View' : 'Read All 12'}
          </button>
        </div>
      </div>

      {/* 12-Sign Stamp Bar */}
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5"
        role="group"
        aria-label="Choose your zodiac sign"
      >
        {HOROSCOPES.map((sign) => {
          const active = sign.id === selectedId;
          return (
            <button
              key={sign.id}
              type="button"
              onClick={() => setSelectedId(sign.id)}
              aria-pressed={active}
              className={`border-[3px] border-[#251a20] p-2.5 flex items-center gap-2 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20] ${
                active
                  ? 'bg-[#253c5b] text-[#fff1d6] shadow-[4px_4px_0_#24131c] -translate-x-0.5 -translate-y-0.5'
                  : 'bg-[#fff1d6] text-[#251a20] shadow-[3px_3px_0_#24131c] hover:bg-[#f6ba36]'
              }`}
            >
              <span
                className={`w-8 h-8 border-2 border-[#251a20] grid place-items-center shrink-0 ${
                  active ? 'bg-[#f6ba36] text-[#251a20]' : 'bg-[#e6cda5] text-[#251a20]'
                }`}
              >
                <ZodiacGlyph id={sign.id} className="w-4 h-4" />
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-sm font-black leading-tight truncate">
                  {sign.name}
                </span>
                <span
                  className={`block font-sans text-[9px] font-bold uppercase tracking-wider truncate ${
                    active ? 'text-[#f5d581]' : 'text-[#5c4a40]'
                  }`}
                >
                  {sign.dates}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Highlighted Reading Broadsheet Card */}
      <article className="mt-4 bg-[#fff1d6] border-4 border-[#251a20] shadow-[7px_8px_0_#24131c] overflow-hidden grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)]">
        {/* Left Celestial Cartoon Emblem Panel */}
        <div className="bg-[#253c5b] text-[#fff8e6] p-6 border-b-4 md:border-b-0 md:border-r-4 border-[#251a20] flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="relative w-28 h-28 flex items-center justify-center mb-3">
            <svg
              viewBox="0 0 120 120"
              className="absolute inset-0 w-full h-full animate-tda-spin"
              aria-hidden="true"
            >
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#f5d581"
                strokeWidth="3"
                strokeDasharray="8 6"
              />
              <circle cx="60" cy="8" r="4" fill="#ffe15f" />
              <circle cx="60" cy="112" r="4" fill="#ffe15f" />
              <circle cx="8" cy="60" r="4" fill="#ffe15f" />
              <circle cx="112" cy="60" r="4" fill="#ffe15f" />
            </svg>
            <div className="w-16 h-16 bg-[#f6ba36] text-[#251a20] border-[3px] border-[#251a20] shadow-[3px_3px_0_#151e32] grid place-items-center animate-tda-float">
              <ZodiacGlyph id={selected.id} className="w-9 h-9" />
            </div>
          </div>

          <div className="font-sans text-[10px] font-black uppercase tracking-[0.16em] text-[#f5d581]">
            {selected.dates}
          </div>
          <h3 className="font-serif text-3xl font-black tracking-[-0.03em] text-white mt-0.5">
            {selected.name}
          </h3>
          <div className="mt-2 inline-flex items-center gap-1 bg-[#bf302e] text-white border-2 border-[#fff1d6] px-2.5 py-0.5 font-sans text-[10px] font-black uppercase tracking-wider">
            <Sparkles className="w-3 h-3" aria-hidden="true" />
            Official Reading
          </div>
        </div>

        {/* Right Forecast Copy & Almanac Stats */}
        <div className="p-5 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-[#251a20]/20">
              <span className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-[#bf302e]">
                Ruled By · {selected.rulingBody}
              </span>
              <button
                type="button"
                onClick={handleCopyForecast}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-[#f6ba36] border-2 border-[#251a20] px-2.5 py-1 font-sans text-[11px] font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy Horoscope'}
              </button>
            </div>

            <h4 className="font-serif text-[22px] sm:text-[26px] font-black leading-[1.08] tracking-[-0.025em] text-[#251a20] mb-2.5">
              {selected.headline}
            </h4>
            <p className="font-serif text-[16px] sm:text-[17px] leading-[1.65] text-[#251a20] max-w-2xl">
              {selected.forecast}
            </p>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-4 border-t-2 border-[#251a20]">
            <div>
              <dt className="font-sans text-[10px] font-black uppercase tracking-[0.12em] text-[#bf302e]">
                Lucky Item
              </dt>
              <dd className="font-sans text-xs sm:text-[13px] font-bold text-[#251a20] mt-0.5">
                {selected.luckyItem}
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[10px] font-black uppercase tracking-[0.12em] text-[#bf302e]">
                Bureaucratic Threat
              </dt>
              <dd className="font-sans text-xs sm:text-[13px] font-bold text-[#251a20] mt-0.5">
                {selected.threatLevel}
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[10px] font-black uppercase tracking-[0.12em] text-[#bf302e]">
                Avoid Today
              </dt>
              <dd className="font-sans text-xs sm:text-[13px] font-bold text-[#251a20] mt-0.5">
                {selected.avoid}
              </dd>
            </div>
          </dl>
        </div>
      </article>

      {showAll && <AllSignsGrid selectedId={selectedId} onSelect={setSelectedId} />}
    </section>
  );
}
