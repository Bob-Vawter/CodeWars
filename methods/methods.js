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


// pop
//removes last item from array
arr = [1,2,3]
arr.pop()
// arr = [1,2]

// shift
//removes first item from array

// push
// unshift
// includes
// indexOf
// every
//
// Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!
//
// Questions to practice:
//
// One:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//
// Two:
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
//
// Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6
