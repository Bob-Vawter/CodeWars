//kyu 7

function expressionOut(expr) {
  var nums = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten']
  expr = expr.split(' ')
  expr[0] = nums[+expr[0]] + ' '
  expr[2] = nums[+expr[2]]
  expr[1] = OPERATORS[expr[1]]
  return expr[1]?expr.join(''):"That's not an operator!"
}
