//kyu 8
//pillars

function pillars(num_pill, dist, width) {
  return num_pill>1?(num_pill-2)*width+dist*(num_pill-1)*100:0
}
