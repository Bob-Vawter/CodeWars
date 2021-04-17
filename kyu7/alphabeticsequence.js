//kyu 7

function alphaSeq (str) {
    str=str.toUpperCase()
    console.log(str.charCodeAt(0)-65)
    return str.split('').sort().map(a=>a+a.toLowerCase().repeat(a.charCodeAt()-65)).join(',')
}
