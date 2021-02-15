// "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?
//
// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).
//
// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.
//
// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
//
// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:
//
// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
//
// So, you should expect these inputs and outputs:

function isInteresting(number, awesomePhrases) {
  // Go to town!
  if(number<100){
    return number<98?0:1
  }

  let nums = [number.toString(), (number+1).toString(), (number+2).toString()]

  console.log(nums)

  // same number
  let sameNum = 2
  let testSeq = []
  for(let i=0;i<3;i++){
    testSeq = nums[i].split('')
    testSeq.forEach((num,j)=>{testSeq[j]=+num})
    for(let j=0; j<nums[i].length-1;j++){
      console.log(testSeq[j])
      testSeq[j]===testSeq[j+1]?sameNum*=1:sameNum*=0
    }
    if(sameNum>0){
      return sameNum
    } else {
      sameNum = 1
    }
  }

  let trailZero = 2
  let testNum = []
  for(let i = 0;i<3;i++){
    testNum = nums[i].split('')
    testNum.shift()
    if (+testNum.join('')===0){
      return trailZero
    }
    trailZero = 1
  }



  // sequential up
  let seqUp = 2
  for(let i=0;i<3;i++){
    testSeq = nums[i].split('')
    testSeq.forEach((num,j)=>{num==='0'?testSeq[j]=10:testSeq[j]=+num})
    for(let j=0; j<nums[i].length-1;j++){
      testSeq[j]+1===testSeq[j+1]?seqUp*=1:seqUp*=0
    }
    if(seqUp>0){
      return seqUp
    } else {
      seqUp = 1
    }
  }

  // sequential down
  let seqDown = 2
  for(let i=0;i<3;i++){
    testSeq = nums[i].split('')
    testSeq.forEach((num,j)=>{testSeq[j]=+num})
    for(let j=0; j<nums[i].length-1;j++){
      testSeq[j]-1===testSeq[j+1]?seqDown*=1:seqDown*=0
    }
    if(seqDown>0){
      return seqDown
    } else {
      seqDown = 1
    }
  }

  // palindrome
  if(nums[0].split('').reverse().join('')===nums[0]){
    return 2
  } else if (nums[1].split('').reverse().join('')===nums[1]||nums[2].split('').reverse().join('')===nums[2]){
    return 1
  }

  //awesome
  return awesomePhrases.includes(number)?2:(awesomePhrases.includes(number+2)||awesomePhrases.includes(number+1))?1:0
}

console.log(isInteresting(9999999, [1337, 256]))
// console.log(isInteresting(7890, [1337, 256]))
// console.log(isInteresting(7888, [1337, 256]))
// console.log(isInteresting(444444442, [1337, 256]))
// console.log(isInteresting(11211, [1337, 256]))
// console.log(isInteresting(1000000, [1337, 256]))
