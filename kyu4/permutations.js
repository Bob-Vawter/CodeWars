// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.
//
// Examples:
//
// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
function permutations(string) {
  if(string.length<2){
    return [string]
  }
  let permArr = []
  for (let i = 0; i<string.length;i++){
    let char = string[i]
    let otherChar = string.slice(0,i)+string.slice(i+1,string.length)

    if(string.indexOf(char) != i)
    continue

    for(let permutation of permutations(otherChar)){
      permArr.push(char+permutation)
    }
  }
  return permArr
}
console.log(permutations('aabc'))
