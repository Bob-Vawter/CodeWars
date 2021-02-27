// Code Wars

function rgb(r, g, b){
  rgbA = [r,g,b]
  rgbA.forEach((c,i)=> {c<0?rgbA[i]=0:(c>255?rgbA[i]=255:rgbA[i]-=rgbA[i]%1)})
  rgbA.forEach((num,i) => { rgbA[i] = num.toString(16).toUpperCase() });
  rgbA.forEach((num,i) => { if(num.length ===1){rgbA[i] = '0'+ num}})
  return(rgbA.join(''))
}
