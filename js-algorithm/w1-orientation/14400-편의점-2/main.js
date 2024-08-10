const [_, ...C] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')

const X = C.map(c => c.split(' ')[0]).sort((a, b) => a - b)
const Y = C.map(c => c.split(' ')[1]).sort((a, b) => a - b)

const mid = ~~(X.length / 2)

let answer = 0
if (X.length % 2 === 1) {
  X.forEach(x => (answer += Math.abs(X[mid] - x)))
  Y.forEach(y => (answer += Math.abs(Y[mid] - y)))
} else {
  let tempX = 0
  let tempY = 0
  X.forEach(x => {
    tempX += Math.abs(X[mid - 1] - x)
    tempX += Math.abs(X[mid] - x)
  })
  Y.forEach(y => {
    tempY += Math.abs(Y[mid - 1] - y)
    tempY += Math.abs(Y[mid] - y)
  })
  answer += tempX / 2
  answer += tempY / 2
}

console.log(answer)
