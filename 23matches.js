//kyu 6
//23 Matches. Or more..
const createBot = (X, Y) => {
let myBot = {
   name: "Winner",
   makeMove: matchesStillOnTable => {
     let matchToTake = 0
     if(matchesStillOnTable%(Y+1)==0){
       matchToTake = Y
     } else {
       matchToTake = matchesStillOnTable%(Y+1)-1
     }
     return matchToTake
   }
}

   return myBot;
}


//X > Y+1 ? (X-1)%Y : X-1
