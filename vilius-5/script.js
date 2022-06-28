let letters = ['A', 'B', 'C', 'D']
let bigArray = []
for (let i = 0; i < 200; i++) {
  let random = Math.floor(Math.random() * 4)
  bigArray.push(letters[random])
}
let countA = 0
let countB = 0
let countC = 0
let countD = 0
for (let letter of bigArray) {
  if (letter === 'A') countA++
  if (letter === 'B') countB++
  if (letter === 'C') countC++
  if (letter === 'D') countD++
}
let msg = bigArray.sort().join(' ')
document.querySelector('.app').textContent = msg