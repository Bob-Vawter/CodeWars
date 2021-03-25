//kyu 4
//times out
// function dblLinear(n) {
//   console.log(n)
//   var db = [1]
//   var result = [1]
//   for(let i = 1; i<=n;i++){
//     var num = Math.min(...db)
//     if(!result.includes(num*2+1)){
//       result.push(num*2+1)
//       db.push(result[result.length-1])
//     }
//     if(!result.includes(num*3+1)){
//       result.push(num*3+1)
//       db.push(result[result.length-1])
//     }
//     db.sort((a,b)=>a-b)
//     db.shift()

    function dblLinear(n) {
      let res = [1], y = 0, z = 0
      for (let i = 0; i < n; i++) {
        let nextY = 2 * res[y] + 1, nextZ = 3 * res[z] + 1
        if (nextY <= nextZ) {
          res.push(nextY)
          y++
          if (nextY == nextZ)
          z++
        } else {
          res.push(nextZ)
          z++
        }
      }
      return res[n]
    }
