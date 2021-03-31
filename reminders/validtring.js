//kyu 6 valid string

var validWord = function(dictionary, word) {

  let reg = new RegExp('^(' + dictionary.join('|') + ')+$');
  return reg.test(word);


};

console.log(validWord(['wars','code'],'codewars'))
