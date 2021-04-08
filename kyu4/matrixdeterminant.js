// kyu 4
// Matrix Determinant

function determinant(m) {
  if(m.length==1){
    return m[0][0]
  }
  var result = 0
  for(let i = 0;i<m.length;i++){
    if(i%2==0){
      result += m[0][i]*determinant(minor(i,m))
    } else {
      result -= m[0][i]*determinant(minor(i,m))
    }
  }
  return result
}

function minor (col,arr) {
  var minorArr = []
  for(let i = 0;i<arr.length;i++){
    minorArr.push(arr[i])
  }
  minorArr.shift()
  minorArr.forEach((row,i)=>{
    minorArr[i] = row.filter((a,i)=>i!=col)
  })
  return minorArr
}

// function determinant(m) {
//   if (m.length == 1) {
//     return m[0][0];
//   }
//
//   return m[0].reduce(function (acc, x, col) {
//     return acc + ( col & 1 ? -1 : 1 ) * x * determinant( minor(m, { i: 0, j: col }) );
//   }, 0);
// }
//
// function minor(m, idxs) {
//
//   function removeElement(index, m) {
//     return m.slice(0, index).concat(m.slice(index + 1));
//   }
//
//   return removeElement(idxs.i, m.map(removeElement.bind(null, idxs.j)));
// }

// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.
//
// How to take the determinant of a matrix -- it is simplest to start with the smallest cases:
//
// A 1x1 matrix |a| has determinant a.
//
// A 2x2 matrix [ [a, b], [c, d] ] or
//
// |a  b|
// |c  d|
// has determinant: a*d - b*c.
//
// The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.
//
// For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or
//
// |a b c|
// |d e f|
// |g h i|
// the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:
//
// |- - -|
// |- e f|
// |- h i|
// Note the alternation of signs.
//
// The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:
//
// det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)
