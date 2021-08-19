//kyu 7
//sum of digits string
const sum = d => d === undefined ? "" : `${[...String(d)].join(" + ")} = ${[...String(d)].reduce((a, c) => a + +c, 0)}`;
