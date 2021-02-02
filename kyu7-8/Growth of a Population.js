function nbYear(p0, percent, aug, p) {
  let count = 0
  for(let i = p0; i<p; i=i+i*percent/100+aug){
  count++
  } 
  return(count)
}
