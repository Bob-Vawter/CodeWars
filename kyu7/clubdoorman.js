function passTheDoorMan (word){
  return word.split('').map(a=>a.charCodeAt()-96).filter((ele,i,arr)=>ele==arr[i+1]).join('')*3
}
//kyu 7
//clubdoorman
