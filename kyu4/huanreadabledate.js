function formatDuration (seconds) {
  // Complete this function
  if (seconds == 0){
    return 'now'
  }
  let arr = []
  let n=0
  if(seconds >= 31536000){
    n=Math.floor(seconds/31536000)
    arr.push(n + " year"+ ending(n))
    seconds=seconds%31536000
  }
  if (seconds >= 86400) {
    n = Math.floor(seconds/86400)
    arr.push(n + " day" + ending(n))
    seconds = seconds%86400
  }
  if (seconds >= 3600) {
    n = Math.floor(seconds/3600)
    arr.push(n + " hour" + ending(n))
    seconds = seconds%3600
  }
  if (seconds >= 60) {
    n = Math.floor(seconds/60)
    arr.push(n + " minute" + ending(n))
    seconds = seconds%60
  }
  if (seconds>0){
    arr.push(seconds + " second" + ending(seconds))
  }

  var str = arr.length == 1 ? arr[0] : arr.slice(0, arr.length - 1).join(", ") + " and " + arr[arr.length - 1];

  return str

  function ending (number) {
    return (number > 1) ? 's' : '';
  }

}

// human readable duration format 4kyu
