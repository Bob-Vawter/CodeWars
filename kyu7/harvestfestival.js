//kyu 7
//harvest festival

function plant(seed, water, fert, temp){
  var plant = ('-'.repeat(water)+seed.repeat(fert)).repeat(water)
  return temp>=20&&temp<=30?plant:'-'.repeat(water*water)+seed
}
