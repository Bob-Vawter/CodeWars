//kyu 6

function nbMonths(priceOldCar, priceNewCar, savingRate, lossPerMonth){
  var months = 0, savings = 0
  lossPerMonth *= .01
  console.log(lossPerMonth)

  while(priceOldCar + savings < priceNewCar){
    savings += savingRate
    months++
    if(months>0&&months%2==0){
      lossPerMonth += 0.005
    }
    priceOldCar-=(priceOldCar*lossPerMonth)
    priceNewCar-=(priceNewCar*lossPerMonth)

  }
  return [months,Math.round(priceOldCar + savings - priceNewCar)]
}
