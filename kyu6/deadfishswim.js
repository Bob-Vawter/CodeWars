//kyu6
//Write a simple parser that will parse and run Deadfish.
// 
// Deadfish has 4 commands, each 1 character long:
//
// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.
// Return the output array, and ignore all non-op characters
function parse( data )
{
  var count = 0
  var ans = []
  for(let i = 0;i<data.length;i++){
    switch (data[i]){
      case 'i':
      count +=1;
      break;
      case 'd':
      count -=1;
      break;
      case 's':
      count = count**2;
      break;
      case 'o':
      ans.push(count);
      break;
    }
  }
  return ans
}
