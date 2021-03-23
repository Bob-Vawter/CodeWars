//kyu 6
function solution(str) {
  return str.split('').map(a=>a.charCodeAt()>64&&a.charCodeAt()<91?' '+a:a).join('')
}

// Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
// solution("camelCasing")  ==  "camel Casing"
