//kyu 7
//vaporcode
function vaporcode(string) {
  return string.split(' ').join('').split('').map(a=>a.toUpperCase()).join('  ')
}
