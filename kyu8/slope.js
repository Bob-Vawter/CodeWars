//kyu 8
//slope
function slope(points)
{
 return points[0]==points[2]?'undefined':((points[1]-points[3])/(points[0]-points[2])).toString()
}
