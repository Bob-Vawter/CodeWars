//kyu 6
//wheres my parent
function findChildren(dB) {
	return dB.split('').map(a=>a.toLowerCase()).sort().map((ele,i,arr)=>ele!=arr[i-1]?ele.toUpperCase():ele).join('')
}
