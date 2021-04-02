//kyu 5
// product of consecutive Fib Numbers

function productFib(prod){
  var n1 = 0, n2 = 1, next = 1
  while(n1*n2<prod){
    next = n1+n2
    n1=n2
    n2=next
  }
  return [n1,n2,n1*n2===prod]
}
