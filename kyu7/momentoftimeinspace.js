//kyu 7
//Simple Fun #193: Moment Of Time In Space
function momentOfTimeInSpace(moment) {
  var time = moment.split('').filter(a=>/[1-9]/.test(a)).reduce((a,b)=>+a+ +b,0)
  var space = moment.split('').filter(a=>!/[1-9]/.test(a)).length
 return [time<space,time==space,time>space]
}
