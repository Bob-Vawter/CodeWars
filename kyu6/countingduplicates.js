function duplicateCount(text){
  text = text.toLowerCase().split('')
  var dupeArr = []
  var end = []
  text.forEach((item,i)=>{
    end = text.slice(i+1)
    console.log(end)
    end.includes(item)&&!dupeArr.includes(item)?dupeArr.push(item):console.log(item)
  })
  return dupeArr.length
}

//counting duplicates 6 kyu
