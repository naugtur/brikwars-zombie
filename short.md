<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
# Rules cheatsheet
Keep it handy while playing

Turn |
 --- | ---
 Players |
  | player moves
  | *If moving in range of a zombie (less than 1") - roll for encounter*
  | player attacks
  | *Player can take one action per turn instead of move or attack*
 Zombies |
  | zombies move according to walking rules

 Minifig |
 --- | ---
move |  5"
move silently |  2"
move on a vehicle | 10" + noise
attack | depends on weapon
armor |  4 +1D6 for each armor piece
armor-variant | 2D6 +1D6 for each armor piece
HP | 2 (can survive first hit)

weapon | attack | range
 --- | --- | ---
hand weapon | 2D6 | touch
ranged weapon | 1D6 | 10"
brick | 1D6 | touch

 Zombie |
 --- | ---
move | 2"
attack | 1D6
armor | 4
armor-variant | 1D6 +1D6 for each armor piece

Zombie spawn |
 --- | ---
 enclosed space | if `D6 <= DANGER_LVL`, spawns 1
 open area | spawns `(D6-1) * DANGER_LVL` zombies

Zombie walk |
 --- | ---
 after spawn, roll another D6. |
 `D6 <= DANGER_LVL` | zombie(s) are wandering
 `D6 > DANGER_LVL` | zombie(s) just stand there

Zombie attention |
 --- | ---
 When character running nearby | 5"
 Noise or rumble or gunshots <br> *Noise focuses individually based on range, unless* `D6 = 6` | 10"




Encounters |
---|---|---
**Zombie Dice**| **regular D6** | **outcome**
Brains | 1-2 | minifig is **stopped** and cannot continue movement, it gets **attacked** by the zombie immediately. Other zombies in `1”` range are still getting the roll, but the minifig will not continue movement as intended.
Feet | 3-4 | minifig manages to pass by and can continue movement
Hit | 5-6 | minifig hits the zombie and pushes it away `2”` in a direction of choice (unless there’s another zombie on the way)

<style>

table {
  width: 48%;
  float:left;
  border: 1px solid #777;
  margin: 0.5%;
}

@media (max-width:800px) {
  table {
    width: 99%;
  }
}

table:nth-of-type(2n+1){
  clear:both;
}

table:last-of-type {
  width: 97%
}

th {
  text-align: left
}

td {
  padding: 3px;
  border-top: 1px dashed #bbb
}
</style>
