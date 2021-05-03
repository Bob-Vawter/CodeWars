//kyu 8
//duck duck goose
function duckDuckGoose(players, goose) {
  return players[(goose-1)%(players.length)].name
}
