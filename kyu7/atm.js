//kyu 7
//atm
function solve(n,count = 0) {
  return  n>=500?solve(n-500,++count):
          n>=200?solve(n-200,++count):
          n>=100?solve(n-100,++count):
          n>=50?solve(n-50,++count):
          n>=20?solve(n-20,++count):
          n>=10?solve(n-10,++count):
          n==0?count:-1
}
