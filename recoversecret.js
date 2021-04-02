//kyu 4 Recover a secret string from random triplets

// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.
//
// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".
//
// As a simplification, you may assume that no letter occurs more than once in the secret string.
//
// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.


var recoverSecret = function(triplets) {
  var solve = []

  while(triplets.map(a=>a.join('')).join('').length>0){
  solve.push(firstLetter(triplets))
  triplets = shiftOutFirst(triplets,solve[solve.length-1])
 }

  return solve.join('')

}

function firstLetter(array){
    var map = {}

  array.forEach(row=>{
    row.forEach((letter,i)=>{
      if(map[letter]){
        map[letter]+=i
      } else {
        map[letter]=i
      }
    })
  })
  return Object.keys(map).find(key => map[key] === 0)
}

function shiftOutFirst(array,letter) {
  array.forEach((row,i)=>{
    if(row[0]===letter){
      array[i].shift()
    }
  })
  return array
}
