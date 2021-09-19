//kyu 7
//Get key/value pairs as arrays
function keysAndValues(data){
  var map=[]
  var vals=[]
  for(let ele in data){
    map.push(ele)
    vals.push(data[ele])
  }
  return [map,vals]
}
