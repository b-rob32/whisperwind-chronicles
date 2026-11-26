import type { QuestDefinition } from '../../types';
import { LANTERN_WOODS_QUEST } from './lanternWoods';
import { CLOUDBERRY_CASTLE_QUEST } from './cloudberryCastle';
import { STARLIGHT_LIBRARY_QUEST } from './starlightLibrary';

export const ALL_QUESTS: QuestDefinition[] = [
  LANTERN_WOODS_QUEST,
  CLOUDBERRY_CASTLE_QUEST,
  STARLIGHT_LIBRARY_QUEST,
];

export const QUEST_BY_ID: Record<string, QuestDefinition> = Object.fromEntries(
  ALL_QUESTS.map((q) => [q.id, q])
);
