//kyu 8
// age range compatibility equation
function datingRange(age){
  var min,max
  if(age>14){
  min = Math.floor(age/2)+7
  max = (age-7)*2
  } else {
    min = age - Math.ceil(0.10 * age)
    max = age + Math.floor(0.10 * age)
  }
   return min+'-'+max
}
