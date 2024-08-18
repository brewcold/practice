const [A, B, C, D, E, F] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number)

//AX + BY = C
//DX + EY = F
//해가 하나만 있음 보장

for (let X = -999; X <= 999; X++)
  for (let Y = -999; Y <= 999; Y++)
    if (A * X + B * Y === C && D * X + E * Y === F) console.log(X, Y)
