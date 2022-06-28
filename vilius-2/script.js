function randomNum() {
  return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
}
let r1 = randomNum()
let r2 = randomNum()
let r3 = randomNum()
let r4 = randomNum()
let r5 = randomNum()
let r6 = randomNum()
let ranNumbers = [r1, r2, r3, r4, r5, r6]
document.querySelector('.app').textContent = ranNumbers.sort((a, b) => a - b).join(' ')