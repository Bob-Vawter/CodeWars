//kyu 8
//exluding vat
//return price without vat
function excludingVatPrice(price){
  console.log(price)
  if(price == null){
    return -1
  }
  return +(price/1.15).toFixed(2)
}
