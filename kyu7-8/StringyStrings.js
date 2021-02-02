function stringy(size) {
  var str = []
  for (let i = 1;i<=size;i++){
    str.push(i%2)
  }
  return str.join('')
}
