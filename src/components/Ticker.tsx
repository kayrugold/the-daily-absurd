interface TickerProps {
  headlines: string[];
}

export function Ticker({ headlines }: TickerProps) {
  const line = headlines.join('   ★   ') + '   ★   ';

  return (
    <div
      className="ticker-wrap bg-[#bf302e] text-white border-b-[3px] border-[#251a20] overflow-hidden whitespace-nowrap py-2 font-sans text-[11px] sm:text-xs font-extrabold tracking-[0.085em]"
      aria-label="Satirical news ticker"
    >
      <div className="inline-block animate-tda-ticker">
        <span className="pr-4">{line}</span>
        <span className="pr-4" aria-hidden="true">
          {line}
        </span>
      </div>
    </div>
  );
}
