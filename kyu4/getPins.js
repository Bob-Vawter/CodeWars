//kyu 4 The Observed Pin

function getPINs(observed) {
  var result = []
  var adjacent = {
    '0': ['0','8'],
    '1': ['1','2','4'],
    '2': ['2','1','3','5'],
    '3': ['3','2','6'],
    '4': ['4','1','5','7'],
    '5': ['5','2','4','6','8'],
    '6': ['6','3','5','9'],
    '7': ['7','4','8'],
    '8': ['8','5','7','9','0'],
    '9': ['9','6','8']
  }
  var digits = observed.split('')

  getCombo(digits, 0, '')

  return result

  function getCombo(digits, index, current) {
    var curDigit = digits[index];
    var possible = new Set(adjacent[curDigit]);
    
    possible.forEach(value=>{
      index === digits.length - 1 ?
      result.push(current + value) :
      getCombo(digits, index + 1, current + value);
    })
  }
}

console.log(getPINs('8'))
console.log(getPINs('12'))
