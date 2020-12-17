function alphabetPosition(text) {
  var alpha = []
  for(let i=0;i<26;i++){
    alpha.push(String.fromCharCode(i+97))
  }

  text = text.toLowerCase().split('').filter(a=>alpha.includes(a))
  text.forEach((item,i)=>{
    text[i] = item.charCodeAt()-96
    })
  return text.join(' ');
}


//cleaner ways
//let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

// function alphabetPosition(text) {
//   return text
//     .toUpperCase()
//     .match(/[a-z]/gi)
//     .map( (c) => c.charCodeAt() - 64)
//     .join(' ');
// }
