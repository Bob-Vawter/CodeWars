function sumMix(x){
  return x.length===1?Number(x[0]):x.reduce((acc,cur)=>Number(acc)+Number(cur))
}
