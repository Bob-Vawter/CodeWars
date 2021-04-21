//kyu 8
//simple calculator

function calculator(a,b,sign){
var signS = ['*','/','-','+']
return signS.includes(sign)&&!isNaN(a)&&!isNaN(b)?eval(a + sign + b):'unknown value'
}

function calculatorTC(a,b,sign) {
  try
    { return eval(a+sign+b); }
  catch(e)
    { return "unknown value"; }
}
