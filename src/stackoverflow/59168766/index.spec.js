import returnPlus1orPlus2 from "./";
const mymath = require("./");

describe("returnPlus1orPlus2", () => {
  it("should call plus1", () => {
    const plus1Spy = jest.spyOn(mymath, "plus1");
    expect(returnPlus1orPlus2(2, 1)).toBe(7);
    expect(plus1Spy).toBeCalledWith(6);
  });

  it("should call plus2", () => {
    const plus2Spy = jest.spyOn(mymath, "plus2");
    expect(returnPlus1orPlus2(2, 2)).toBe(4);
    expect(plus2Spy).toBeCalledWith(2);
  });
});
