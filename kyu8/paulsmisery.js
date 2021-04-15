//kyu 7
//pauls misery

function paul(arr){
  const dic = {kata: 5, 'Petes kata': 10, life: 0, eating: 1}
  const num = arr.reduce( (a, i)=> +a + dic[i], 0)
  return num < 40 ? 'Super happy!' : num < 70 ? 'Happy!' : num < 100 ? 'Sad!' : 'Miserable!'
}
