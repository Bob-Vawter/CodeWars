function isPangram(string){
  string = string.toLowerCase().match(/[a-z]/g)
  var arr = []
  arr.length = 26
  string.forEach(item=>{
    arr[item.charCodeAt()-97]=1
  })
  return arr.reduce((a,b)=>a+b)==26?true:false
}
//kyu 6
