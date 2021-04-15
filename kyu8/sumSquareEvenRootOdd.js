const sumSquareEvenRootOdd = ns => {
  const sum = (acc,cum) => acc + cum

  ns.forEach((item,i)=>{
    ns[i]=item%2===0?Math.pow(item,2):(Math.sqrt(item))
  })
  return +ns.reduce(sum).toFixed(2)
};


console.log(sumSquareEvenRootOdd([5,2,3,1,2]))
