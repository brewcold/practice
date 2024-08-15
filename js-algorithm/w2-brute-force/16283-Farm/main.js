const [A, B, N, W] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map(Number)

//X + Y = N
//AX + BY = W
//완탐으로 연립방정식 풀기
//X에 1부터 대입해서 Y를 찾는식으로 가면 이중 for문이 되니까 O(N^2)가 됨
//시간제한 0.1초니까 천만번까지 연산 가능
//양, 염소 합이 1000마리까지이므로 범위 줄이기 가능
const set = new Set()

for (let 양 = 1; 양 <= 1000; 양++) {
  for (let 염소 = 1; 염소 <= 1000; 염소++) {
    if (양 + 염소 === N) {
      if (A * 양 + B * 염소 == W) {
        set.add(`${양} ${염소}`)
      }
    }
  }
}

if (set.size !== 1) console.log(-1)
else console.log(Array.from(set).join(' '))
