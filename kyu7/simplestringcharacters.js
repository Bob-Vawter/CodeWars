//kyu 7
//Simple string characters
function solve(s){
 return [ s.replace(/[^A-Z]/g,'').length,
          s.replace(/[^a-z]/g,'').length,
          s.replace(/[^\d]/g,'').length,
          s.replace(/[A-Za-z\d]/g,'').length]
}
