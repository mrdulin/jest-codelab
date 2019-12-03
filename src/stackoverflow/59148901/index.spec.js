const Thing = require(".");

describe("Thing", () => {
  describe("#getStuff", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should pass", async () => {
      jest
        .spyOn(Thing.prototype, "getOtherStuff")
        .mockImplementationOnce(() => Promise.resolve({ data: "value" }));
      jest.spyOn(Thing.prototype, "_performLogic");
      let instance = new Thing();
      const actual = await instance.getStuff();
      expect(actual).toEqual({ newdata: { data: "value" } });
      expect(Thing.prototype._performLogic).toHaveBeenCalled();
      expect(Thing.prototype.getOtherStuff).toBeCalledTimes(1);
    });
  });
});
