//kyu 7

function deleteValues(array, pred) {
  console.log(pred(4))
  console.log(array)
  for(var i = 0; i < array.length; i++) {
    if ( pred(array[i]) ) {
      array.splice(i, 1);
      i--
    }
  }
  return array;
}
