// In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.
//
// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
//kyu 6

function validate(n){
  var card = n.toString().split('').map(a=>+a)
  card.forEach((val,i)=>{
      if(i%2==card.length%2){
        card[i]=val*2
      }
    })
  card = card.map(a=>a>9?a-9:a)
  return card.reduce((a,b)=>a+b,0)%10==0
}
