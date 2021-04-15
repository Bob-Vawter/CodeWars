//kyu 8
//change machine

function changeMe(moneyIn){
  var changeMachine = {
   '£5': Array(25).fill('20p').join(' '),
    '£2': Array(10).fill('20p').join(' '),
    '£1': '20p 20p 20p 20p 20p',
    '50p': '20p 20p 10p',
    '20p': '10p 10p'
  }
  if(changeMachine[moneyIn]){
    return changeMachine[moneyIn]
  }
    return moneyIn
}
