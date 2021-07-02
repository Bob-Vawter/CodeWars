// Description
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:
//
// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:
//
// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.
//
// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.
// kyu 6

function goodVsEvil(good, evil){
  good = good.split(' ')
  evil = evil.split(' ')
  var goodTeam = {
    0 : 1,
    1 : 2,
    2 : 3,
    3 : 3,
    4 : 4,
    5 : 10
  }
  var evilTeam = {
    0 : 1,
    1 : 2,
    2 : 2,
    3 : 2,
    4 : 3,
    5 : 5,
    6: 10
  }
  var men = 0
  var orcs = 0
  good.forEach((val,i)=>{
    men += (goodTeam[i]*val)
  })
  evil.forEach((val,i)=>{
    orcs += (evilTeam[i]*val)
  })
  return 'Battle Result: ' + (men > orcs ? 'Good triumphs over Evil' : orcs > men ? 'Evil eradicates all trace of Good' : 'No victor on this battle field')

}
