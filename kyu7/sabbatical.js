//kyu 7
//office vi sabbatical
function sabb(s, val, happiness){
  var test = 'sabticl'
  var result = happiness + val + test.split('').map(a=>s.split(a).length-1).reduce((a,b)=>a+b,0)
  console.log(result)
  return result > 22?'Sabbatical! Boom!':'Back to your desk, boy.'
}
