//kyu 8
//regex basics

String.prototype.digit = function() {
  return /\d/.test(this) && this.length==1
};
