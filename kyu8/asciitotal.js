//kyu 8
// ascii total

function uniTotal(str)
{
  return str.split('').map(a=>a.charCodeAt()).reduce((a,b)=>a+b,0)
}
