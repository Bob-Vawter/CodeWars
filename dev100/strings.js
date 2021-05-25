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


// match


// repeat


// replace


// search


// slice


// split


// substr

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
