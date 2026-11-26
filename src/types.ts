export type ReadingTier = 'grade3' | 'grade5';
export type PlayerId = 'mackenzie' | 'elizabeth';
export type CompanionId = 'doggy' | 'slothy';
export type PlayMode = 'coop' | 'solo';

export type FontSizeOption = 'cozy' | 'large' | 'xlarge';
export type FontStyleOption = 'serif' | 'sans';

export interface PlayerProfile {
  id: PlayerId;
  name: string;
  readingTier: ReadingTier;
  companion: CompanionId;
  accentColor: string;
  avatarHair: string;
  avatarTunic: string;
  equippedHat: string | null;
  equippedCompanionGear: string | null;
  totalStars: number;
  chaptersMastered: number;
  perfectChapters: number;
  unlockedRelics: string[];
  unlockedEndings: string[];
  questBestStars: Record<string, number>;
}

export interface ReadingSettings {
  fontSize: FontSizeOption;
  fontStyle: FontStyleOption;
  soundEnabled: boolean;
}

export interface SaveState {
  profiles: Record<PlayerId, PlayerProfile>;
  settings: ReadingSettings;
}

export interface MasteryGate {
  question: string;
  options: string[];
  correctIndex: number;
  /** Exact sentence (or substring) from the passage that Doggy's Sniff-a-Clue highlights */
  evidenceSnippet: string;
  /** Gentle hint shown after a wrong attempt to encourage careful re-reading */
  nudge: string;
  /** Celebratory explanation shown once mastered */
  insight: string;
}

export interface TierContent {
  /** Story passage supporting inline glossary tokens like [[luminous|glowing softly in the dark]] */
  paragraphs: string[];
  gate: MasteryGate;
}

export interface StoryBranchChoice {
  id: string;
  label: string;
  description: string;
  nextSceneId: string;
}

export interface StoryEnding {
  id: string;
  title: string;
  badge: string;
  relicId: string;
  summary: Record<ReadingTier, string>;
}

export interface StoryScene {
  id: string;
  chapterNumber: number;
  title: string;
  locationTag: string;
  tiers: Record<ReadingTier, TierContent>;
  /** If present, player picks a branching path AFTER passing the Mastery Gate */
  choices?: StoryBranchChoice[];
  /** If present and no choices, advances directly to nextSceneId after Mastery Gate */
  nextSceneId?: string;
  /** If present, passing this scene's Mastery Gate completes the quest with this ending */
  ending?: StoryEnding;
}

export interface QuestDefinition {
  id: string;
  title: string;
  subtitle: string;
  artPath: string;
  mapPosition: { x: number; y: number };
  themeColor: string;
  estimatedMinutes: number;
  totalChapters: number;
  totalEndings: number;
  startSceneId: string;
  scenes: Record<string, StoryScene>;
}

export interface WardrobeItem {
  id: string;
  name: string;
  slot: 'hat' | 'companion';
  requiredStars: number;
  description: string;
  icon: string;
}

export interface RelicDefinition {
  id: string;
  name: string;
  questId: string;
  icon: string;
  description: string;
}

export interface ActiveQuestSession {
  questId: string;
  mode: PlayMode;
  soloPlayerId: PlayerId;
  /** Companions selected for this run */
  companions: Record<PlayerId, CompanionId>;
  /** Current scene ID */
  currentSceneId: string;
  /** Whose turn it is right now (alternates each scene in co-op) */
  activeReader: PlayerId;
  /** History of scene IDs visited in this run */
  visitedScenes: string[];
  /** Wrong attempts on the current scene's Mastery Gate */
  wrongAttemptsOnCurrent: number;
  /** Indices already guessed wrong on the current scene */
  triedWrongIndices: number[];
  /** Whether current scene's Mastery Gate has been passed */
  gatePassed: boolean;
  /** Stars earned per visited scene */
  sceneStars: Record<string, number>;
  /** Companion ability charges left in this quest */
  abilityCharges: Record<CompanionId, number>;
  /** Whether Doggy's Sniff-a-Clue is active on the current scene */
  clueHighlighted: boolean;
  /** Option indices eliminated by Slothy's Slow & Steady on the current scene */
  eliminatedOptions: number[];
  /** Ending reached, if quest finished */
  completedEndingId: string | null;
}
