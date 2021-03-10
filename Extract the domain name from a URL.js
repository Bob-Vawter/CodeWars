function domainName(url){
  let lead1 = 'http://'
  let lead2 = 'https://'
  let lead3 = 'www.'
  let strL = url.length
  // attempt to strip off leading http or https then check for www
  if(lead1 === url.slice(0,7)){
    return domainName(url.slice(7,strL))
  } else if (lead2 === url.slice(0,8)){
    return domainName(url.slice(8,strL))
  } else if (lead3 === url.slice(0,4)) {
    return domainName(url.slice(4,strL))
  }
  // check for trailing . so as to return only url
  for(let i =0;i<strL;i++){
    if(url.charAt(i) === '.'){
      return(url.slice(0,i))
    }
  }
  // default return if no trailing . or leading http
  return(url)
}

//more elegant solution
//function domainName(url){
//  url = url.replace("https://", '');
//  url = url.replace("http://", '');
//  url = url.replace("www.", '');
//  return url.split('.')[0];
//};
