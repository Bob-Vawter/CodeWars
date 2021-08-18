//kyu 7
//swap vowels case
function swapVowelCase(str) {
  return str.split('').map(a=>/[aeiou]/.test(a)?a.toUpperCase():/[AEIOU]/.test(a)?a.toLowerCase():a).join('')
}
