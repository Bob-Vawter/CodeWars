// Fix the methods here

// Example (see Description for full list of Math methods to fix)
Math.ceil = function (x) {
  return x%1==0?x:(x-x%1+1)
}

Math.floor = function (x) {
  return x-x%1
}

Math.round = function (x) {
  return x%1>=.5?Math.ceil(x):Math.floor(x)
}

Math.abs = function (x) {
  return x>0?x:-1*x
}

Math.pow = function (x,y) {
  return x**y
}

Math.min = function () {
  num = arguments[0]
  for (var i = 0; i < arguments.length; i++) {
    num = num<arguments[i]?num:arguments[i]
  }
  return num
}

Math.max = function () {
  num = arguments[0]
  for (var i = 0; i < arguments.length; i++) {
    num = num>arguments[i]?num:arguments[i]
  }
  return num
}
