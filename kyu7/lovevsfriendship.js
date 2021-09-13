//kyu 7
//love vs friendship
function wordsToMarks(string){
  return string.split('').map(a=>a.charCodeAt()-96).reduce((a,b)=>a+b,0)
}
