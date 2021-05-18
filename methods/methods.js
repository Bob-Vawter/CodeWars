//methods
// Please research the following methods:
// map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
arr = [5,6,7,8,9]
arr.map(a=>a+1)

// reduce
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
arr.reduce((a,b)=>a+b,0)

// filter
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
arr = [5,6,7,8,9,0]
arr.filter(a=>a>=7)
// should return arr=[7,8,9]

// forEach
// The forEach() method executes a provided function once for each array element.
arr.forEach((item, i) => {
 arr[i] = item * 2
});
//[14,16,18]

// sort
// The sort() method sorts the elements of an array in place and returns the sorted array.
arr = [4,5,8,2,3,9]
arr.sort((a,b)=>a-b)

// slice
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
arr = [5,4,12,4,123,2]
console.log(arr.slice(3))
//output [4,123,2]

// pop
//removes last item from array
arr = [1,2,3]
arr.pop()
// arr = [1,2]

// shift
//removes first item from array
arr.shift()
//arr = [2]

// push
// adds item to end of array in next index spot
arr.push(7)
// arr=[2,7]

// unshift
// adds item to front of array
arr.unshift(1)
// arr=[1,2,7]

// includes
// returns boolean true or false if item is in array
arr.includes(7)
//true

// indexOf
//returns index of found item, or -1 if not found
arr.indexOf(5)
// -1

// every
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
arr.every(a=>a<8)
//true


// Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!
//
// Questions to practice:
//
// One:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
arr=[1,2,3,4]
arr.reduce((a,b)=>a*b,1)

// Two:
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
arr = [12,25,63,8,43,39]
var result = []
arr = arr.sort((a,b)=>a-b)
result.push(arr.shift())
result.push(arr.pop())
result.push(result[1]-result[0])

// Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6
