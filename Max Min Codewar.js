var min = function(list){
    list.forEach(x=>{
      list[0]=list[0]<x?list[0]:x
    })
    return list[0];
}

var max = function(list){
    list.forEach(x=>{
      list[0]=list[0]>x?list[0]:x
    })
    return list[0];
}
