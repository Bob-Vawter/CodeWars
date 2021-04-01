function sqInRect(lng, wdth){
  let arr = []
  if(lng === wdth){
    return null
  }
  while(lng>0 && lng!=wdth){
    if(lng>wdth){
      arr.push(wdth)
      lng-=wdth
    } else{
      arr.push(lng)
      wdth-=lng
    }
  }
  lng>wdth?arr.push(lng):arr.push(wdth)
  return arr
}

//rectangle into squares 6kyu
