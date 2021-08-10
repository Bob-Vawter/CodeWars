//kyu 7
//sort the gift code
function sortGiftCode(code){
  return code.split('').map(a=>a.charCodeAt()).sort((a,b)=>a-b).map(a=>String.fromCharCode(a)).join('')
}
