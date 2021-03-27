//kyu 5 sum of pairs

var sumPairs=function(ints, s){
  if (ints.length < 2) return undefined  //return if not enough numbers
  let intSet = new Set()                 //create a new Set of numbers
  intSet.add(ints[0])                    //add first number in array to set
  for (let i=1; i < ints.length; ++i){
    if (intSet.has(s-ints[i])){         //check if number from Set = s-itteration
      return [s-ints[i],ints[i]]        //if so return
    }
    intSet.add(ints[i])                 //add iteration to set
  }
  return undefined                      //no solution
}
