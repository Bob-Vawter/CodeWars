//kyu 7
//pwers of i
function pofi(n){
  return n==0?'1':n%2=='0'?((n/2)%2==0?'1':'-1'):((n-1)/2)%2==0?'i':'-i';
}
