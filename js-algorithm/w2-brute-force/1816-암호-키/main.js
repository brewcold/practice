const [_, ...KEYS] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(BigInt)

KEYS.forEach(key => {
  for (let i = 2n; i <= 10n ** 6n; i++)
    if (key % i === 0n) {
      console.log('NO')
      return
    }
  console.log('YES')
})
