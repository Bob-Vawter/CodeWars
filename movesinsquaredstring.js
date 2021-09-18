//kyu 7
//moves in squared string
function vertMirror(strng) {
    return strng.split('\n').map(a=>a.split('').reverse().join('')).join('\n')
}
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
    return fct(s)
}
