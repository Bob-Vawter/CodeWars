// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//
// Find max(abs(length(x) − length(y)))
//
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
//kyu 7
function mxdiflg(a1, a2) {
    if(a1.length==0 || a2.length==0){
      return -1
    }
    return max(a1)-min(a2)>max(a2)-min(a1)?max(a1)-min(a2):max(a2)-min(a1)
}

function max(array){
  return array.sort((a,b)=>b.length-a.length)[0].length
}

function min(array){
  return array.sort((a,b)=>a.length-b.length)[0].length

}
