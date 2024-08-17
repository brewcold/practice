const N = +require('fs').readFileSync('dev/stdin').toString().trim()

let answer = 0
for (let A = 1; A <= 500; A++)
  for (let B = 1; B <= 500; B++) if (A ** 2 === B ** 2 + N) answer++
console.log(answer)
