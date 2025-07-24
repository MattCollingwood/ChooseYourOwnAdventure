import {createSlice} from '@reduxjs/toolkit';
import React from 'react';
import * as images from '../assets/imageIndex';
import thunk from 'redux-thunk';


const storyPages = [
    {
        id: 1,
        title: "Checking In",
        image: images.cabin,
        content: `You and your best friend stand on the creaky wooden porch of an aging house nestled deep within a wooded cul-de-sac. Your breath clouds in the cool dusk air. You knock. The front door opens slowly. \n\nA man in a cardigan with wire-rimmed glasses peers out. “Welcome! I’m your host. What’s your name?” \n\nYou answer, giving your name and then your friend’s.\n\nHe nods. “Come in. I’ve been expecting you {{playerName}}.”\n\nYou exchange nervous glances with {{friendName}} and step inside.`,
        nextPage: [{label: "Continue to Page 44", route: "44"}]
    },
    {
        id: 2,
        title: "Leap of Faith",
        image: images.woodsclosest,
        content: `The trees are so close now. \n\nYour legs scream in protest. {{friendName}} disappears into the woods. \n\nYou feel the heat of the werewolf at your heels. \n\nYou leap—`,
        nextPage: [{label: "Continue to Page 53", route: "53"}]
    },
    {
        id: 3,
        title: "Dinner is Served",
        image: images.dinner,
        content: `You and {{friendName}} eat in a quiet trance. The house seems still. Too still. You both agree it’s been a long day and head upstairs to sleep. \n\n{{friendName}} chooses the master bedroom.`,
        nextPage: [{label: "Continue to Page 38", route: "38"}]
    },
    {
        id: 4,
        title: "A Desperate Measure",
        image: images.pail,
        content: `You climb onto the chair and reach upward. The latch is just within your grasp.\n\nYou stretch… almost…\n\nWith a lunge, you release the latch—but the chair collapses beneath you.\n\nyour ankle bends the wrong way as you crash to the floor.\n\nYou scream in pain.\n\nThe pail is too short. your only option now is…`,
        nextPage: [{label: "Use their back - page 18", route: "18"}]
    },
    {
        id: 5,
        title: "Checking Out the Master Bedroom",
        image: images.bedroom,
        content: `You place your things in the master bedroom, giving {{friendName}} the guest. The big bed and tall windows feel luxurious… but a bit too exposed.\n\nDinner smells beckon from below.`,
        nextPage: [{label: "Go to Page 8", route: "8"}]
    },
    {
        id: 6,
        title: "Down the Hatch",
        image: images.trapdoor,
        content: `The air is thick and wet. The wood under your feet groans with every step.\n\nAhead, a hallway looms.\n\nYou and {{friendName}} press forward.`,
        nextPage: [{label: "Go to Page 10", route: "10"}]
    },
    {
        id: 7,
        title: "Lights Out",
        image: images.darkroom,
        content: `You steady the chair and reach for the bulb.\n\nIt shatters in your hand.\n\nEverything goes black.\n\n{{friendName}} starts muttering.\n\nThen laughing.\n\nThen growling.\n\nyour friend is no longer your friend.\n\nTHE END.`,
        nextPage: [{label: "Return to Home", route: ""}]
    },
    {
        id: 8,
        title: "Dinner is Served",
        image: images.dinner,
        content: `You rejoin {{friendName}} downstairs. Dinner is surprisingly tasty. You both chat a bit, though neither of you mention the house’s odd energy.\n\nAfter eating, you head back up to bed.`,
        nextPage: [{label: "Get ready for bed - page 56", route: "56"}]
    },
    {
        id: 9,
        title: "In the Kitchen",
        image: images.kitchen,
        content: `You step into the kitchen, flashlight beam flickering over the countertops and stovetop.\n\nNothing.\n\nThen you hear it again—scraping—this time clearly from the dining room.\n\nYou swallow hard.`,
        nextPage: [{label: "Go to Page 29", route: "29"}]
    },
    {
        id: 10,
        title: "The Long Hallway",
        image: images.hallway,
        content: `From the darkness, growling echoes all around.\n\nThe hallway splits. Two doors.\n\n“Left or right?” {{friendName}} asks, voice shaking.\n\nYou decide:`,
        nextPage: [{label: "Left - page 16", route: "16"}, {label: "Right - page 47", route: "47"}]
    },
    {
        id: 11,
        title: "Into the Woods",
        image: images.woodsclosest,
        content: `You take off toward the woods. The fog rips past your face. Behind you—heavy paws thud against the ground.\n\nYou’re fast, but the werewolf is faster.\n\nFifty yards to go. He’s closing in.\n\nYou dive—just as claws grab your ankle.\n\nYou clutch a tree trunk and pull.`,
        nextPage: [{label: "Go to Page 21", route: "21"}]
    },
    {
        id: 12,
        title: "No Turning Back",
        image: images.pail,
        content: `You forgot—the latch is closed. Nothing is within reach.\n\nYou try the chair. It shatters.\n\nRed eyes appear at the trapdoor.\n\nyour final scream is swallowed by the night.\n\nTHE END.`,
        nextPage: [{label: "Return to Home", route: ""}]
    },
    {
        id: 13,
        title: "A Difficult Choice",
        image: images.stairs,
        content: `You hesitate, then decide {{friendName}} will just slow you down.\n\nYou grab the flashlight from your bag and carefully step down the stairs, one at a time. The wooden boards creak beneath your weight.\n\nYou pause at the base. The shadows stretch and crawl along the walls.\n\nWhere to?`,
        nextPage: [{label: "Check the kitchen - page 9", route: "9"}, {label: "Check the dining room - page 29", route: "29"}]
    },
    {
        id: 14,
        title: "The Right Room",
        image: images.pail,
        content: `You enter the room on the right. The door shuts behind you.\n\nA single bulb flickers above. The room is empty except for a rusted metal pail and a rickety wooden chair.\n\nIn the ceiling—a cellar door.\n\nDo you:`,
        nextPage: [{label: "Try to fix the light - page 17", route: "17"}, {label: "Leave it alone - page 42", route: "42"}]
    },
    {
        id: 15,
        title: "Confronting the Beast",
        image: images.werewolf,
        content: `You shove the door open and slam it shut behind you. The room is dim, lit only by a flickering wall sconce.\n\nA shadow looms in the corner. You squint.\n\nA werewolf. Its eyes glint red as it rises to full height.\n\nYou:`,
        nextPage: [{label: "Look for escape - page 32", route: "32"}, {label: "Attack - page 48", route: "48"}]
    },
    {
        id: 16,
        title: "The Left Turn",
        image: images.emptyroom,
        content: `You shove through the door. It slams shut.\n\nA werewolf stands in the corner, eyes glowing.\n\nDo you:`,
        nextPage: [{label: "Look for escape - page 28", route: "28"}, {label: "Attack - page 46", route: "46"}]
    },
    {
        id: 17,
        title: "Lights Out",
        image: images.darkroom,
        content: `You climb onto the chair to adjust the bulb. It slips from your fingers and shatters on the floor.\n\nPitch black.\n\nTime blurs. Hours. Days?\n\nYou pinch yourself. Nothing. Are you alive?\n\nThen—teeth.\n\nTHE END.`,
        nextPage: [{label: "Return to Home", route: ""}]
    },
    {
        id: 18,
        title: "Leg Up",
        image: images.pail,
        content: `{{friendName}} crouches down. you climb carefully, using his shoulders for support.\n\nYou grasp the cellar door and pull yourself up, but your hand slips on the damp frame.\n\nYou try again, gripping harder this time.\n\nYou make it up.\n\nYou offer {{friendName}} a hand, but sweat makes it hard to hold him.\n\nHe falls.\n\nYou’ve decided:`,
        nextPage: [{label: "Leave them - page 27", route: "27"}]
    },
    {
        id: 19,
        title: "Kicking and Screaming",
        image: images.werewolffight,
        content: `You scream and charge, hurling yourself at the werewolf with a flying kick.\n\nyour foot connects—but it doesn’t even flinch.\n\nThe werewolf turns, grabs you mid-air, and slams you down.\n\nEverything goes black.\n\nTHE END.`,
        nextPage: [{label: "Return to Home", route: ""}]
    },
    {
        id: 20,
        title: "Kitchen Help",
        image: images.kitchen,
        content: `You step into the kitchen to help {{friendName}}. The simple act of preparing food settles your nerves.\n\nDinner is ready.`,
        nextPage: [{label: "Go to Page 3", route: "3"}]
    },
    {
        id: 21,
        title: "Freedom, But at What Cost?",
        image: images.werewolfcabin,
        content: `As your ankle clears the tree line, the claw slips away.\n\nYou turn. The werewolf smashes against an invisible wall. It roars, furious.\n\nYou’re safe. But then—light flicks on in the house.\n\n{{friendName}} is awake.\n\nThe werewolf turns.\n\nYou try to go back—but the wall stops you.\n\nYou’re free… but your friend isn’t.\n\nTHE END.`,
        nextPage: [{label: "Return to Home", route: ""}]
    },
    {
        id: 22,
        title: "Fight Night",
        image: images.werewolffight,
        content: `You rush forward, arms wide, aiming to grab the beast’s throat.\n\nUp close, it’s bigger than you expected—at least three feet taller. It easily shrugs you off and swipes a claw across your back.\n\nYou hit the ground. Everything fades to black.\n\nTHE END.`,
        nextPage: [{label: "Return to Home", route: ""}]
    },
    {
        id: 23,
        title: "The Fall",
        image: images.pail,
        content: `You stand on the chair, stretching. The latch is just within reach.\n\nYou lunge to grab it—\n\nCRACK.\n\nThe chair collapses. Pain shoots up your leg.\n\nyour ankle is broken. You pass out.\n\nTHE END.`,
        nextPage: [{label: "Return to Home", route: ""}]
    },
    {
        id: 24,
        title: "Latching On",
        image: images.pail,
        content: `You place the pail below the door and step up.\n\nNot high enough.\n\nYou leap. Fingers grab the latch. You twist, and the doors swing open.\n\nWith a final pull, you’re out—greeted by fresh, cool air.`,
        nextPage: [{label: "Go to Page 30", route: "30"}]
    },
    {
        id: 25,
        title: "Settling In",
        image: images.stairs,
        content: `You carry your bags up the narrow stairs. At the top are two bedrooms. The master is large with a bay window; the guest room is smaller, cozier.\n\nYou decide who gets which room:`,
        nextPage: [{label: "Take the master - page 5", route: "5"}, {label: "Take the guest room - page 33", route: "33"}]
    },
    {
        id: 26,
        title: "Going Down Swinging",
        image: images.werewolffight,
        content: `You plant your feet and clench your fists. If this is it, you’re going down swinging.\n\nYou size up your options:`,
        nextPage: [{label: "Grapple and try to choke it out - page 22", route: "22"}, {label: "Launch a wild, desperate attack - page 19", route: "19"}]
    },
    {
        id: 27,
        title: "Into the Fog",
        image: images.woods,
        content: `You rise to your feet and stare across the yard.\n\nTwo red eyes glow from the fog. The forest is far—but maybe You can make it.\n\nDo you:`,
        nextPage: [{label: "Fight - page 31", route: "31"}, {label: "Run - page 11", route: "11"}]
    },
    {
        id: 28,
        title: "Trapped",
        image: images.darkroom,
        content: `You spin around the room, searching.\n\nNothing. No exits. No windows.\n\nYou turn back.\n\nThe werewolf snarls.`,
        nextPage: [{label: "Go to Page 46", route: "46"}]
    },
    {
        id: 29,
        title: "Trapdoor",
        image: images.trapdoor,
        content: `You slowly enter the dining room, the beam of your flashlight trembling with your hand.\n\nUnderneath the antique table, you see something... a wooden handle?\n\nIt’s a trapdoor.\n\nYou kneel beside it and run your fingers along its rough edges. It looks old—very old.\n\nDo you go find {{friendName}} first?`,
        nextPage: [{label: "Yes - page 55", route: "55"}, {label: "No - page 57", route: "57"}]
    },
    {
        id: 30,
        title: "The Great Escape",
        image: images.woods,
        content: `You squint into the fog. Between you and the woods—two glowing red eyes.\n\nThe forest is over 100 yards away.\n\nDo you:`,
        nextPage: [{label: "Fight - page 26", route: "26"}, {label: "Run - page 11", route: "11"}, {label: "Go back into the cellar - page 12", route: "12"}]
    },
    {
        id: 31,
        title: "The Chase",
        image: images.woodscloser,
        content: `You take off without a word. {{friendName}} cries out behind you, startled.\n\nThe werewolf turns—and goes for him first.\n\nAt the fifty-yard mark, you glance back.\n\nIt’s chasing you now.\n\nTwenty yards to go.\n\nYou leap into the woods—`,
        nextPage: [{label: "Go to Page 21", route: "21"}]
    },
    {
        id: 32,
        title: "The Last Stand",
        image: images.werewolfroom,
        content: `You search the room frantically, hands brushing stone and dust. There’s no window. No second door.\n\nThe werewolf growls.\n\nNo choice now. You turn to fight.`,
        nextPage: [{label: "Go to Page 48", route: "48"}]
    },
    {
        id: 33,
        title: "Settling In To The Guest Room",
        image: images.bedroom,
        content: `You drop your bags in the guest room. Cozy, quiet, tucked into the back corner of the house.\n\nDinner’s ready.`,
        nextPage: [{label: "Join your friend in the dining room - page 8", route: "8"}]
    },
    {
        id: 34,
        title: "Leap of Faith",
        image: images.pail,
        content: `You position the pail and leap, grabbing the cellar doors.\n\nYou swing them open and climb through, gasping in the fresh night air.\n\nYou reach down to help {{friendName}}, but your grip is slippery.\n\n“Use the pail!” You shout.\n\n{{friendName}} jumps—and barely makes it. You pull him the rest of the way out.\n\nTogether, you collapse onto the grass.`,
        nextPage: [{label: "Go to Page 30", route: "30"}]
    },
    {
        id: 35,
        title: "The Narrow Escape",
        image: images.hallway,
        content: `Your footsteps echo in the narrow corridor. The air thickens, humid and heavy. Behind you—a growl.\n\nYou break into a sprint.\n\nAt the end of the hallway are two doors. One to the left. One to the right.\n\nChoose quickly:`,
        nextPage: [{label: "Left - page 15", route: "15"}, {label: "Right - page 14", route: "14"}]
    },
    {
        id: 36,
        title: "The Decision",
        image: images.pail,
        content: `You keep the light as it is.\n\nIn the room: a rusted pail, a wobbly chair, and the cellar door above.\n\nYou consider:`,
        nextPage: [{label: "The chair - page 4", route: "4"}, {label: "The pail - page 34", route: "34"}, {label: "Use your friend’s back - page 18", route: "18"}]
    },
    {
        id: 37,
        title: "Something Cooking in the Kitchen",
        image: images.kitchen,
        content: `You and {{friendName}} creep into the kitchen. It’s quiet. Too quiet.\n\nThen you hear the sound again—this time from the dining room. A deep scrape across the floor.\n\nYou tighten your grip on the flashlight.`,
        nextPage: [{label: "Go to Page 49", route: "49"}]
    },
    {
        id: 38,
        title: "Bedtime",
        image: images.bedroom,
        content: `You settle into your room. {{friendName}} has taken the master.\n\nYou change into pajamas and lie down. Fifteen minutes later, You’re fast asleep.`,
        nextPage: [{label: "Go to Page 56", route: "56"}]
    },
    {
        id: 39,
        title: "Pondering Your Options",
        image: images.woods,
        content: `You and {{friendName}} stand at the edge of the yard.\n\nTwo glowing red eyes pierce through the fog.\n\nThe forest is a hundred yards away. Maybe one of You can make it. Maybe both. You were the track star, though, {{friendName}} is much slower than you.\n\nYou weigh your options:`,
        nextPage: [{label: "Run right away, leaving your friend behind - page 31", route: "31"}, {label: "Try to fight - page 51", route: "51"}, {label: "Have your friend run first, then follow - page 43", route: "43"}]
    },
    {
        id: 40,
        title: "The Great Escape",
        image: images.woodscloser,
        content: `Your heart pounds. Breath ragged.\n\n{{friendName}} is ahead by twenty-five yards.\n\nThe werewolf is after you now—just ten yards back.\n\nAlmost there…`,
        nextPage: [{label: "Go to Page 2", route: "2"}]
    },
    {
        id: 41,
        title: "The Reunion",
        image: images.woods,
        content: `You run to {{friendName}}, who’s crouched behind a tree.\n\nHe hugs you. “I thought you weren’t going to make it {{playerName}}.”\n\nYou both breathe heavily, hearts pounding.\n\nEventually, you find a dirt road leading into town.\n\nThe local police don’t believe a word of your story.\n\nBut you know what happened.\n\nLater, you both sit on the station steps and rate your Airbnb stay.\n\nOne star.\n\nTHE END.`,
        nextPage: [{label: "Return to Home", route: ""}]
    },
    {
        id: 42,
        title: "The Choice",
        image: images.pail,
        content: `You decide to leave the light as is. Using what little illumination there is, you notice the pail and the chair.\n\nYou’ll need to use one to reach the cellar door.\n\nWhich?`,
        nextPage: [{label: "The chair - page 23", route: "23"}, {label: "The pail - page 24", route: "24"}]
    },
    {
        id: 43,
        title: "Game Plan",
        image: images.woods,
        content: `You whisper, “Go first. I’ll follow.”\n\n{{friendName}} takes off, sprinting through the mist.\n\nAs soon as he hits thirty yards, you run.\n\nYou see the werewolf’s attention shift.`,
        nextPage: [{label: "Go to Page 40", route: "40"}]
    },
    {
        id: 44,
        title: "Welcome 'Inn'",
        image: images.inside,
        content: `The inside is dimly lit and smells faintly of cedar and old stone. The house is small, just four rooms: a compact kitchen, a dining/living area with antique furniture, and two bedrooms up a narrow staircase.\n\n{{friendName}} heads toward the kitchen. “I’ll get started on dinner.”\n\nYou can:`,
        nextPage: [{label:"Go upstairs - page 25", route:"25"}, {label:"Explore the dining area - page 45", route:"45"}, {label:"Help in the kitchen - page 54", route:"54"}]
    },
    {
        id: 45,
        title: "Dining Area",
        image: images.dining,
        content: `You drift through the dining area. The old table is set as if waiting for guests from another era. A dusty hutch looms in the corner.\n\nYou feel the chill of eyes on yourself—but see nothing.\n\nAfter exploring, you can:`,
        nextPage: [{label:"Head upstairs - page 50", route:"50"}, {label:"Join your friend in the kitchen - page 20", route:"20"}]
    },
    {
        id: 46,
        title: "The Confrontation",
        image: images.werewolffight,
        content: `You charge the werewolf. {{friendName}} follows behind.\n\nIt lifts you both off the ground like ragdolls.\n\nThere’s a scream. You’re not sure if it’s yours.\n\nEverything goes dark.\n\nTHE END.`,
        nextPage: [{label: "Return to Home", route: ""}]
    },
    {
        id: 47,
        title: "The Right Turn",
        image: images.pail,
        content: `The door seals behind you. Overhead, a bulb flickers.\n\n{{friendName}} points. “There’s something in the ceiling.”\n\nIt’s a cellar door.\n\nDo you:`,
        nextPage: [{label: "Fix the light - page 7", route: "7"}, {label: "Leave the light alone - page 36", route: "36"}]
    },
    {
        id: 48,
        title: "The Final Charge",
        image: images.werewolffight,
        content: `You charge. The werewolf roars and meets your attack.\n\nClaws tear into your chest. Teeth sink into your shoulder.\n\nThe last thing you see is red.\n\nTHE END.`,
        nextPage: [{label: "Return to Home", route: ""}]
    },
    {
        id: 49,
        title: "Table for Two",
        image: images.trapdoor,
        content: `Together, you move into the dining room. {{friendName}} shines the flashlight under the table.\n\n“There’s something here…” he mutters.\n\nIt’s a trapdoor.\n\nWithout speaking, you both open it and descend.`,
        nextPage: [{label: "Go to Page 6", route: "6"}]
    },
    {
        id: 50,
        title: "The Upstairs Loft",
        image: images.stairs,
        content: `After exploring downstairs, you head upstairs. Two rooms await.\n\nYou choose:`,
        nextPage: [{label:"The master bedroom - page 5", route:"5"}, {label:"The guest room - page 33", route:"33"}]
    },
    {
        id: 51,
        title: "Tag Team",
        image: images.werewolffight,
        content: `You nod to {{friendName}}. “Let’s do this.”\n\nYou both charge the beast, trying to overwhelm it with surprise.\n\nYou launch a flying kick. It lands.\n\nThe werewolf turns, unfazed. A claw swings through the air.\n\nYou glimpse {{friendName}} being tackled.\n\nThen nothing.\n\nTHE END.`,
        nextPage: [{label: "Return to Home", route: ""}]
    },
    {
        id: 52,
        title: "Sudden Awakening",
        image: images.darkroom,
        content: `There’s a loud noise downstairs. Something heavy moving.\n\nYou sit frozen, breath caught.\n\nDo you:`,
        nextPage: [{label: "Wake your friend - page 55", route: "55"}, {label: "Investigate alone - page 13", route: "13"}]
    },
    {
        id: 53,
        title: "Safety in the Woods",
        image: images.woods,
        content: `You crash into the underbrush. Claws close around your ankle.\n\nYou grab a tree trunk and pull. One big heave—\n\nThe grip slips.\n\nYou scramble forward and spin around.\n\nThe werewolf snarls from behind an invisible barrier.`,
        nextPage: [{label: "Go to Page 41", route: "41"}]
    },
    {
        id: 54,
        title: "Cooking Together",
        image: images.kitchen,
        content: `You help {{friendName}} chop, stir, and season. It’s cozy, even fun. The strange house fades to the background as garlic and tomato scents fill the room.\n\nOnce dinner’s ready, you both head into the dining room.`,
        nextPage: [{label: "Go to Page 3", route: "3"}]
    },
    {
        id: 55,
        title: "The Friendly Investigator",
        image: images.stairs,
        content: `You knock softly on {{friendName}}’s door. No answer.\n\nYou knock again, louder. “{{friendName}}, wake up.”\n\nHe opens the door slowly, groggy and annoyed. “What is it?”\n\n“There’s something downstairs. A loud noise. Like something dragging.”\n\n{{friendName}} sighs, rubbing his eyes. “{{playerName}} sure it wasn’t a dream?”\n\nYou shake your head. “We need to check it out.”\n\nHe grabs a flashlight. Together, you head downstairs.\n\n“Kitchen or dining room?” {{friendName}} whispers.\n\nYou decide:`,
        nextPage: [{label: "Kitchen - page 37", route: "37"}, {label: "Dining Room - page 49", route: "49"}]
    },
    {
        id: 56,
        title: "Drifting Off to Sleep",
        image: images.bedroom,
        content: `Darkness. Deep sleep. Then... a dream.\n\nFog. Trees. Breathing. Red eyes.\n\nTHUD.\n\nYou bolt upright.`,
        nextPage: [{label: "Go to Page 52", route: "52"}]
    },
    {
        id: 57,
        title: "The Hidden Passage",
        image: images.trapdoor,
        content: `You grab the handle and lift. The wood groans, resisting at first, then swings open with a creak. A ladder descends into darkness.\n\nYou hesitate. Do you really want to do this alone?\n\nYou decide to continue. The air smells damp and earthy as you lower yourself down.\n\nAt the base, a hallway stretches ahead. You begin to walk.`,
        nextPage: [{label: "Go to Page 35", route: "35"}]
    }

];

const storySlice = createSlice({
    name: 'story',
    initialState: {
        pages: storyPages,
        currentPage: 1,
        playerName: "",
        friendName: ""
    },
    reducers: {
        setPlayerName(state, action) {
            state.playerName = action.payload;
        },
        setFriendName(state, action) {
            state.friendName = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    }
});

export const { setPlayerName, setFriendName, setCurrentPage } = storySlice.actions;
export const selectPlayerName = (state) => state.story.playerName;
export const selectFriendName = (state) => state.story.friendName;
export default storySlice.reducer;