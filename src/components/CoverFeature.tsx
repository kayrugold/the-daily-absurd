import { BookOpen, Maximize2, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ISSUES, IssueConfig, IssueId, SketchId } from '../data/sketches';
import { ButtonCrisisArtwork, DispatchCard } from './ButtonCrisisArtwork';
import { ShareButton } from './ShareButton';

interface CoverFeatureProps {
  issue: IssueConfig;
  activeIssueId: IssueId;
  isModalOpen: boolean;
  onSelectIssue: (id: IssueId) => void;
  onOpenSketch: (id: SketchId, tab?: 'theater' | 'article') => void;
}

function WidescreenCartoonCover({
  issue,
  isModalOpen,
  onOpenSketch,
}: {
  issue: IssueConfig;
  isModalOpen: boolean;
  onOpenSketch: (id: SketchId, tab?: 'theater' | 'article') => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isModalOpen) {
      video.pause();
    } else {
      void video.play().catch(() => {});
    }
  }, [isModalOpen]);

  const handleToggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      void video.play().catch(() => {});
    }
  };

  return (
    <div id="cover">
      {/* Full-bleed 16:9 widescreen cartoon showcase — zero letterbox bars */}
      <article className="bg-[#251a20] border-[5px] border-[#251a20] shadow-[8px_9px_0_#24131c] overflow-hidden">
        <div className="relative aspect-video w-full bg-[#1d171a] overflow-hidden group">
          <video
            ref={videoRef}
            src="/assets/aistudio/gemini_generated_video_cd422f4e_62bfb5e0.mp4"
            poster="/assets/aistudio/Gemini_Generated_Image_o6oe4uo6oe4uo6oe_d135ab0a.jpeg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onClick={() => onOpenSketch(issue.coverSketchId, 'theater')}
            className="w-full h-full object-cover cursor-pointer"
            aria-label="Animated ink-and-crosshatch cartoon: Compliance For Sale"
          />

          <div className="pointer-events-none absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#fff1d6] px-3 py-1 -rotate-2 border-2 border-[#251a20] font-sans text-[10px] sm:text-[11px] font-black tracking-[0.08em] text-[#251a20] shadow-[2px_2px_0_#24131c]">
            ★ FEATURED CARTOON REEL ★
          </div>
        </div>

        {/* Clean solid broadsheet footer below the frame so nothing overlaps the artwork */}
        <div className="bg-[#251a20] text-[#fff8e6] px-4 py-4 sm:px-6 sm:py-5 border-t-[4px] border-[#251a20] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="max-w-2xl">
            <div className="font-sans text-[11px] font-extrabold tracking-[0.12em] uppercase text-[#ffe28b]">
              {issue.coverTag}
            </div>
            <h2 className="font-serif text-[clamp(22px,3vw,34px)] font-black leading-[1.04] tracking-[-0.03em] text-[#fff8e6] mt-1">
              Compliance For Sale! (Case Closed)
            </h2>
            <p className="font-sans text-xs sm:text-sm leading-snug mt-1.5 text-[#e6d7bd]">
              {issue.coverCaption}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleToggleSound}
              aria-pressed={!isMuted}
              className={`inline-flex items-center justify-center gap-1.5 border-2 px-3.5 py-2.5 font-sans text-xs font-black uppercase tracking-[0.06em] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe15f] ${
                isMuted
                  ? 'border-[#f6e7cd]/70 bg-[#36282f] text-[#fff1d6] hover:bg-[#493740]'
                  : 'border-[#ffe15f] bg-[#bf302e] text-white'
              }`}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" aria-hidden="true" />
                  Sound Off
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
                  Sound On
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => onOpenSketch(issue.coverSketchId, 'article')}
              className="inline-flex items-center justify-center gap-1.5 border-2 border-[#f6e7cd] bg-[#fff1d6] text-[#251a20] px-3.5 py-2.5 font-sans text-xs font-black uppercase tracking-[0.06em] hover:bg-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe15f]"
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Read Article
            </button>

            <button
              type="button"
              onClick={() => onOpenSketch(issue.coverSketchId, 'theater')}
              className="inline-flex items-center justify-center gap-1.5 border-2 border-[#f6e7cd] bg-[#f6ba36] text-[#251a20] px-4 py-2.5 font-sans text-xs font-black uppercase tracking-[0.06em] shadow-[3px_3px_0_#0f0a0c] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe15f]"
            >
              <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
              Theater &amp; Script
            </button>

            <ShareButton
              sketchId={issue.coverSketchId}
              mode="theater"
              variant="dark-bar"
            />
          </div>
        </div>
      </article>

      {/* Balanced 2-column dispatch row underneath the widescreen cartoon */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[17px] mt-[17px]">
        {issue.sidebarStories.map((card) => (
          <DispatchCard
            key={card.id}
            card={card}
            className="min-h-[225px]"
            onOpenSketch={onOpenSketch}
          />
        ))}
      </div>
    </div>
  );
}

function ClassicIssueCover({
  issue,
  onOpenSketch,
}: {
  issue: IssueConfig;
  onOpenSketch: (id: SketchId, tab?: 'theater' | 'article') => void;
}) {
  return (
    <div id="cover" className="grid grid-cols-1 md:grid-cols-[minmax(0,1.75fr)_minmax(240px,0.75fr)] gap-[17px]">
      <ButtonCrisisArtwork
        tag={issue.coverTag}
        caption={issue.coverCaption}
        onOpenSketch={onOpenSketch}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-[17px]">
        {issue.sidebarStories.map((card) => (
          <DispatchCard
            key={card.id}
            card={card}
            className="min-h-[220px] md:min-h-[292px]"
            onOpenSketch={onOpenSketch}
          />
        ))}
      </div>
    </div>
  );
}

export function CoverFeature({
  issue,
  activeIssueId,
  isModalOpen,
  onSelectIssue,
  onOpenSketch,
}: CoverFeatureProps) {
  return (
    <section aria-labelledby="cover-eyebrow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-3">
        <div>
          <div
            id="cover-eyebrow"
            className="font-sans text-xs font-black tracking-[0.15em] uppercase text-[#bf302e]"
          >
            {issue.coverEyebrow}
          </div>
          <p className="hidden sm:block font-sans text-xs mt-0.5 mb-0 text-[#5c4a40]">
            Watch closely. The illustrations have opinions.
          </p>
        </div>

        <div
          className="flex items-center gap-1 p-1 bg-[#fff1d6] border-2 border-[#251a20] shadow-[3px_3px_0_#24131c]"
          role="group"
          aria-label="Select featured cover issue"
        >
          {(Object.keys(ISSUES) as IssueId[]).map((id) => {
            const item = ISSUES[id];
            const active = id === activeIssueId;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelectIssue(id)}
                className={`px-3 py-1.5 font-sans text-[11px] font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#251a20] ${
                  active ? 'bg-[#251a20] text-[#fff1d6]' : 'text-[#251a20] hover:bg-[#f6ba36]'
                }`}
              >
                {item.shortLabel}
              </button>
            );
          })}
        </div>
      </div>

      {activeIssueId === 'issue-002' ? (
        <WidescreenCartoonCover
          issue={issue}
          isModalOpen={isModalOpen}
          onOpenSketch={onOpenSketch}
        />
      ) : (
        <ClassicIssueCover issue={issue} onOpenSketch={onOpenSketch} />
      )}
    </section>
  );
}
