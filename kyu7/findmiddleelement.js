//kyu 7
//find the middle element
const gimme = (inputArray) => inputArray.indexOf(midNum(inputArray))
const midNum = (arr) => {
  if((arr[0]>arr[1]&&arr[0]<arr[2])||(arr[0]<arr[1]&&arr[0]>arr[2])){
    return arr[0]
  } else if((arr[1]>arr[0]&&arr[1]<arr[2])||(arr[1]<arr[0]&&arr[1]>arr[2])){
    return arr[1]
  } else {
    return arr[2]
  }
}
