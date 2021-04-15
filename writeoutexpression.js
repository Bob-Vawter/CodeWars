//kyu 7

function expressionOut(expr) {
  const NUMBERS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  const [a, op, b] = expr.split(' ');
  return OPERATORS[op] ? NUMBERS[a] + ' ' + OPERATORS[op] + NUMBERS[b] : "That's not an operator!";
}
