// fizzbuzz
// print numbers 1 to that number
// divisible by 3 fizz
// divisible by 5 buzz
// by both 3,5 fizzbuzz

function fizzbuzz (num) {
  for(let i = 1;i<=num;i++){
    console.log(i%3===0&&i%5===0?'fizzbuzz':(i%3===0?'fizz':(i%5===0?'buzz':i)))
  }
}

fizzbuzz(5)
fizzbuzz(15)
fizzbuzz(25)
