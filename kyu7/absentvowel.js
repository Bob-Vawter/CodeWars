//kyu 7
//absent vowel
function absentVowel(x){
  x = x.toLowerCase()
  x = x.match(/[aeiou]/g)
  x = [...new Set(x)]
  return !x.includes('a')?0:
      !x.includes('e')?1:
  !x.includes('i')?2:
  !x.includes('o')?3:4
}
