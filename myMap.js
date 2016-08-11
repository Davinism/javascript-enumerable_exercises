Array.prototype.myEach = function (cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }

  return this;
};

Array.prototype.myMap = function (cb) {
  let resultArr = [];
  this.myEach((el) => {
    resultArr.push(cb(el));
  });

  return resultArr;
};

let newArr = [1, 2, 3, 4].myMap((el) => ++el);
console.log(newArr);
