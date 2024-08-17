const N = +require('fs').readFileSync('dev/stdin').toString().trim()

let answer = 0

for (let 택희 = 2; 택희 < N; 택희 += 2) {
  const rest = N - 택희
  for (let 영훈 = 1; 영훈 < rest; 영훈++) {
    const 남규 = rest - 영훈
    if (남규 >= 영훈 + 2) answer++
  }
}

console.log(answer)
