const [A, B] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map(Number)

let set = new Set()

for (let x = -1000; x <= 1000; x++) {
  if (x * x + 2 * A * x + B === 0) set.add(x)
}

const answer = Array.from(set).join(' ')

console.log(answer)
