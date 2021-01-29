//Shortest Code Tidy up the room//190ish need to get down to 120
function sc(r){
var s=r.map(t=>t.filter((a,i)=>(t[i]=' ',a!=' ')).join('')).join('').split(''),m=Math.ceil(Math.sqrt(s.length)),i=0,j=0
while(s.length){r[i][j++]=s.shift();if(j>=m)j=0,i++;}return r
}

console.log(sc([
  ["a"," "," "," "," "],
  [" "," ","b"," "," "],
  [" "," "," "," "," "],
  [" ","c"," "," "," "],
  [" "," "," "," "," "]
]))
