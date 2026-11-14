/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Masthead } from './components/Masthead';
import { Ticker } from './components/Ticker';
import { CoverFeature } from './components/CoverFeature';
import { LivingStrips } from './components/LivingStrips';
import { SimpleComicStrip } from './components/SimpleComicStrip';
import { DailyLaughter } from './components/DailyLaughter';
import { HoroscopeSection } from './components/HoroscopeSection';
import { Manifesto } from './components/Manifesto';
import { SketchTheater } from './components/SketchTheater';
import { ISSUES, IssueId, SKETCH_SCRIPTS, SketchId } from './data/sketches';

function getInitialRouteState(): {
  issueId: IssueId;
  sketchId: SketchId | null;
  tab: 'theater' | 'article';
} {
  if (typeof window === 'undefined') {
    return { issueId: 'issue-002', sketchId: null, tab: 'theater' };
  }
  const params = new URLSearchParams(window.location.search);
  const sketchParam = params.get('sketch') as SketchId | null;
  const tabParam = params.get('tab');

  if (sketchParam && sketchParam in SKETCH_SCRIPTS) {
    return {
      issueId: SKETCH_SCRIPTS[sketchParam].issueId,
      sketchId: sketchParam,
      tab: tabParam === 'article' ? 'article' : 'theater',
    };
  }

  return { issueId: 'issue-002', sketchId: null, tab: 'theater' };
}

export default function App() {
  const [initial] = useState(getInitialRouteState);
  const [activeIssueId, setActiveIssueId] = useState<IssueId>(initial.issueId);
  const [activeSketchId, setActiveSketchId] = useState<SketchId | null>(initial.sketchId);
  const [modalInitialTab, setModalInitialTab] = useState<'theater' | 'article'>(initial.tab);

  const activeIssue = ISSUES[activeIssueId];

  const handleOpenSketch = (id: SketchId, tab: 'theater' | 'article' = 'theater') => {
    setModalInitialTab(tab);
    setActiveSketchId(id);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('sketch', id);
      url.searchParams.set('tab', tab);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const handleCloseSketch = () => {
    setActiveSketchId(null);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('sketch');
      url.searchParams.delete('tab');
      window.history.replaceState({}, '', url.toString());
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#e6cda5] text-[#251a20]">
      <Masthead issue={activeIssue} onOpenSketch={handleOpenSketch} />
      <Ticker headlines={activeIssue.tickerHeadlines} />

      <main className="flex-1 w-full max-w-[1260px] mx-auto px-3 sm:px-5 pt-5 pb-16">
        <CoverFeature
          issue={activeIssue}
          activeIssueId={activeIssueId}
          isModalOpen={activeSketchId !== null}
          onSelectIssue={setActiveIssueId}
          onOpenSketch={handleOpenSketch}
        />
        <LivingStrips activeIssueId={activeIssueId} onOpenSketch={handleOpenSketch} />
        <SimpleComicStrip />
        <DailyLaughter />
        <HoroscopeSection />
        <Manifesto
          coverSketchId={activeIssue.coverSketchId}
          onOpenSketch={(id) => handleOpenSketch(id, 'theater')}
        />
      </main>

      <footer className="py-6 px-4 text-center font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#493d37]">
        © 2026 The Daily Absurd · Living Satire Edition · Fictional satire, actual nonsense
      </footer>

      <SketchTheater
        activeSketchId={activeSketchId}
        initialTab={modalInitialTab}
        activeIssueId={activeIssueId}
        onClose={handleCloseSketch}
        onSelectSketch={(id) => handleOpenSketch(id, modalInitialTab)}
      />
    </div>
  );
}
