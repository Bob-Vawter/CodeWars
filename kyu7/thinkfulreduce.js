//kyu 7
//Thinkful - List Drills: Longest word
function longest(words) {
  return words.map(a=>a.length).sort((a,b)=>b-a)[0]
}
