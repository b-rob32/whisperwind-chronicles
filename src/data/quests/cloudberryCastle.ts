import type { QuestDefinition } from '../../types';

export const CLOUDBERRY_CASTLE_QUEST: QuestDefinition = {
  id: 'cloudberry-castle',
  title: "Cloudberry Castle's Missing Crown",
  subtitle: 'Queen Aurelia’s sun-gold crown vanished before the Skyberry Festival — inspect the castle clues to find it!',
  artPath: './art/cloudberry-castle.jpg',
  mapPosition: { x: 54, y: 26 },
  themeColor: '#b45309',
  estimatedMinutes: 10,
  totalChapters: 5,
  totalEndings: 2,
  startSceneId: 'cc-1',
  scenes: {
    'cc-1': {
      id: 'cc-1',
      chapterNumber: 1,
      title: 'The Empty Velvet Cushion',
      locationTag: 'Sunlit Courtyard',
      tiers: {
        grade3: {
          paragraphs: [
            'Colorful silk banners fluttered across Cloudberry Castle, which floated high above the valley on fluffy golden clouds. Today was the Skyberry Festival, yet the royal courtyard was [[hushed|very quiet and still]] with worry.',
            'Queen Aurelia stood beside an empty velvet cushion. "My sun-gold crown vanished right after breakfast!" she said. "The vault door was still locked from the inside, and only the high round window was open. On the windowsill, we found three bright blue jay feathers and a smudge of sticky purple cloudberry jam."',
            'The royal guard scratched his helmet. "Why would a bird want a heavy gold crown — unless it wasn’t looking for gold at all?"',
          ],
          gate: {
            question: 'What clues show that the culprit came through the high window rather than the door?',
            options: [
              'The vault door was still locked from the inside, while the high window was open with feathers and jam on the sill.',
              'The silk banners outside were torn in half.',
              'The royal guard forgot to close the front castle gate.',
              'The velvet cushion had muddy boot prints on it.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'The vault door was still locked from the inside, and only the high round window was open.',
            nudge: 'Check what Queen Aurelia says about the vault door and the windowsill.',
            insight: 'Great detective work! Locked from the inside + open high window + feathers narrow the suspects immediately.',
          },
        },
        grade5: {
          paragraphs: [
            'Pennants of scarlet and azure snapped in the warm sky-breeze above Cloudberry Castle, yet an uneasy [[hush|sudden silence]] hung over the sun-drenched courtyard. Today marked the grand Skyberry Festival, and Queen Aurelia’s heirloom sun-gold crown had disappeared.',
            '"It was resting on this cushion when the clocktower chimed nine," Queen Aurelia explained, gesturing to an unbolted casement high overhead. "The iron vault door remained latched from within, leaving that upper window as the sole entrance. Even stranger, our stewards discovered three cobalt-blue jay feathers beside a smear of freshly crushed cloudberry jam — yet not a single silver goblet beside the crown was touched."',
            'You frowned thoughtfully. A greedy thief would have swept up the silver too; whoever took the crown had a far more particular reason.',
          ],
          gate: {
            question: 'Why does leaving the silver goblets untouched make an ordinary jewel thief unlikely?',
            options: [
              'A greedy thief would have stolen the nearby silver too, suggesting the taker wanted something specific about the crown itself.',
              'Silver goblets are too bright to carry in the morning sunlight.',
              'Blue jays are famous for collecting silver spoons instead of gold.',
              'Queen Aurelia had already locked the silver goblets in the kitchen.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'not a single silver goblet beside the crown was touched',
            nudge: 'Look at the final sentence — what would a typical thief have done differently?',
            insight: 'Sharp inference! What is LEFT BEHIND at a mystery scene is often as revealing as what is taken.',
          },
        },
      },
      nextSceneId: 'cc-2',
    },

    'cc-2': {
      id: 'cc-2',
      chapterNumber: 2,
      title: 'The Baker’s Note',
      locationTag: 'Royal Sky-Kitchen',
      tiers: {
        grade3: {
          paragraphs: [
            'Following the scent of sweet cloudberry jam led you to the Royal Sky-Kitchen, where Chef Puddle the Badger was frosting a towering berry cake. He pointed his wooden spoon toward a sticky trail on the counter.',
            '"Aha! That jam came from my cooling pies!" Chef Puddle laughed. "Ten minutes ago, a cheeky blue jay named Pippin swooped in, dipped his claws in berry jam, and flew straight out toward the castle courtyard. Wait — my nephew Toby also told me the crown had a [[fragrant|sweet-smelling]] dried cloudberry tucked into its gold ribbon!"',
            'Chef Puddle wiped his paws on his apron. "If Pippin carried it off, he either flew up to his shiny nest in the Belfry Clocktower, or down to the Floating Berry Terraces where all the jays feast!"',
          ],
          gate: {
            question: 'Why did Pippin the blue jay probably take Queen Aurelia’s crown?',
            options: [
              'Because a sweet-smelling cloudberry was tucked into the crown’s ribbon, and Pippin loves cloudberries.',
              'Because Chef Puddle asked Pippin to polish the gold.',
              'Because Pippin wanted to become the new king of Cloudberry Castle.',
              'Because the crown was made out of blueberry cake.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'the crown had a fragrant dried cloudberry tucked into its gold ribbon!',
            nudge: 'Read what Chef Puddle’s nephew Toby noticed tucked into the crown.',
            insight: 'Aha! Pippin wasn’t after royal treasure — he was after the sweet berry tucked in the ribbon!',
          },
        },
        grade5: {
          paragraphs: [
            'The purple smudge matched the bubbling kettles of the Royal Sky-Kitchen, where Chef Puddle the Badger was glazing festival tarts. He chuckled knowingly the moment you mentioned cobalt feathers.',
            '"That rascal Pippin!" Chef Puddle declared, tapping his whisk against a cooling rack. "Just past nine, that bold blue jay skidded straight across my jam tartlets, leaving purple tracks before darting toward the vault window. Now think about it: blue jays adore shiny trinkets, certainly, yet Pippin is especially [[devoted|loyally obsessed with]] to cloudberries — and the Royal Florist tucked a candied cloudberry sprig right behind the crown’s centerpiece jewel this morning!"',
            'Chef Puddle pointed a floury paw out the arch. "That narrows Pippin’s hideout to two perches: the sunny rafters of the Belfry Clocktower, or the lush Floating Berry Terraces below the sky-bridge."',
          ],
          gate: {
            question: 'How does Chef Puddle’s account connect the jam smudge, the untouched silver, and the missing crown?',
            options: [
              'Pippin got jam on his claws in the kitchen, then flew into the vault specifically for the candied cloudberry tucked on the crown, ignoring the plain silver.',
              'Chef Puddle accidentally baked the crown inside a giant cloudberry tart.',
              'Pippin traded the silver goblets to the Royal Florist for a basket of berries.',
              'The Royal Florist hid the crown inside the kitchen pantry for safekeeping.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'the Royal Florist tucked a candied cloudberry sprig right behind the crown’s centerpiece jewel this morning!',
            nudge: 'Combine the kitchen jam tracks with what the Royal Florist added to the crown.',
            insight: 'Masterful synthesis! Every single clue from Chapter 1 just snapped together like puzzle pieces.',
          },
        },
      },
      choices: [
        {
          id: 'branch-clocktower',
          label: 'Climb the Belfry Clocktower',
          description: 'Ascend the winding stairs to check the high brass rafters beneath the great bell.',
          nextSceneId: 'cc-3-clock',
        },
        {
          id: 'branch-terraces',
          label: 'Cross to the Floating Berry Terraces',
          description: 'Walk the wooden sky-bridge to the sunlit gardens where the blue jays gather.',
          nextSceneId: 'cc-3-garden',
        },
      ],
    },

    'cc-3-clock': {
      id: 'cc-3-clock',
      chapterNumber: 3,
      title: 'Tick-Tock in the Belfry',
      locationTag: 'Belfry Clocktower',
      tiers: {
        grade3: {
          paragraphs: [
            'You climbed the spiral stairs of the Clocktower until huge brass gears ticked gently beside you. High on a wooden beam sat a messy nest woven from ribbons, shiny bottle caps, and — gleaming in the sunlight — Queen Aurelia’s crown!',
            'Pippin hopped onto the edge of the nest, puffing out his blue chest. He had already nibbled the dried cloudberry, yet he still guarded the gold crown fiercely. Looking closely, you saw why: a tiny brass clock-key was [[tangled|caught and twisted]] in the crown’s ribbon, and Pippin was using the golden ring to keep three speckled eggs from rolling off the beam!',
          ],
          gate: {
            question: 'Why was Pippin still guarding the crown even after finishing the cloudberry?',
            options: [
              'The round golden crown was acting like a bumper to keep three speckled eggs from rolling off the beam.',
              'He was trying to hide the crown before the clock struck noon.',
              'He wanted to trade the crown to the royal guard for more jam.',
              'He was stuck to the gold by dried purple jam.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Pippin was using the golden ring to keep three speckled eggs from rolling off the beam!',
            nudge: 'Look closely at what is resting safely inside the circle of the crown.',
            insight: 'What a twist! Pippin wasn’t being greedy — he was protecting his nest of eggs!',
          },
        },
        grade5: {
          paragraphs: [
            'After winding up seventy sunlit stone steps, you stepped into the echoing Belfry where massive brass cogs turned with a steady hum. Perched atop a crossbeam sat a sprawling nest of silk scraps, silver foil, and — unmistakably — the sun-gold crown.',
            'Pippin bristled on the rim, squawking defensively though the candied berry sprig was already gone. Pausing to observe instead of grabbing, you noticed something crucial: the wooden beam slanted slightly downward, and the sturdy circular band of the crown had been wedged into place to [[cradle|hold gently and safely]] three pale speckled eggs from slipping toward the edge. Caught in the ribbon beside it dangled the castle’s lost Clocktower Sun Key.',
          ],
          gate: {
            question: 'What would likely happen if you simply snatched the crown off the beam without a plan?',
            options: [
              'The three speckled eggs could roll off the slanted beam because the crown was bracing them in place.',
              'The great brass bell would immediately fall off its rope.',
              'Pippin would fly back to the kitchen and eat the festival cake.',
              'The cloud underneath the castle would drift away.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'the wooden beam slanted slightly downward, and the sturdy circular band of the crown had been wedged into place to cradle three pale speckled eggs',
            nudge: 'Think about the physical job the crown’s circular band is doing on that slanted beam.',
            insight: 'Careful cause-and-effect thinking! Pausing to observe saved Pippin’s eggs from disaster.',
          },
        },
      },
      nextSceneId: 'cc-4-clock',
    },

    'cc-4-clock': {
      id: 'cc-4-clock',
      chapterNumber: 4,
      title: 'The Great Nest Trade',
      locationTag: 'Clocktower Rafters',
      tiers: {
        grade3: {
          paragraphs: [
            'You whispered softly so you would not startle Pippin. From your pack, you pulled out a soft woven wool cap and curled it into a cozy, sturdy ring. Next to it, you set two fresh cloudberries you had grabbed from Chef Puddle’s bowl.',
            'Pippin tilted his head, eyeing the soft warm wool. Slowly, you slid the wool ring right around the nest so the eggs stayed [[snug|warm, safe, and tightly tucked in]] and safe. Pippin hopped over, tested the soft wool with one claw, chirped happily, and nudged the cold metal crown right toward your hands — along with the shiny Clocktower Sun Key!',
          ],
          gate: {
            question: 'Why was the wool cap an even better nest guard for Pippin than the gold crown?',
            options: [
              'It kept the eggs just as safe from rolling, and it was soft and warm instead of cold metal.',
              'It was much heavier than gold so the wind could not move it.',
              'It matched the color of the castle’s silk banners.',
              'It could play music whenever the clock struck twelve.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'so the eggs stayed snug and safe. Pippin hopped over, tested the soft wool with one claw, chirped happily, and nudged the cold metal crown right toward your hands',
            nudge: 'Compare how the wool cap feels for baby eggs compared to cold metal.',
            insight: 'Brilliant trade! Thinking about what Pippin truly needed made everyone a winner.',
          },
        },
        grade5: {
          paragraphs: [
            'Rather than reaching for the gold, you knelt calmly and folded a thick braided scarf from your satchel into a plush, circular ring. Beside it, you placed two ripe cloudberries. Cold gold might block an egg from rolling, you reasoned, yet soft wool would both brace the nest AND insulate it against the high-altitude breeze.',
            'Pippin studied your [[patient|calm and unhurried]] movements with bright bead-like eyes. Gently, you eased the wool ring snugly beneath the nest’s lower rim before lifting the crown a single inch. Sensing the eggs were even warmer and more secure than before, Pippin gave a pleased trill, snatched a berry, and nudged both the crown and the gleaming Clocktower Sun Key into your palm.',
          ],
          gate: {
            question: 'What two advantages did your folded wool scarf offer over the gold crown?',
            options: [
              'It braced the eggs securely against the slanted beam AND insulated them from the chilly high-altitude breeze.',
              'It hid the nest from the royal guards and chimed every hour.',
              'It floated on clouds and smelled like cinnamon.',
              'It was brighter than gold and scared away stray owls.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'soft wool would both brace the nest AND insulate it against the high-altitude breeze.',
            nudge: 'Look for the two benefits you reasoned out before offering the scarf.',
            insight: 'Top-notch comprehension! You caught both practical reasons why Pippin gladly accepted the trade.',
          },
        },
      },
      nextSceneId: 'cc-5-clock',
    },

    'cc-5-clock': {
      id: 'cc-5-clock',
      chapterNumber: 5,
      title: 'Chimes of the Skyberry Festival',
      locationTag: 'Cloudberry Courtyard',
      tiers: {
        grade3: {
          paragraphs: [
            'When you returned the gleaming sun-gold crown just before the noon bell, the whole courtyard erupted in cheers! Queen Aurelia laughed with delight when she heard about Pippin’s cozy wool nest.',
            '"You solved our mystery with clever eyes AND a kind heart," the Queen beamed, gifting you the musical Clocktower Sun Key. "From now on, Chef Puddle will leave a berry bowl on the clocktower windowsill every morning so Pippin never needs to [[borrow|take for a little while]] my crown again!"',
          ],
          gate: {
            question: 'How is Queen Aurelia making sure Pippin won’t take the crown again in the future?',
            options: [
              'By having Chef Puddle leave a bowl of berries on the clocktower windowsill each morning.',
              'By locking every window in Cloudberry Castle forever.',
              'By sending Pippin to live in the Whispering Woods.',
              'By painting her crown purple so birds cannot see it.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Chef Puddle will leave a berry bowl on the clocktower windowsill every morning',
            nudge: 'Read Queen Aurelia’s cheerful new castle rule in the last paragraph.',
            insight: 'Quest Mastered! Kindness and cleverness saved the Skyberry Festival.',
          },
        },
        grade5: {
          paragraphs: [
            'Just as the clocktower hands approached noon, you stepped into the courtyard bearing the sun-gold crown. Applause rippled across the cloud-terraces, and Queen Aurelia’s eyes crinkled with amusement as you recounted the tale of the slanted beam and the wool-ring trade.',
            '"Any guard could have chased a frightened bird from the rafters," Queen Aurelia said warmly, presenting you with the resonant Clocktower Sun Key. "You took the time to understand WHY the crown was taken — and left our belfry nest safer than you found it. Henceforth, a dish of fresh cloudberries shall greet Pippin each dawn so he remains our honored [[sentinel|watchful guardian]] of the tower."',
          ],
          gate: {
            question: 'Why does Queen Aurelia say your solution was better than simply having guards chase Pippin away?',
            options: [
              'Because you understood Pippin’s real need, protected his eggs, and turned a troublemaker into an honored tower guardian.',
              'Because the royal guards were too afraid of heights to climb the stairs.',
              'Because Pippin promised to bake the next festival cake.',
              'Because the Clocktower Sun Key only works for travelers from the valley.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'You took the time to understand WHY the crown was taken — and left our belfry nest safer than you found it.',
            nudge: 'Re-read Queen Aurelia’s contrast between chasing the bird and what you did.',
            insight: 'Quest Mastered! You unlocked the Belfry Trade Ending and earned the Clocktower Sun Key.',
          },
        },
      },
      ending: {
        id: 'ending-cc-clock',
        title: 'Keepers of the Sky-Bell',
        badge: 'Belfry Trade Ending',
        relicId: 'relic-sky-key',
        summary: {
          grade3: 'You climbed the Clocktower, traded a warm wool ring for Pippin’s eggs, returned the crown in time for noon, and earned the Clocktower Sun Key!',
          grade5: 'By spotting why Pippin needed the crown on the slanted beam and trading a warm wool scarf, you saved both the festival and the nest, earning the Clocktower Sun Key.',
        },
      },
    },

    'cc-3-garden': {
      id: 'cc-3-garden',
      chapterNumber: 3,
      title: 'Footprints Among the Berry Bushes',
      locationTag: 'Floating Berry Terraces',
      tiers: {
        grade3: {
          paragraphs: [
            'Crossing the creaking wooden sky-bridge brought you to the Floating Berry Terraces, where plump purple cloudberries sparkled like jewels. Beneath a blooming rosebush, you found Pippin chatting with a tiny field mouse wearing a leaf cap.',
            'Pippin hopped excitedly around a hollow silver watering can — and tucked safely inside was Queen Aurelia’s crown! "Don’t scold him!" squeaked Tilly the Garden Mouse. "My cousin’s tunnel flooded when a raincloud [[drifted|floated slowly]] right through the garden! Pippin brought the shiny crown to reflect sunlight down into the dark hole so we could rescue our winter acorns!"',
          ],
          gate: {
            question: 'Why did Pippin bring the shiny gold crown to Tilly the Garden Mouse?',
            options: [
              'To bounce sunlight like a mirror down into a dark flooded tunnel so the mice could rescue their acorns.',
              'To trade the crown for a basket of fresh roses.',
              'Because the mice wanted to use the crown as a tiny swimming pool.',
              'To hide it inside the watering can until next summer.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Pippin brought the shiny crown to reflect sunlight down into the dark hole so we could rescue our winter acorns!',
            nudge: 'Read Tilly’s explanation of what the shiny crown was doing for the flooded tunnel.',
            insight: 'Brilliant! Pippin was using the polished gold crown like a rescue mirror!',
          },
        },
        grade5: {
          paragraphs: [
            'The wooden sky-bridge swayed gently above sunlit puffs of cumulus, opening onto terraced gardens heavy with ripe cloudberries. Beside a copper watering can, Pippin the blue jay hopped anxiously next to a resolute field mouse in a stitched leaf cap.',
            'Inside the tilted can gleamed the missing crown. "Hold on — Pippin is a hero, not a thief!" squeaked Tilly the Gardener Mouse. "A stray raincloud [[drenched|soaked completely]] our lower storeroom at dawn, plunging the root-cellar into pitch blackness. Pippin remembered how brightly the Queen’s polished crown catches the morning sun, so he fetched it to angle a beam of light down the shaft while we haul our winter harvest to dry ground!"',
          ],
          gate: {
            question: 'What property of the crown made it useful for Tilly’s flooded storeroom?',
            options: [
              'Its polished gold surface reflected bright morning sunlight down into the pitch-dark root-cellar.',
              'Its jewels glowed automatically whenever they touched rainwater.',
              'Its velvet cushion soaked up all the puddles inside the tunnel.',
              'Its weight held the garden gate open against the wind.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'Pippin remembered how brightly the Queen’s polished crown catches the morning sun, so he fetched it to angle a beam of light down the shaft',
            nudge: 'Check what Pippin remembered about the Queen’s crown that solved the pitch-dark cellar.',
            insight: 'Sharp scientific and reading inference! Using gold as a reflector turned a crown into a skylight.',
          },
        },
      },
      nextSceneId: 'cc-4-garden',
    },

    'cc-4-garden': {
      id: 'cc-4-garden',
      chapterNumber: 4,
      title: 'The Tin-Lid Skylight',
      locationTag: 'Sunlit Terrace Garden',
      tiers: {
        grade3: {
          paragraphs: [
            'You peered down the dark mouse tunnel and saw two more mice still rolling dry acorns toward the ladder. They needed the light for another ten minutes, yet the Skyberry Festival was about to begin!',
            'Then you noticed the shiny tin lid on the gardener’s potting bench. "Look!" you said, propping the bright tin lid on two flowerpots at the exact same [[angle|slant or tilt]] as the crown. A crisp sunbeam bounced straight down the hole! Tilly cheered, Pippin bowed with a flutter of blue wings, and you gently lifted the clean crown from the watering can.',
          ],
          gate: {
            question: 'How did you keep the mouse tunnel lit while still returning Queen Aurelia’s crown on time?',
            options: [
              'By propping a shiny tin lid at the same angle on two flowerpots to bounce sunlight down the hole.',
              'By asking the mice to wait until tomorrow to rescue their acorns.',
              'By carrying the entire potting bench back to the castle courtyard.',
              'By pouring water out of the watering can to wash away the clouds.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'propping the bright tin lid on two flowerpots at the exact same angle as the crown. A crisp sunbeam bounced straight down the hole!',
            nudge: 'Look at what shiny object on the potting bench replaced the crown.',
            insight: 'Ingenious! A simple tin lid did the exact same reflection job so the crown could go home!',
          },
        },
        grade5: {
          paragraphs: [
            'Peering down the damp shaft, you watched two determined mice hoisting damp hazelnut sacks up a twig ladder. They needed another quarter-hour of light, yet the festival trumpets were already warming up across the sky-bridge.',
            'Scanning the potting bench, your eyes caught a polished tin pie-plate. Balancing it between two terracotta pots, you tilted the shiny metal to the exact [[inclination|angle or slope]] the crown had held. Instantly, a broad ribbon of sunlight poured straight into the cellar. Tilly gave a grateful salute, Pippin chattered approvingly, and you retrieved the unharmed crown just in time.',
          ],
          gate: {
            question: 'Why was matching the exact tilt (inclination) of the tin pie-plate important?',
            options: [
              'So the reflected sunlight would aim directly down the narrow tunnel shaft just as the crown had done.',
              'So rainwater would slide off the plate and fill the terracotta pots.',
              'So the pie-plate would look like a second royal crown from the castle.',
              'So Pippin could use the plate as a slide back across the sky-bridge.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'you tilted the shiny metal to the exact inclination the crown had held. Instantly, a broad ribbon of sunlight poured straight into the cellar.',
            nudge: 'Think about how reflections work — what happened the moment you matched the angle?',
            insight: 'Spot-on! Matching the reflection angle kept the rescue lit without delaying the festival.',
          },
        },
      },
      nextSceneId: 'cc-5-garden',
    },

    'cc-5-garden': {
      id: 'cc-5-garden',
      chapterNumber: 5,
      title: 'Toast of the Cloudberry Terrace',
      locationTag: 'Royal Festival Lawn',
      tiers: {
        grade3: {
          paragraphs: [
            'Queen Aurelia placed the crown back on her head as festival music filled the sky. When she heard how Pippin tried to help the garden mice — and how you built a tin-lid skylight — she clapped her hands in delight.',
            '"A crown is meant to help the kingdom shine, and today it did!" she smiled, pinning a sparkling Golden Cloudberry Brooch to your cloak. "And Tilly’s family is [[officially|formally and proudly]] invited to the royal berry feast!"',
          ],
          gate: {
            question: 'What did Queen Aurelia mean when she said, "A crown is meant to help the kingdom shine, and today it did"?',
            options: [
              'She was glad her crown helped light the mice’s rescue — and proud that kindness shone across her kingdom.',
              'She wanted the guards to polish the crown with extra soap.',
              'She was upset that the crown had gotten dusty in the garden.',
              'She planned to give her crown to Tilly permanently.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'A crown is meant to help the kingdom shine, and today it did!',
            nudge: 'Think about the playful double meaning of the word "shine" in Queen Aurelia’s speech!',
            insight: 'Quest Mastered! You caught the clever wordplay and saved the festival with creativity.',
          },
        },
        grade5: {
          paragraphs: [
            'Trumpets trilled across the cloud-bridge as Queen Aurelia restored the sun-gold crown to her brow. Hearing of Pippin’s misguided yet noble heist — and your improvised tin-lid reflector — she burst into warm laughter.',
            '"A ruler’s crown ought to bring light to the smallest corners of her realm," Queen Aurelia declared, fastening a gleaming Golden Cloudberry Brooch to your collar. "Today it did so quite [[literally|in the exact, real-world sense]]! Set an extra table on the terrace for Tilly, her harvest crew, and our cleverest jay."',
          ],
          gate: {
            question: 'Why does Queen Aurelia add the phrase "quite literally" after saying a crown ought to bring light to the smallest corners of her realm?',
            options: [
              'Normally "bringing light" is figurative for kindness, but today her crown actually reflected real sunbeams into a tiny mouse cellar.',
              'She was reminding Chef Puddle to light the festival lanterns early.',
              'She was quoting an ancient law written on the castle wall.',
              'She meant that the crown was too bright to wear outdoors.',
            ],
            correctIndex: 0,
            evidenceSnippet: 'A ruler’s crown ought to bring light to the smallest corners of her realm... Today it did so quite literally!',
            nudge: 'Compare the figurative meaning of "bringing light" with what the crown physically did in Chapter 3.',
            insight: 'Quest Mastered! Catching literal vs. figurative wordplay is a hallmark of a 5th-grade master reader.',
          },
        },
      },
      ending: {
        id: 'ending-cc-garden',
        title: 'Sunbeam Inventors of the Terrace',
        badge: 'Garden Skylight Ending',
        relicId: 'relic-berry-brooch',
        summary: {
          grade3: 'You discovered Pippin helping Tilly the Garden Mouse, invented a tin-lid skylight, saved the festival, and earned the Golden Cloudberry Brooch!',
          grade5: 'By uncovering Pippin’s sunlit rescue mission on the Floating Terraces and crafting a tin-plate reflector, you saved both harvest and festival, earning the Golden Cloudberry Brooch.',
        },
      },
    },
  },
};
