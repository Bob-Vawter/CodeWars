//kyu 7
//vowel changer
function vowelChange(str, vow) {
  return str.split('').map(a=>/[aeiou]/.test(a)?vow:a).join('')
}
