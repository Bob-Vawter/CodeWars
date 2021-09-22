//kyu 7
//say hello world js style
var say = function(string1) {
  return function(string2) {
    return `${string1} ${string2}`
  }
}
