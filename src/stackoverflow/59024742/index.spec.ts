import { main } from "./";
import { saveDetails, loadDetails } from "./customer";

jest.mock("./customer.ts", () => {
  return {
    saveDetails: jest.fn(),
    loadDetails: jest.fn()
  };
});

describe("main", () => {
  it("should mock correctly", () => {
    main();
    expect(saveDetails).toBeCalledTimes(1);
    expect(loadDetails).toBeCalledTimes(1);
  });
});
