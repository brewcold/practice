const [_, H] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')

const houses = H.split(' ')
  .map(Number)
  .sort((a, b) => a - b)

const mid = houses.length === 1 ? 0 : ~~(houses.length / 2) - 1
const answer = []
for (let i = mid; i <= mid + 1; i++) {
  if (i >= houses.length) break
  let dist = 0
  houses.forEach(h => (dist += Math.abs(h - houses[i])))
  answer.push({ dist, house: houses[i] })
}
answer.sort((a, b) => a.dist - b.dist || a.house - b.house)
console.log(answer[0].house)
