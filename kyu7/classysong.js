class Song {
  constructor(title,artist){
    this.title = title
    this.artist = artist
    this.fans = []
  }
  howMany(arr){
    var count = 0
    arr = (arr.map(a=>a.toLowerCase()))
    arr.forEach(ele=>{
      if(!this.fans.includes(ele)){
        this.fans.push(ele)
        count++
      }
    })
    return count
  }
}
//kyu 7
//what a classy song
