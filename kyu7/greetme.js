//kyu 7
//Greet Me
var greet = function(name) {
  name = name[0].toUpperCase() + name.slice(1).toLowerCase()
  return `Hello ${name}!`
};
