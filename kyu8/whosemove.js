//kyu 8
//Simple Fun #261: Whose Move
function whoseMove(lastPlayer, win) {
   return win==true?lastPlayer:(lastPlayer == 'white'?'black':'white')
}
