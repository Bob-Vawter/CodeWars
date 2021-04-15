//kyu 7
//Switcheroo

function switcheroo(x){
  return x.split('').map(a=>a=='a'?'b':(a=='b'?'a':a)).join('')
}
