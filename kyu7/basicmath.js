//kyu 7
//basic math add subtract
function calculate(str) {
str = str.split('plus').join('+').split('minus').join('-')

return eval(str).toString();
}
