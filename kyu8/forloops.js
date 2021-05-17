//kyu 8
// Do something "n.times" (Simplifying "for" loops)
Number.prototype.times = function (f) {
  for (let i = 0; i < this; ++i) {
    f(i);
  }
};
