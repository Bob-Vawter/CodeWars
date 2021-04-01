//kyu 5 Weight for weight

function orderWeight(str) {

  var redux = (n1,n2)=>+n1+(+n2)
   return str.split(' ')
     .sort((a,b)=>a.split('').reduce(redux)-b.split('').reduce(redux) || a>b || -(a<b) )
     .join(' ')
}
