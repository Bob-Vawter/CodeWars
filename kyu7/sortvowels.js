//kyu 7
//sort the vowels
function sortVowels(s){
  return typeof s == 'string' ? s.split('').map(a=>a.match(/[AEIOU]/i)?`|${a}`:`${a}|`).join('\n') : ''
}
