// kyu quick warmups
// kyu quick warmups 7 and 8s

function twoSort(s) {
  s=s.sort()
  return s[0].split('').join('***')
}

function isVow(a){
  var arr=[97, 101, 105, 111, 117]
  a.forEach((item,i)=>{
    if (arr.includes(item)){
      a[i]=String.fromCharCode(item)
    }
  })
  return a
}

function smallEnough(a, limit){
  return Math.max(...a)<=limit
}
