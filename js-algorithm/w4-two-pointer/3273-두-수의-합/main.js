const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const nums = input.shift().split(' ').map(Number)

let L = 0
let R = 0
let sum = nums[L]
let answer = 0

while (L < N && R < N) {
  if (sum === M) {
    answer++
    sum += nums[++R]
  } else if (sum < M) sum += nums[++R]
  else if (sum > M) sum -= nums[L++]
}

console.log(answer)
