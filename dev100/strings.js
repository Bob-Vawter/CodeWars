// Please research the following string methods:

// charAt(index)
//returns char at specific index
var str = "Don't Get Got, Get Git"
str.charAt(4)
//index 4 is 't'

// charCodeAt
// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
'AaBbCc'.charCodeAt(0)  // returns 65
'AaBbCc'.charCodeAt(1)  // returns 97
'AaBbCc'.charCodeAt(2)  // returns 66
'AaBbCc'.charCodeAt(3)  // returns 98
'AaBbCc'.charCodeAt(4)  // returns 67
'AaBbCc'.charCodeAt(5)  // returns 99

// concat
// The concat() method concatenates the string arguments to the calling string and returns a new string.
'ABC'.concat('abc') //returns ABCabc
'ABC'.concat(' ','DEF') //returns ABC DEF
'A'.concat(',','B',',','C') // returns A,B,C

// includes
// The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
'This cool string'.includes('cool') //returns true
'This cool string'.includes('Cool') //returns false
'This cool string'.includes('Cool'.toLowerCase()) //returns true

// indexOf
// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.00
'This cool string'.indexOf('cool') //returns 5

// match
// The match() method retrieves the result of matching a string against a regular expression.
var regex = /[A-Z]/g
'This Cool String'.match(regex) // returns ['T','C','S']
var regex2 = /A-E/ig
"This is a Cool String".match(regex2) //returns ['a','C']

// repeat
// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
'Repeat'.repeat(2) // returns 'RepeatRepeat'

// replace
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
//
// The original string is left unchanged.
'Repeat'.replace('eat','lace') //return 'replace'

// search
// The search() method executes a search for a match between a regular expression and this String object.


// slice
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
'This is a cool string'.slice(5) //returns 'is a cool string'

// split
// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
'This is a cool string'.split(' ') //returns ['This','is','a','cool','string']

// substr
// The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
'This is a cool string'.substr(5,4)  //returns 'is a'

// toLowerCase
// returns string with all characters to lower case
var str = 'My Random String'
str = str.toLowerCase()
//returns 'my random string'

// toUpperCase
// returns string with all characters to upper case
var str = 'My Random String'
str = str.toLowerCase()
//returns 'MY RANDOM STRING'

// trim
// trims whitespace from beginning and end of STRING
var str = ' my random string '
str = str.trim()
//str now equals 'my random string'
