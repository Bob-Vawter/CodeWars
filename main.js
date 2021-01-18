const nextMultipleOfFive = n => {
  if(n==0){
    return 5
  }
  var bin = n.toString(2)
  var arr = ['0','1','00','01','10','11','000','001','010','100','011','101','110','111']
  var result = bin+arr[0]
  for(let i=1;parseInt(result,2)%5!=0&&i<=arr.length;i++ ){
    result = bin + arr[i]
  }
  return parseInt(result,2)
}
//Write a function that receives a non-negative integer n ( n >= 0 ) and returns the next higher multiple of five of that number, obtained by concatenating the shortest possible binary string to the end of this number's binary representation.
//kyu 6
