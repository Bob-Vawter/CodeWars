// return the two oldest/oldest ages within the array of ages passed in.
//kyu 7
function twoOldestAges(ages){
  return ages.sort(function(a,b){return a-b;}).slice(-2);
}
