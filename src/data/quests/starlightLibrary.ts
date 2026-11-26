import type { QuestDefinition } from '../../types';

export const STARLIGHT_LIBRARY_QUEST: QuestDefinition = {
  id: 'starlight-library',
  title: 'The Sunken Starlight Library',
  subtitle: 'A fallen constellation is hiding inside the crystal tidepool library — decipher the clues before low tide!',
  artPath: './art/starlight-library.jpg',
  mapPosition: { x: 80, y: 46 },
  themeColor: '#1d4e89',
  estimatedMinutes: 10,
  totalChapters: 5,
  totalEndings: 2,
  startSceneId: 'sl-1',
  scenes: {
    'sl-1': {
      id: 'sl-1',
      chapterNumber: 1,
      title: 'The Missing Little Dipper Star',
      locationTag: 'Sapphire Cavern Entrance',
      tiers: {
        grade3: {
          paragraphs: [
            'Glowing sapphire crystals arched high above the Sunken Starlight Library, where tall oak bookshelves curved around sparkling tidepools. At the front desk sat Professor Inkwell, a friendly lavender octopus wearing round spectacles.',
            '"Oh dear, oh dear!" Professor Inkwell sighed, straightening four stacks of books at once. "Last night, the brightest star from the Little Bear [[constellation|a group of stars forming a pattern in the sky]] slipped out of the sky and splashed right into my library! It is shy, so it disguised itself inside one of our glowing rooms. If we do not guide it back to the tidepool mirror before low tide, it will miss its ride home!"',
            'Professor Inkwell pointed a gentle tentacle toward a wet trail of glittering silver sand leading away from the desk.',
          ],
          gate: {
            question: 'Why is it urgent to find the fallen star before low tide?',
            options: [
              'Because the star needs the tidepool mirror while the water is still high in order to ride back up to the sky.',
              'Because the library closes its oak doors at sunrise.',
              'Because Professor Inkwell is running out of silver sand.',
              'Because the sapphire crystals turn dark during low tide.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'If we do not guide it back to the tidepool mirror before low tide, it will miss its ride home!',
            nudge: 'Check what Professor Inkwell warns will happen if low tide arrives first.',
            insight: 'Great catch! Without the high-tide reflection pool, the shy star would be stranded.',
          },
        },
        grade5: {
          paragraphs: [
            'Luminous sapphire crystals vaulted above the Sunken Starlight Library, where curved oak galleries overlooked tidepools brimming with mirrored starlight. Behind the brass circulation desk, Professor Inkwell — a courteous lavender octopus — adjusted his spectacles with one tentacle while shelving leather folios with three others.',
            '"We have a celestial emergency," Professor Inkwell murmured. "At midnight, the guiding star of the Little Bear [[constellation|a named pattern of stars in the night sky]] tumbled off course and took shelter somewhere inside these stacks. Like most young stars, it is easily flustered and disguises itself among warm lights. Unless we coax it back onto the cavern’s tidepool mirror before low tide drains the basin, it will remain marooned until the next new moon."',
            'Along the stone floorboards shimmered a faint, damp ribbon of stardust — splitting cleanly at the foot of the spiral staircase.',
          ],
          gate: {
            question: 'What makes spotting the fallen star inside the library especially tricky?',
            options: [
              'It is shy and disguises itself among other warm lights, so it can blend right in with the library’s glowing lanterns.',
              'It becomes completely invisible whenever anyone wears spectacles.',
              'It refuses to stay inside any room with wooden bookshelves.',
              'Professor Inkwell forgot which constellation it belonged to.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Like most young stars, it is easily flustered and disguises itself among warm lights.',
            nudge: 'Re-read how Professor Inkwell describes the behavior of young stars.',
            insight: 'Sharp observation! In a cavern full of floating golden lanterns, a star in disguise takes careful eyes to spot.',
          },
        },
      },
      nextSceneId: 'sl-2',
    },

    'sl-2': {
      id: 'sl-2',
      chapterNumber: 2,
      title: 'The Brass Astrolabe’s Clue',
      locationTag: 'Main Reading Gallery',
      tiers: {
        grade3: {
          paragraphs: [
            'At the center of the gallery stood a spinning brass star-globe. Carved onto its base was an old library verse: "Lantern flames flicker and sway in a breeze, but true starlight holds steady and hums like soft seas."',
            'Professor Inkwell tapped the verse excitedly. "Aha! That is how we tell a real star from a library lantern! Every lantern flame [[quivers|shakes or flickers gently]] when you wave a book near it, whereas a real star never flickers — and if you listen closely, it hums like gentle ocean waves!"',
            'Looking around, the silver stardust led in two directions: down to the Tidepool Observatory, or up the Whispering Spiral Stacks.',
          ],
          gate: {
            question: 'How can you tell the real fallen star apart from all the floating library lanterns?',
            options: [
              'Lantern flames flicker in a breeze, while a real star stays completely steady and hums softly like the sea.',
              'A real star is always shaped like a tiny lavender octopus.',
              'Library lanterns only glow blue, while stars glow red.',
              'A real star floats twice as high as the ceiling crystals.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Every lantern flame quivers when you wave a book near it, whereas a real star never flickers — and if you listen closely, it hums like gentle ocean waves!',
            nudge: 'Compare what the brass verse says about lantern flames versus true starlight.',
            insight: 'Brilliant! Steady light + a soft ocean hum is your secret test for finding the star!',
          },
        },
        grade5: {
          paragraphs: [
            'At the heart of the circular hall stood an antique brass astrolabe engraved with a rhythmic couplet: "Candle and oil-wick dance in the draft, yet true starlight steadies and sings like the tide."',
            'Professor Inkwell’s eyes brightened behind his lenses. "Splendid! Every floating lamp in this cavern burns beeswax, so even the gentlest gust from a turning page makes its flame [[waver|flicker or tremble unsteadily]]. A fallen star, however, burns steady as silver and emits a faint tidal hum. Keep that test in mind — the stardust trail forks right here, leading either down to the Tidepool Observatory or up the Whispering Spiral Stacks."',
          ],
          gate: {
            question: 'Why does waving an open book near a glowing light work as a scientific test here?',
            options: [
              'The tiny breeze makes beeswax lantern flames waver, whereas true starlight remains steady and hums.',
              'Open books automatically pull fallen stars onto their pages.',
              'The beeswax lanterns go completely dark whenever a page turns.',
              'The brass astrolabe only spins when someone fans it with a book.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Every floating lamp in this cavern burns beeswax, so even the gentlest gust from a turning page makes its flame waver.',
            nudge: 'Look at what the library’s floating lamps burn and how that reacts to a breeze.',
            insight: 'Excellent reasoning! Turning a poetic riddle into a practical test is pure adventure smarts.',
          },
        },
      },
      choices: [
        {
          id: 'branch-tidepool',
          label: 'Explore the Tidepool Observatory',
          description: 'Follow the glowing shimmer down to the crystal pools overlooking the starry sea.',
          nextSceneId: 'sl-3-pool',
        },
        {
          id: 'branch-stacks',
          label: 'Climb the Whispering Spiral Stacks',
          description: 'Ascend the winding oak staircase where the oldest star-maps are shelved.',
          nextSceneId: 'sl-3-stacks',
        },
      ],
    },

    'sl-3-pool': {
      id: 'sl-3-pool',
      chapterNumber: 3,
      title: 'Five Lanterns by the Sea',
      locationTag: 'Tidepool Observatory',
      tiers: {
        grade3: {
          paragraphs: [
            'Down by the wide cavern arch, five golden lights hovered above the sparkling tidepools. You gently fanned a thin storybook toward each one.',
            'Four of the golden flames danced and leaned in the breeze. Only the fifth light — tucked timidly inside a giant pink seashell on the ledge — stayed completely [[motionless|still and not moving at all]]! Leaning closer, you heard a sweet humming sound, just like tiny waves tapping a sandy shore.',
            '"Hello, little star," you whispered. The tiny orb blinked brighter, shivering slightly as it peered at the wide open ocean outside.',
          ],
          gate: {
            question: 'How did you know the fifth light inside the pink seashell was the fallen star?',
            options: [
              'It stayed completely motionless when you fanned a breeze, and it hummed like tiny ocean waves.',
              'It was the biggest lantern hanging near the ceiling.',
              'It jumped out of the seashell and landed on your nose.',
              'It turned bright green as soon as you opened your book.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Only the fifth light — tucked timidly inside a giant pink seashell on the ledge — stayed completely motionless! Leaning closer, you heard a sweet humming sound',
            nudge: 'Apply the test you learned in Chapter 2 to the five lights by the sea.',
            insight: 'Bullseye! Motionless in the breeze plus a soft sea-hum confirmed it immediately.',
          },
        },
        grade5: {
          paragraphs: [
            'Near the vaulted sea-arch, five amber lights drifted above the constellation-speckled tidepools. Raising a slender atlas, you fanned a careful puff of air across each glow in turn.',
            'Four flames dipped and flickered immediately. Yet the fifth — nestled shyly within the spiral mouth of a pearlescent conch shell — remained utterly [[unwavering|perfectly steady without flickering]]. When you cupped a hand to your ear, a delicate hush rose from the shell like retreating surf on pebbles.',
            'As you knelt beside it, the tiny star pulsed nervously, casting anxious glints toward the vast, dark horizon beyond the cavern mouth.',
          ],
          gate: {
            question: 'What emotion is the star showing at the end of the passage, and what clue tells you so?',
            options: [
              'Nervousness or fear of the vast dark sky, shown by its shy hiding spot and anxious pulsing toward the horizon.',
              'Anger at Professor Inkwell, shown by its bright flashes at the bookshelves.',
              'Excitement to swim in the ocean, shown by leaping into the waves.',
              'Sleepiness, shown by fading completely out inside the conch.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'the tiny star pulsed nervously, casting anxious glints toward the vast, dark horizon',
            nudge: 'Notice the descriptive words used for how the star hides and pulses.',
            insight: 'Deep literary reading! Recognizing a character’s hidden fear prepares you to help it.',
          },
        },
      },
      nextSceneId: 'sl-4-pool',
    },

    'sl-4-pool': {
      id: 'sl-4-pool',
      chapterNumber: 4,
      title: 'Courage in the Tidepool Mirror',
      locationTag: 'Starlight Pool',
      tiers: {
        grade3: {
          paragraphs: [
            'The tide was already beginning to creep back toward the sea, shrinking the crystal pool. You realized why the little star had hidden: it was nervous about floating all the way back up to the huge sky by itself!',
            'You gently cupped the seashell and carried it to the water’s edge. "Look down into the pool," you smiled. Reflected on the smooth water were the six other stars of the Little Bear, shining right back at it! Seeing its family waiting so close, the little star gave a [[joyful|full of happiness]] chime, hopped onto the mirror-water, and zipped cleanly up into its empty spot in the sky!',
          ],
          gate: {
            question: 'What finally gave the shy star the courage to return to the sky?',
            options: [
              'Seeing the reflection of its six Little Bear family stars waiting for it right there in the tidepool.',
              'Hearing Professor Inkwell ring a loud library bell.',
              'Waiting until the tidepool drained completely dry.',
              'Reading a chapter from a pirate adventure book.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Reflected on the smooth water were the six other stars of the Little Bear, shining right back at it!',
            nudge: 'Look at what the little star saw when you held it over the calm tidepool.',
            insight: 'Heartwarming! Seeing its constellation family waiting made the big leap feel safe.',
          },
        },
        grade5: {
          paragraphs: [
            'Already the tide had begun its slow retreat, narrowing the glassy mirror-pool inch by inch. Studying the star’s hesitant glow, you understood its reluctance: after tumbling once, the open expanse of night felt dizzyingly vast to cross alone.',
            'Cradling the conch shell gently, you angled it over the tranquil water. "Don’t look up at how far it is — look down," you murmured. Across the dark tidepool shimmered the crisp reflection of the other six Little Bear stars, seeming close enough to touch. Recognizing its [[kin|family or companions]] waiting right beside its empty place, the little star chimed like windchimes, skipped across the mirror-surface, and soared home into the constellation.',
          ],
          gate: {
            question: 'Why did asking the star to "look down" instead of "look up" help overcome its fear?',
            options: [
              'Looking up made the night sky feel dizzyingly far, whereas the reflection in the pool made its star family feel close and welcoming.',
              'Because fallen stars cannot look upward once they touch a seashell.',
              'Because the cavern ceiling blocked the real stars from view.',
              'Because the tidepool water gave the star extra weight to bounce.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'the open expanse of night felt dizzyingly vast... Across the dark tidepool shimmered the crisp reflection of the other six Little Bear stars, seeming close enough to touch.',
            nudge: 'Contrast how the sky felt when looking up versus what appeared in the water.',
            insight: 'Wonderful inference! Changing perspective turned a scary distance into a welcoming reunion.',
          },
        },
      },
      nextSceneId: 'sl-5-pool',
    },

    'sl-5-pool': {
      id: 'sl-5-pool',
      chapterNumber: 5,
      title: 'The Tidepool Star Prism',
      locationTag: 'Crystal Observatory',
      tiers: {
        grade3: {
          paragraphs: [
            'Above the ocean arch, the Little Bear constellation sparkled complete once more, giving one extra cheerful twinkle just for you. Professor Inkwell applauded with all eight arms!',
            '"Magnificent!" he beamed, handing you a smooth blue crystal called the Tidepool Star Prism. "You used a smart test to find what was hidden, and a [[gentle|kind and careful]] idea to help it find its courage!"',
          ],
          gate: {
            question: 'What two strengths did Professor Inkwell say helped you succeed tonight?',
            options: [
              'Using a smart test to find the star, and using a gentle idea to help it feel brave.',
              'Swimming faster than the tide and climbing the tallest bookshelf.',
              'Speaking louder than the ocean waves and carrying five lanterns.',
              'Memorizing every book in the library before midnight.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'You used a smart test to find what was hidden, and a gentle idea to help it find its courage!',
            nudge: 'Read Professor Inkwell’s final sentence closely.',
            insight: 'Quest Mastered! Smart testing + gentle kindness earned you the Tidepool Star Prism.',
          },
        },
        grade5: {
          paragraphs: [
            'Beyond the sapphire arch, the Little Bear gleamed whole again, its restored beacon winking once in unmistakable gratitude. Professor Inkwell clapped four pairs of tentacles together in a delighted rhythm.',
            '"Remarkable work," the librarian beamed, presenting you with a faceted Tidepool Star Prism. "Logic led you to the conch shell, yet [[compassion|caring understanding for another’s feelings]] showed you how to bridge the distance home. Every great reader needs both."',
          ],
          gate: {
            question: 'How does Professor Inkwell connect your adventure to being a great reader?',
            options: [
              'He notes that great readers need both logic (to spot clues) and compassion (to understand feelings).',
              'He says great readers always study astronomy beside the ocean.',
              'He explains that prisms help people read faster in dim caverns.',
              'He warns that constellations often fall into libraries during winter.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Logic led you to the conch shell, yet compassion showed you how to bridge the distance home. Every great reader needs both.',
            nudge: 'Look at the two qualities Professor Inkwell names in his closing remark.',
            insight: 'Quest Mastered! You unlocked the Tidepool Mirror Ending and earned the Tidepool Star Prism.',
          },
        },
      },
      ending: {
        id: 'ending-sl-pool',
        title: 'Guides of the Starlight Tide',
        badge: 'Tidepool Mirror Ending',
        relicId: 'relic-star-prism',
        summary: {
          grade3: 'You tested the cavern lights, found the shy star in a pink seashell, showed it its family in the tidepool, and earned the Tidepool Star Prism!',
          grade5: 'Using the astrolabe’s steady-light test and the comforting reflection of the Little Bear in the tidepool, you guided the fallen star home and earned the Tidepool Star Prism.',
        },
      },
    },

    'sl-3-stacks': {
      id: 'sl-3-stacks',
      chapterNumber: 3,
      title: 'The Humming Atlas',
      locationTag: 'Whispering Spiral Stacks',
      tiers: {
        grade3: {
          paragraphs: [
            'Up the creaking spiral stairs, you followed speckles of silver dust to the Astronomy Shelf. Every candle sconce flickered as you walked past — except a bright golden pinpoint peeking out from between the pages of a giant open star-atlas!',
            'You waved your hand gently. The light did not flicker at all, and a soft ocean hum drifted right off the paper. Looking at the open page, you gasped: the little star had nestled right onto the drawn picture of the Little Bear, because it was [[homesick|missing home and family]] and trying to remember the map back to its spot!',
          ],
          gate: {
            question: 'Why did the fallen star hide inside the open star-atlas?',
            options: [
              'It missed its home and was looking at the map of the Little Bear to remember its way back.',
              'It wanted to learn how to spell Professor Inkwell’s name.',
              'It was trying to keep the book open so the wind would not close it.',
              'It got trapped when a heavy globe rolled onto the shelf.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'the little star had nestled right onto the drawn picture of the Little Bear, because it was homesick and trying to remember the map back to its spot!',
            nudge: 'Check what page the star was resting on and why.',
            insight: 'Such a sweet detail! The lost star had curled up right on its own constellation map.',
          },
        },
        grade5: {
          paragraphs: [
            'Ascending the curving oak stairs, you traced glints of stardust straight to the Celestial Cartography aisle. Every beeswax sconce dipped in your wake — except one crisp pinpoint of gold resting calmly atop an open folio of sky-charts.',
            'You fanned a bookmark past it; the beam held [[steadfast|firm and unchanging]], humming like distant surf. Peering down at the inked vellum, you felt a tug of sympathy: the stray star had curled directly onto the illustrated Little Bear, tracing the silver connecting lines as though studying a map home from a foreign land.',
          ],
          gate: {
            question: 'What can you infer from the star curling directly onto the inked lines of the Little Bear chart?',
            options: [
              'It longs to return to its constellation and is trying to orient itself using the star-map.',
              'It is trying to erase the ink so astronomers cannot draw it again.',
              'It prefers resting on parchment because stone floors are too cold.',
              'It mistook the brass bookmark for another fallen star.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'the stray star had curled directly onto the illustrated Little Bear, tracing the silver connecting lines as though studying a map home',
            nudge: 'Think about why a lost traveler would study a map of their own home.',
            insight: 'Lovely inference! The star’s actions reveal its longing without it ever speaking a word.',
          },
        },
      },
      nextSceneId: 'sl-4-stacks',
    },

    'sl-4-stacks': {
      id: 'sl-4-stacks',
      chapterNumber: 4,
      title: 'The Paper Boat Express',
      locationTag: 'Upper Balcony',
      tiers: {
        grade3: {
          paragraphs: [
            'From the high balcony, you saw the tidepool below shrinking fast! Running all the way down the winding stairs might take too long — and the tiny star was too nervous to jump from such a tall railing.',
            'Spotting a sheet of thick blue parchment on the reading table, you folded a crisp paper sailboat with tall, curved sides. Gently, you invited the star aboard. Its light felt warm, not hot, so the paper stayed completely safe. With a smooth [[glide|easy floating movement through the air]], the paper boat sailed down in a gentle spiral and landed softly right in the center of the tidepool! Flash! The star bounced off the mirror-water and rocketed home!',
          ],
          gate: {
            question: 'Why didn’t the glowing star burn the paper sailboat?',
            options: [
              'Because the star’s light was warm and gentle, not hot like a candle flame.',
              'Because you dipped the paper boat in seawater first.',
              'Because Professor Inkwell cast a frost spell on the balcony.',
              'Because the boat was actually folded out of tin foil.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Its light felt warm, not hot, so the paper stayed completely safe.',
            nudge: 'Check what the passage says about the temperature of the star’s light.',
            insight: 'Great detail spotting! Cool/warm starlight made the paper-boat glider completely safe.',
          },
        },
        grade5: {
          paragraphs: [
            'Glancing over the carved balustrade, you saw the tidepool receding rapidly; descending the narrow spiral staircase carefully would take precious minutes, yet the timid star recoiled whenever you stepped near the drop.',
            'Thinking fast, you creased a stiff sheet of azure chart-paper into a wide-winged glider boat. Unlike beeswax flame, cool starlight posed no scorching risk, so the star settled gladly into the paper hull. You launched it on a gentle [[buoyant|light and floating easily]] arc; the paper craft spiraled down like a falling maple seed and kissed the glassy tidepool dead-center. In a shimmer of silver spray, the star leaped from its reflection straight into the midnight sky!',
          ],
          gate: {
            question: 'Why was folding a paper glider boat a better choice than carrying the star down the spiral stairs?',
            options: [
              'The tide was draining too fast for a slow stair climb, and the glider carried the nervous star safely and swiftly straight to the pool.',
              'The spiral staircase had been blocked by fallen encyclopedias.',
              'Professor Inkwell forbade anyone from carrying stars on the stairs.',
              'The paper chart was enchanted to fly all the way to the Little Bear.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'the tidepool receding rapidly; descending the narrow spiral staircase carefully would take precious minutes',
            nudge: 'Consider the time pressure of the draining tidepool at the start of the scene.',
            insight: 'Awesome problem-solving comprehension! Speed + safety solved both constraints at once.',
          },
        },
      },
      nextSceneId: 'sl-5-stacks',
    },

    'sl-5-stacks': {
      id: 'sl-5-stacks',
      chapterNumber: 5,
      title: 'The Archivist’s Pearl Quill',
      locationTag: 'Starlight Reading Desk',
      tiers: {
        grade3: {
          paragraphs: [
            'High above the cavern, the Little Bear shone brighter than ever, and your little blue paper boat floated peacefully in the tidepool below. Professor Inkwell hurried over, laughing with relief.',
            '"A paper boat express from the top shelf — I have read ten thousand books and never seen a [[cleverer|smarter or more creative]] rescue!" he cheered, presenting you with his shimmering Archivist Pearl Quill. "May you always write your own bright adventures!"',
          ],
          gate: {
            question: 'What impressed Professor Inkwell most about your rescue?',
            options: [
              'Your creative idea to glide the star safely down to the tidepool in a folded paper boat.',
              'How quickly you re-shelved all the books in the Astronomy aisle.',
              'That you memorized the names of all seven stars in the Little Bear.',
              'That you climbed the stairs without making a single creak.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'A paper boat express from the top shelf — I have read ten thousand books and never seen a cleverer rescue!',
            nudge: 'Read Professor Inkwell’s joyful exclamation in the final paragraph.',
            insight: 'Quest Mastered! Creativity and quick reading earned you the Archivist Pearl Quill.',
          },
        },
        grade5: {
          paragraphs: [
            'Overhead, the restored Little Bear gleamed against the velvet sky while your azure paper glider bobbed serenely across the tidepool. Professor Inkwell glided across the floor, chuckling in sheer admiration.',
            '"In three centuries of cataloging adventures, I have never witnessed a more [[resourceful|clever at solving problems with whatever is at hand]] launch!" he declared, placing the gleaming Archivist Pearl Quill into your care. "You read the room, trusted the evidence, and turned a humble chart into wings."',
          ],
          gate: {
            question: 'What does Professor Inkwell mean when he says you "read the room" and "turned a humble chart into wings"?',
            options: [
              'You observed your surroundings closely and creatively repurposed an ordinary piece of paper to save the star.',
              'You read every single plaque on the cavern walls aloud.',
              'You drew wings on the Little Bear constellation inside the atlas.',
              'You built a wooden sailboat out of broken library shelves.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'You read the room, trusted the evidence, and turned a humble chart into wings.',
            nudge: 'Think about how "reading" applies both to books and to noticing clues in your environment.',
            insight: 'Quest Mastered! You unlocked the Paper Glider Ending and earned the Archivist Pearl Quill.',
          },
        },
      },
      ending: {
        id: 'ending-sl-stacks',
        title: 'Navigators of the Spiral Stacks',
        badge: 'Paper Glider Ending',
        relicId: 'relic-pearl-quill',
        summary: {
          grade3: 'You found the homesick star curled inside a star-atlas, folded a paper boat to glide it to the tidepool before low tide, and earned the Archivist Pearl Quill!',
          grade5: 'By tracing the homesick star to the Celestial Cartography aisle and launching it via a folded paper glider before low tide, you restored the Little Bear and earned the Archivist Pearl Quill.',
        },
      },
    },
  },
};
