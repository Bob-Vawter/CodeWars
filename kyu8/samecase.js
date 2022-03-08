//kyu 8
//check same case

function sameCase(a, b){
  return notLetter(a) || notLetter(b) ? -1 : upperLower(a) == upperLower(b) ? 1 : 0
}

function notLetter(a){
  return !(/[A-Za-z]/).test(a)
}

function upperLower(a){
  return a == a.toUpperCase()
}
