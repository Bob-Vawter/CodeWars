//Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.
//
// It has to return a string with the type of triangle.
//kyu 7
var typeOfTriangle = function (a, b, c) {


  if((a>0&&b>0&&c>0)&&(a+b>c&&b+c>a&&c+a>b)){

  //equilateral
  if(a==b && b==c){
    return 'Equilateral'
  }
  //isosceles
  if((a==b && a!=c)||(a==c && a!=b)||(b==c&&b!=a)){
    return 'Isosceles'
  }
  return 'Scalene'
    }
  return 'Not a valid triangle'


}
