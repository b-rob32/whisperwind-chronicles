import React from 'react';
import { ALL_QUESTS } from '../data/quests';
import type { PlayMode, PlayerId, PlayerProfile, QuestDefinition } from '../types';
import { CompanionPortrait, HeroPortrait } from './Portraits';

interface RealmMapViewProps {
  profiles: Record<PlayerId, PlayerProfile>;
  playMode: PlayMode;
  soloPlayerId: PlayerId;
  onSelectMode: (mode: PlayMode, soloId?: PlayerId) => void;
  onStartQuest: (quest: QuestDefinition) => void;
  onOpenWardrobe: (playerId: PlayerId) => void;
}

export const RealmMapView: React.FC<RealmMapViewProps> = ({
  profiles,
  playMode,
  soloPlayerId,
  onSelectMode,
  onStartQuest,
  onOpenWardrobe,
}) => {
  const mackenzie = profiles.mackenzie;
  const elizabeth = profiles.elizabeth;

  const getQuestProgress = (quest: QuestDefinition) => {
    const activeProfiles =
      playMode === 'coop' ? [mackenzie, elizabeth] : [profiles[soloPlayerId]];
    const bestStars = Math.max(
      ...activeProfiles.map((p) => p.questBestStars[quest.id] ?? 0)
    );
    const endingIds = Object.values(quest.scenes)
      .map((s) => s.ending?.id)
      .filter((id): id is string => Boolean(id));
    const discoveredEndings = endingIds.filter((eid) =>
      activeProfiles.some((p) => p.unlockedEndings.includes(eid))
    ).length;

    return {
      bestStars,
      maxStars: quest.totalChapters * 3,
      discoveredEndings,
    };
  };

  return (
    <div className="realm-shell">
      <header className="realm-header">
        <div className="brand-block">
          <span className="brand-crest" aria-hidden="true">🏮</span>
          <div>
            <h1 className="brand-title">Whisperwind Chronicles</h1>
            <p className="brand-subtitle">
              A Choose-Your-Own-Adventure Reading Quest for Mackenzie &amp; Elizabeth
            </p>
          </div>
        </div>

        <button
          type="button"
          className="btn-trunk"
          onClick={() => onOpenWardrobe(playMode === 'solo' ? soloPlayerId : 'mackenzie')}
        >
          <span>🧳 Explorer’s Trunk</span>
          <small>Wardrobe &amp; Relics</small>
        </button>
      </header>

      <section className="party-bar" aria-label="Choose Adventure Party">
        <div className="mode-switcher" role="tablist" aria-label="Play Mode">
          <button
            type="button"
            role="tab"
            aria-selected={playMode === 'coop'}
            className={`mode-btn ${playMode === 'coop' ? 'is-selected' : ''}`}
            onClick={() => onSelectMode('coop')}
          >
            <strong>Sisters Co-op</strong>
            <span>Alternating turns · Dual powers</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={playMode === 'solo' && soloPlayerId === 'mackenzie'}
            className={`mode-btn ${
              playMode === 'solo' && soloPlayerId === 'mackenzie' ? 'is-selected' : ''
            }`}
            onClick={() => onSelectMode('solo', 'mackenzie')}
          >
            <strong>Mackenzie Solo</strong>
            <span>{mackenzie.readingTier === 'grade3' ? 'Grade 3 Tier' : 'Grade 5 Tier'}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={playMode === 'solo' && soloPlayerId === 'elizabeth'}
            className={`mode-btn ${
              playMode === 'solo' && soloPlayerId === 'elizabeth' ? 'is-selected' : ''
            }`}
            onClick={() => onSelectMode('solo', 'elizabeth')}
          >
            <strong>Elizabeth Solo</strong>
            <span>{elizabeth.readingTier === 'grade5' ? 'Grade 5 Tier' : 'Grade 3 Tier'}</span>
          </button>
        </div>

        <div className="party-roster">
          {(playMode === 'coop' ? [mackenzie, elizabeth] : [profiles[soloPlayerId]]).map(
            (p) => (
              <button
                key={p.id}
                type="button"
                className="roster-chip"
                onClick={() => onOpenWardrobe(p.id)}
                title={`Customize ${p.name}'s tier, companion, or wardrobe`}
              >
                <div className="roster-avatars">
                  <HeroPortrait profile={p} size={46} />
                  <CompanionPortrait
                    companion={p.companion}
                    gear={p.equippedCompanionGear}
                    size={34}
                  />
                </div>
                <div className="roster-info">
                  <strong>{p.name}</strong>
                  <span>
                    {p.readingTier === 'grade3' ? 'Grade 3' : 'Grade 5'} · ★ {p.totalStars}
                  </span>
                </div>
              </button>
            )
          )}
        </div>
      </section>

      <section className="map-stage" aria-label="Interactive Whisperwind Realm Map">
        <img
          src="./art/realm-map.jpg"
          alt="Illustrated watercolor map of the Whisperwind Realm"
          className="map-image"
        />
        <div className="map-scrim" />
        {ALL_QUESTS.map((quest, index) => {
          const prog = getQuestProgress(quest);
          return (
            <button
              key={quest.id}
              type="button"
              className="map-pin"
              style={{
                left: `${quest.mapPosition.x}%`,
                top: `${quest.mapPosition.y}%`,
                '--pin-color': quest.themeColor,
              } as React.CSSProperties}
              onClick={() => onStartQuest(quest)}
            >
              <span className="pin-num">{index + 1}</span>
              <span className="pin-label">
                <strong>{quest.title}</strong>
                <small>
                  {prog.bestStars > 0
                    ? `★ ${prog.bestStars}/${prog.maxStars} · ${prog.discoveredEndings}/${quest.totalEndings} endings`
                    : `${quest.totalChapters} Chapters · ${quest.totalEndings} Endings`}
                </small>
              </span>
            </button>
          );
        })}
      </section>

      <section className="quest-shelf" aria-label="Storybook Quests">
        <div className="shelf-heading">
          <h2>Choose Your Storybook Quest</h2>
          <p>
            {playMode === 'coop'
              ? 'Mackenzie & Elizabeth alternate reading each chapter at their own reading tier and team up with Doggy & Slothy!'
              : `Playing solo as ${profiles[soloPlayerId].name} (${
                  profiles[soloPlayerId].readingTier === 'grade3' ? 'Grade 3' : 'Grade 5'
                } Tier).`}
          </p>
        </div>

        <div className="quest-cards">
          {ALL_QUESTS.map((quest) => {
            const prog = getQuestProgress(quest);
            return (
              <article key={quest.id} className="quest-card">
                <div className="quest-card-art-wrap">
                  <img
                    src={quest.artPath}
                    alt={quest.title}
                    className="quest-card-art"
                    loading="lazy"
                  />
                  <span className="quest-badge">
                    {prog.discoveredEndings}/{quest.totalEndings} Endings
                  </span>
                </div>
                <div className="quest-card-body">
                  <h3>{quest.title}</h3>
                  <p>{quest.subtitle}</p>
                  <div className="quest-card-meta">
                    <span>📖 {quest.totalChapters} Chapters</span>
                    <span>
                      ★ {prog.bestStars}/{prog.maxStars} Best
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn-primary quest-start-btn"
                    onClick={() => onStartQuest(quest)}
                  >
                    {prog.bestStars > 0 ? 'Replay Quest & Find New Path →' : 'Begin Quest →'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
