//kyu 6
//pyramid array
function pyramid(n) {
  var newArray = [];

  if(n === 0) {
    return [];
  } else if(n > 0) {

    for(let i = 0; i < n; i++) {
      newArray[i] = new Array();
      for(let j = 0; j <= i; j++) {
        newArray[i][j] = 1;
      }
    }
  }

  return newArray;
}
