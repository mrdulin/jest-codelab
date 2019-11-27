import { isElementInViewport } from "./";

describe("isElementInViewport", () => {
  it("t-1", () => {
    const mEl = {
      getBoundingClientRect: jest
        .fn()
        .mockReturnValueOnce({ top: 0, left: 0, bottom: 0, right: 0 })
    };
    const actual = isElementInViewport(mEl);
    expect(actual).toBeTruthy();
    expect(mEl.getBoundingClientRect).toBeCalledTimes(1);
  });
});
