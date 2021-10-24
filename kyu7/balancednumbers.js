//kyu 7
//balanced numbers
function balancedNum(number)
{
    number=number.toString().split('').map(a=>+a)
    var n = number.length
    var left=n%2==1?number.slice(0,n/2).reduce((a,b)=>a+b,0):number.slice(0,n/2-1).reduce((a,b)=>a+b,0)
    var right=number.slice(n/2+1).reduce((a,b)=>a+b,0)
    return left==right?'Balanced':'Not Balanced'
}
