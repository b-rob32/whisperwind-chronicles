import React, { useState } from 'react';
import { RELICS, WARDROBE_ITEMS } from '../data/wardrobe';
import type { CompanionId, PlayerId, PlayerProfile, ReadingTier } from '../types';
import { CompanionPortrait, HeroPortrait } from './Portraits';

interface WardrobeModalProps {
  profiles: Record<PlayerId, PlayerProfile>;
  initialPlayerId: PlayerId;
  onUpdateProfile: (playerId: PlayerId, patch: Partial<PlayerProfile>) => void;
  onClose: () => void;
}

export const WardrobeModal: React.FC<WardrobeModalProps> = ({
  profiles,
  initialPlayerId,
  onUpdateProfile,
  onClose,
}) => {
  const [selectedId, setSelectedId] = useState<PlayerId>(initialPlayerId);
  const [tab, setTab] = useState<'wardrobe' | 'relics'>('wardrobe');
  const profile = profiles[selectedId];

  const hats = WARDROBE_ITEMS.filter((i) => i.slot === 'hat');
  const compGear = WARDROBE_ITEMS.filter((i) => i.slot === 'companion');
  const allRelics = Object.values(RELICS);

  const handleTierChange = (tier: ReadingTier) => {
    onUpdateProfile(selectedId, { readingTier: tier });
  };

  const handleCompanionChange = (companion: CompanionId) => {
    onUpdateProfile(selectedId, { companion });
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Explorer Wardrobe and Relics">
      <div className="modal-sheet">
        <div className="modal-header">
          <div>
            <p className="eyebrow-label">Explorer’s Trunk</p>
            <h2 className="modal-title">Wardrobe, Reading Tier &amp; Relics</h2>
          </div>
          <button type="button" className="btn-ghost" onClick={onClose} aria-label="Close Wardrobe">
            ✕ Close
          </button>
        </div>

        <div className="sister-tabs">
          {(['mackenzie', 'elizabeth'] as PlayerId[]).map((id) => {
            const p = profiles[id];
            const active = selectedId === id;
            return (
              <button
                key={id}
                type="button"
                className={`sister-tab ${active ? 'is-active' : ''}`}
                style={{ '--tab-accent': p.accentColor } as React.CSSProperties}
                onClick={() => setSelectedId(id)}
              >
                <HeroPortrait profile={p} size={38} />
                <div className="sister-tab-meta">
                  <strong>{p.name}</strong>
                  <span>
                    ★ {p.totalStars} · {p.readingTier === 'grade3' ? 'Grade 3' : 'Grade 5'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="profile-showcase">
          <div className="showcase-portraits">
            <HeroPortrait profile={profile} size={92} />
            <CompanionPortrait
              companion={profile.companion}
              gear={profile.equippedCompanionGear}
              size={72}
            />
          </div>
          <div className="showcase-controls">
            <div className="control-group">
              <span className="control-label">Reading Tier</span>
              <div className="pill-toggle">
                <button
                  type="button"
                  className={profile.readingTier === 'grade3' ? 'is-selected' : ''}
                  onClick={() => handleTierChange('grade3')}
                >
                  Apprentice (Grade 3)
                </button>
                <button
                  type="button"
                  className={profile.readingTier === 'grade5' ? 'is-selected' : ''}
                  onClick={() => handleTierChange('grade5')}
                >
                  Master (Grade 5)
                </button>
              </div>
            </div>

            <div className="control-group">
              <span className="control-label">Favorite Companion</span>
              <div className="pill-toggle">
                <button
                  type="button"
                  className={profile.companion === 'doggy' ? 'is-selected' : ''}
                  onClick={() => handleCompanionChange('doggy')}
                >
                  🐶 Doggy (Sniff Clue)
                </button>
                <button
                  type="button"
                  className={profile.companion === 'slothy' ? 'is-selected' : ''}
                  onClick={() => handleCompanionChange('slothy')}
                >
                  🦥 Slothy (Eliminate 2)
                </button>
              </div>
            </div>

            <div className="showcase-stats">
              <span>★ {profile.totalStars} Stars</span>
              <span>📖 {profile.chaptersMastered} Chapters</span>
              <span>🏺 {profile.unlockedRelics.length}/{allRelics.length} Relics</span>
            </div>
          </div>
        </div>

        <div className="sub-tabs">
          <button
            type="button"
            className={tab === 'wardrobe' ? 'is-active' : ''}
            onClick={() => setTab('wardrobe')}
          >
            Hat &amp; Companion Wardrobe
          </button>
          <button
            type="button"
            className={tab === 'relics' ? 'is-active' : ''}
            onClick={() => setTab('relics')}
          >
            Story Relic Shelf ({profile.unlockedRelics.length}/{allRelics.length})
          </button>
        </div>

        {tab === 'wardrobe' ? (
          <div className="wardrobe-sections">
            <div className="wardrobe-group">
              <h3>Hero Hats</h3>
              <div className="wardrobe-grid">
                <button
                  type="button"
                  className={`wardrobe-card ${profile.equippedHat === null ? 'is-equipped' : ''}`}
                  onClick={() => onUpdateProfile(selectedId, { equippedHat: null })}
                >
                  <span className="wardrobe-icon">🌿</span>
                  <strong>No Hat</strong>
                  <small>Classic explorer look</small>
                </button>
                {hats.map((item) => {
                  const unlocked = profile.totalStars >= item.requiredStars;
                  const equipped = profile.equippedHat === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      disabled={!unlocked}
                      className={`wardrobe-card ${equipped ? 'is-equipped' : ''} ${
                        !unlocked ? 'is-locked' : ''
                      }`}
                      onClick={() => onUpdateProfile(selectedId, { equippedHat: item.id })}
                    >
                      <span className="wardrobe-icon">{unlocked ? item.icon : '🔒'}</span>
                      <strong>{item.name}</strong>
                      <small>{unlocked ? (equipped ? 'Equipped' : 'Tap to wear') : `Unlock at ★ ${item.requiredStars}`}</small>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="wardrobe-group">
              <h3>Companion Gear</h3>
              <div className="wardrobe-grid">
                <button
                  type="button"
                  className={`wardrobe-card ${profile.equippedCompanionGear === null ? 'is-equipped' : ''}`}
                  onClick={() => onUpdateProfile(selectedId, { equippedCompanionGear: null })}
                >
                  <span className="wardrobe-icon">🐾</span>
                  <strong>Natural Look</strong>
                  <small>No accessory</small>
                </button>
                {compGear.map((item) => {
                  const unlocked = profile.totalStars >= item.requiredStars;
                  const equipped = profile.equippedCompanionGear === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      disabled={!unlocked}
                      className={`wardrobe-card ${equipped ? 'is-equipped' : ''} ${
                        !unlocked ? 'is-locked' : ''
                      }`}
                      onClick={() => onUpdateProfile(selectedId, { equippedCompanionGear: item.id })}
                    >
                      <span className="wardrobe-icon">{unlocked ? item.icon : '🔒'}</span>
                      <strong>{item.name}</strong>
                      <small>{unlocked ? (equipped ? 'Equipped' : 'Tap to wear') : `Unlock at ★ ${item.requiredStars}`}</small>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="relic-grid">
            {allRelics.map((relic) => {
              const found = profile.unlockedRelics.includes(relic.id);
              return (
                <div key={relic.id} className={`relic-card ${found ? 'is-found' : 'is-hidden'}`}>
                  <span className="relic-icon">{found ? relic.icon : '❓'}</span>
                  <div>
                    <strong>{found ? relic.name : 'Undiscovered Relic'}</strong>
                    <p>{found ? relic.description : 'Explore different story branches to discover this relic!'}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
