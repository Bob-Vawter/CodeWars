// kyu quick 8s

function find_average(arr) {
  return arr.length>0?arr.reduce((a,b)=>a+b)/arr.length:0
}

function areYouPlayingBanjo(name) {
  return name.charAt(0)==='R'||name.charAt(0)==='r'?name +" plays banjo":name + " does not play banjo"
}

function arrayPlusArray(arr1, arr2) {
  var redux = (a,b) => a+b
  return arr1.reduce(redux) + arr2.reduce(redux)
}

function sum (num) {
  return num.length>0?num.reduce((a,b)=>a+b):0
};

function monkeyCount(n) {
  var arr = []
  for(let i = 1; i<=n;i++){
    arr.push(i)
  }
  return arr
}

function abbrevName(name){
    return name.toUpperCase().split(' ').map(a=>a.charAt(0)).join('.')
}

function digitize(n) {
  return n.toString().split('').reverse().map(a=>+a)
}
