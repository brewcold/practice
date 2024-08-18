let [N, M, K] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number)

let team = 0
while (N >= 2 && M >= 1) {
  team++
  N -= 2
  M -= 1
}

let remain = N + M
while (remain < K) {
  remain += 3
  team--
}

console.log(team)
