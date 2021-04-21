//kyu 6
//give me a diamond

function diamond(n){
  if(n%2==0||n<1){
    return null
  }
  var diam = ''
  var count = (n-1)/2
  for(let i = 1;i<=n;i+=2){
    diam += (' ').repeat(count) + ('*').repeat(i) + '\n'
    count--
  }
  count=0
  for(let j = n-2;j>=1;j-=2){
      count++
   diam += (' ').repeat(count) + ('*').repeat(j) + '\n'
  }

  return diam;
}
