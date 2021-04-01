function order(words){
  if(words==""){
    return ""
  }
  words = words.split(' ').sort(function (a, b) {
  return a.match(/[1-9]/g) - b.match(/[1-9]/g);
});
  return words.join(' ')
}

//kyu 6 proud of this one
