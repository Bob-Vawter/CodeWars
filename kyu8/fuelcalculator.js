//kyu 8
//fuel calculator
function fuelPrice(litres, pricePerLitre) {
  var disc = Math.floor(litres/2)*.05
  disc = disc > .25 ? .25:disc
  console.log(disc)
  return +(litres * (pricePerLitre-disc)).toFixed(2)
}
