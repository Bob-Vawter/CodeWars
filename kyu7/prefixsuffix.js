//kyu 7
//string prefix and suffix
function solve(s){
    let run = Math.floor(s.length/2)
    while(run){
      if(s.slice(0,run)==s.slice(s.length-run)){
        return run
      }
      run--
    }
    return 0
}
