//kyu 7
//refactored greeting
class Person {
  constructor(name) {
    this.name=name
  }
  greet (person) {
  return "Hello " + person + ", my name is " + this.name;
}
}
