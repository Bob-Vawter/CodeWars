// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
//kyu 7

var capitals = function (word) {
	return word.split('').map((a,i)=>a==a.toUpperCase()?i:-1).filter(a=>a!=-1)
};
