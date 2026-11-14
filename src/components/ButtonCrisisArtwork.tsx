import { BookOpen, Play } from 'lucide-react';
import { useId } from 'react';
import { SidebarStory, SketchId } from '../data/sketches';
import { ShareButton } from './ShareButton';

export function DispatchCard({
  card,
  className = '',
  compact = false,
  onOpenSketch,
}: {
  card: SidebarStory;
  className?: string;
  compact?: boolean;
  onOpenSketch: (id: SketchId, tab?: 'theater' | 'article') => void;
}) {
  const isBlue = card.theme === 'blue';

  return (
    <article
      className={`${
        isBlue ? 'bg-[#253c5b] text-white' : 'bg-[#f6ba36] text-[#251a20]'
      } border-4 border-[#251a20] shadow-[6px_7px_0_#24131c] ${
        compact ? 'p-4 sm:p-5' : 'p-5 sm:p-6'
      } flex flex-col justify-between relative overflow-hidden ${className}`}
    >
      {card.stamp && (
        <span className="absolute -right-3 top-4 bg-[#bf302e] text-white rotate-[13deg] border-2 border-dashed border-white px-4 py-2 font-sans text-[10px] font-black tracking-[0.09em]">
          {card.stamp}
        </span>
      )}
      <div>
        <div
          className={`font-sans text-xs font-black tracking-[0.15em] uppercase ${
            isBlue ? 'text-[#f5d581]' : 'text-[#8f1f1d]'
          }`}
        >
          {card.eyebrow}
        </div>
        <h3
          className={`font-serif ${
            compact
              ? 'text-[clamp(21px,2.2vw,30px)] mt-3 mb-2'
              : 'text-[clamp(24px,2.7vw,36px)] mt-4 mb-2.5'
          } font-black leading-[1.02] tracking-[-0.035em] text-balance pr-8`}
        >
          {card.title}
        </h3>
        <p
          className={`font-sans ${compact ? 'text-xs sm:text-sm' : 'text-sm'} leading-snug max-w-[420px] ${
            isBlue ? 'text-[#e6edf5]' : 'text-[#251a20]'
          }`}
        >
          {card.summary}
        </p>
      </div>

      {isBlue ? (
        <div className="mt-4 flex items-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={() => onOpenSketch(card.id, 'theater')}
            className="inline-flex items-center gap-1.5 border-0 border-b-2 border-current bg-transparent py-1 text-[#fff1d6] hover:text-[#ffe15f] font-sans text-xs font-black uppercase tracking-[0.08em] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe15f]"
          >
            <Play className="w-3 h-3 fill-current" aria-hidden="true" />
            {card.ctaLabel}
          </button>
          <button
            type="button"
            onClick={() => onOpenSketch(card.id, 'article')}
            className="inline-flex items-center gap-1 border-0 border-b-2 border-[#f5d581]/50 bg-transparent py-1 text-[#f5d581] hover:text-white font-sans text-xs font-black uppercase tracking-[0.08em] transition-colors whitespace-nowrap shrink-0"
          >
            <BookOpen className="w-3 h-3" aria-hidden="true" />
            Read Article
          </button>
          <ShareButton sketchId={card.id} mode="theater" variant="blue-card" />
        </div>
      ) : (
        <div className="flex justify-between items-end mt-4 gap-3">
          <div className="flex items-center gap-3.5 flex-wrap">
            <button
              type="button"
              onClick={() => onOpenSketch(card.id, 'theater')}
              className="inline-flex items-center gap-1.5 border-0 border-b-2 border-current bg-transparent py-1 text-[#251a20] hover:text-[#8f1f1d] font-sans text-xs font-black uppercase tracking-[0.08em] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20]"
            >
              <Play className="w-3 h-3 fill-current" aria-hidden="true" />
              {card.ctaLabel}
            </button>
            <button
              type="button"
              onClick={() => onOpenSketch(card.id, 'article')}
              className="inline-flex items-center gap-1 border-0 border-b-2 border-[#251a20]/40 bg-transparent py-1 text-[#251a20] hover:text-[#8f1f1d] font-sans text-xs font-black uppercase tracking-[0.08em] transition-colors whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-3 h-3" aria-hidden="true" />
              Read Article
            </button>
            <ShareButton sketchId={card.id} mode="theater" variant="gold-card" />
          </div>
          <svg
            width={compact ? 58 : 68}
            height={compact ? 58 : 68}
            viewBox="0 0 80 80"
            className="-rotate-12 drop-shadow-[3px_4px_0_#8d5b38] shrink-0"
            aria-hidden="true"
          >
            <circle cx="40" cy="40" r="33" fill="#fff1d6" stroke="#251a20" strokeWidth="4" />
            <circle cx="29" cy="34" r="4.5" fill="#251a20" />
            <circle cx="51" cy="34" r="4.5" fill="#251a20" />
            <path
              d="M26 49Q40 60 54 49"
              fill="none"
              stroke="#251a20"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </article>
  );
}

export function ButtonCrisisArtwork({
  tag,
  caption,
  badgeText = '★ THE INTERACTIVE COVER ★',
  compact = false,
  className = '',
  onOpenSketch,
}: {
  tag: string;
  caption: string;
  badgeText?: string;
  compact?: boolean;
  className?: string;
  onOpenSketch: (id: SketchId, tab?: 'theater' | 'article') => void;
}) {
  const uid = useId().replace(/:/g, '');
  const skyId = `coverSky-${uid}`;
  const dotsId = `coverDots-${uid}`;

  return (
    <article
      className={`relative bg-[#e49a53] border-[5px] border-[#251a20] shadow-[8px_9px_0_#24131c] overflow-hidden isolate ${
        compact ? 'min-h-[470px] md:min-h-[520px]' : 'min-h-[540px] md:min-h-[620px]'
      } ${className}`}
    >
      <div className="paper-grain absolute inset-0 pointer-events-none opacity-20 z-10" aria-hidden="true" />

      <div className="absolute z-20 top-4 left-4 sm:top-5 sm:left-5 bg-[#fff1d6] px-3 py-1.5 sm:px-3.5 sm:py-2 -rotate-3 border-2 border-[#251a20] font-sans text-[10px] sm:text-[11px] font-black tracking-[0.08em] text-[#251a20]">
        {badgeText}
      </div>

      <h3
        className={`absolute ${
          compact
            ? 'top-[52px] sm:top-[48px] text-[clamp(30px,4vw,56px)]'
            : 'top-[74px] sm:top-[69px] text-[clamp(38px,5.5vw,83px)]'
        } left-[5%] right-[5%] z-20 text-center font-serif leading-[0.91] font-black tracking-[-0.045em] text-[#fff6d8] uppercase [text-shadow:3px_4px_0_#7d2c2a,5px_7px_0_#241a21] text-balance pointer-events-none`}
      >
        THE GREAT
        <br />
        <em className="not-italic text-[#ffe15f]">BUTTON</em>
        <br />
        CRISIS!
      </h3>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={compact ? '0 35 720 635' : '0 0 720 730'}
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Satirical illustration of Minister Grim and Director Beam disagreeing over a big red button"
      >
        <defs>
          <radialGradient id={skyId}>
            <stop stopColor="#ffe59e" />
            <stop offset="1" stopColor="#ca633a" />
          </radialGradient>
          <pattern id={dotsId} width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#ac5a44" opacity=".25" />
          </pattern>
        </defs>
        <rect width="720" height="730" fill={`url(#${skyId})`} />
        <rect width="720" height="730" fill={`url(#${dotsId})`} />
        <path d="M0 486Q155 418 325 498T720 470V730H0" fill="#bd764b" />
        <path d="M0 580Q180 515 380 585T720 566V730H0" fill="#865444" />
        <g fill="#f6d491" opacity=".75">
          <ellipse cx="92" cy="196" rx="84" ry="20" />
          <ellipse cx="630" cy="160" rx="107" ry="28" />
        </g>

        <g transform="translate(53 236)">
          <g className="animate-tda-float">
            <path d="M30 430Q0 250 80 208L240 205Q310 270 275 450Z" fill="#8c3536" stroke="#3e2630" strokeWidth="10" />
            <path d="M101 223L166 425L209 217" fill="#f2ca8e" stroke="#3e2630" strokeWidth="8" />
            <path d="M8 283Q-12 230 10 195L86 214L105 283Z" fill="#a45b41" stroke="#3e2630" strokeWidth="9" />
            <path d="M260 265L332 170L345 192L285 304" fill="#ad6a53" stroke="#3e2630" strokeWidth="12" />
            <ellipse cx="161" cy="121" rx="122" ry="145" fill="#e5a071" stroke="#3e2630" strokeWidth="10" />
            <path d="M42 57Q37-36 160-31Q273-28 279 78Q224 18 161 39Q93 19 42 57" fill="#383037" stroke="#3e2630" strokeWidth="7" />
            <g className="animate-tda-blink">
              <ellipse cx="115" cy="118" rx="23" ry="28" fill="white" stroke="#3e2630" strokeWidth="5" />
              <ellipse cx="199" cy="118" rx="23" ry="28" fill="white" stroke="#3e2630" strokeWidth="5" />
              <circle cx="122" cy="128" r="9" fill="#251a20" />
              <circle cx="193" cy="128" r="9" fill="#251a20" />
            </g>
            <path d="M155 133Q128 201 177 193" fill="none" stroke="#774535" strokeWidth="9" />
            <path d="M117 233Q160 209 205 225" stroke="#63252b" strokeWidth="9" fill="none" />
            <path d="M83 87L137 92M184 92L239 86" stroke="#3e2630" strokeWidth="12" strokeLinecap="round" />
          </g>
        </g>

        <g transform="translate(385 252)">
          <g className="animate-tda-float-delayed">
            <path d="M-16 440Q-55 263 42 214L225 213Q300 278 264 456Z" fill="#496e7b" stroke="#3e2630" strokeWidth="10" />
            <path d="M72 222L150 435L180 218" fill="#e9d6a7" stroke="#3e2630" strokeWidth="8" />
            <path d="M22 281L-51 230L-71 252L0 323" fill="#ebbd91" stroke="#3e2630" strokeWidth="10" />
            <ellipse cx="131" cy="118" rx="123" ry="146" fill="#efbd8b" stroke="#3e2630" strokeWidth="10" />
            <path d="M11 58Q-2-17 125-36Q237-28 263 69Q197 1 144 29Q65 10 11 58" fill="#e5e1d1" stroke="#3e2630" strokeWidth="8" />
            <g className="animate-tda-blink-delayed">
              <ellipse cx="89" cy="123" rx="24" ry="29" fill="white" stroke="#3e2630" strokeWidth="5" />
              <ellipse cx="177" cy="123" rx="24" ry="29" fill="white" stroke="#3e2630" strokeWidth="5" />
              <circle cx="97" cy="130" r="9" fill="#251a20" />
              <circle cx="171" cy="130" r="9" fill="#251a20" />
            </g>
            <path d="M134 137Q100 200 150 196" stroke="#9e6957" strokeWidth="9" fill="none" />
            <path d="M91 224Q143 260 193 224" stroke="#663a35" strokeWidth="8" fill="none" />
            <path d="M66 92L120 84M159 86L215 93" stroke="#4d4041" strokeWidth="11" strokeLinecap="round" />
          </g>
        </g>

        <g
          className="animate-tda-wag cursor-pointer"
          onClick={() => onOpenSketch('buttons', 'theater')}
          role="button"
          tabIndex={0}
          aria-label="Inspect and launch The Great Button Crisis sketch"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenSketch('buttons', 'theater');
            }
          }}
        >
          <path d="M307 517Q352 460 398 517L412 607L287 607Z" fill="#f3c965" stroke="#3e2630" strokeWidth="11" />
          <ellipse cx="350" cy="518" rx="80" ry="32" fill="#e7a94b" stroke="#3e2630" strokeWidth="9" />
          <circle cx="350" cy="501" r="43" fill="#c83f32" stroke="#71332c" strokeWidth="10" />
          <path d="M324 489Q340 469 358 472" stroke="#ffe8ce" strokeWidth="9" fill="none" strokeLinecap="round" />
        </g>
      </svg>

      <div
        className={`absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-b from-transparent via-[#2b2026]/92 to-[#2b2026] text-white ${
          compact ? 'pt-10 px-4 pb-4' : 'pt-14 px-4 pb-4 sm:px-6 sm:pb-6'
        } flex flex-col sm:flex-row justify-between items-stretch sm:items-end gap-3 sm:gap-4`}
      >
        <div>
          <div className="font-sans text-[11px] font-extrabold tracking-[0.12em] uppercase text-[#ffe28b]">
            {tag}
          </div>
          <p className="font-sans text-xs sm:text-sm leading-snug mt-1 max-w-[360px] text-[#fff8e6]">
            {caption}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onOpenSketch('buttons', 'article')}
            className="inline-flex items-center justify-center gap-1.5 border-2 border-[#f6e7cd] bg-[#251a20] text-[#fff1d6] px-3 py-2.5 font-sans text-xs font-black uppercase tracking-[0.06em] hover:bg-[#3e2630] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe15f]"
          >
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            Read Article
          </button>
          <button
            type="button"
            onClick={() => onOpenSketch('buttons', 'theater')}
            className="inline-flex items-center justify-center gap-2 border-2 border-[#f6e7cd] bg-[#f6ba36] text-[#251a20] px-3.5 py-2.5 font-sans text-xs font-black uppercase tracking-[0.06em] shadow-[4px_4px_0_#20171b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#20171b] transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe15f]"
          >
            <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
            Bring it to life
          </button>
          <ShareButton sketchId="buttons" mode="theater" variant="cover-overlay" />
        </div>
      </div>
    </article>
  );
}
