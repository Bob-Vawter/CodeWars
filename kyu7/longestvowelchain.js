//kyu 7
//longest vowel chain
function solve(s){
 return (s.split(/[^aeiou]/).sort((a,b)=>b.length-a.length))[0].length
}
