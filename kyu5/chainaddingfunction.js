//kyu 5
//currying
//a chain adding function
function add(n){
  var curryAdd = function(x) {
    return add(n + x);
  };

  curryAdd.valueOf = function() {
    return n;
  };

  return curryAdd;
}
