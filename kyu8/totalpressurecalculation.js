solution= (M1, M2, m1, m2, V, C) => {
  var R = 0.082
  var T = C+273.15
  return (((m1/M1)+(m2/M2))*R*T)/V
}
//kyu 8 total pressure calculation
