import React, { useEffect, useState } from 'react';
import { RealmMapView } from './components/RealmMapView';
import { StoryReaderView } from './components/StoryReaderView';
import { WardrobeModal } from './components/WardrobeModal';
import { QUEST_BY_ID } from './data/quests';
import {
  advanceToScene,
  createQuestSession,
  submitGateAnswer,
  useDoggyPower,
  useSlothyPower,
} from './engine/questEngine';
import { applyQuestCompletion, loadSave, persistSave } from './state/storage';
import type {
  ActiveQuestSession,
  CompanionId,
  PlayMode,
  PlayerId,
  PlayerProfile,
  QuestDefinition,
  ReadingSettings,
  SaveState,
} from './types';
import { sfx } from './utils/sound';

export const App: React.FC = () => {
  const [save, setSave] = useState<SaveState>(() => loadSave());
  const [playMode, setPlayMode] = useState<PlayMode>('coop');
  const [soloPlayerId, setSoloPlayerId] = useState<PlayerId>('mackenzie');
  const [session, setSession] = useState<ActiveQuestSession | null>(null);
  const [wardrobePlayer, setWardrobePlayer] = useState<PlayerId | null>(null);

  useEffect(() => {
    persistSave(save);
  }, [save]);

  const handleSelectMode = (mode: PlayMode, soloId?: PlayerId) => {
    setPlayMode(mode);
    if (soloId) {
      setSoloPlayerId(soloId);
    }
  };

  const handleUpdateProfile = (playerId: PlayerId, patch: Partial<PlayerProfile>) => {
    setSave((prev) => ({
      ...prev,
      profiles: {
        ...prev.profiles,
        [playerId]: {
          ...prev.profiles[playerId],
          ...patch,
        },
      },
    }));
  };

  const handleUpdateSettings = (patch: Partial<ReadingSettings>) => {
    setSave((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        ...patch,
      },
    }));
  };

  const handleStartQuest = (quest: QuestDefinition) => {
    sfx.pageTurn(save.settings.soundEnabled);
    const companions: Record<PlayerId, CompanionId> = {
      mackenzie: save.profiles.mackenzie.companion,
      elizabeth: save.profiles.elizabeth.companion,
    };
    const nextSession = createQuestSession(quest, playMode, soloPlayerId, companions, 'mackenzie');
    setSession(nextSession);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitAnswer = (originalOptionIndex: number) => {
    if (!session) return;
    const quest = QUEST_BY_ID[session.questId];
    if (!quest) return;
    const scene = quest.scenes[session.currentSceneId];
    const readerTier = save.profiles[session.activeReader].readingTier;
    const gate = scene.tiers[readerTier].gate;

    const result = submitGateAnswer(session, scene, originalOptionIndex, gate.correctIndex);
    setSession(result.session);

    if (result.isCorrect) {
      if (scene.ending) {
        sfx.questComplete(save.settings.soundEnabled);
        const recipients: PlayerId[] =
          session.mode === 'coop' ? ['mackenzie', 'elizabeth'] : [session.soloPlayerId];
        const earnedStars = Object.values(result.session.sceneStars).reduce((a, b) => a + b, 0);
        const chaptersCount = Object.keys(result.session.sceneStars).length;
        const perfectCount = Object.values(result.session.sceneStars).filter((s) => s === 3).length;

        setSave((prev) =>
          applyQuestCompletion(
            prev,
            recipients,
            quest.id,
            earnedStars,
            chaptersCount,
            perfectCount,
            scene.ending!.relicId,
            scene.ending!.id
          )
        );
      } else {
        sfx.gatePass(save.settings.soundEnabled);
      }
    } else {
      sfx.gateNudge(save.settings.soundEnabled);
    }
  };

  const handleUseCompanionPower = (companion: CompanionId) => {
    if (!session) return;
    const quest = QUEST_BY_ID[session.questId];
    if (!quest) return;
    const scene = quest.scenes[session.currentSceneId];
    const readerTier = save.profiles[session.activeReader].readingTier;
    const gate = scene.tiers[readerTier].gate;

    if (companion === 'doggy') {
      const updated = useDoggyPower(session);
      if (updated !== session) {
        sfx.companionPower(save.settings.soundEnabled);
        setSession(updated);
      }
    } else {
      const updated = useSlothyPower(session, gate.options.length, gate.correctIndex);
      if (updated !== session) {
        sfx.companionPower(save.settings.soundEnabled);
        setSession(updated);
      }
    }
  };

  const handleAdvanceScene = (nextSceneId: string) => {
    if (!session) return;
    sfx.pageTurn(save.settings.soundEnabled);
    setSession(advanceToScene(session, nextSceneId));
  };

  const activeQuest = session ? QUEST_BY_ID[session.questId] : null;

  return (
    <main className="app-root">
      {session && activeQuest ? (
        <StoryReaderView
          quest={activeQuest}
          session={session}
          profiles={save.profiles}
          settings={save.settings}
          onUpdateSettings={handleUpdateSettings}
          onSubmitAnswer={handleSubmitAnswer}
          onUseCompanionPower={handleUseCompanionPower}
          onAdvanceScene={handleAdvanceScene}
          onExitToMap={() => setSession(null)}
          onReplayQuest={() => handleStartQuest(activeQuest)}
          onOpenWardrobe={(id) => setWardrobePlayer(id)}
        />
      ) : (
        <RealmMapView
          profiles={save.profiles}
          playMode={playMode}
          soloPlayerId={soloPlayerId}
          onSelectMode={handleSelectMode}
          onStartQuest={handleStartQuest}
          onOpenWardrobe={(id) => setWardrobePlayer(id)}
        />
      )}

      {wardrobePlayer && (
        <WardrobeModal
          profiles={save.profiles}
          initialPlayerId={wardrobePlayer}
          onUpdateProfile={handleUpdateProfile}
          onClose={() => setWardrobePlayer(null)}
        />
      )}
    </main>
  );
};

export default App;
