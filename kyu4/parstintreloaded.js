//kyu 4
// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.
//
// Examples:
//
// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:
//
// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them

const parseInt = (string) =>
  string.includes('million') ? 1000000 : parseThousands(string)

const parseThousands = (string) => {
  if (string.includes('thousand')) {
    let [left, right] = string.split('thousand')
    return parseHundreds(left) * 1000 + parseHundreds(right)
  }
  return parseHundreds(string)
}

const parseHundreds = (string) => {
  if (string.includes('hundred')) {
    let [left, right] = string.split('hundred')
    return parseNumber(left) * 100 + parseNumber(right)
  }
  return parseNumber(string)
}

const parseNumber = (string) => {
  return string.replace('-',' ')
              .split(' ')
               .filter(a => a !== '')
               .filter(a => a !== 'and')
               .map(a => wordToInt[a])
               .reduce((a, b) => a + b, 0)
}

const wordToInt = {
  zero: 0, one: 1, two: 2, three: 3, four: 4,
  five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14,
  fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
  twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70,
  eighty: 80, ninety: 90
}

console.log(parseInt('one hundred thousand three hundred and twenty-one'))
