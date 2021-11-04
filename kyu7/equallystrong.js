//kyu 7
//are equally strong
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  var youS = yourLeft>yourRight?yourLeft:yourRight
  var youW = yourLeft<yourRight?yourLeft:yourRight
  var friendS = friendsLeft>friendsRight?friendsLeft:friendsRight
  var friendW = friendsLeft<friendsRight?friendsLeft:friendsRight

  return youS == friendS && friendW == youW
}
