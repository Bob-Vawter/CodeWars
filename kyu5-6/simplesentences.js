function makeSentence(parts) {
  parts = parts.filter(a=>a!='.')
  parts.forEach((item,i)=>{
   if(item == ','){
     parts[i-1]+=','
     parts[i]=''
    }
})
  parts=parts.filter(a=>a!='')
  return parts.join(' ')+'.'
}

//simple sentences 6kyu
