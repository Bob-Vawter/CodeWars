//kyu 7
//flatten and sort array
"use strict";

function flattenAndSort(array) {
  return array.map(a=>a.join(' ')).join(' ').split(' ').filter(a=>a!='').map(a=>+a).sort((a,b)=>a-b)
}
