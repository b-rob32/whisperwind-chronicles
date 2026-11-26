import type { QuestDefinition } from '../../types';

export const LANTERN_WOODS_QUEST: QuestDefinition = {
  id: 'lantern-woods',
  title: 'The Whispering Lantern Woods',
  subtitle: 'The forest lanterns are fading one by one — follow Pip the Owl to uncover who took their glow.',
  artPath: './art/lantern-woods.jpg',
  mapPosition: { x: 22, y: 54 },
  themeColor: '#2d6a4f',
  estimatedMinutes: 10,
  totalChapters: 5,
  totalEndings: 2,
  startSceneId: 'lw-1',
  scenes: {
    'lw-1': {
      id: 'lw-1',
      chapterNumber: 1,
      title: 'The Owl on the Signpost',
      locationTag: 'Mossy Trailhead',
      tiers: {
        grade3: {
          paragraphs: [
            'Twilight settled over the Whispering Woods, where golden lanterns usually floated like warm stars between the oak branches. Tonight, half the trail lay in [[murky|dark and hard to see through]] shadow.',
            'Perched on a crooked wooden signpost sat Pip, a round barn owl wearing a tiny brass bell. He tucked one trembling wing over his eyes. "Thank goodness you came!" Pip hooted softly. "Every lantern east of the creek went dark at sunset, yet the glass is not broken and the wicks are still dry. Whatever took their light did not smash them — it [[coaxed|gently persuaded or lured]] the fireflies right out of the jars!"',
            'On the mossy ground beneath the post lay three tiny silver acorns arranged in a neat arrow pointing toward the creek.',
          ],
          gate: {
            question: 'Why does Pip believe the lanterns were not broken by a storm or a clumsy monster?',
            options: [
              'The glass jars are unbroken and the wicks are still completely dry.',
              'He saw a flock of squirrels unscrewing the lids at noon.',
              'The wind never blows inside the Whispering Woods.',
              'The lanterns are actually painted yellow instead of holding fireflies.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'the glass is not broken and the wicks are still dry',
            nudge: 'Look closely at what Pip noticed when he inspected the dark lanterns.',
            insight: 'Sharp eye! Unbroken glass and dry wicks prove the fireflies left gently instead of being smashed out.',
          },
        },
        grade5: {
          paragraphs: [
            'Dusk draped the Whispering Woods in deep pine shadow. On ordinary evenings, dozens of amber lanterns swayed from the ancient oaks, guiding travelers safely home. Tonight, every lantern beyond the footbridge hung dim and hollow, leaving the cobblestones [[shrouded|covered or hidden from view]] in mist.',
            'Atop the crooked signpost, Pip the barn owl shifted uneasily, his brass collar bell giving a nervous chime. "I inspected three dark lanterns myself," Pip murmured, puffing his feathers. "Not a single pane of glass is cracked, and the brass latches were fastened shut again afterward. A thunderstorm or a rampaging troll would have left splinters. Whoever emptied them had steady hands — and knew how to [[beckon|signal or invite someone closer]] the lantern fireflies out willingly."',
            'At the base of the post, three silver-painted acorns formed a deliberate arrow aimed straight toward the murmuring creek.',
          ],
          gate: {
            question: 'What detail most strongly suggests the lantern-taker was careful and familiar with fireflies?',
            options: [
              'The glass stayed intact, the latches were re-fastened, and the fireflies left willingly.',
              'Pip heard thunder echoing from the distant mountains earlier that afternoon.',
              'The wooden signpost had been freshly carved with an owl symbol.',
              'The fireflies always migrate south on the first Tuesday of autumn.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Not a single pane of glass is cracked, and the brass latches were fastened shut again afterward.',
            nudge: 'Re-read Pip’s comparison between a storm/troll and the real culprit.',
            insight: 'Brilliant deduction! Re-fastened latches and intact glass rule out an accident and point to someone skilled.',
          },
        },
      },
      nextSceneId: 'lw-2',
    },

    'lw-2': {
      id: 'lw-2',
      chapterNumber: 2,
      title: 'The Moss Troll’s Alibi',
      locationTag: 'Stepping-Stone Creek',
      tiers: {
        grade3: {
          paragraphs: [
            'Following the silver acorns led you to Stepping-Stone Creek, where Barnaby the Moss Troll sat knitting a giant scarf out of dandelion fluff. His pockets bulged, and soft golden sparkles drifted off his sleeves.',
            '"Before you blame me," Barnaby rumbled, holding up his furry hands, "yes, I have firefly dust on my jacket — because I tried to catch the little glow-bugs as they zoomed past my bridge! They were following a sweet, [[melodic|musical and pleasant to hear]] whistling tune coming from upriver. I cannot even whistle; my tusks get in the way!"',
            'Barnaby smiled shyly and pulled a warm honey-bun from his bulging pocket. "That is all I am hiding. And if you want to catch up, you can either cross the Moonlit River on my stepping-stones or take the Hollow Oak Tunnel through the roots."',
          ],
          gate: {
            question: 'What proves that Barnaby did NOT whistle to lure the fireflies away?',
            options: [
              'He explains that his tusks get in the way, so he cannot whistle at all.',
              'He is afraid of stepping near the creek after dark.',
              'He never wears a jacket when he knits scarves.',
              'Fireflies are allergic to dandelion fluff.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'I cannot even whistle; my tusks get in the way!',
            nudge: 'Check what Barnaby says about the musical sound the fireflies followed.',
            insight: 'Great reading! Even though Barnaby looked suspicious with glowing dust and bulging pockets, his tusks prove he couldn’t have made the whistle.',
          },
        },
        grade5: {
          paragraphs: [
            'The trail of silver acorns ended at Stepping-Stone Creek, where Barnaby the Moss Troll sat hunched over a pair of birch knitting needles. Fine golden dust clung to his wool vest, and his coat pockets sagged with something suspiciously round.',
            'Before you could speak, Barnaby raised both mossy palms with a weary sigh. "I know how this looks," he rumbled. "The shimmer on my vest came from waving my arms to stop a whole ribbon of fireflies drifting upstream. They were entranced by a clear, [[lilting|rising and falling gently in melody]] flute-like whistle echoing off the water. Look at these tusks — I can barely blow out a birthday candle, let alone pipe a tune!"',
            'To prove his pockets held no stolen lanterns, Barnaby sheepishly tugged out two warm cinnamon scones. "If you mean to track that melody, two paths lie ahead: the Moonlit River stones where the music echoed loudest, or the Hollow Oak Shortcut winding beneath the ancient roots."',
          ],
          gate: {
            question: 'Why did Barnaby’s appearance initially make him look guilty, and what cleared him?',
            options: [
              'Glowing dust and bulging pockets looked suspicious, yet they came from waving at fireflies and carrying scones — and his tusks prevent whistling.',
              'He refused to show his hands until you traded him a silver acorn.',
              'He admitted to borrowing one lantern to finish knitting his scarf.',
              'Pip flew down and announced that Barnaby had been asleep all evening.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Look at these tusks — I can barely blow out a birthday candle, let alone pipe a tune!',
            nudge: 'Connect the clues about Barnaby’s vest, his pockets, and the sound the fireflies followed.',
            insight: 'Excellent inference! You separated surface appearances from actual evidence.',
          },
        },
      },
      choices: [
        {
          id: 'branch-river',
          label: 'Cross the Moonlit River Stones',
          description: 'Follow the echoing melody directly upstream where the fireflies drifted.',
          nextSceneId: 'lw-3-river',
        },
        {
          id: 'branch-oak',
          label: 'Take the Hollow Oak Shortcut',
          description: 'Slip through the glowing root tunnel to arrive ahead of the whistler.',
          nextSceneId: 'lw-3-oak',
        },
      ],
    },

    'lw-3-river': {
      id: 'lw-3-river',
      chapterNumber: 3,
      title: 'The Song on the Water',
      locationTag: 'Moonlit Riverbank',
      tiers: {
        grade3: {
          paragraphs: [
            'You hopped across the smooth river stones while cool mist tickled your ankles. Upstream, a tiny willow boat floated near a patch of reeds. Inside sat Mira, the Firefly Weaver, playing a reed flute.',
            'Hundreds of golden fireflies swirled above her boat like a glowing ribbon. Yet Mira did not look [[mischievous|playfully naughty or sneaky]] at all — her cheeks were wet with tears. "Oh, please don’t be angry," she whispered, lowering her flute. "A baby silver fox fell into the deep bramble hollow past the waterfall. It is too dark for him to find the path out, so I borrowed the lantern fireflies to light his way!"',
            'Mira glanced worriedly at the darkening woods behind you. "I promised I would send them back before midnight, or travelers on the main trail will lose their way."',
          ],
          gate: {
            question: 'Why did Mira borrow the fireflies from the forest lanterns?',
            options: [
              'To light up a dark bramble hollow so a trapped baby silver fox could find its way out.',
              'To decorate her willow boat for the autumn festival.',
              'Because she wanted to keep all the travelers out of the woods.',
              'To trade them to Barnaby for warm honey-buns.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'A baby silver fox fell into the deep bramble hollow past the waterfall. It is too dark for him to find the path out',
            nudge: 'Read Mira’s explanation carefully — what emergency happened past the waterfall?',
            insight: 'You caught the heart of the story! Mira wasn’t stealing at all; she was staging a rescue.',
          },
        },
        grade5: {
          paragraphs: [
            'Stepping briskly from stone to silver-lit stone, you followed the reed melody until the creek widened into a quiet cove. There, moored beside nodding cattails, floated a woven willow skiff. Mira, the Firefly Weaver, rested a slender wooden flute across her knees while a swirling galaxy of borrowed fireflies hovered overhead.',
            'Far from looking triumphant or [[furtive|trying to hide guilty actions]], Mira’s shoulders slumped with worry. "I left the silver acorns so someone kind would follow," she confessed softly. "A young silver fox tumbled into the shadowed bramble basin beyond the falls. Without a steady ribbon of light, he panics at every thorny turn. I borrowed the trail lanterns’ glow — yet if I keep them past midnight, tonight’s travelers will be stranded in the dark."',
            'You could hear a faint, frightened yip echoing from the tangled ravine just ahead.',
          ],
          gate: {
            question: 'What clue from Chapter 1 now makes complete sense after hearing Mira’s confession?',
            options: [
              'Mira herself arranged the silver acorns at the signpost so a helpful traveler would find her and assist.',
              'Pip had hidden the silver acorns inside the broken lanterns earlier.',
              'The silver fox had chewed through the brass lantern latches.',
              'Barnaby had dropped the acorns while knitting near the waterfall.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'I left the silver acorns so someone kind would follow',
            nudge: 'Think back to the arrow of silver acorns beneath Pip’s signpost — who put them there and why?',
            insight: 'Masterful connection! Tying Chapter 1’s silver acorns back to Mira’s plea for help shows true close reading.',
          },
        },
      },
      nextSceneId: 'lw-4-river',
    },

    'lw-4-river': {
      id: 'lw-4-river',
      chapterNumber: 4,
      title: 'Guiding the Silver Fox',
      locationTag: 'Bramble Basin',
      tiers: {
        grade3: {
          paragraphs: [
            'At the edge of the Bramble Basin, you spotted the shivering silver fox cub peering out from under a thorny arch. Whenever Mira played a loud note, the cub ducked back in fear. When you knelt low and spoke in a [[soothing|calm and gentle]] whisper, his ears perked up.',
            '"He trusts soft voices and steady light," Mira realized. "If we split the fireflies in half, half can return to the main trail right now, and the rest can form a low, glowing stepping-path right to his paws!"',
            'Carefully, Mira played two gentle notes. Half the fireflies zipped back toward the oak lanterns, while the remaining glow-bugs settled along the mossy ground like tiny stepping-lamps. Step by brave step, the fox cub trotted out of the thorns.',
          ],
          gate: {
            question: 'How did you and Mira solve both problems at the same time?',
            options: [
              'By splitting the fireflies so half re-lit the main trail while the rest gently lit a low path for the fox.',
              'By playing the flute as loudly as possible to scare the thorns away.',
              'By asking Barnaby to chop down the entire bramble bush.',
              'By waiting until sunrise so the lanterns were not needed.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'If we split the fireflies in half, half can return to the main trail right now, and the rest can form a low, glowing stepping-path',
            nudge: 'Look at Mira’s plan for sharing the fireflies between the trail and the cub.',
            insight: 'Clever teamwork! Splitting the light kept both the travelers and the fox cub safe.',
          },
        },
        grade5: {
          paragraphs: [
            'At the rim of the Bramble Basin, a trembling silver fox cub crouched beneath an arch of blackberries. Each time Mira piped a brisk note, the cub flattened his ears and retreated deeper into the shadows. Yet when you crouched to eye level and hummed a slow, [[reassuring|comforting and calming]] tune, the cub edged forward an inch.',
            '"Of course!" Mira breathed. "High notes startle him, and dazzling swirls overhead confuse him. If I send half the swarm back to rekindle the oak trail right now, we can coax the remaining fireflies into a quiet, knee-high trail along the moss — calm enough for him to trust."',
            'Mira breathed two soft, low notes. The swarm parted cleanly: one golden stream darted back toward the main path, while the second settled along the earth like warm breadcrumbs. Moments later, the fox cub bounded safely into the clearing.',
          ],
          gate: {
            question: 'Why did Mira change both the height of the fireflies and the sound of her flute?',
            options: [
              'Because loud/high notes startled the cub and overhead swirls confused him, whereas low notes and a ground-level light path calmed him.',
              'Because the reed flute was cracked and could no longer play high notes.',
              'Because fireflies can only fly near the ground after midnight.',
              'Because she wanted to hide the fox from Pip the barn owl.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'High notes startle him, and dazzling swirls overhead confuse him.',
            nudge: 'Notice how the fox reacted to Mira’s first notes versus your gentle approach.',
            insight: 'Superb reading! Observing cause-and-effect in character behavior unlocked the rescue.',
          },
        },
      },
      nextSceneId: 'lw-5-river',
    },

    'lw-5-river': {
      id: 'lw-5-river',
      chapterNumber: 5,
      title: 'The Chorus of Golden Oaks',
      locationTag: 'Lantern Glade',
      tiers: {
        grade3: {
          paragraphs: [
            'With the silver fox reunited with his mother at the edge of the pines, the last fireflies floated happily back into their oak-branch lanterns. Warm amber light [[bloomed|spread out brightly like a flower]] across the entire forest once more.',
            'Pip swooped down, his brass bell jingling proudly, while Mira pressed a small carved oak lantern into your hands. "This Everglow Lantern never goes out," she smiled. "Because today you didn’t just chase a mystery — you listened before judging."',
          ],
          gate: {
            question: 'What lesson does Mira praise you for at the end of the adventure?',
            options: [
              'Listening carefully and understanding the whole story before judging someone.',
              'Running faster than any owl in the forest.',
              'Keeping the fireflies locked inside the jars forever.',
              'Never walking into the woods after sunset.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Because today you didn’t just chase a mystery — you listened before judging.',
            nudge: 'Read Mira’s final sentence closely to see what she admired most.',
            insight: 'Quest Mastered! Listening closely and checking the facts turned a mystery into a rescue.',
          },
        },
        grade5: {
          paragraphs: [
            'Once the silver fox cub bounded joyfully to his waiting mother at the pine ridge, the final stream of fireflies rose into the canopy and slipped home into their brass lanterns. One by one, the Whispering Woods [[kindled|lit up warmly]] into a golden archway.',
            'Pip glided onto your shoulder with a proud hoot, and Mira offered you a palm-sized lantern carved from living oak. "Carry the Everglow Lantern," she said warmly. "Many adventurers rush to accuse the first suspect they meet. You looked past appearances, pieced together the quiet clues, and solved the mystery with empathy."',
          ],
          gate: {
            question: 'Which theme best captures how the mystery of the Whispering Woods was resolved?',
            options: [
              'Looking past first impressions and using careful observation with kindness solves problems better than jumping to conclusions.',
              'Magical creatures should never be trusted near forest trails.',
              'Speed is always more important than gathering evidence.',
              'Lanterns work best when kept far away from rivers.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'You looked past appearances, pieced together the quiet clues, and solved the mystery with empathy.',
            nudge: 'Think about both Barnaby and Mira — how did looking past appearances help in both scenes?',
            insight: 'Quest Mastered! You read with both sharp logic and a big heart.',
          },
        },
      },
      ending: {
        id: 'ending-lw-river',
        title: 'Guardians of the Golden Chorus',
        badge: 'River Rescue Ending',
        relicId: 'relic-amber-lantern',
        summary: {
          grade3: 'You followed the melody up the Moonlit River, helped Mira rescue the lost silver fox cub, and brought golden light back to every oak in the woods!',
          grade5: 'By tracing Mira’s silver acorns up the Moonlit River and adapting to the frightened fox cub’s needs, you restored the forest lanterns and earned the Everglow Oak Lantern.',
        },
      },
    },

    'lw-3-oak': {
      id: 'lw-3-oak',
      chapterNumber: 3,
      title: 'Secrets in the Root Tunnel',
      locationTag: 'Hollow Oak Shortcut',
      tiers: {
        grade3: {
          paragraphs: [
            'Inside the Hollow Oak Tunnel, glowing blue mushrooms lit the curved wooden walls. Halfway through, you spotted a tiny woven basket left on a tree root. Inside were a spare reed flute, a folded map, and a note written in tidy green ink.',
            'The note read: "Dear Pip — Please do not worry! I borrowed the lantern fireflies to guide a lost fawn out of the Misty Ravine. My lantern broke, and the ravine is too [[tangled|twisted and knotted together]] for me to carry a torch safely. Meet me at the Old Mill! — Mira."',
            'A tiny pebble had rolled onto the note, which explained why the wind had not blown it out to Pip’s signpost!',
          ],
          gate: {
            question: 'Why hadn’t Pip received Mira’s note explaining where the fireflies went?',
            options: [
              'The note was stuck under a pebble inside the Hollow Oak Tunnel instead of reaching Pip.',
              'Mira wrote the note in invisible ink that vanished at sunset.',
              'Pip threw the note into the river by mistake.',
              'Barnaby used the note to wrap his honey-buns.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'A tiny pebble had rolled onto the note, which explained why the wind had not blown it out to Pip’s signpost!',
            nudge: 'Check the last sentence of the passage — what kept the note from reaching Pip?',
            insight: 'Eagle-eyed reading! The stray pebble pinned Mira’s message right inside the tunnel.',
          },
        },
        grade5: {
          paragraphs: [
            'Bioluminescent blue mushrooms lined the arched ribs of the Hollow Oak Shortcut, casting a cool glow across the packed earth. Midway along the tunnel, you discovered an overturned willow basket holding a spare reed pipe and a folded parchment weighted down by a smooth river pebble.',
            'Written in brisk emerald ink, the letter read: "Pip — Do not sound the alarm! A young fawn wandered into the Misty Ravine where dry brush makes open flames [[hazardous|dangerous or risky]]. I borrowed the trail fireflies for safe, cool light. Bring a rope to the Old Mill if you can! — Mira."',
            'Looking up, you noticed a root-chute leading straight toward the signpost where Mira had clearly tried to send the message on an updraft before the pebble trapped it.',
          ],
          gate: {
            question: 'Why did Mira specifically need fireflies instead of a regular candle or torch in the Misty Ravine?',
            options: [
              'Dry brush in the ravine made open flames dangerous, whereas fireflies give off safe, cool light.',
              'Candles are forbidden inside the Whispering Woods by royal law.',
              'The fawn was only willing to follow green-colored light.',
              'She forgot to pack matches inside her willow basket.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'where dry brush makes open flames hazardous. I borrowed the trail fireflies for safe, cool light.',
            nudge: 'Look closely at what Mira’s letter says about the dry brush in the Misty Ravine.',
            insight: 'Brilliant! Fireflies provide cool bioluminescent light without risking a forest fire.',
          },
        },
      },
      nextSceneId: 'lw-4-oak',
    },

    'lw-4-oak': {
      id: 'lw-4-oak',
      chapterNumber: 4,
      title: 'The Old Mill Rescue',
      locationTag: 'Misty Ravine & Old Mill',
      tiers: {
        grade3: {
          paragraphs: [
            'Emerging from the roots right beside the Old Mill, you found Mira kneeling by a steep muddy slope. Below her, a spotted fawn stood on a narrow mossy ledge, surrounded by hovering golden fireflies.',
            '"You found my note!" Mira gasped with relief. "The mud is too slippery for the fawn to climb up alone, and my boots slide every time I try. Look at the old wooden waterwheel — if we lay those two [[sturdy|strong and solid]] fence planks across the mud like a ramp, the fawn can walk right up!"',
            'Together you carried the dry planks and pressed them firmly into the grass. The fireflies lined both edges like runway lights, and the fawn stepped neatly across to solid ground.',
          ],
          gate: {
            question: 'Why did laying fence planks across the slope solve the problem?',
            options: [
              'The planks created a steady dry ramp over the slippery mud so the fawn could walk up safely.',
              'The planks blocked the river water from splashing into the mill.',
              'The fawn used the planks to hide from Pip the owl.',
              'Mira wanted to rebuild the mill roof before sunrise.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'if we lay those two sturdy fence planks across the mud like a ramp, the fawn can walk right up!',
            nudge: 'Check why neither Mira nor the fawn could climb the slope at first.',
            insight: 'Smart problem-solving! A sturdy plank bridge turned a slippery slope into an easy walk.',
          },
        },
        grade5: {
          paragraphs: [
            'The root tunnel opened directly beside the silent wooden wheel of the Old Mill. Below the crumbling embankment, a speckled fawn stood marooned on a mossy shelf, ringed by a calm halo of fireflies while Mira paced the muddy rim.',
            '"You intercepted my message!" Mira exclaimed, exhaling sharply. "The clay bank is slick as soap — every step I take sends me sliding back, and pulling the fawn with a rope might frighten or bruise her. Yet those weathered cedar planks stacked by the mill door are wide and [[textured|rough enough to give good grip]]. If we wedge them into the roots as a gentle ramp, she can climb out on her own terms."',
            'Working in rhythm, you anchored the planks into the upper roots while Mira guided the fireflies along both edges like glowing guardrails. Seconds later, the fawn trotted gracefully up the cedar bridge.',
          ],
          gate: {
            question: 'Why did Mira decide against using a rope even though she had asked for one in her earlier note?',
            options: [
              'She realized pulling the fawn with a rope might frighten or hurt her, while a textured plank ramp let the fawn climb safely herself.',
              'The rope had been left behind inside the Hollow Oak Tunnel.',
              'Pip accidentally tangled the rope around the waterwheel.',
              'The cedar planks were actually too short to reach the bottom.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'pulling the fawn with a rope might frighten or bruise her. Yet those weathered cedar planks stacked by the mill door are wide and textured.',
            nudge: 'Compare what Mira asked for in Chapter 3 with what she realized once she saw the clay bank.',
            insight: 'Awesome critical reading! Tracking how a character revises a plan based on new evidence is a true Grade 5 skill.',
          },
        },
      },
      nextSceneId: 'lw-5-oak',
    },

    'lw-5-oak': {
      id: 'lw-5-oak',
      chapterNumber: 5,
      title: 'The Trailblazer’s Compass',
      locationTag: 'Whispering Clearing',
      tiers: {
        grade3: {
          paragraphs: [
            'The spotted fawn bounded back toward the meadow, and Mira whistled a cheerful thank-you tune. Immediately, the golden fireflies soared back through the trees, relighting every single lantern along the path.',
            'Pip fluttered down, eyes wide when he saw Mira’s rescued note. "So THAT is why I never got your letter!" he hooted, laughing. He unclipped a tiny silver compass from his feather pouch and gave it to you. "A shortcut only helps if you pay [[attention|careful notice]] along the way — and you spotted every clue!"',
          ],
          gate: {
            question: 'Why did Pip give you his Silver Compass?',
            options: [
              'Because you paid close attention in the shortcut and found the hidden note that solved the whole mystery.',
              'Because his compass was broken and only pointed south.',
              'Because you promised to rebuild the Old Mill tomorrow.',
              'Because he wanted to trade it for Mira’s reed flute.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'A shortcut only helps if you pay attention along the way — and you spotted every clue!',
            nudge: 'Re-read what Pip says as he hands you the Silver Compass.',
            insight: 'Quest Mastered! Careful attention turned a secret tunnel into the key to the rescue.',
          },
        },
        grade5: {
          paragraphs: [
            'As the fawn vanished gracefully into the moonlit meadow, Mira piped a bright arpeggio. The fireflies lifted in a shimmering spiral and streamed back into their oak-branch glass homes, bathing the Whispering Woods in warm gold once again.',
            'Pip swooped down, blinking in amazement as you handed him the pebble-creased parchment. "Well, ruffle my feathers — she DID try to warn me!" he chuckled. Unfastening a gleaming silver compass from his satchel, he placed it in your palm. "Anyone can dash down a shortcut, but only a true [[chronicler|careful keeper and reader of stories]] pauses to read the forgotten note along the way."',
          ],
          gate: {
            question: 'What contrast does Pip draw in his final compliment to you?',
            options: [
              'Between people who rush blindly through shortcuts and true readers who pause to notice and read hidden clues.',
              'Between owls who fly at night and fawns who wander at dusk.',
              'Between wooden planks and braided ropes.',
              'Between glowing mushrooms and golden fireflies.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Anyone can dash down a shortcut, but only a true chronicler pauses to read the forgotten note along the way.',
            nudge: 'Look at the two kinds of travelers Pip compares in his last sentence.',
            insight: 'Quest Mastered! You unlocked the Secret Shortcut Ending and earned Pip’s Silver Compass.',
          },
        },
      },
      ending: {
        id: 'ending-lw-oak',
        title: 'Trailblazers of the Hollow Oak',
        badge: 'Secret Shortcut Ending',
        relicId: 'relic-owl-compass',
        summary: {
          grade3: 'You braved the Hollow Oak Tunnel, discovered Mira’s trapped note, built a safe plank ramp for the fawn, and earned Pip’s Silver Compass!',
          grade5: 'By noticing Mira’s pebble-trapped message inside the Hollow Oak and improvising a safe cedar ramp at the Old Mill, you saved the fawn and earned Pip’s Silver Compass.',
        },
      },
    },
  },
};
