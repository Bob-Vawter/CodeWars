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
function howManyDalmatians(number) {

  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

  var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]))

return respond

}
