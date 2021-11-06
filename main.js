//kyu 7
//Hello World - Without Strings
const helloWorld = () => {
  var str = [72,101,108,108,111,44,32,87,111,114,108,100,33]
  str = str.map(a=>String.fromCharCode(a))
  return str.reduce((acc,ele)=>acc+ele)
};
