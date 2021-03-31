//kyu 6 valid phone number

function validPhoneNumber(pN){

   pN = pN.split(' ')
   var areaCode = pN.shift()
   areaCode = areaCode.split('')
   areaCode.pop()    //strip back )
   areaCode.shift() //strip front (
   areaCode = areaCode.join('')
   pN = pN.join('').split('-')

  if(pN[0]!=undefined&&pN[1]!=undefined){
  return validThree(areaCode)&&validThree(pN[0])&&validFour(pN[1])
  }
  return false
}

function validThree (num) {
  return num.replace(/\D/g,'') === num && num.length===3&&num.charAt(0)!='0'
}

function validFour (num) {
  return num.replace(/\D/g,'') === num && num.length===4
}

// better not mine
// need to learn better use of regex
// function validPhoneNumber(phoneNumber){
//   return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
// }
