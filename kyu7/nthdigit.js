//kyu 7
//find the nth digit of a numebr
var findDigit = function(num, nth){
    var numA = Math.abs(num).toString().split('').map(a=>+a).reverse()
    return nth>0&&nth<=numA.length?numA[nth-1]:nth<=0?-1:0
}
