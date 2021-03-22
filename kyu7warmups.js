//kyu 7 quick warmups

function disemvowel(str) {
  var vowels = ['a','e','i','o','u']
  return str.split('').filter(a=>!vowels.includes(a.toLowerCase())).join('');
}

function getMiddle(s)
{
  return s.length%2==1?s.charAt(Math.floor(s.length/2)):s.charAt(s.length/2-1)+s.charAt(s.length/2)
}
