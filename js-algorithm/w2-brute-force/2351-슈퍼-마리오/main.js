const [...M] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)

const answer = M.reduce(
  ({ sum, closest }, score) => {
    const newSum = sum + score
    return Math.abs(100 - newSum) <= Math.abs(100 - closest)
      ? { sum: newSum, closest: newSum }
      : { sum: newSum, closest }
  },
  { sum: 0, closest: 0 }
).closest

console.log(answer)
