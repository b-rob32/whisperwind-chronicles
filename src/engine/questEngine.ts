import type {
  ActiveQuestSession,
  CompanionId,
  PlayMode,
  PlayerId,
  QuestDefinition,
  StoryScene,
} from '../types';

export interface ShuffledOption {
  text: string;
  originalIndex: number;
}

export interface TextSegment {
  type: 'text' | 'glossary';
  text: string;
  definition?: string;
  highlighted?: boolean;
}

/**
 * Deterministically shuffles options for a given scene + tier so the correct answer
 * is well-distributed across positions A/B/C/D rather than always first.
 */
export function getShuffledOptions(
  options: string[],
  seedKey: string
): ShuffledOption[] {
  const items: ShuffledOption[] = options.map((text, originalIndex) => ({
    text,
    originalIndex,
  }));

  let hash = 2166136261;
  for (let i = 0; i < seedKey.length; i++) {
    hash ^= seedKey.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  for (let i = items.length - 1; i > 0; i--) {
    hash ^= hash << 13;
    hash ^= hash >>> 17;
    hash ^= hash << 5;
    const j = Math.abs(hash) % (i + 1);
    const tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;
  }

  return items;
}

/**
 * Calculates strict Mastery Gate star rating for a chapter:
 * 0 wrong attempts = 3 stars, 1 wrong = 2 stars, 2+ wrong = 1 star.
 */
export function computeChapterStars(wrongAttempts: number): number {
  if (wrongAttempts <= 0) return 3;
  if (wrongAttempts === 1) return 2;
  return 1;
}

export function createQuestSession(
  quest: QuestDefinition,
  mode: PlayMode,
  soloPlayerId: PlayerId,
  companions: Record<PlayerId, CompanionId>,
  startingReader: PlayerId = 'mackenzie'
): ActiveQuestSession {
  const firstReader: PlayerId = mode === 'solo' ? soloPlayerId : startingReader;
  return {
    questId: quest.id,
    mode,
    soloPlayerId,
    companions,
    currentSceneId: quest.startSceneId,
    activeReader: firstReader,
    visitedScenes: [quest.startSceneId],
    wrongAttemptsOnCurrent: 0,
    triedWrongIndices: [],
    gatePassed: false,
    sceneStars: {},
    abilityCharges: {
      doggy: 2,
      slothy: 2,
    },
    clueHighlighted: false,
    eliminatedOptions: [],
    completedEndingId: null,
  };
}

export function submitGateAnswer(
  session: ActiveQuestSession,
  scene: StoryScene,
  chosenOriginalIndex: number,
  correctIndex: number
): { session: ActiveQuestSession; isCorrect: boolean; earnedStars: number } {
  if (session.gatePassed) {
    return {
      session,
      isCorrect: true,
      earnedStars: session.sceneStars[scene.id] ?? 3,
    };
  }

  if (chosenOriginalIndex === correctIndex) {
    const earnedStars = computeChapterStars(session.wrongAttemptsOnCurrent);
    return {
      isCorrect: true,
      earnedStars,
      session: {
        ...session,
        gatePassed: true,
        sceneStars: {
          ...session.sceneStars,
          [scene.id]: earnedStars,
        },
        completedEndingId: scene.ending ? scene.ending.id : session.completedEndingId,
      },
    };
  }

  const alreadyTried = session.triedWrongIndices.includes(chosenOriginalIndex);
  return {
    isCorrect: false,
    earnedStars: 0,
    session: {
      ...session,
      wrongAttemptsOnCurrent: alreadyTried
        ? session.wrongAttemptsOnCurrent
        : session.wrongAttemptsOnCurrent + 1,
      triedWrongIndices: alreadyTried
        ? session.triedWrongIndices
        : [...session.triedWrongIndices, chosenOriginalIndex],
    },
  };
}

export function advanceToScene(
  session: ActiveQuestSession,
  nextSceneId: string
): ActiveQuestSession {
  const nextReader: PlayerId =
    session.mode === 'coop'
      ? session.activeReader === 'mackenzie'
        ? 'elizabeth'
        : 'mackenzie'
      : session.soloPlayerId;

  return {
    ...session,
    currentSceneId: nextSceneId,
    activeReader: nextReader,
    visitedScenes: [...session.visitedScenes, nextSceneId],
    wrongAttemptsOnCurrent: 0,
    triedWrongIndices: [],
    gatePassed: false,
    clueHighlighted: false,
    eliminatedOptions: [],
  };
}

/**
 * Doggy's companion power: highlights the exact evidence snippet in the story passage.
 */
export function useDoggyPower(session: ActiveQuestSession): ActiveQuestSession {
  if (session.abilityCharges.doggy <= 0 || session.clueHighlighted || session.gatePassed) {
    return session;
  }
  return {
    ...session,
    clueHighlighted: true,
    abilityCharges: {
      ...session.abilityCharges,
      doggy: session.abilityCharges.doggy - 1,
    },
  };
}

/**
 * Slothy's companion power: eliminates up to 2 incorrect options from the current Mastery Gate.
 */
export function useSlothyPower(
  session: ActiveQuestSession,
  totalOptions: number,
  correctIndex: number
): ActiveQuestSession {
  if (session.abilityCharges.slothy <= 0 || session.eliminatedOptions.length > 0 || session.gatePassed) {
    return session;
  }

  const wrongCandidates: number[] = [];
  for (let i = 0; i < totalOptions; i++) {
    if (i !== correctIndex && !session.triedWrongIndices.includes(i)) {
      wrongCandidates.push(i);
    }
  }

  const toEliminate = wrongCandidates.slice(0, 2);
  if (toEliminate.length === 0) return session;

  return {
    ...session,
    eliminatedOptions: toEliminate,
    abilityCharges: {
      ...session.abilityCharges,
      slothy: session.abilityCharges.slothy - 1,
    },
  };
}

/**
 * Strips inline [[word|definition]] markup into plain visible text.
 */
export function stripGlossaryMarkup(paragraph: string): string {
  return paragraph.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '$1');
}

/**
 * Parses a paragraph containing [[word|definition]] tokens and optionally marks
 * segments matching the evidenceSnippet when Doggy's clue highlight is active.
 */
export function parseParagraphSegments(
  paragraph: string,
  evidenceSnippet?: string,
  highlightEvidence = false
): TextSegment[] {
  const rawSegments: TextSegment[] = [];
  const regex = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(paragraph)) !== null) {
    if (match.index > lastIndex) {
      rawSegments.push({
        type: 'text',
        text: paragraph.slice(lastIndex, match.index),
      });
    }
    rawSegments.push({
      type: 'glossary',
      text: match[1],
      definition: match[2],
    });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < paragraph.length) {
    rawSegments.push({
      type: 'text',
      text: paragraph.slice(lastIndex),
    });
  }

  if (!highlightEvidence || !evidenceSnippet) {
    return rawSegments;
  }

  const plain = stripGlossaryMarkup(paragraph);
  const snippetLower = evidenceSnippet.toLowerCase();
  const matchStart = plain.toLowerCase().indexOf(snippetLower);
  if (matchStart === -1) {
    return rawSegments;
  }
  const matchEnd = matchStart + evidenceSnippet.length;

  const result: TextSegment[] = [];
  let cursor = 0;

  for (const seg of rawSegments) {
    const segStart = cursor;
    const segEnd = cursor + seg.text.length;
    cursor = segEnd;

    if (segEnd <= matchStart || segStart >= matchEnd) {
      result.push(seg);
      continue;
    }

    if (seg.type === 'glossary') {
      result.push({ ...seg, highlighted: true });
      continue;
    }

    const localStart = Math.max(0, matchStart - segStart);
    const localEnd = Math.min(seg.text.length, matchEnd - segStart);

    if (localStart > 0) {
      result.push({ type: 'text', text: seg.text.slice(0, localStart) });
    }
    result.push({
      type: 'text',
      text: seg.text.slice(localStart, localEnd),
      highlighted: true,
    });
    if (localEnd < seg.text.length) {
      result.push({ type: 'text', text: seg.text.slice(localEnd) });
    }
  }

  return result;
}
