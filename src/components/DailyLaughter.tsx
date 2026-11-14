import { Check, Copy, Feather, Sparkles } from 'lucide-react';
import { useState } from 'react';
import {
  DAILY_LAUGHTER_SCRIPTS,
  DailyLaughterItem,
  LaughterCategory,
} from '../data/dailyLaughter';
import { playComicSfx } from '../utils/comicSfx';

const FILTER_TABS: { id: LaughterCategory; label: string }[] = [
  { id: 'all', label: 'All (6 Spotlight)' },
  { id: 'aviation', label: 'At the Airport' },
  { id: 'work', label: "Day's Work" },
  { id: 'everyday', label: 'Everyday Absurd' },
];

function formatLaughterPlainText(item: DailyLaughterItem): string {
  const lines = item.dialogue.map((d) => `${d.speaker}: ${d.line}`);
  return [
    `${item.rubric.toUpperCase()} — ${item.title}`,
    ...(item.setting ? [`(${item.setting})`] : []),
    '',
    ...lines,
    '',
    `${item.contributor} · The Daily Absurd`,
  ].join('\n');
}

export function DailyLaughter() {
  const [category, setCategory] = useState<LaughterCategory>('all');
  const [showAllNine, setShowAllNine] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const visibleScripts =
    category === 'all'
      ? showAllNine
        ? DAILY_LAUGHTER_SCRIPTS
        : DAILY_LAUGHTER_SCRIPTS.slice(0, 6)
      : DAILY_LAUGHTER_SCRIPTS.filter((item) => item.category === category);

  const handleCopy = async (item: DailyLaughterItem) => {
    await navigator.clipboard.writeText(formatLaughterPlainText(item));
    setCopiedId(item.id);
    window.setTimeout(() => setCopiedId((prev) => (prev === item.id ? null : prev)), 1800);
  };

  return (
    <section className="mt-12" id="laughter" aria-labelledby="laughter-heading">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5">
        <div className="flex-1">
          <h2
            id="laughter-heading"
            className="flex items-center gap-4 font-serif text-[26px] sm:text-[32px] font-black tracking-[-0.04em] uppercase after:content-[''] after:h-[3px] after:bg-[#251a20] after:flex-1"
          >
            Daily Laughter
          </h2>
          <p className="font-sans text-xs text-[#5c4a40] mt-1 mb-0">
            Laughter, the Best Bureaucratic Medicine — pocket-sized comedy scripts &amp; overheard dispatches.
          </p>
        </div>

        <div
          className="flex flex-wrap items-center gap-1 p-1 bg-[#fff1d6] border-2 border-[#251a20] shadow-[3px_3px_0_#24131c] self-start md:self-auto"
          role="group"
          aria-label="Filter humor scripts by department"
        >
          {FILTER_TABS.map((tab) => {
            const active = category === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setCategory(tab.id)}
                className={`px-2.5 py-1.5 font-sans text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[#251a20] text-[#fff1d6]'
                    : 'text-[#251a20] hover:bg-[#f6ba36]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Symmetrical 3-column Reader's Digest humor grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[17px]">
        {visibleScripts.map((item, idx) => {
          const isNavyRubric = idx % 2 === 1;
          const isCopied = copiedId === item.id;

          return (
            <article
              key={item.id}
              className="bg-[#fff1d6] border-[3px] border-[#251a20] shadow-[5px_6px_0_#24131c] flex flex-col justify-between overflow-hidden"
            >
              {/* Classic Reader's Digest Department Rubric Banner */}
              <div>
                <div
                  className={`px-4 py-2 border-b-[3px] border-[#251a20] flex items-center justify-between gap-2 ${
                    isNavyRubric ? 'bg-[#253c5b] text-[#ffe15f]' : 'bg-[#bf302e] text-[#fff8e6]'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5 font-sans text-[10px] font-black uppercase tracking-[0.15em]">
                    <Feather className="w-3 h-3 shrink-0" aria-hidden="true" />
                    {item.rubric}
                  </span>
                  <span className="font-serif italic text-[11px] opacity-90">
                    No. 0{idx + 1}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-[20px] sm:text-[22px] font-black leading-[1.08] tracking-[-0.025em] text-[#251a20] m-0">
                    {item.title}
                  </h3>
                  {item.setting && (
                    <p className="font-serif italic text-xs text-[#5c4a40] mt-1 mb-3 pb-2 border-b border-dashed border-[#251a20]/30">
                      {item.setting}
                    </p>
                  )}

                  {/* Short Playscript Dialogue */}
                  <div className="space-y-2.5 mt-3">
                    {item.dialogue.map((entry, lineIdx) => (
                      <p
                        key={lineIdx}
                        className={`font-serif text-[14.5px] leading-[1.52] m-0 ${
                          entry.isPunchline
                            ? 'text-[#251a20] font-semibold bg-[#f6ba36]/25 border-l-[3px] border-[#bf302e] pl-2.5 py-1'
                            : 'text-[#251a20]'
                        }`}
                      >
                        <strong className="font-sans text-[10px] font-black uppercase tracking-[0.1em] text-[#bf302e] mr-1.5">
                          {entry.speaker}:
                        </strong>
                        {entry.line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Crisp Newspaper Footer */}
              <div className="px-4 sm:px-5 py-3 bg-[#f7e5c4] border-t-2 border-[#251a20]/20 flex items-center justify-between gap-2">
                <span className="font-serif italic text-[11px] text-[#5c4a40] truncate">
                  {item.contributor}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => playComicSfx('ding')}
                    title="Play punchline ding"
                    aria-label={`Play rimshot sound for ${item.title}`}
                    className="inline-flex items-center gap-1 bg-white hover:bg-[#f6ba36] border-2 border-[#251a20] px-2 py-1 font-sans text-[10px] font-black uppercase tracking-wider transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-[#bf302e]" aria-hidden="true" />
                    Rimshot
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    aria-label={`Copy ${item.title} script`}
                    className="inline-flex items-center gap-1 bg-[#251a20] text-[#fff1d6] hover:bg-[#bf302e] border-2 border-[#251a20] px-2.5 py-1 font-sans text-[10px] font-black uppercase tracking-wider transition-colors whitespace-nowrap"
                  >
                    {isCopied ? (
                      <Check className="w-3 h-3" aria-hidden="true" />
                    ) : (
                      <Copy className="w-3 h-3" aria-hidden="true" />
                    )}
                    {isCopied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {category === 'all' && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllNine((prev) => !prev)}
            className="inline-flex items-center gap-2 bg-[#fff1d6] hover:bg-[#f6ba36] border-[3px] border-[#251a20] px-5 py-2.5 font-sans text-xs font-black uppercase tracking-[0.08em] shadow-[4px_4px_0_#24131c] transition-colors"
          >
            {showAllNine ? 'Show Spotlight 6' : 'Read 3 More Short Scripts'}
          </button>
        </div>
      )}
    </section>
  );
}
