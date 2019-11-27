import * as UserService from "./UserService";
import { auth } from "./auth";

jest.mock("./UserService", () => {
  const mUserService = {
    getById: jest.fn(),
    create: jest.fn()
  };
  return mUserService;
});

describe("UserService", () => {
  it("should auth correctly", async () => {
    await auth(UserService);
    expect(UserService.getById).toBeCalledWith("1");
    expect(UserService.create).toBeCalledWith({ name: "jest" });
  });
});
