//kyu 8 warmup 8s

String.prototype.toAlternatingCase = function () {
  return this.split('').map(a=>a==a.toLowerCase()?a.toUpperCase():a.toLowerCase()).join('')
}
