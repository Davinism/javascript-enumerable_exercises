
Array.prototype.myEach = function (cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }

  return this;
};

[1, 2, 3, 4].myEach((el) => {
  console.log(el);
});
