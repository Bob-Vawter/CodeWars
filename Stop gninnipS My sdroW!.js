function spinWords(str){
var res = str.split(" ")
res.forEach((item, i) => {
  if(item.length >=5){
    res[i]=item.split("").reverse().join("");
  }
});
return res.join(" ")
}

// More Elegant solution
// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }
