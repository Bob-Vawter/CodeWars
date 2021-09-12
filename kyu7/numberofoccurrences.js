//kyu 7
//number of occurences
Array.prototype.numberOfOccurrences = function(a) {
  return (this.filter(ele=>ele==a).length)
}
