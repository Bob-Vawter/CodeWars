//kyu 6

function decode(r) {
    var code = r.match(/[0-9]/g).join('')
    var str = r.match(/[a-z]/g).map(a=>a.charCodeAt()-97)
    var result = []
    str.forEach(letter=>{
    for(let i = 0;i<26;i++){
      if(i*code%26===letter){
        result.push(String.fromCharCode(i+97))
      }
    }
    })
    return result.length==str.length?result.join(''):'Impossible to decode'
}
