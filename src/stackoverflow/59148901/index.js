function Thing() {}

Thing.prototype.getStuff = function() {
  return new Promise((resolve, reject) => {
    this.getOtherStuff().then(data => {
      this._performLogic();
      const goodstuff = data;
      resolve({ newdata: goodstuff });
    });
  });
};

Thing.prototype.getOtherStuff = function() {
  console.log("real get other stuff");
};

Thing.prototype._performLogic = function() {
  console.log("real perform logic");
};

module.exports = Thing;
