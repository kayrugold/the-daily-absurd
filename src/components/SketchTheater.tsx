import { useCallback, useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import {
  CharacterMood,
  ISSUES,
  IssueId,
  PropType,
  SKETCH_SCRIPTS,
  SketchId,
  formatArticleMarkdown,
  formatArticlePlainText,
} from '../data/sketches';
import { playComicSfx } from '../utils/comicSfx';
import { ShareButton } from './ShareButton';

interface SketchTheaterProps {
  activeSketchId: SketchId | null;
  initialTab: 'theater' | 'article';
  activeIssueId: IssueId;
  onClose: () => void;
  onSelectSketch: (id: SketchId) => void;
}

function StageCharacter({
  role,
  talking,
  mood = 'neutral',
}: {
  role: 'grim' | 'beam';
  talking: boolean;
  mood?: CharacterMood;
}) {
  const isGrim = role === 'grim';
  const bodyColor = isGrim ? 'bg-[#8c3637]' : 'bg-[#466f7a]';
  const skinColor = isGrim ? 'bg-[#e2a276]' : 'bg-[#efc59d]';
  const hairColor = isGrim ? 'bg-[#373036]' : 'bg-[#e1e0d2]';
  const headTilt =
    mood === 'panicked'
      ? isGrim
        ? '-rotate-6 -translate-y-1'
        : 'rotate-6 -translate-y-1'
      : isGrim
        ? '-rotate-3'
        : 'rotate-3';

  return (
    <div
      className={`h-[66%] w-[38%] relative flex items-end justify-center transition-transform duration-200 ${
        talking ? 'scale-[1.04]' : 'opacity-90'
      } ${isGrim ? 'animate-tda-float' : 'animate-tda-float-delayed'}`}
    >
      {mood === 'panicked' && (
        <div className="absolute top-[12%] right-[14%] z-20 flex gap-1 pointer-events-none" aria-hidden="true">
          <span className="w-2.5 h-3.5 bg-[#7dd3fc] border-2 border-[#251a20] rounded-full animate-tda-sweat" />
        </div>
      )}

      <div
        className={`absolute bottom-0 w-[73%] h-[54%] ${bodyColor} border-[5px] border-[#301a24] rounded-t-[45%] rounded-b-[5%]`}
      />

      <div
        className={`absolute bottom-[35%] h-[56%] w-[78%] sm:w-[67%] rounded-[47%_47%_45%_45%] border-[5px] border-[#371f25] ${skinColor} transition-transform duration-200 ${headTilt}`}
      >
        <div
          className={`absolute left-0 right-0 -top-3.5 h-[26%] ${hairColor} border-4 border-[#241823] rounded-[60%_45%_20%_15%] -rotate-6`}
        />

        <div className="absolute top-[25%] left-[16%] right-[16%] flex justify-around pointer-events-none">
          <span
            className={`w-5 h-1.5 bg-[#261a20] rounded-full transition-transform ${
              mood === 'panicked'
                ? '-rotate-18 -translate-y-1'
                : mood === 'smug'
                  ? 'rotate-12'
                  : mood === 'deadpan'
                    ? 'translate-y-1'
                    : ''
            }`}
          />
          <span
            className={`w-5 h-1.5 bg-[#261a20] rounded-full transition-transform ${
              mood === 'panicked'
                ? 'rotate-18 -translate-y-1'
                : mood === 'smug'
                  ? '-rotate-12'
                  : mood === 'deadpan'
                    ? 'translate-y-1'
                    : ''
            }`}
          />
        </div>

        <div className="absolute top-[36%] left-[17%] right-[17%] flex justify-around">
          {[0, 1].map((eye) => (
            <span
              key={eye}
              className={`bg-white border-[3px] border-[#261a20] rounded-full relative transition-all ${
                mood === 'panicked' || mood === 'shocked'
                  ? 'w-[19px] h-[23px]'
                  : mood === 'deadpan' || mood === 'smug'
                    ? 'w-[16px] h-[13px] mt-1'
                    : 'w-[15px] h-[19px]'
              } ${isGrim ? 'animate-tda-blink' : 'animate-tda-blink-delayed'}`}
            >
              <span
                className={`absolute bg-[#17171a] rounded-full ${
                  mood === 'shocked' || mood === 'panicked'
                    ? 'w-[4px] h-[4px] top-[7px] left-[5px]'
                    : 'w-[5px] h-[7px] top-[4px] left-[4px]'
                }`}
              />
            </span>
          ))}
        </div>

        <div
          className={`absolute left-[41%] top-[70%] transition-all duration-150 ${
            talking
              ? mood === 'panicked'
                ? 'w-[28px] h-[24px] border-4 border-[#54252a] bg-[#501b27] rounded-full'
                : 'w-[23px] h-[20px] border-4 border-[#54252a] bg-[#501b27] rounded-full'
              : mood === 'smug'
                ? 'w-[24px] h-[8px] border-b-4 border-[#54252a] rounded-full -rotate-6'
                : 'w-[23px] h-[7px] border-b-4 border-[#54252a] rounded-full'
          }`}
        />
      </div>
    </div>
  );
}

function StageProp({ propType }: { propType: PropType }) {
  if (propType === 'radar') {
    return (
      <div
        className="absolute bottom-[7%] left-1/2 -translate-x-1/2 w-[112px] h-[94px] bg-[#162733] border-[5px] border-[#e6bc64] rounded-lg shadow-[0_8px_0_#24131c] z-10 flex flex-col items-center justify-center overflow-hidden animate-tda-prop"
        aria-hidden="true"
      >
        <div className="w-12 h-12 rounded-full border-2 border-[#4ade80]/70 relative flex items-center justify-center">
          <div className="w-5 h-0.5 bg-[#4ade80] origin-left animate-tda-spin" />
        </div>
        <span className="font-sans text-[8px] font-black tracking-widest text-[#ffe15f] mt-1">
          FAA RADAR
        </span>
      </div>
    );
  }

  if (propType === 'suitcase') {
    return (
      <div
        className="absolute bottom-[7%] left-1/2 -translate-x-1/2 w-[96px] h-[76px] bg-[#a45b41] border-[5px] border-[#251a20] rounded-md shadow-[0_8px_0_#3e2630] z-10 flex flex-col items-center justify-center animate-tda-prop"
        aria-hidden="true"
      >
        <div className="w-9 h-3 border-4 border-b-0 border-[#251a20] -mt-7 mb-4 bg-[#e6bc64]" />
        <span className="font-sans text-[8px] font-black bg-[#fff1d6] text-[#bf302e] px-1.5 py-0.5 border border-[#251a20]">
          PRETZELS
        </span>
      </div>
    );
  }

  if (propType === 'phone') {
    return (
      <div
        className="absolute bottom-[7%] left-1/2 -translate-x-1/2 w-[62px] h-[98px] bg-[#251a20] border-[4px] border-[#e6bc64] rounded-xl shadow-[0_8px_0_#3e2630] z-10 p-1.5 flex flex-col justify-between animate-tda-prop"
        aria-hidden="true"
      >
        <div className="flex-1 bg-[#fff1d6] rounded p-1 flex flex-col items-center justify-center text-center">
          <span className="font-sans text-[7px] font-black text-[#bf302e] leading-tight">
            DELAYED
          </span>
          <span className="font-sans text-[11px] font-black text-[#251a20]">94x</span>
        </div>
      </div>
    );
  }

  if (propType === 'airplane') {
    return (
      <div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[110px] h-[74px] z-10 flex items-center justify-center animate-tda-plane"
        aria-hidden="true"
      >
        <svg viewBox="0 0 110 70" className="w-full h-full drop-shadow-[0_6px_0_rgba(0,0,0,0.4)]">
          <path
            d="M8 38 L58 30 L82 10 L70 36 L102 42 L68 50 L54 64 L44 46 L14 48 Z"
            fill="#fff1d6"
            stroke="#251a20"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (propType === 'postit') {
    return (
      <div
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[88px] h-[88px] bg-[#ffe15f] border-[5px] border-[#251a20] -rotate-3 shadow-[0_8px_0_#3e2630] z-10 p-2 flex flex-col justify-center animate-tda-prop"
        aria-hidden="true"
      >
        <span className="font-sans text-[8px] font-black text-[#bf302e]">1997 BACKUP</span>
        <span className="font-sans text-[9px] font-black text-[#251a20] leading-tight mt-0.5">
          BUY MILK
        </span>
      </div>
    );
  }

  if (propType === 'tv-globe') {
    return (
      <div
        className="absolute bottom-[7%] left-1/2 -translate-x-1/2 w-[108px] h-[82px] bg-[#253c5b] border-[5px] border-[#e6bc64] rounded-lg shadow-[0_8px_0_#24131c] z-10 p-1.5 flex flex-col justify-between animate-tda-prop"
        aria-hidden="true"
      >
        <div className="flex-1 bg-[#7dd3fc] border-2 border-[#251a20] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-[3px] border-[#251a20] bg-[#4ade80]/60 animate-tda-spin" />
        </div>
        <span className="font-sans text-[8px] font-black text-white bg-[#bf302e] text-center mt-1">
          LIVE HOUR 9
        </span>
      </div>
    );
  }

  if (propType === 'switch') {
    return (
      <div
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[108px] h-[90px] bg-[#f5d384] border-[5px] border-[#251a20] shadow-[0_8px_0_#583f40] z-10 flex flex-col items-center justify-center gap-1 animate-tda-prop"
        aria-hidden="true"
      >
        <div className="w-12 h-6 bg-[#bf302e] border-[3px] border-[#251a20] flex items-center justify-end px-1">
          <div className="w-4 h-3.5 bg-[#fff1d6]" />
        </div>
        <span className="font-sans text-[9px] font-black tracking-widest text-[#251a20]">ON / OFF</span>
      </div>
    );
  }

  if (propType === 'clipboard') {
    return (
      <div
        className="absolute bottom-[7%] left-1/2 -translate-x-1/2 w-[88px] h-[106px] bg-[#a45b41] border-[5px] border-[#251a20] shadow-[0_8px_0_#3e2630] z-10 flex flex-col items-center pt-3 animate-tda-prop"
        aria-hidden="true"
      >
        <div className="w-8 h-3 bg-[#e6bc64] border-2 border-[#251a20] -mt-5 mb-2" />
        <div className="w-[66px] h-[74px] bg-[#fff1d6] border-2 border-[#251a20] p-2 flex flex-col gap-1.5">
          <span className="font-sans text-[7px] font-black text-[#bf302e] tracking-wider">CLASSIFIED</span>
          <div className="h-1 bg-[#251a20]/25 w-full" />
          <div className="h-1 bg-[#251a20]/25 w-4/5" />
          <div className="h-1 bg-[#251a20]/25 w-3/5" />
        </div>
      </div>
    );
  }

  if (propType === 'ballot') {
    return (
      <div
        className="absolute bottom-[7%] left-1/2 -translate-x-1/2 w-[96px] h-[92px] bg-[#fff1d6] border-[5px] border-[#251a20] shadow-[0_8px_0_#3e2630] z-10 flex flex-col items-center justify-start animate-tda-prop"
        aria-hidden="true"
      >
        <div className="w-[106px] h-5 bg-[#f6ba36] border-[4px] border-[#251a20] -mt-2 flex items-center justify-center">
          <div className="w-10 h-1.5 bg-[#251a20]" />
        </div>
        <span className="font-sans text-[9px] font-black text-[#251a20] mt-3 px-1 text-center leading-tight">
          OUT OF OFFICE
        </span>
      </div>
    );
  }

  if (propType === 'cake') {
    return (
      <div
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[104px] h-[82px] z-10 flex flex-col items-center justify-end animate-tda-prop"
        aria-hidden="true"
      >
        <div className="w-3.5 h-3.5 rounded-full bg-[#bf302e] border-2 border-[#251a20] -mb-1 z-10" />
        <div className="w-20 h-7 bg-[#f6ba36] border-[4px] border-[#251a20] -mb-1" />
        <div className="w-24 h-10 bg-[#fff1d6] border-[4px] border-[#251a20] shadow-[0_8px_0_#583f40] flex items-center justify-center">
          <span className="font-sans text-[8px] font-black text-[#bf302e] tracking-wider">INDEX +4%</span>
        </div>
      </div>
    );
  }

  if (propType === 'committee') {
    return (
      <div
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[112px] h-[84px] bg-[#adbbd9] border-[5px] border-[#251a20] shadow-[0_8px_0_#3e2630] z-10 flex flex-col items-center justify-center gap-1 animate-tda-prop"
        aria-hidden="true"
      >
        <span className="font-sans text-[8px] font-black text-[#251a20] tracking-wider">SUBCOMMITTEE #7</span>
        <div className="px-2 py-0.5 bg-[#bf302e] text-white font-sans text-[9px] font-black border-2 border-[#251a20]">
          APPROVED
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute bottom-[9%] left-1/2 -translate-x-1/2 w-[92px] sm:w-[116px] aspect-square bg-[#c33931] border-[8px] border-[#e6bc64] rounded-full shadow-[0_10px_0_#583f40] z-10 animate-tda-prop"
      aria-hidden="true"
    />
  );
}

export function SketchTheater({
  activeSketchId,
  initialTab,
  activeIssueId,
  onClose,
  onSelectSketch,
}: SketchTheaterProps) {
  const [activeTab, setActiveTab] = useState<'theater' | 'article'>(initialTab);
  const [lineIndex, setLineIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [sfxEnabled, setSfxEnabled] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  const script = activeSketchId ? SKETCH_SCRIPTS[activeSketchId] : null;
  const isVideoSketch = Boolean(script?.videoUrl);
  const totalLines = script ? script.lines.length : 0;
  const currentLine = script ? script.lines[lineIndex] ?? script.lines[0] : null;

  const displayIssueId = script ? script.issueId : activeIssueId;
  const relatedSketches = Object.values(SKETCH_SCRIPTS).filter(
    (s) => s.issueId === displayIssueId,
  );

  const stopSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  const speakLine = useCallback(
    (speaker: string, text: string) => {
      if (!voiceEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = speaker === 'MINISTER GRIM' ? 0.85 : 1.12;
      utterance.rate = 1.03;
      window.speechSynthesis.speak(utterance);
    },
    [voiceEnabled],
  );

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, activeSketchId]);

  useEffect(() => {
    if (activeSketchId) {
      setLineIndex(0);
      setIsPlaying(initialTab === 'theater');
    } else {
      stopSpeech();
    }
  }, [activeSketchId, initialTab, stopSpeech]);

  useEffect(() => {
    if (!activeSketchId) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
      stopSpeech();
    };
  }, [activeSketchId, stopSpeech]);

  useEffect(() => {
    if (!activeSketchId || !currentLine || activeTab !== 'theater' || isVideoSketch) return;
    if (sfxEnabled && currentLine.sfxTone) {
      playComicSfx(currentLine.sfxTone);
    }
    if (isPlaying && voiceEnabled) {
      speakLine(currentLine.speaker, currentLine.text);
    } else if (!isPlaying) {
      stopSpeech();
    }
  }, [
    activeSketchId,
    activeTab,
    isVideoSketch,
    isPlaying,
    lineIndex,
    currentLine,
    sfxEnabled,
    voiceEnabled,
    speakLine,
    stopSpeech,
  ]);

  useEffect(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (!activeSketchId || activeTab !== 'theater' || isVideoSketch || !isPlaying || !currentLine) {
      return;
    }

    const delay = Math.max(2500, Math.min(5400, 2600 + currentLine.text.length * 29));
    timerRef.current = window.setTimeout(() => {
      if (lineIndex < totalLines - 1) {
        setLineIndex((prev) => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }, delay);

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [activeSketchId, activeTab, isVideoSketch, isPlaying, lineIndex, totalLines, currentLine]);

  const handleNextLine = useCallback(() => {
    if (!script) return;
    setLineIndex((prev) => (prev < script.lines.length - 1 ? prev + 1 : 0));
  }, [script]);

  const handlePrevLine = useCallback(() => {
    if (!script) return;
    setLineIndex((prev) => (prev > 0 ? prev - 1 : script.lines.length - 1));
  }, [script]);

  const handleTogglePlayback = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handleRestart = useCallback(() => {
    setLineIndex(0);
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    if (!activeSketchId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (activeTab === 'theater' && !isVideoSketch && e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextLine();
      } else if (activeTab === 'theater' && !isVideoSketch && e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevLine();
      } else if (activeTab === 'theater' && !isVideoSketch && e.key === ' ') {
        const target = e.target as HTMLElement | null;
        if (target?.tagName !== 'BUTTON') {
          e.preventDefault();
          handleTogglePlayback();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    activeSketchId,
    activeTab,
    isVideoSketch,
    onClose,
    handleNextLine,
    handlePrevLine,
    handleTogglePlayback,
  ]);

  if (!activeSketchId || !script || !currentLine) return null;

  const progressPercent = (100 * (lineIndex + 1)) / totalLines;
  const grimTalking = currentLine.speaker === 'MINISTER GRIM';
  const beamTalking = currentLine.speaker === 'DIRECTOR BEAM';

  const handleCopyArticle = async () => {
    await navigator.clipboard.writeText(formatArticlePlainText(script));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([formatArticleMarkdown(script)], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${script.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 48)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 bg-[#17121b]/88 z-50 flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="theater-sketch-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-[920px] bg-[#151e32] text-[#fff8e6] border-[5px] border-[#f7d27d] shadow-[12px_12px_0_#05040a] relative max-h-[94dvh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b-2 border-[#f7d27d] px-4 py-3 font-sans text-xs font-black tracking-[0.1em] uppercase">
          <span id="theater-sketch-title" className="truncate">
            {ISSUES[displayIssueId].shortLabel} · {script.title}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sketch"
            className="inline-flex items-center gap-1 bg-[#eeb941] text-[#15121a] border-2 border-[#15121a] px-3 py-1.5 font-sans text-xs font-black uppercase hover:bg-[#fff1d6] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7d27d]"
          >
            <X className="w-3.5 h-3.5 stroke-[2.75]" aria-hidden="true" />
            Close
          </button>
        </div>

        {/* Mode Switcher + Related Episodes */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-2 bg-[#101727] border-b border-[#3a4761]">
          <div className="inline-flex items-center gap-1 bg-[#1d2840] p-1 self-start" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'theater'}
              onClick={() => {
                setActiveTab('theater');
                setIsPlaying(true);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-sans text-[11px] font-black uppercase tracking-wider whitespace-nowrap shrink-0 transition-colors ${
                activeTab === 'theater'
                  ? 'bg-[#f7d27d] text-[#151e32]'
                  : 'text-[#cbd5e1] hover:text-white'
              }`}
            >
              <Play className="w-3 h-3 fill-current" aria-hidden="true" />
              Watch Cartoon
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'article'}
              onClick={() => {
                setActiveTab('article');
                setIsPlaying(false);
                stopSpeech();
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-sans text-[11px] font-black uppercase tracking-wider whitespace-nowrap shrink-0 transition-colors ${
                activeTab === 'article'
                  ? 'bg-[#fff1d6] text-[#251a20]'
                  : 'text-[#cbd5e1] hover:text-white'
              }`}
            >
              <BookOpen className="w-3 h-3" aria-hidden="true" />
              Read Article
            </button>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5" aria-label="Choose episode">
            {relatedSketches.map((item) => {
              const active = item.id === activeSketchId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectSketch(item.id)}
                  className={`px-2.5 py-1 font-sans text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-colors ${
                    active
                      ? 'bg-[#bf302e] text-white'
                      : 'bg-[#1d2840] text-[#cbd5e1] hover:bg-[#2a3958] hover:text-white'
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        {activeTab === 'article' ? (
          <div className="bg-[#fff1d6] text-[#251a20] p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b-2 border-[#251a20]">
              <div className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#bf302e]">
                {script.article.category} <span aria-hidden="true">·</span> {script.article.byline}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyArticle}
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-[#f6ba36] border-2 border-[#251a20] px-3 py-1.5 font-sans text-xs font-black uppercase tracking-wider whitespace-nowrap shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy Article'}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadMarkdown}
                  className="inline-flex items-center gap-1.5 bg-[#f6ba36] hover:bg-[#ffe15f] border-2 border-[#251a20] px-3 py-1.5 font-sans text-xs font-black uppercase tracking-wider whitespace-nowrap shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export .MD
                </button>
                <ShareButton sketchId={script.id} mode="article" variant="modal-article" />
              </div>
            </div>

            {script.imageUrl && (
              <figure className="mb-6">
                <img
                  src={script.imageUrl}
                  alt={script.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[380px] object-cover border-[3px] border-[#251a20] shadow-[4px_5px_0_#24131c]"
                />
                <figcaption className="font-sans text-xs italic text-[#5c4a40] mt-2">
                  {script.article.cartoonCaption}
                </figcaption>
              </figure>
            )}

            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-black leading-[1.02] tracking-[-0.03em] text-[#251a20] m-0 text-balance">
              {script.title}
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#5c4a40] mt-3 mb-5 max-w-2xl">
              {script.article.deck}
            </p>

            <div className="space-y-4 font-serif text-[16px] sm:text-[17px] leading-[1.75] text-[#251a20] max-w-2xl">
              {script.article.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#bf302e]'
                      : ''
                  }
                >
                  {idx === 0 && (
                    <strong className="font-sans text-xs tracking-widest uppercase mr-1.5">
                      {script.article.dateline}
                    </strong>
                  )}
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="my-6 py-4 border-y-2 border-[#251a20] font-serif italic text-xl sm:text-2xl font-bold text-[#253c5b] max-w-2xl">
              {script.article.pullQuote}
            </blockquote>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <span className="font-sans text-xs italic text-[#5c4a40]">
                {script.article.cartoonCaption}
              </span>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('theater');
                  setLineIndex(0);
                  setIsPlaying(true);
                }}
                className="inline-flex items-center gap-2 bg-[#bf302e] text-white hover:bg-[#251a20] border-2 border-[#251a20] px-4 py-2.5 font-sans text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_#24131c] whitespace-nowrap shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                Watch Animated Cartoon
              </button>
            </div>
          </div>
        ) : isVideoSketch && script.videoUrl ? (
          <div>
            <div className="bg-[#1d171a] border-b-4 border-[#f5cf79] aspect-video w-full overflow-hidden">
              <video
                src={script.videoUrl}
                poster={script.imageUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover block"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#151e32]">
              <div className="font-sans text-xs font-black tracking-[0.12em] uppercase text-[#f6cf79] mb-2">
                Cartoon Transcript
              </div>
              <div className="space-y-2 font-serif text-base sm:text-lg text-[#fff8e6]">
                {script.lines.map((line, i) => (
                  <p key={i} className="m-0">
                    <strong className="font-sans text-xs tracking-wider text-[#ffe15f] mr-2">
                      {line.speaker}:
                    </strong>
                    &ldquo;{line.text}&rdquo;
                  </p>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-[#7e765f]/50 flex justify-between items-center flex-wrap gap-3">
                <span className="font-sans text-xs text-[#b6becb]">
                  Switch to &ldquo;Read Article&rdquo; above to copy or export the full satirical feature.
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <ShareButton sketchId={script.id} mode="theater" variant="modal-theater" />
                  <button
                    type="button"
                    onClick={() => setActiveTab('article')}
                    className="inline-flex items-center gap-1.5 bg-[#f1d281] text-[#1d1c29] hover:bg-[#fff1d6] px-3.5 py-2 font-sans text-xs font-black uppercase tracking-wider whitespace-nowrap shrink-0"
                  >
                    <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                    Read Cartoon Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* MAD-Style Animated Stage */}
            <div
              key={`${activeSketchId}-${lineIndex}`}
              className={`h-[min(46vh,410px)] min-h-[260px] relative overflow-hidden flex items-end justify-evenly border-b-4 border-[#f5cf79] ${
                currentLine.shake ? 'animate-tda-shake' : ''
              }`}
              style={{
                background:
                  currentLine.grimMood === 'panicked' || currentLine.beamMood === 'panicked'
                    ? 'radial-gradient(circle at 50% 25%, #f5b79f, #7a3b45 65%, #221f36)'
                    : 'radial-gradient(circle at 50% 20%, #b6cad1, #536982 65%, #222f47)',
              }}
            >
              <div className="absolute top-4 sm:top-5 left-[8%] right-[8%] text-center border-4 border-[#542b24] bg-[#f5d384] text-[#4b2a2f] py-2 px-3 font-sans font-black text-[clamp(11px,2.1vw,18px)] tracking-[0.06em] -rotate-1 z-20 shadow-[3px_3px_0_rgba(36,19,28,0.35)]">
                {script.stageBanner}
              </div>

              {currentLine.sfx && (
                <div
                  className="absolute top-[24%] left-1/2 -translate-x-1/2 z-30 bg-[#ffe15f] text-[#bf302e] border-4 border-[#251a20] px-4 py-1.5 font-sans font-black text-base sm:text-xl tracking-wider uppercase shadow-[4px_4px_0_#24131c] animate-tda-pop pointer-events-none"
                  aria-hidden="true"
                >
                  {currentLine.sfx}
                </div>
              )}

              <StageCharacter role="grim" talking={grimTalking} mood={currentLine.grimMood} />
              <StageCharacter role="beam" talking={beamTalking} mood={currentLine.beamMood} />
              <StageProp propType={script.propType} />
            </div>

            <div className="h-[5px] bg-[#48536a]" aria-hidden="true">
              <div
                className="h-full bg-[#f5c951] transition-[width] duration-200"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="min-h-[118px] text-center px-6 pt-5 pb-3" aria-live="polite">
              <div className="font-sans text-xs font-black tracking-[0.12em] text-[#f6cf79] uppercase">
                {currentLine.speaker}
              </div>
              <p className="font-serif text-[clamp(19px,3vw,29px)] font-bold leading-[1.18] my-2 mx-auto max-w-[740px] text-[#fff8e6]">
                {currentLine.text}
              </p>
            </div>

            <div className="flex justify-between items-center gap-3 px-4 py-3.5 border-t border-[#7e765f] font-sans text-xs flex-wrap">
              <span className="tabular-nums font-bold text-[#e6edf5]">
                Line {lineIndex + 1} of {totalLines}
              </span>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={handlePrevLine}
                  className="inline-flex items-center gap-1 bg-[#28344e] text-[#fff8e6] hover:bg-[#364566] px-3 py-2.5 font-sans text-xs font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7d27d]"
                >
                  <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
                  Prev
                </button>

                <button
                  type="button"
                  onClick={handleTogglePlayback}
                  className="inline-flex items-center gap-1.5 bg-[#f1d281] text-[#1d1c29] hover:bg-[#fff1d6] px-4 py-2.5 font-sans text-xs font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7d27d]"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                      Play
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleNextLine}
                  className="inline-flex items-center gap-1 bg-[#f1d281] text-[#1d1c29] hover:bg-[#fff1d6] px-3.5 py-2.5 font-sans text-xs font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7d27d]"
                >
                  Next line
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-1.5 bg-[#f1d281] text-[#1d1c29] hover:bg-[#fff1d6] px-3.5 py-2.5 font-sans text-xs font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7d27d]"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  Replay
                </button>

                <button
                  type="button"
                  onClick={() => setSfxEnabled((prev) => !prev)}
                  aria-pressed={sfxEnabled}
                  title="Toggle cartoon sound effects"
                  className={`inline-flex items-center gap-1.5 px-3 py-2.5 font-sans text-xs font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7d27d] ${
                    sfxEnabled
                      ? 'bg-[#253c5b] text-[#ffe15f] border border-[#f7d27d]'
                      : 'bg-[#28344e] text-[#cbd5e1] hover:bg-[#364566]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  {sfxEnabled ? 'SFX On' : 'SFX Off'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (voiceEnabled) stopSpeech();
                    setVoiceEnabled((prev) => !prev);
                  }}
                  aria-pressed={voiceEnabled}
                  title="Toggle browser voice synthesis"
                  className={`inline-flex items-center gap-1.5 px-3 py-2.5 font-sans text-xs font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7d27d] ${
                    voiceEnabled
                      ? 'bg-[#bf302e] text-white'
                      : 'bg-[#28344e] text-[#cbd5e1] hover:bg-[#364566]'
                  }`}
                >
                  {voiceEnabled ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
                      Voice On
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3.5 h-3.5" aria-hidden="true" />
                      Voice Off
                    </>
                  )}
                </button>

                <ShareButton sketchId={script.id} mode="theater" variant="modal-theater" />
              </div>
            </div>

            <p className="font-sans text-xs leading-relaxed text-[#b6becb] text-center px-5 pb-4 m-0">
              Switch to &ldquo;Read Article&rdquo; above to copy or export the full satirical dispatch.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
