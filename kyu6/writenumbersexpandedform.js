//kyu 6
function expandedForm(num) {
  num = num.toString().split('').reverse().map((a,i)=>+a!=0?a+'0'.repeat(i):'').filter(a=>a!='').reverse().join(' + ')
 // console.log(num)
  return num
}

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
