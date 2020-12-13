function mix(s1,s2){
              let result = [],obj1 = calc(s1),obj2 = calc(s2)

              for(let i in obj1){
                if(obj2[i]){
                  obj1[i] > obj2[i] && result.push('1:'+i.repeat(obj1[i]))
                  obj1[i] < obj2[i] && result.push('2:'+i.repeat(obj2[i]))
                  obj1[i] == obj2[i] && result.push('=:'+i.repeat(obj1[i]))
                }else{
                  result.push('1:'+i.repeat(obj1[i]))
                }
              }
              for(let i in obj2){
                   !obj1[i] && result.push('2:'+i.repeat(obj2[i]))
              }


              function calc(str){
                  var obj = {};
                  str.replace(/[^a-z]/g,'').split('').map(x => obj[x] ? obj[x] ++ : obj[x] = 1)
                  for(let i in obj){
                    obj[i] == 1 &&　delete obj[i]
                  }
                  return obj
              }
      return result.sort((a,b)=>(b.length - a.length)||(a < b ? -1 : 1)).join('/')
  }
  //kyu 4
