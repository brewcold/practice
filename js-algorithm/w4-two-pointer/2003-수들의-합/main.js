const [_, ARR, X] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')

const arr = ARR.split(' ')
  .map(Number)
  .sort((a, b) => a - b)

let L = 0
let R = arr.length - 1

let answer = 0

while (L < R) {
  if (arr[L] + arr[R] === Number(X)) {
    answer++
    L++
    R--
  } else if (arr[L + 1] + arr[R] > Number(X)) {
    R--
  } else L++
}

console.log(answer)
