function vowelBack(s){
  s = s.split('')
  let shift = 0

  let vowels = ['a','e','i','o','u']
  let code = ['c','o','d','e']

  s.forEach((letter, i) => {
    if(vowels.includes(letter)){
      if(letter === 'a'){
        s[i] = 'v'
      } else if (letter === 'e'){
          s[i] = 'a'
      } else if (letter === 'o'){
          s[i] = 'n'
      } else if (letter === 'u'){
          s[i] = 'p'
      }
    } else if(code.includes(letter)){ //shift if letter is one on 'code'
      if(letter === 'c'){
        s[i] = 'b'
      } else {
        s[i] = 'a'
      }
    } else {  // handle consonents
      shift = letter.charCodeAt(0)
      shift = (shift + 9)
      if(shift>122){
        shift = shift%122+96
      }
      if(!code.includes(String.fromCharCode(shift))){  // dont shift if lands on code
        s[i] = String.fromCharCode(shift)
      }
    }
  });


  return s.join('')
}
