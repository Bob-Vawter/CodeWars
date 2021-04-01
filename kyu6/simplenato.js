//kyu 6

function to_nato(words) {
  let nato =  {
    "A": "Alfa",  "B": "Bravo",   "C": "Charlie",
    "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
    "G": "Golf",   "H": "Hotel",   "I": "India",
    "J": "Juliett","K": "Kilo",    "L": "Lima",
    "M": "Mike",   "N": "November","O": "Oscar",
    "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
    "S": "Sierra", "T": "Tango",   "U": "Uniform",
    "V": "Victor", "W": "Whiskey", "X": "Xray",
    "Y": "Yankee", "Z": "Zulu"
  }
  return words.toUpperCase().split('').filter(a=>a!=' ').map(a =>a.match(/[A-Z]/)?nato[a]:a).join(' ')
}
