function solution(num){
  // convert the number to a roman numeral
    var digits = String(num).split('')
    var key = [ '','I','II','III','IV','V','VI','VII','VIII','IX',
                '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
                '','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
                '','M','MM','MMM']
    var roman = ''
    var len = digits.length
    for(let i=0;i<len;i++){
      roman = key[i*10 + Number(digits.pop())]+roman
    }
  return roman
}
