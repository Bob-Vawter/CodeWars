//kyu 7
//parts of a list
function partlist(arr) {
    var result = []
    for(let i = 1;i<arr.length;i++){
      result.push([(arr.filter((a,index)=>index<i).join(' ')),(arr.filter((a,index)=>index>=i).join(' '))])
    }
  return result
}
