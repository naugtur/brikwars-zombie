const dateof = (new Date()).toDateString()
const before = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>BrikWars Zombie</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
<section>
  <img src="logo.png" alt="Brainz" class="logo">
  <h1 id="zombie-brikz" class="title">Zombie Brikz</h1>
  <h4>AKA Quantum Zombies</h4>
  <p class="punchline">A game of bricks and the dead. <br> As family friendly as any zombie franchise!</p>
  <p><small>Updated ${dateof}</small></p>
</section>
<article>
`;

const after = `
</article>
</body>
</html>
`;

process.stdout.write(before)
process.stdin.pipe(process.stdout)
process.stdin.on('end',_=>process.stdout.write(after))
