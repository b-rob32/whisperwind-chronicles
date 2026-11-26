import React, { useMemo, useState } from 'react';
import { RELICS } from '../data/wardrobe';
import {
  computeChapterStars,
  getShuffledOptions,
  parseParagraphSegments,
} from '../engine/questEngine';
import type {
  ActiveQuestSession,
  CompanionId,
  PlayerId,
  PlayerProfile,
  QuestDefinition,
  ReadingSettings,
} from '../types';
import { CompanionPortrait, HeroPortrait } from './Portraits';

interface StoryReaderViewProps {
  quest: QuestDefinition;
  session: ActiveQuestSession;
  profiles: Record<PlayerId, PlayerProfile>;
  settings: ReadingSettings;
  onUpdateSettings: (patch: Partial<ReadingSettings>) => void;
  onSubmitAnswer: (originalOptionIndex: number) => void;
  onUseCompanionPower: (companion: CompanionId) => void;
  onAdvanceScene: (nextSceneId: string) => void;
  onExitToMap: () => void;
  onReplayQuest: () => void;
  onOpenWardrobe: (playerId: PlayerId) => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export const StoryReaderView: React.FC<StoryReaderViewProps> = ({
  quest,
  session,
  profiles,
  settings,
  onUpdateSettings,
  onSubmitAnswer,
  onUseCompanionPower,
  onAdvanceScene,
  onExitToMap,
  onReplayQuest,
  onOpenWardrobe,
}) => {
  const [activeGlossary, setActiveGlossary] = useState<{ word: string; definition: string } | null>(
    null
  );
  const [showFinale, setShowFinale] = useState(false);

  const scene = quest.scenes[session.currentSceneId];
  const readerProfile = profiles[session.activeReader];
  const tier = readerProfile.readingTier;
  const tierContent = scene.tiers[tier];
  const gate = tierContent.gate;

  const shuffledOptions = useMemo(
    () => getShuffledOptions(gate.options, `${quest.id}-${scene.id}-${tier}`),
    [gate.options, quest.id, scene.id, tier]
  );

  const potentialStars = session.gatePassed
    ? session.sceneStars[scene.id] ?? 3
    : computeChapterStars(session.wrongAttemptsOnCurrent);

  const totalRunStars = Object.values(session.sceneStars).reduce((a, b) => a + b, 0);
  const maxRunStars = quest.totalChapters * 3;
  const perfectCount = Object.values(session.sceneStars).filter((s) => s === 3).length;

  const cycleFontSize = () => {
    const order: ReadingSettings['fontSize'][] = ['cozy', 'large', 'xlarge'];
    const next = order[(order.indexOf(settings.fontSize) + 1) % order.length];
    onUpdateSettings({ fontSize: next });
  };

  const toggleFontStyle = () => {
    onUpdateSettings({ fontStyle: settings.fontStyle === 'serif' ? 'sans' : 'serif' });
  };

  const handleAdvance = (nextId: string) => {
    setActiveGlossary(null);
    onAdvanceScene(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Finale Scroll when quest ending is completed and player clicks Finish
  if (showFinale && scene.ending) {
    const relic = RELICS[scene.ending.relicId];
    return (
      <div className="reader-shell">
        <div className="finale-scroll">
          <div className="finale-banner-wrap">
            <img src={quest.artPath} alt={quest.title} className="finale-banner-img" />
            <div className="finale-badge">{scene.ending.badge}</div>
          </div>

          <div className="finale-body">
            <p className="eyebrow-label">Quest Complete!</p>
            <h1 className="finale-title">{scene.ending.title}</h1>
            <p className="finale-summary">{scene.ending.summary[tier]}</p>

            <div className="finale-stats">
              <div className="finale-stat">
                <strong>★ {totalRunStars} / {maxRunStars}</strong>
                <span>Stars Earned</span>
              </div>
              <div className="finale-stat">
                <strong>{perfectCount} / {quest.totalChapters}</strong>
                <span>Perfect 3-Star Gates</span>
              </div>
              <div className="finale-stat">
                <strong>{session.mode === 'coop' ? 'Team Effort' : readerProfile.name}</strong>
                <span>
                  {session.mode === 'coop' ? 'Credited to Both Sisters!' : 'Saved to Profile'}
                </span>
              </div>
            </div>

            {relic && (
              <div className="relic-reward-card">
                <span className="relic-reward-icon">{relic.icon}</span>
                <div>
                  <span className="eyebrow-label">Story Relic Unlocked</span>
                  <h3>{relic.name}</h3>
                  <p>{relic.description}</p>
                </div>
              </div>
            )}

            <div className="finale-actions">
              <button type="button" className="btn-primary" onClick={onExitToMap}>
                Return to Whisperwind Map
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setShowFinale(false);
                  onReplayQuest();
                }}
              >
                Replay for Another Ending
              </button>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => onOpenWardrobe(session.activeReader)}
              >
                🧳 Open Wardrobe &amp; Relics
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const showDoggyPower =
    session.mode === 'coop' || readerProfile.companion === 'doggy';
  const showSlothyPower =
    session.mode === 'coop' || readerProfile.companion === 'slothy';

  return (
    <div className={`reader-shell font-size-${settings.fontSize} font-style-${settings.fontStyle}`}>
      <header className="reader-topbar">
        <button type="button" className="btn-ghost" onClick={onExitToMap}>
          ← Realm Map
        </button>

        <div className="chapter-progress" aria-label={`Chapter ${scene.chapterNumber} of ${quest.totalChapters}`}>
          {Array.from({ length: quest.totalChapters }, (_, idx) => {
            const num = idx + 1;
            const state =
              num < scene.chapterNumber
                ? 'is-done'
                : num === scene.chapterNumber
                ? 'is-current'
                : '';
            return <span key={num} className={`progress-pip ${state}`} />;
          })}
          <span className="progress-text">
            Ch. {scene.chapterNumber}/{quest.totalChapters}
          </span>
        </div>

        <div className="comfort-controls">
          <button type="button" className="comfort-btn" onClick={cycleFontSize} title="Adjust text size">
            A±
          </button>
          <button type="button" className="comfort-btn" onClick={toggleFontStyle} title="Toggle serif or sans font">
            {settings.fontStyle === 'serif' ? 'Serif' : 'Sans'}
          </button>
          <button
            type="button"
            className="comfort-btn"
            onClick={() => onUpdateSettings({ soundEnabled: !settings.soundEnabled })}
            title="Toggle sound effects"
          >
            {settings.soundEnabled ? '🔊' : '🔇'}
          </button>
        </div>
      </header>

      <div className="scene-hero-banner">
        <img src={quest.artPath} alt={quest.title} className="scene-hero-img" />
        <div className="scene-hero-overlay">
          <span className="location-pill">📍 {scene.locationTag}</span>
          <h1 className="scene-title">{scene.title}</h1>
        </div>
      </div>

      {/* Reader's Turn Banner */}
      <div
        className="turn-banner"
        style={{ '--turn-accent': readerProfile.accentColor } as React.CSSProperties}
      >
        <div className="turn-portraits">
          <HeroPortrait profile={readerProfile} size={56} />
          <CompanionPortrait
            companion={readerProfile.companion}
            gear={readerProfile.equippedCompanionGear}
            size={44}
          />
        </div>
        <div className="turn-copy">
          <span className="turn-eyebrow">
            {session.mode === 'coop' ? "Reader's Turn — Read Aloud & Lead!" : 'Active Adventurer'}
          </span>
          <strong>
            {readerProfile.name} ·{' '}
            <span className="tier-tag">
              {tier === 'grade3' ? 'Apprentice (Grade 3)' : 'Master (Grade 5)'}
            </span>
          </strong>
        </div>
        <div className="turn-stars" title="Stars earned so far on this quest">
          <span>Quest Stars</span>
          <strong>★ {totalRunStars}</strong>
        </div>
      </div>

      {/* Storybook Page */}
      <article className="story-page">
        <p className="glossary-hint-line">
          💡 Tip: Tap any <span className="glossary-sample">underlined word</span> to peek at its meaning.
        </p>

        <div className="story-paragraphs">
          {tierContent.paragraphs.map((para, pIdx) => {
            const segments = parseParagraphSegments(
              para,
              gate.evidenceSnippet,
              session.clueHighlighted
            );
            return (
              <p key={pIdx} className="story-paragraph">
                {segments.map((seg, sIdx) => {
                  if (seg.type === 'glossary' && seg.definition) {
                    return (
                      <button
                        key={sIdx}
                        type="button"
                        className={`glossary-word ${seg.highlighted ? 'is-evidence' : ''}`}
                        onClick={() =>
                          setActiveGlossary({ word: seg.text, definition: seg.definition! })
                        }
                      >
                        {seg.text}
                      </button>
                    );
                  }
                  return (
                    <span key={sIdx} className={seg.highlighted ? 'evidence-highlight' : undefined}>
                      {seg.text}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>

        {activeGlossary && (
          <div className="glossary-card" role="status">
            <div>
              <strong>{activeGlossary.word}</strong>: {activeGlossary.definition}
            </div>
            <button
              type="button"
              className="btn-ghost-sm"
              onClick={() => setActiveGlossary(null)}
              aria-label="Dismiss definition"
            >
              ✕
            </button>
          </div>
        )}
      </article>

      {/* Dual-Role Companion Power Bar */}
      {!session.gatePassed && (
        <section className="companion-bar" aria-label="Companion Powers">
          {showDoggyPower && (
            <button
              type="button"
              className="power-btn power-doggy"
              disabled={session.abilityCharges.doggy <= 0 || session.clueHighlighted}
              onClick={() => onUseCompanionPower('doggy')}
            >
              <CompanionPortrait
                companion="doggy"
                gear={profiles.mackenzie.equippedCompanionGear}
                size={38}
              />
              <div className="power-text">
                <strong>Doggy: Sniff a Clue</strong>
                <span>
                  {session.clueHighlighted
                    ? 'Clue highlighted in gold above!'
                    : `Highlights the key sentence (${session.abilityCharges.doggy} left)`}
                </span>
              </div>
            </button>
          )}

          {showSlothyPower && (
            <button
              type="button"
              className="power-btn power-slothy"
              disabled={session.abilityCharges.slothy <= 0 || session.eliminatedOptions.length > 0}
              onClick={() => onUseCompanionPower('slothy')}
            >
              <CompanionPortrait
                companion="slothy"
                gear={profiles.elizabeth.equippedCompanionGear}
                size={38}
              />
              <div className="power-text">
                <strong>Slothy: Slow &amp; Steady</strong>
                <span>
                  {session.eliminatedOptions.length > 0
                    ? '2 wrong choices cleared below!'
                    : `Crosses out 2 wrong choices (${session.abilityCharges.slothy} left)`}
                </span>
              </div>
            </button>
          )}
        </section>
      )}

      {/* Strict Mastery Gate */}
      <section className={`mastery-gate ${session.gatePassed ? 'is-mastered' : ''}`}>
        <div className="gate-header">
          <div>
            <span className="eyebrow-label">
              {session.gatePassed ? 'Mastery Gate Unlocked!' : 'Strict Mastery Gate'}
            </span>
            <h2 className="gate-question">{gate.question}</h2>
          </div>
          <div className="star-meter" aria-label={`Chapter rating: ${potentialStars} out of 3 stars`}>
            {[1, 2, 3].map((n) => (
              <span key={n} className={`star-icon ${n <= potentialStars ? 'is-lit' : ''}`}>
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="gate-options">
          {shuffledOptions.map((opt, idx) => {
            const isEliminated = session.eliminatedOptions.includes(opt.originalIndex);
            const isWrongTried = session.triedWrongIndices.includes(opt.originalIndex);
            const isCorrectReveal = session.gatePassed && opt.originalIndex === gate.correctIndex;

            return (
              <button
                key={opt.originalIndex}
                type="button"
                disabled={session.gatePassed || isEliminated || isWrongTried}
                className={`gate-option ${isCorrectReveal ? 'is-correct' : ''} ${
                  isWrongTried ? 'is-wrong' : ''
                } ${isEliminated ? 'is-eliminated' : ''}`}
                onClick={() => onSubmitAnswer(opt.originalIndex)}
              >
                <span className="option-letter">{OPTION_LETTERS[idx]}</span>
                <span className="option-label">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {!session.gatePassed && session.wrongAttemptsOnCurrent > 0 && (
          <div className="gate-feedback is-nudge" role="alert">
            <strong>Look Closer!</strong> {gate.nudge}
          </div>
        )}

        {session.gatePassed && (
          <div className="gate-feedback is-success" role="status">
            <strong>★ {potentialStars}/3 Stars Earned!</strong> {gate.insight}
          </div>
        )}
      </section>

      {/* Post-Gate Branching Choices or Next Chapter */}
      {session.gatePassed && (
        <section className="next-step-panel">
          {scene.choices && scene.choices.length > 0 ? (
            <div className="branch-panel">
              <p className="eyebrow-label">Crossroads — Choose Your Path!</p>
              <h3>Where will your adventure go next?</h3>
              <div className="branch-cards">
                {scene.choices.map((choice) => (
                  <button
                    key={choice.id}
                    type="button"
                    className="branch-card"
                    onClick={() => handleAdvance(choice.nextSceneId)}
                  >
                    <strong>{choice.label} →</strong>
                    <span>{choice.description}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : scene.nextSceneId ? (
            <button
              type="button"
              className="btn-primary continue-btn"
              onClick={() => handleAdvance(scene.nextSceneId!)}
            >
              {session.mode === 'coop'
                ? `Pass to ${
                    session.activeReader === 'mackenzie' ? 'Elizabeth' : 'Mackenzie'
                  } for Chapter ${scene.chapterNumber + 1} →`
                : `Continue to Chapter ${scene.chapterNumber + 1} →`}
            </button>
          ) : scene.ending ? (
            <button
              type="button"
              className="btn-primary continue-btn"
              onClick={() => setShowFinale(true)}
            >
              Open Quest Finale &amp; Claim Relic ✨
            </button>
          ) : null}
        </section>
      )}
    </div>
  );
};
