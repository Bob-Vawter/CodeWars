//kyu 7
//alternate captilization
function capitalize(s){
  var sE = s.split('').map((a,i)=>i%2==0?a.toUpperCase():a).join('')
  var sO = s.split('').map((a,i)=>i%2==1?a.toUpperCase():a).join('')
  return [sE,sO];
};
