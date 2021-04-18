//kyu 6
// fizzbuzz backwards

function reverseFizzBuzz(array) {

  var fizz = array.indexOf('Fizz')+1
  var buzz = array.indexOf('Buzz')+1
  var fB = array.indexOf('FizzBuzz')+1
  if( fizz == 0 && buzz == 0){
    return [fB,fB]
  }
  if( fizz == 0 ){
    return [fB,buzz]
  }
  if (buzz == 0){
    return [fizz,fB]
  }
  return [fizz,buzz]
};
