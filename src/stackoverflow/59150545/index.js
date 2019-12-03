import ThirdParty from "./third-party";

export default function Main() {}

Main.prototype.getStuff = function() {
  return new Promise((resolve, reject) => {
    this.getOtherStuff().then(data => {
      const tpinstance = new ThirdParty();
      tpinstance.createThing().nestedFunction(null, () => {
        const goodstuff = data;
        resolve({ newdata: goodstuff });
      });
    });
  });
};

Main.prototype.getOtherStuff = function() {
  return new Promise((resolve, reject) => {
    resolve();
  });
};
