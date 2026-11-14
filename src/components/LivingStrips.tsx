import { BookOpen, Play } from 'lucide-react';
import {
  ISSUES,
  IssueId,
  LivingStripItem,
  SKETCH_SCRIPTS,
  SketchId,
} from '../data/sketches';
import { ButtonCrisisArtwork, DispatchCard } from './ButtonCrisisArtwork';
import { ShareButton } from './ShareButton';

interface LivingStripsProps {
  activeIssueId: IssueId;
  onOpenSketch: (id: SketchId, tab?: 'theater' | 'article') => void;
}

function StripIllustration({ id }: { id: SketchId }) {
  const script = SKETCH_SCRIPTS[id];

  if (script?.videoUrl) {
    return (
      <video
        src={script.videoUrl}
        poster={script.imageUrl}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        aria-label={script.title}
      />
    );
  }

  if (script?.imageUrl) {
    return (
      <img
        src={script.imageUrl}
        alt={script.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover"
      />
    );
  }

  if (id === 'holding-pattern') {
    return (
      <svg
        viewBox="0 0 180 140"
        className="w-40 h-28 animate-tda-plane drop-shadow-[5px_6px_0_rgba(59,40,42,0.28)]"
        aria-hidden="true"
      >
        <ellipse
          cx="90"
          cy="76"
          rx="58"
          ry="34"
          fill="none"
          stroke="#253c5b"
          strokeWidth="4"
          strokeDasharray="7 6"
        />
        <g transform="translate(52 34) rotate(-6)">
          <path
            d="M0 18 L52 14 L74 0 L62 22 L84 26 L56 32 L46 48 L36 30 L8 28 Z"
            fill="#fff1d6"
            stroke="#251a20"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
        </g>
        <rect x="64" y="96" width="54" height="22" rx="4" fill="#f6ba36" stroke="#251a20" strokeWidth="3.5" />
        <text x="91" y="111" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="10" fill="#251a20">
          LAP #47
        </text>
      </svg>
    );
  }

  if (id === 'post-it-backup') {
    return (
      <svg
        viewBox="0 0 180 140"
        className="w-36 h-28 animate-tda-float-delayed drop-shadow-[5px_6px_0_rgba(59,40,42,0.28)]"
        aria-hidden="true"
      >
        <g transform="translate(46 22) rotate(-5)">
          <rect x="0" y="0" width="88" height="88" fill="#ffe15f" stroke="#251a20" strokeWidth="4.5" />
          <path d="M68 88 L88 68 L88 88 Z" fill="#e5b930" stroke="#251a20" strokeWidth="3" />
          <text x="12" y="28" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="#bf302e">
            BACKUP:
          </text>
          <text x="12" y="47" fontFamily="sans-serif" fontWeight="800" fontSize="10" fill="#251a20">
            DO NOT
          </text>
          <text x="12" y="61" fontFamily="sans-serif" fontWeight="800" fontSize="10" fill="#251a20">
            UNPLUG!
          </text>
          <text x="12" y="77" fontFamily="sans-serif" fontWeight="700" fontSize="9" fill="#5c4a40">
            + BUY MILK
          </text>
        </g>
      </svg>
    );
  }

  if (id === 'cable-news') {
    return (
      <svg
        viewBox="0 0 180 140"
        className="w-40 h-28 animate-tda-float drop-shadow-[5px_6px_0_rgba(59,40,42,0.28)]"
        aria-hidden="true"
      >
        <line x1="72" y1="14" x2="90" y2="30" stroke="#251a20" strokeWidth="4" strokeLinecap="round" />
        <line x1="112" y1="12" x2="90" y2="30" stroke="#251a20" strokeWidth="4" strokeLinecap="round" />
        <rect x="34" y="30" width="112" height="84" rx="10" fill="#253c5b" stroke="#251a20" strokeWidth="4.5" />
        <rect x="44" y="40" width="76" height="54" rx="5" fill="#fff1d6" stroke="#251a20" strokeWidth="3.5" />
        <circle cx="82" cy="65" r="18" fill="#7dd3fc" stroke="#251a20" strokeWidth="3" />
        <ellipse cx="82" cy="65" rx="9" ry="18" fill="none" stroke="#251a20" strokeWidth="2.5" />
        <line x1="64" y1="65" x2="100" y2="65" stroke="#251a20" strokeWidth="2.5" />
        <rect x="44" y="84" width="76" height="14" fill="#bf302e" />
        <text x="82" y="94" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="8" fill="#fff">
          HOUR 9 LIVE!
        </text>
        <circle cx="133" cy="52" r="5" fill="#f6ba36" stroke="#251a20" strokeWidth="2.5" />
        <circle cx="133" cy="70" r="5" fill="#f6ba36" stroke="#251a20" strokeWidth="2.5" />
      </svg>
    );
  }

  if (id === 'ballot') {
    return (
      <svg
        viewBox="0 0 180 140"
        className="w-36 h-28 animate-tda-float drop-shadow-[5px_6px_0_rgba(59,40,42,0.28)]"
        aria-hidden="true"
      >
        <rect x="116" y="74" width="42" height="36" rx="4" fill="#a45b41" stroke="#251a20" strokeWidth="4" />
        <path d="M129 74V65h16v9" fill="none" stroke="#251a20" strokeWidth="4" />
        <rect x="42" y="38" width="76" height="72" rx="4" fill="#fff1d6" stroke="#251a20" strokeWidth="4.5" />
        <rect x="36" y="30" width="88" height="14" rx="2" fill="#f6ba36" stroke="#251a20" strokeWidth="4.5" />
        <rect x="58" y="34" width="44" height="5" fill="#251a20" />
        <rect x="53" y="58" width="22" height="13" rx="3" fill="#251a20" />
        <rect x="85" y="58" width="22" height="13" rx="3" fill="#251a20" />
        <line x1="75" y1="63" x2="85" y2="63" stroke="#251a20" strokeWidth="3.5" />
        <path d="M68 88Q80 82 92 88" fill="none" stroke="#251a20" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === 'market') {
    return (
      <svg
        viewBox="0 0 180 140"
        className="w-36 h-28 animate-tda-float-delayed drop-shadow-[5px_6px_0_rgba(59,40,42,0.28)]"
        aria-hidden="true"
      >
        <path
          d="M22 104L56 78L82 88L124 44"
          fill="none"
          stroke="#bf302e"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="134,34 112,38 128,54" fill="#bf302e" />
        <path d="M88 106L150 106L150 68L88 80Z" fill="#fff1d6" stroke="#251a20" strokeWidth="4.5" strokeLinejoin="round" />
        <path d="M88 80L150 68L130 50Z" fill="#f6ba36" stroke="#251a20" strokeWidth="4.5" strokeLinejoin="round" />
        <circle cx="122" cy="54" r="6" fill="#bf302e" stroke="#251a20" strokeWidth="3" />
        <line x1="88" y1="93" x2="150" y2="87" stroke="#bf302e" strokeWidth="4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 180 140"
      className="w-36 h-28 animate-tda-float drop-shadow-[5px_6px_0_rgba(59,40,42,0.28)]"
      aria-hidden="true"
    >
      <line x1="90" y1="16" x2="90" y2="34" stroke="#251a20" strokeWidth="4.5" />
      <circle cx="90" cy="14" r="7" fill="#bf302e" stroke="#251a20" strokeWidth="3.5" />
      <rect x="48" y="34" width="84" height="62" rx="10" fill="#fff1d6" stroke="#251a20" strokeWidth="4.5" />
      <circle cx="72" cy="60" r="9" fill="#253c5b" />
      <circle cx="108" cy="60" r="9" fill="#253c5b" />
      <rect x="64" y="78" width="52" height="8" rx="3" fill="#251a20" />
      <rect x="24" y="92" width="38" height="24" rx="4" fill="#f6ba36" stroke="#251a20" strokeWidth="3.5" />
      <rect x="118" y="92" width="38" height="24" rx="4" fill="#f6ba36" stroke="#251a20" strokeWidth="3.5" />
      <line x1="34" y1="104" x2="52" y2="104" stroke="#251a20" strokeWidth="3" />
      <line x1="128" y1="104" x2="146" y2="104" stroke="#251a20" strokeWidth="3" />
    </svg>
  );
}

function StripRow({
  strips,
  onOpenSketch,
}: {
  strips: LivingStripItem[];
  onOpenSketch: (id: SketchId, tab?: 'theater' | 'article') => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[17px]">
      {strips.map((strip) => (
        <article
          key={strip.id}
          className="bg-[#fff1d6] border-[3px] border-[#251a20] shadow-[5px_6px_0_#24131c] overflow-hidden flex flex-col sm:flex-row md:flex-col"
        >
          <div
            onClick={() => onOpenSketch(strip.id, 'theater')}
            className="aspect-video sm:w-[40%] sm:aspect-auto md:w-full md:aspect-video grid place-items-center relative overflow-hidden border-b-[3px] sm:border-b-0 sm:border-r-[3px] md:border-r-0 md:border-b-[3px] border-[#251a20] cursor-pointer"
            style={{ backgroundColor: strip.bgTint }}
          >
            <StripIllustration id={strip.id} />
          </div>

          <div className="p-4 sm:p-[17px] flex-1 flex flex-col">
            <div className="font-sans text-[11px] font-black tracking-[0.14em] uppercase text-[#bf302e]">
              {strip.episode} <span aria-hidden="true">·</span> {strip.category}
            </div>
            <h3 className="font-serif text-[21px] sm:text-[23px] font-black leading-[1.06] tracking-[-0.03em] my-2.5 text-[#251a20] text-balance">
              {strip.title}
            </h3>
            <p className="font-sans text-[13px] leading-[1.45] text-[#251a20] flex-1">
              {strip.summary}
            </p>
            <div className="mt-4 flex items-center gap-4 flex-wrap">
              <button
                type="button"
                onClick={() => onOpenSketch(strip.id, 'theater')}
                className="inline-flex items-center gap-1.5 self-start bg-transparent border-0 border-b-2 border-[#bf302e] py-1 font-sans text-xs font-black text-[#bf302e] hover:text-[#251a20] hover:border-[#251a20] uppercase tracking-[0.06em] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bf302e]"
              >
                <Play className="w-3 h-3 fill-current" aria-hidden="true" />
                {strip.ctaLabel}
              </button>
              <button
                type="button"
                onClick={() => onOpenSketch(strip.id, 'article')}
                className="inline-flex items-center gap-1.5 self-start bg-transparent border-0 border-b-2 border-[#251a20]/40 py-1 font-sans text-xs font-black text-[#251a20] hover:border-[#251a20] uppercase tracking-[0.06em] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20]"
              >
                <BookOpen className="w-3 h-3" aria-hidden="true" />
                Article
              </button>
              <ShareButton sketchId={strip.id} mode="theater" variant="strip-link" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function LivingStrips({ activeIssueId, onOpenSketch }: LivingStripsProps) {
  const currentStrips = ISSUES[activeIssueId].livingStrips;
  const originalIssue = ISSUES['issue-001'];

  return (
    <section className="mt-10" id="stories" aria-labelledby="living-strips-heading">
      <h2
        id="living-strips-heading"
        className="flex items-center gap-4 font-serif text-[28px] sm:text-[32px] font-black tracking-[-0.04em] uppercase mb-5 after:content-[''] after:h-[3px] after:bg-[#251a20] after:flex-1"
      >
        Living strips
      </h2>

      <StripRow strips={currentStrips} onOpenSketch={onOpenSketch} />

      {activeIssueId === 'issue-002' && (
        <div className="mt-12" id="original-cast">
          <div className="mb-4">
            <h2 className="flex items-center gap-4 font-serif text-[24px] sm:text-[28px] font-black tracking-[-0.035em] uppercase mb-1 after:content-[''] after:h-[3px] after:bg-[#251a20] after:flex-1">
              Original Cast · Minister Grim &amp; Director Beam
            </h2>
            <p className="font-sans text-xs text-[#5c4a40] m-0">
              Our founding cartoon duo returns below with the original interactive red button &amp; classic strips.
            </p>
          </div>

          {/* Live animated Original Main Cartoon alongside its 2 companion cards */}
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.25fr)_minmax(240px,0.95fr)] gap-[17px] mb-[17px]">
            <ButtonCrisisArtwork
              tag={originalIssue.coverTag}
              caption={originalIssue.coverCaption}
              badgeText="★ CLASSIC CAST ENCORE ★"
              compact
              onOpenSketch={onOpenSketch}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-[17px]">
              {originalIssue.sidebarStories.map((card) => (
                <DispatchCard
                  key={card.id}
                  card={card}
                  compact
                  className="min-h-[210px] md:min-h-[251px]"
                  onOpenSketch={onOpenSketch}
                />
              ))}
            </div>
          </div>

          <StripRow strips={originalIssue.livingStrips} onOpenSketch={onOpenSketch} />
        </div>
      )}
    </section>
  );
}
