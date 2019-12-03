import Main from "./";
import ThirdParty from "./third-party";

jest.mock("./third-party.js", () => {
  const mThirdParth = {
    createThing: jest.fn().mockReturnThis(),
    nestedFunction: jest.fn()
  };
  return jest.fn(() => mThirdParth);
});

describe("Main", () => {
  describe("#getStuff", () => {
    afterEach(() => {
      jest.restoreAllMocks();
      jest.resetAllMocks();
    });
    it("should pass", async () => {
      jest
        .spyOn(Main.prototype, "getOtherStuff")
        .mockResolvedValueOnce({ data: "value" });

      let callback;
      const tpinstance = new ThirdParty();
      tpinstance.createThing().nestedFunction.mockImplementation((arg, cb) => {
        callback = cb;
        cb();
      });
      const instance = new Main();
      const pending = instance.getStuff();
      console.log(pending);
      const actual = await pending;
      expect(actual).toEqual({ newdata: { data: "value" } });
      expect(Main.prototype.getOtherStuff).toBeCalledTimes(1);
      expect(tpinstance.createThing).toHaveBeenCalled();
      expect(tpinstance.createThing().nestedFunction).toBeCalledWith(
        null,
        callback
      );
    });
  });
});
