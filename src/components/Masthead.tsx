import { IssueConfig, SketchId } from '../data/sketches';

interface MastheadProps {
  issue: IssueConfig;
  onOpenSketch: (id: SketchId, tab?: 'theater' | 'article') => void;
}

export function Masthead({ issue, onOpenSketch }: MastheadProps) {
  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-[#fff1d6] border-b-[5px] border-[#251a20] relative z-10">
      <div className="max-w-[1260px] mx-auto px-3 sm:px-5 pt-3.5 pb-2.5">
        <div className="flex justify-between items-center font-sans text-[11px] font-bold uppercase tracking-[0.13em] leading-snug gap-4">
          <span className="text-[#251a20]">Independent nonsense since tomorrow</span>
          <span className="text-[#bf302e] whitespace-nowrap shrink-0">{issue.issueBadge}</span>
        </div>

        <h1 className="font-serif text-[clamp(44px,9.4vw,116px)] leading-[0.9] tracking-[-0.06em] font-black text-center my-2.5 text-[#251a20] [text-shadow:2px_2px_0_#f8cb64] select-none">
          THE DAILY <span className="text-[#bf302e]">ABSURD</span>
        </h1>

        <p className="font-sans text-center text-[11px] font-semibold uppercase tracking-[0.22em] pb-3 text-[#251a20]">
          The world&apos;s most unreliable source of extremely reliable laughter
        </p>

        <nav
          aria-label="Magazine sections"
          className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap border-t-2 border-[#251a20] pt-2.5"
        >
          <button
            type="button"
            onClick={() => scrollToSection('#cover')}
            className="font-sans text-[11px] font-extrabold uppercase tracking-[0.11em] px-2.5 py-1.5 text-[#251a20] hover:bg-[#f6ba36] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20]"
          >
            The Cover
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('#stories')}
            className="font-sans text-[11px] font-extrabold uppercase tracking-[0.11em] px-2.5 py-1.5 text-[#251a20] hover:bg-[#f6ba36] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20]"
          >
            Living Strips
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('#laughter')}
            className="font-sans text-[11px] font-extrabold uppercase tracking-[0.11em] px-2.5 py-1.5 text-[#251a20] hover:bg-[#f6ba36] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20]"
          >
            Daily Laughter
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('#horoscopes')}
            className="font-sans text-[11px] font-extrabold uppercase tracking-[0.11em] px-2.5 py-1.5 text-[#251a20] hover:bg-[#f6ba36] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20]"
          >
            Horoscopes
          </button>
          <button
            type="button"
            onClick={() => onOpenSketch(issue.coverSketchId, 'theater')}
            className="font-sans text-[11px] font-extrabold uppercase tracking-[0.11em] px-2.5 py-1.5 text-[#251a20] hover:bg-[#f6ba36] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20]"
          >
            Watch a Sketch
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('#about')}
            className="font-sans text-[11px] font-extrabold uppercase tracking-[0.11em] px-2.5 py-1.5 text-[#251a20] hover:bg-[#f6ba36] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20]"
          >
            Our Manifesto
          </button>
        </nav>
      </div>
    </header>
  );
}
