//kyu 7
//Regexp Basics - is it a vowel?
String.prototype.vowel = function() {
  return /[aeiou]/ig.test(this)&&this.length==1
};
