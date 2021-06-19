//kyu 8
// Hello Happy Codevarrior!

class Warrior{
  constructor(n){

  var name = n;
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}
}

Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}
