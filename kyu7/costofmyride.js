//kyu 7
//cost of my ride
function insurance(age, size, numofdays){
var surcharge = age<25?10:0
switch (size){
    case 'economy':
    return calc(surcharge+0,numofdays)
    break;
    case 'medium':
    return calc(surcharge+10,numofdays)
    break;
    default:
    return calc(surcharge+15,numofdays)
    break;
}
}
const calc = (rate, num) => {
  var charge =num*(rate+50)
  return charge>0?charge:0
}
