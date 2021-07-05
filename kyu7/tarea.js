//Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.
//kyu 7
function tArea(tStr) {
 return ((tStr.split('\n').length-3)**2*.5)
}
