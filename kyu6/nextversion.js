//kyu 6

//next version

function nextVersion(version){
  version = version.split('.').reverse()
  for(let i = 0; i<version.length;i++){
    if(+version[i]<9 || i==version.length-1){
      version[i] = (+version[i]+1).toString()
      break;
    } else {
      version[i] = '0'
    }
  }
  return version.reverse().join('.')
}
