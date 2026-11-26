import { describe, expect, it } from 'vitest';
import { ALL_QUESTS } from '../data/quests';
import { RELICS } from '../data/wardrobe';
import {
  advanceToScene,
  computeChapterStars,
  createQuestSession,
  getShuffledOptions,
  parseParagraphSegments,
  stripGlossaryMarkup,
  submitGateAnswer,
  useDoggyPower,
  useSlothyPower,
} from './questEngine';

describe('Quest Data Integrity', () => {
  it('validates every quest scene, branch link, relic, and evidence snippet', () => {
    for (const quest of ALL_QUESTS) {
      expect(quest.scenes[quest.startSceneId]).toBeDefined();

      for (const scene of Object.values(quest.scenes)) {
        if (scene.nextSceneId) {
          expect(quest.scenes[scene.nextSceneId]).toBeDefined();
        }
        if (scene.choices) {
          expect(scene.choices.length).toBeGreaterThanOrEqual(2);
          for (const choice of scene.choices) {
            expect(quest.scenes[choice.nextSceneId]).toBeDefined();
          }
        }
        if (scene.ending) {
          expect(RELICS[scene.ending.relicId]).toBeDefined();
        }

        for (const tierKey of ['grade3', 'grade5'] as const) {
          const tier = scene.tiers[tierKey];
          expect(tier.paragraphs.length).toBeGreaterThanOrEqual(2);
          expect(tier.gate.options.length).toBe(4);
          expect(tier.gate.correctIndex).toBeGreaterThanOrEqual(0);
          expect(tier.gate.correctIndex).toBeLessThan(tier.gate.options.length);
          expect(tier.gate.evidenceSnippet.length).toBeGreaterThan(5);
        }
      }
    }
  });
});

describe('Quest Engine Mechanics', () => {
  it('computes strict mastery gate stars accurately', () => {
    expect(computeChapterStars(0)).toBe(3);
    expect(computeChapterStars(1)).toBe(2);
    expect(computeChapterStars(2)).toBe(1);
    expect(computeChapterStars(5)).toBe(1);
  });

  it('alternates activeReader between Mackenzie and Elizabeth in Co-op mode', () => {
    const quest = ALL_QUESTS[0];
    let session = createQuestSession(quest, 'coop', 'mackenzie', {
      mackenzie: 'doggy',
      elizabeth: 'slothy',
    });
    expect(session.activeReader).toBe('mackenzie');

    session = advanceToScene(session, 'lw-2');
    expect(session.activeReader).toBe('elizabeth');

    session = advanceToScene(session, 'lw-3-river');
    expect(session.activeReader).toBe('mackenzie');
  });

  it('enforces Mastery Gate progression and awards stars based on attempts', () => {
    const quest = ALL_QUESTS[0];
    const scene = quest.scenes[quest.startSceneId];
    let session = createQuestSession(quest, 'solo', 'elizabeth', {
      mackenzie: 'doggy',
      elizabeth: 'slothy',
    });

    const wrong = submitGateAnswer(session, scene, 2, 0);
    expect(wrong.isCorrect).toBe(false);
    expect(wrong.session.gatePassed).toBe(false);
    expect(wrong.session.wrongAttemptsOnCurrent).toBe(1);

    session = wrong.session;
    const right = submitGateAnswer(session, scene, 0, 0);
    expect(right.isCorrect).toBe(true);
    expect(right.earnedStars).toBe(2);
    expect(right.session.gatePassed).toBe(true);
  });

  it('activates Doggy clue highlight and Slothy option elimination powers', () => {
    const quest = ALL_QUESTS[0];
    let session = createQuestSession(quest, 'coop', 'mackenzie', {
      mackenzie: 'doggy',
      elizabeth: 'slothy',
    });

    session = useDoggyPower(session);
    expect(session.clueHighlighted).toBe(true);
    expect(session.abilityCharges.doggy).toBe(1);

    session = useSlothyPower(session, 4, 0);
    expect(session.eliminatedOptions.length).toBe(2);
    expect(session.eliminatedOptions).not.toContain(0);
    expect(session.abilityCharges.slothy).toBe(1);
  });

  it('parses glossary tokens and highlights evidence snippets cleanly', () => {
    const text = 'The lantern looked [[murky|dark and cloudy]] yet the glass is not broken.';
    expect(stripGlossaryMarkup(text)).toBe('The lantern looked murky yet the glass is not broken.');

    const segments = parseParagraphSegments(text, 'the glass is not broken', true);
    expect(segments.some((s) => s.type === 'glossary' && s.text === 'murky')).toBe(true);
    expect(segments.some((s) => s.highlighted && s.text.includes('the glass is not broken'))).toBe(true);
  });

  it('shuffles options deterministically without losing any option', () => {
    const opts = ['Alpha', 'Beta', 'Gamma', 'Delta'];
    const s1 = getShuffledOptions(opts, 'lw-1-grade3');
    const s2 = getShuffledOptions(opts, 'lw-1-grade3');
    expect(s1).toEqual(s2);
    expect(s1.map((o) => o.text).sort()).toEqual([...opts].sort());
  });
});
