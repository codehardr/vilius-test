function randomLatinString(length) {
  let latins = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let newString = []
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * latins.length)
    newString.push(latins[random])
  }
  return newString
}
document.querySelector('.app').textContent = randomLatinString(6).join(' ')