// it should return the places from the given routes
//Follow That Spy
//currently stuck

function findRoutes(routes) {
  //Need to find a start point that does not exist as an endpoint
  //take endpoint of that element, find next element that has a matching start point
  //repeat until no more elements
  let startPoints = []
  let endPoints = []
  let trueRoute = []
  let index = 0

  routes.forEach((pair,i)=>{
    startPoints.push(pair[i,0])
    endPoints.push(pair[i,1])
  })
  console.log(startPoints)
  console.log(endPoints)
  startPoints.forEach((item,i)=>{
    if(!endPoints.includes(item)){
      trueRoute.push(item)
      index = i
    }
  })
  return(trueRoute.join(''))
}

console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]))
