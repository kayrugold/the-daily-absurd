import { Play } from 'lucide-react';
import { SketchId } from '../data/sketches';

interface ManifestoProps {
  coverSketchId: SketchId;
  onOpenSketch: (id: SketchId) => void;
}

export function Manifesto({ coverSketchId, onOpenSketch }: ManifestoProps) {
  return (
    <section
      id="about"
      aria-labelledby="manifesto-title"
      className="bg-[#f5d77d] border-[3px] border-[#251a20] p-6 sm:p-[27px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 mt-9 shadow-[5px_6px_0_#24131c]"
    >
      <div>
        <div className="font-sans text-xs font-black tracking-[0.15em] uppercase text-[#bf302e]">
          A magazine that refuses to sit still
        </div>
        <h2
          id="manifesto-title"
          className="font-serif text-[26px] sm:text-[31px] font-black tracking-[-0.04em] mt-1 mb-2 text-[#251a20]"
        >
          Read it. Watch it. Poke it.
        </h2>
        <p className="font-sans text-sm leading-relaxed max-w-[590px] text-[#251a20] m-0">
          Original satirical characters, illustrated covers that move, and short sketches that unfold when you tap. A real publication format—not a feed of disconnected clips. All stories here are fictional demonstrations, not news reports.
        </p>
      </div>

      <button
        type="button"
        onClick={() => onOpenSketch(coverSketchId)}
        className="inline-flex items-center justify-center gap-2 border-2 border-[#251a20] bg-[#f6ba36] text-[#251a20] px-4 py-3 font-sans text-xs font-black uppercase tracking-[0.06em] shadow-[4px_4px_0_#20171b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#20171b] transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20]"
      >
        <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
        Try the cover
      </button>
    </section>
  );
}
