Array.prototype.myEach = function (cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }

  return this;
};

Array.prototype.myInject = function (cb) {
  let accum = this[0];
  this.slice(1).myEach((el) => {
    accum = cb(accum, el);
  });
  return accum;
};

console.log([1, 2, 3, 4].myInject ((accum, el) => accum + el));


// console.log([1, 2, 3, 4].myInject ( function (accum, el) { return accum + el; }));
