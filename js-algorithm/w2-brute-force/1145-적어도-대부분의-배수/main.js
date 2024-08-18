const nums = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number)

function gcd(p, q) {
  while (q !== 0) {
    let t = q
    q = p % q
    p = t
  }
  return p
}

function LCM(p, q) {
  return (p * q) / gcd(p, q)
}

let answer = Infinity

for (let i = 0; i < 3; i++) {
  for (let j = i + 1; j < 4; j++) {
    for (let k = j + 1; k < 5; k++) {
      let lcm = LCM(LCM(nums[i], nums[j]), nums[k])
      answer > lcm ? (answer = lcm) : null
    }
  }
}

console.log(answer)
