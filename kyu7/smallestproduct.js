//kyu 7
//smallest product
const smallestProduct = a => Math.min(...a.map(e => e.reduce((p, c) => p * c)))
