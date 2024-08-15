const [...D] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b)

const sum = D.reduce((prev, curr) => prev + curr, 0)

L1: for (let p1 = 0; p1 < D.length - 1; p1++) {
  for (let p2 = p1 + 1; p2 < D.length; p2++) {
    if (sum - D[p1] - D[p2] === 100) {
      D[p1] = 0
      D[p2] = 0
      break L1
    }
  }
}

const answer = D.filter(item => item !== 0)
console.log(answer.join('\n'))
