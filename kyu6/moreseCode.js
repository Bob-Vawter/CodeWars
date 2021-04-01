decodeMorse = function(morseCode){
  var mC = morseCode.split(' ').map(a=>MORSE_CODE[a])
  mC = mC.map(a=>a==undefined?' ':a).join('').replace(/  +/g, ' ')
  return mC.trim()
}
//kyu 6
