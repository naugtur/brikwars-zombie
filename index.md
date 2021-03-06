
----

Hi! This is a co-op zombie extension to [BrikWars](http://brikwars.com) with rules built to mimic the tropes from pop culture.

Zombie Brikz is a co-op game with no player playing the zombies and just a tiny bit of maintenance to do around them.
The game mechanics are built on top of Quick Wars mechanics for simplicity, but can easily be adapted for full BrikWars mechanics too.

*bit.ly/zombiebrikz*

### [download printable PDF version](./zombie-brikz.pdf)
### [download one page rules cheatsheet](./short.pdf)
### [Open rules cheatsheet](./short.html)

```


Mind the trees. Print responsibly.
2 pages per 1 side of A4/Letter paper recommended.













by  Zbyszek Tenerowicz and Kuba Eichler
tested with  Witek Krawczyk
logo design by  Agata Tenerowicz



```


# Rules

## Existence

> As you might have noticed in the movies - zombies tend to exist in places only while the main characters are in the area. This led to a conclusion that they exist everywhere with certain probabilities and only by looking at a place you collapse the quantum function of the superposition of zombie existence and non-existence to determine what the observable zombie presence is.

### To be
Every time a new location becomes visible:
- small space, room, corner, closet - roll `D6`. If `D6 <= DANGER_LVL` spawns a zombie there
- large space, open area - roll `D6`. If `(D6-1) * DANGER_LVL` zombies spawn (includes critical rolls - roll a 6, you roll again and add!)

```
Example

DANGER_LVL is 3

- I enter a room, roll 2 - a zombie is there.
- I enter another room, roll 3 - a zombie is there.
- I enter yet another room, roll 4 - it's empty.
- I go out to the open, roll 3 - 6 zombies are there.
- I run to the other side of the building, roll 1 - there are no zombies there.
```

### Not to be
Zombies get removed after sight of them is lost and cannot be regained in 2 turns of a player going in their direction. Just like in the movies!

---

### Some certainty in this World
> Most movies and comic books on zombies have locations relevant for the plot, where pre-defined zombies reside. These in turn seem to be immune to entropy and seem entangled with other plot elements

Special locations, containing quest items, supply or being important to the plot need to have their crew of zombie pre-defined. All other rules apply, so apart from the main zombie characters, you’ll get all the additional ones from dice rolls.


## Interactions

> Zombies in movies don't plan, don't plot. They're just the walking dead, remember? Walking.

Zombie characters only have the movement phase after all players moved. Their attacks are triggered during the player turn.

### Zombie walk
Zombies can stay still, wander randomly or walk towards something that grabbed their attention.

To make remembering their state easier, you should mark it with their hands.
- A standing zombie has both hands down.
- A wandering zombie has one hand in front of it
- A zombie walking towards something has both hands in front of it

*credit for this idea goes to Dr. StrangeBrik from brikwars forum*

Zombies move `2”` a turn (random direction if wandering)

When a zombie gets spawned roll a die. If `D6 <= DANGER_LVL` the zombie will be wandering

A wandering zombie (or a horde) changes direction at random each turn. You can just spin a bottle or something.

---

#### Horde rule
When zombies are closer than `2”` from each other, they are considered a horde, which will move the same direction (so you only roll for direction once for the whole horde)
If a horde meets a character, all zombies get focused.

### Zombie attention
If a minifig is running (no stealth) within `5”` of a zombie (or a horde) it focuses the attention of zombie.

Noises also focus zombie attention, but they get attracted individually, based on range. (horde rule off)
So a gunshot or a rumble from a car crash or a wall breaking down will attract zombie in `10”` range _unless 6 is rolled on a `D6` die_. All zombies within range get focused and start going towards the source of the sound. They switch back to random wandering if they reach the target and find nothing there. This can be used to distract them, obviously.

#### Stealth
A minifig can be stealthy, but to do that it can only move `2”` per turn. So no outrunning zombies without grabbing more attention!

### Close encounters

> You can run through a bunch of zombie avoiding them and pushing away as confirmed in an experiment by Mythbusters. The factor that decides if you’ll live is density of the horde. And luck.

> Also, if it's not the season 1 you don't have to worry much about scratches

Zombie |
---|---
defense| 4
defense-alternative | 1 D6
damage| 1 D6
range| 1"

In a player's turn, zombies can be attacked as per QuickWars rules.

When a player’s minifig moves in a way that puts it within `1”` of a zombie at any point of the route, a zombie roll happens for each zombie within range while the character is moving.

What's with the defense-alternative? BrikWars had versions, in this game you can choose which you want. Alternative stats are compatible with older BrikWars.


---

#### Zombie rolls

You can use  [Zombie Dice](http://www.sjgames.com/dice/zombiedice/) for zombie rolls with the extra fun of having to weigh your risks.

Zombie roll outcomes |
---|---|---
**Zombie Dice**| **regular D6** | **outcome**
Brains | 1-2 | minifig is **stopped** and cannot continue movement, it gets **attacked** by the zombie immediately. Other zombies in `1”` range are still getting the roll, but the minifig will not continue movement as intended.
Feet | 3-4 | minifig manages to pass by and can continue movement
Hit | 5-6 | minifig hits the zombie and pushes it away `2”` in a direction of choice (unless there’s another zombie on the way)

When using Zombie Dice, roll a die and put it away. You need to decide if you want to use the riskier ones first or later. When you run out, start over with the full set.



## Danger Level
> As the plot approaches a conclusion (or a mid-season finale) the world gets more and more intense. In zombie infected universe a factor exist that dictates how many zombies should turn out to be waiting around the corner.

`DANGER_LVL` is a value between 1 and 6

You can start with any `DANGER_LVL` you want - it will affect the difficulty of the game.

Every game should have critical scenes in its plot, which permanently increase the `DANGER_LVL` by 1 as they begin.
Need examples? See [scenarios]().

`DANGER_LVL` is increased temporarily:
- for 2 turns after a minifig dies
- while a character is alone (nobody else in the room or open area)
- in a location that has a warning/danger sign at the entrance


# Characters

> We need to split up!

## Health
Characters work just like minifigs in BrikWars with one exception - a successful zombie attack means the minifig is wounded. The next attack will kill them. Mark a wounded minifig by attaching a 1 stud red piece to it.

The wound might be healed by using resources you determine beforehand

## Actions
Regular actions work like in BrikWars. Pick up, give, throw, close door, operating levers or consoles etc.
The same with building constructions.

Special actions:
- Repair - based on number of studs (see damage to structures in QuikWars). Agreed number of various tools repairs a specific plot-critical structure; bonuses from being a Mechanic
example: a broken truck engine requires the team to collect 5 unique tools that would help (only grey/dark grey and black tool accessories helps + use a bit of common sense and don’t repair vehicles with binoculars)
- Explore - looking for useful items / opening a closed compartment / container, hacking or breaking into something (ATM, safe, lockpicking)
- Firefighting - one typical brick-built fire extinguisher (two bricks: ‘can’ + ‘tap’) allows to take 2 flame bricks, one per action/turn. Firefighters have an extra action in turn.
---

## Character creation

Players can choose any character, but make sure they have one advantage and one disadvantage. Regular characters should start with only hand weapons.

Alternatively players can pick 2 characters - a mix of a strong and a weak one, choosing their traits accordingly (example: a cop and a scared teenager).


Example disadvantages:
- Traumatized: freaking out at random or when losing HP - can move at most 2" in a turn when freaked out.
- Fearful: when entering a place and discovering a zombie `D6=1` makes noise, `D6=2` runs away.
- Terrible with guns: You cannot use a ranged weapon throughout the game. You can carry one to pass it on to your teammate.
- Typical Kid: Terrible With Guns (see above) + you can’t drive a car or motorbike (skateboard and a regular bike are allowed);
- Diarrhea: you have to explore 3 different rooms that count as bathrooms as your only actions in your turns; you can still collect items this way.
- Collector of unattended possessions: you have to collect (pick up and carry to the place your team stores the resources) two bricks that are useless for the quest but can be interpreted as art, jewellery and other precious items; conflicts with cops on your team are always a good storytelling device here.
- Alcoholic: you have to collect 4 extra food&drinks items, above the quest requirement; you can mark alcohol as additional resource if you like. You have to use the first and the third resource after getting it to the safehouse. Your movement is reduced by 2" when driving or riding bikes.
- Zombary’s baby: your character has a child or a younger sibling. You have to explore a particular room on the map to find it and check if it got infected. Roll for zombie present in the room - if you roll a zombie, the kid is turned. Be sad. If no, you have to take the baby to the safe place as if you would take a piece of resources.



Example advantages:
- Cop: starts with a ranged weapon. +1 dice increased basic attack
- Badass: If first attack on a zombie didn't kill it, gets another try


- Sneaky: twice a game when a zombie is granted an attack against you, you can move your minifig away from it in any direction, up to 2"; the attack doesn’t happen.
- Mechanic: gets a free repair-only action per turn
- Firefighter: gets a free "put out fire"-only action per turn
- Doctor: You start with as many tokens (syringes, pills) as the starting number of characters. You can approach a wounded minifig and remove one token to restore that minifigs health. Including yourself


Example funny characters:
- Footballer: You start with a football.
  - Dribble: You don’t carry the ball in your hands if you want but it is still in your possession when you move.
  - Shoot: Once in your turn you can use the football as a ranged weapon to knock down one zombie. Place the football symmetrically (at the same angle and distance) from the undead you knocked down this way. The zombie can still attack people passing by but cannot move. The abilities can be used with any football on the map.


- Skateboarder: You start with a skateboard.
  - Skating: you use the skateboard as your vehicle, moving 1,5x the normal distance per turn. You can do skateboarding tricks on structures that are at the level of minifig’s legs/torso connection or below
    - Ollie: Once per movement, you can jump over things or jump to connect grinds.
    - Grind: When there is a "grindable" surface such as a rail/ledge/low wall etc. you can grind it, adding its whole length to your normal movement as a bonus. The surface mustn’t be occupied by minifigs or have other bricks attached on top of it (but can have studs). Another obstacle for grinding is a zombie that stands too close to the surface - remember to roll for encounters.



- Jedi: You start with a lightsaber.
  - Not The Brains You Are Looking For: Once per game you can make one zombie or one horde disinterested; they return to the Standing state (hands down).

# Scenarios

## Escape this goddamn city

> This place is swarming with zombies. Let's get out of here now! OR as soon as we collect guns and food and fuel and...

- Collect food bricks - 2 per minifig
- Collect 7 fuel bricks for the trip and 3 tools to fix your escape car

6 fuel can be found in a gas station, but it's burning with 4 fires so fire extinguishers have to be found first.
Fuel in quantities of 1 or 2 can be found in random locations.

1 fuel has to be used to start a motorbike or other small vehicle for the length of the game.

## The abandoned mansion

> Remember that rich guy's house? Maybe the place is empty now? After all, the owner isn't a psycho killer, right?

- Enter the house
- Explore the Garage / Sadist Studio
- Find the hostage and take them to the escape car
- Variant: (optional objective) Collect 2 tools from the Garage to fix the escape car

Plot twist: Before you start the game, toss a coin and (without looking!) set it aside or cover with something. When the rescued hostage is armed or finds a weapon while being escorted, reveal the coin. `Heads`: he is the owner of the mansion and he attacks!

The Psycho Killer has the same stats as characters and always attacks the nearest character; never retreats, fights to his psycho death.


## Jailbreak

> Man, these smartphones are crap. Also, a friend texted me that the guards in his juvie forgot to let him out before running from zombies themselves.

- Locate the juvie HQ for a Key Card OR take 2x explosives from the Armory
- Rescue the Prisoner
- The Prisoner is injured: get medical supplies from the Healthcare Facility

The scenario build should have a lot of narrow passages and small rooms, with around 2-3 entrances/exits. Rescuing the prisoner, especially using the explosives, should affect the routes (block some corridors permanently).

Plot twist: The injured Prisoner turns into a zombie. Well, at least you tried to help him out.

## The Show Must Go On

>This is ZOMB, the longest-running un-undead broadcast this part of state. Are you alive? Are you willing to help?

The characters need to help the local media outlet, a solo operation ran by an almost insane hermit, also being the last hope of journalism in this zombie-infested land.

- Get the gear from a destroyed TV vehicle (bonus tools or car parts, should you need them in a long run for campaign play)
- Take the gear to the Journalist, he repairs it and gives you an antenna module
- Install the antenna module on the right spot, which happens to be the most dangerous one (should be the highest point on your build or a special location)

Plot twist: the construction breaks under the character(s) trying to install the device. They fall, possibly get hurt (one wound each), roll for zombie presence again if necessary and have to start over with putting the antenna module in place.

# Building the board

## Your map - your build

Since there will be a fair amount of minifigs in play and a lot of placing zombies on board and taking them away, consider using as many baseplates as you can. The zombie walk demands some stability. Alternatively, have a stand for each minifig and some larger plates for hordes.

The rules are different for interiors and exteriors - use this advantage for diverse urban spaces. There might be wide streets, only seemingly calm, and dreadful narrow passages, where the undead lurk. A well-balanced map should use a few buildings divided into distinct rooms, windows, entrances, holes in the walls etc. You don't have to build whole models. In fact, it's impractical for manipualting the minifigs, so you can build them up to minifig arm level or leave lower structures, more schematic-like.

It's more important in Zombie Brikz than BrikWars that you know what the characters could do and what wouldn't be able to do in terms of movement. Which fence is good for climbing, which obstacle can be jumped over? It's good to have such understanding of your board before the game.

## Important spots

### Quest locations
You'll need to set some important spots for your scenario. They will drive the game and keep it organized by making clear what's what on the map. Here are some ideas for them:

- Zombies attached: since exploring such places might be your team's objective, put some guaranteed undead guards in case dice rolls are a disappointment.
- NPCs present: meeting some dummy Non-Player Characters can trigger plot twists or advance the scenario to its next steps.
- Danger levels & Plot twists: entering or leaving quest locations might increase the Danger Level or trigger a plot twist.
- Extra resources: quest locations might also have a bit more stuff you need than other places.

### Resources
Choose which resources are important for your scenario (what will the characters collect). Now choose which bricks represent them. Be reasonable about this: destroying buildings shouldn't produce resources just because the parts are the same. One way to avoid such actions is to represent the resources by unique parts, not used anywhere else.

Resource examples: food, clothing, fuel, guns, tools, machine parts, works of art, money, drugs.

Distribute the resources evenly on the map. Choose some obvious places with extra resources and some random numbers (See: Placing things at random).

### Starting points
Once you have the quest locations and resources, choose a few places where the characters can start the game. You can have them start together or pick a random spot for each character using the dice.

```
Examples:
1. The characters start this scenario together, they arrived by a car. The board is more
or less a rectangle so you pick and assign numbers to 6 starting points on the outside:
placed in the corners and the middles of the longer sides, just like pouches on a billiards
table. You roll a d6 and place the car and minifigs in the right spot.

2. Each character should start alone. They are just about to escape their houses. You pick
 and assign numbers to 6 or less places and roll, ignoring the same rolls.

3. Each character starts alone, out in the open. You pick and assign numbers to 6 baseplates
 or open spaces on the board and roll where each character starts. If the rolls are the same,
  place the minifigs on the opposite sides of those open spaces.
```

---

## Placing things at random

Choose a few key places on the map. Those spots will give the characters a chance to get what they need. Now take the same number of containers of one type and put the chosen items inside. You can ask someone who's not playing to put the containers on the map or do it yourself. To win the fair play trophy, fill the containers contents with the same bricks but of various colors so that you don't feel the difference in weight.

For instance: in the first scenario, there should be some extra fuel spread on the map. You choose 3 spots, some backyards around town. Now you choose the amount of extra fuel, say, 0/2/3. You put the resource markers in the containers Shuffle the containers and place them in the previously chosen spots.

Treasure chests and barrels make great containers. We used chests/crates from Adventurers series, covered with Collectible Minifigures stands and large barrels covered with radar dish pieces. As long as you can't tell the difference between the containters of one type, they're good.

# License

Zombie Brikz is copyright ©2017 Zbyszek Tenerowicz & Kuba Eichler.
Licensed under [CC BY NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode)

BrikWars is copyright ©1995-2010 Mike Rayhawk.
For more information and the complete rules, please visit http://www.brikwars.com.

---

# Why did we write this?

>Our Zombies Are Different

This game is a result of tinkering with QuickWars for pure brik mayhem pleasure. In most battles, we didn't want to go deep into minute details of BrikWars rules.

What is excellent about BrikWars is minifigs fighting in a kind of primordial soup, the perfect chaos of its world and the imagination being the players' only limit.

What we had in mind creating the mechanics is that zombies in the movies act like a force of nature. They are a flood wave. Even more, they are dependent on being observed by the characters. That's how the zombie quantum theory was born. It allows you to use a limited number of minifigs while maintaining the tension of expecting a zombie around each corner.

Apart from that, there are just two things. Simplify first. Let's use QuickWars with a twist and keep it true to BrikWars nature - play for fun, remember about the Rule of Fudge. Secondly, shift weight from the army identity to the location functionality. Let the terrain build play. It's just like in a movie... Instead of a legion lead by superheroes, you choose a bunch of normal guys or cliche characters. They are trying to survive in harsh conditions. And their surrounding matters.

Because of that, prepare the maps with more care than usual. The objectives for co-op scenario have to be set, some important locations have to be determined and some resources need to be distributed. There might be some conditions the team agrees on beforehand (*if we push this button, this building is replaced with a crater*). In some cases there will be non-player characters for your team to rescue or interact with. Finally, the build needs the player characters and is ready for the undead to be spawned.

So here it is. A mod. An extension. An addon. Some rules for fighting zombies, some rules for the zombies to be independent from the players and some inspiration for your adventures. Hope you like them.

Kuba & Zbyszek

## The question you should ask
>Did you just say the game needs to be simple AND the terrain needs more care than usual?

Yes, AND your imagination is your only limit here. The map might just have a few walls and several important spot markers - but why not build a minifig scale model of your hometown? Happy Apocalypse, everyone.
