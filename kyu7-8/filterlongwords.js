//kyu 7
// filter long words

function filterLongWords(sentence, n) {
  return sentence.split(" ").filter(x => x.length > n)
}
