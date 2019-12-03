export default function ThirdParty() {}

ThirdParty.prototype.createThing = function() {
  console.log("real create thing");
  return this;
};

ThirdParty.prototype.nestedFunction = function(arg, cb) {
  console.log("real nested function");
};
