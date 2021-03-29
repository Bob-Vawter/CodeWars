//kyu 7

function getDivisorsCnt(n){
    var result = 0;
    for(let i = 1;i<=n;i++){
      result += n%i===0?1:0
    }
    return result
}
