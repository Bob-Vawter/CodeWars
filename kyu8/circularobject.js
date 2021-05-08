//kyu 8
// circular object
var circular = {
  'value':'Hello World',
  'self' : 'blank'
}
circular.self = circular
console.log(circular.self)
