//kyu 7
//weight of contents
/*
* Takes a bottleWeight and scale of the bottle to its contents
* and returns the weight of its contents
* @param {int} bottleWeight:
*  The weight of the entire bottle and contents
* @param {string} scale:
*  A string comparing the weight of the bottle contents to the weight of the bottle by itself
* Acceptable values: ('2 times larger', '4 times larger', '50 times smaller')
*/
function contentWeight(bottleWeight, scale) {
  scale = scale.split(' ')
  if(scale.includes('larger')){
    return bottleWeight*scale[0]/(1+(+scale[0]))
  } else {
    return bottleWeight/(1+(+scale[0]))
  }
}
