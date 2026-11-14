import {
  Check,
  Copy,
  Link2,
  Mail,
  MessageCircle,
  Send,
  Share2,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SKETCH_SCRIPTS, SketchId } from '../data/sketches';

export type ShareButtonVariant =
  | 'dark-bar'
  | 'cover-overlay'
  | 'blue-card'
  | 'gold-card'
  | 'strip-link'
  | 'modal-article'
  | 'modal-theater';

interface ShareButtonProps {
  sketchId: SketchId;
  mode?: 'theater' | 'article';
  variant?: ShareButtonVariant;
  label?: string;
}

function buildShareUrl(sketchId: SketchId, mode: 'theater' | 'article'): string {
  if (typeof window === 'undefined') {
    return `?sketch=${sketchId}&tab=${mode}`;
  }
  const url = new URL(window.location.href);
  url.searchParams.set('sketch', sketchId);
  url.searchParams.set('tab', mode);
  return url.toString();
}

function buildPrefilledMessage(
  sketchId: SketchId,
  mode: 'theater' | 'article',
  shareUrl: string,
): string {
  const script = SKETCH_SCRIPTS[sketchId];
  if (mode === 'article') {
    return `"${script.title}" — ${script.article.deck}\n\nRead in The Daily Absurd: ${shareUrl}`;
  }
  return `Watch "${script.title}" (${script.article.pullQuote}) — The Daily Absurd: ${shareUrl}`;
}

export function ShareButton({
  sketchId,
  mode = 'theater',
  variant = 'strip-link',
  label = 'Share',
}: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [message, setMessage] = useState('');
  const [copiedState, setCopiedState] = useState<'link' | 'message' | null>(null);

  const script = SKETCH_SCRIPTS[sketchId];

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = buildShareUrl(sketchId, mode);
    setShareUrl(url);
    setMessage(buildPrefilledMessage(sketchId, mode, url));
    setCopiedState(null);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopImmediatePropagation();
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [open]);

  const handleCopy = async (kind: 'link' | 'message') => {
    const value = kind === 'link' ? shareUrl : message;
    await navigator.clipboard.writeText(value);
    setCopiedState(kind);
    window.setTimeout(() => setCopiedState(null), 2000);
  };

  const handleNativeShare = async () => {
    if (typeof navigator === 'undefined' || !('share' in navigator)) return;
    try {
      await navigator.share({
        title: `${script.title} — The Daily Absurd`,
        text: message.replace(shareUrl, '').trim(),
        url: shareUrl,
      });
    } catch {
      // User dismissed native share sheet
    }
  };

  const buttonClasses: Record<ShareButtonVariant, string> = {
    'dark-bar':
      'inline-flex items-center justify-center gap-1.5 border-2 border-[#f6e7cd]/70 bg-[#36282f] text-[#fff1d6] hover:bg-[#493740] px-3.5 py-2.5 font-sans text-xs font-black uppercase tracking-[0.06em] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe15f]',
    'cover-overlay':
      'inline-flex items-center justify-center gap-1.5 border-2 border-[#f6e7cd] bg-[#251a20] text-[#fff1d6] hover:bg-[#3e2630] px-3 py-2.5 font-sans text-xs font-black uppercase tracking-[0.06em] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe15f]',
    'blue-card':
      'inline-flex items-center gap-1 border-0 border-b-2 border-[#f5d581]/40 bg-transparent py-1 text-[#cbd5e1] hover:text-white font-sans text-xs font-black uppercase tracking-[0.08em] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe15f]',
    'gold-card':
      'inline-flex items-center gap-1 border-0 border-b-2 border-[#251a20]/35 bg-transparent py-1 text-[#493d37] hover:text-[#8f1f1d] font-sans text-xs font-black uppercase tracking-[0.08em] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20]',
    'strip-link':
      'inline-flex items-center gap-1 self-start bg-transparent border-0 border-b-2 border-[#251a20]/30 py-1 font-sans text-xs font-black text-[#5c4a40] hover:text-[#251a20] hover:border-[#251a20] uppercase tracking-[0.06em] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#251a20]',
    'modal-article':
      'inline-flex items-center gap-1.5 bg-[#253c5b] text-[#fff1d6] hover:bg-[#bf302e] border-2 border-[#251a20] px-3 py-1.5 font-sans text-xs font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0',
    'modal-theater':
      'inline-flex items-center gap-1.5 bg-[#28344e] text-[#ffe15f] hover:bg-[#364566] border border-[#f7d27d]/60 px-3 py-2 font-sans text-xs font-black uppercase tracking-wider transition-colors whitespace-nowrap shrink-0',
  };

  const encodedTextOnly = encodeURIComponent(message.replace(shareUrl, '').trim());
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedFull = encodeURIComponent(message);
  const encodedSubject = encodeURIComponent(`${script.title} — The Daily Absurd`);

  const canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        aria-label={`Share ${script.title}`}
        className={buttonClasses[variant]}
      >
        <Share2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        {label}
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[70] bg-[#17121b]/80 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`share-title-${sketchId}`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setOpen(false);
              }
            }}
          >
            <div className="w-full max-w-[540px] bg-[#fff1d6] text-[#251a20] border-[4px] border-[#251a20] shadow-[10px_10px_0_#24131c] overflow-hidden">
              {/* Top Press Bar */}
              <div className="bg-[#253c5b] text-[#fff8e6] border-b-[3px] border-[#251a20] px-4 py-3 flex items-center justify-between gap-3">
                <span className="font-sans text-[11px] font-black uppercase tracking-[0.14em] text-[#ffe15f]">
                  Press Wire · Share {mode === 'article' ? 'Article' : 'Cartoon'}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close share dialog"
                  className="inline-flex items-center gap-1 bg-[#f6ba36] text-[#251a20] border-2 border-[#251a20] px-2.5 py-1 font-sans text-[11px] font-black uppercase hover:bg-[#fff1d6] transition-colors"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                  Close
                </button>
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <div className="font-sans text-[10px] font-black uppercase tracking-[0.14em] text-[#bf302e]">
                    {script.article.category}
                  </div>
                  <h3
                    id={`share-title-${sketchId}`}
                    className="font-serif text-xl sm:text-2xl font-black leading-tight tracking-[-0.025em] text-[#251a20] mt-0.5"
                  >
                    {script.title}
                  </h3>
                </div>

                {/* Shareable Direct Link */}
                <div>
                  <label
                    htmlFor={`share-url-${sketchId}`}
                    className="block font-sans text-[10px] font-black uppercase tracking-[0.12em] text-[#5c4a40] mb-1.5"
                  >
                    Direct Link to This {mode === 'article' ? 'Article' : 'Sketch'}
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-1 flex items-center gap-2 bg-white border-2 border-[#251a20] px-2.5 py-2 min-w-0">
                      <Link2 className="w-3.5 h-3.5 text-[#bf302e] shrink-0" aria-hidden="true" />
                      <input
                        id={`share-url-${sketchId}`}
                        type="text"
                        readOnly
                        value={shareUrl}
                        onFocus={(e) => e.currentTarget.select()}
                        className="w-full bg-transparent font-sans text-xs text-[#251a20] outline-none truncate"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('link')}
                      className="inline-flex items-center gap-1.5 bg-[#f6ba36] hover:bg-[#ffe15f] border-2 border-[#251a20] px-3 py-2 font-sans text-xs font-black uppercase tracking-wider shadow-[2px_2px_0_#24131c] whitespace-nowrap shrink-0"
                    >
                      {copiedState === 'link' ? (
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                      {copiedState === 'link' ? 'Copied!' : 'Copy Link'}
                    </button>
                  </div>
                </div>

                {/* Pre-filled Message */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <label
                      htmlFor={`share-msg-${sketchId}`}
                      className="font-sans text-[10px] font-black uppercase tracking-[0.12em] text-[#5c4a40]"
                    >
                      Pre-Filled Dispatch Message
                    </label>
                    <button
                      type="button"
                      onClick={() => handleCopy('message')}
                      className="inline-flex items-center gap-1 bg-white hover:bg-[#f6ba36] border-2 border-[#251a20] px-2.5 py-1 font-sans text-[10px] font-black uppercase tracking-wider"
                    >
                      {copiedState === 'message' ? (
                        <Check className="w-3 h-3" aria-hidden="true" />
                      ) : (
                        <Copy className="w-3 h-3" aria-hidden="true" />
                      )}
                      {copiedState === 'message' ? 'Copied Message!' : 'Copy Message'}
                    </button>
                  </div>
                  <textarea
                    id={`share-msg-${sketchId}`}
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border-2 border-[#251a20] p-2.5 font-sans text-xs leading-relaxed text-[#251a20] focus:outline-2 focus:outline-[#253c5b]"
                  />
                </div>

                {/* Social Channels */}
                <div className="pt-2 border-t-2 border-[#251a20]/20">
                  <div className="font-sans text-[10px] font-black uppercase tracking-[0.12em] text-[#5c4a40] mb-2">
                    Send Via Social Wire
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodedTextOnly}&url=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#251a20] text-[#fff1d6] hover:bg-[#bf302e] border-2 border-[#251a20] px-3 py-2 font-sans text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0_#24131c] transition-colors whitespace-nowrap"
                    >
                      <Send className="w-3 h-3" aria-hidden="true" />
                      X / Twitter
                    </a>
                    <a
                      href={`https://bsky.app/intent/compose?text=${encodedFull}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#253c5b] text-[#fff1d6] hover:bg-[#bf302e] border-2 border-[#251a20] px-3 py-2 font-sans text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0_#24131c] transition-colors whitespace-nowrap"
                    >
                      <Send className="w-3 h-3" aria-hidden="true" />
                      Bluesky
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodedFull}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white text-[#251a20] hover:bg-[#f6ba36] border-2 border-[#251a20] px-3 py-2 font-sans text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0_#24131c] transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-3 h-3" aria-hidden="true" />
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:?subject=${encodedSubject}&body=${encodedFull}`}
                      className="inline-flex items-center gap-1.5 bg-white text-[#251a20] hover:bg-[#f6ba36] border-2 border-[#251a20] px-3 py-2 font-sans text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0_#24131c] transition-colors whitespace-nowrap"
                    >
                      <Mail className="w-3 h-3" aria-hidden="true" />
                      Email
                    </a>
                    {canNativeShare && (
                      <button
                        type="button"
                        onClick={handleNativeShare}
                        className="inline-flex items-center gap-1.5 bg-[#f6ba36] text-[#251a20] hover:bg-[#ffe15f] border-2 border-[#251a20] px-3 py-2 font-sans text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0_#24131c] transition-colors whitespace-nowrap"
                      >
                        <Share2 className="w-3 h-3" aria-hidden="true" />
                        Device Share
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
