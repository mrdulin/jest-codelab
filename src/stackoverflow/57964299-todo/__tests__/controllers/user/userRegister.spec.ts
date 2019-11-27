import { userRegister } from "../../../controllers/user";
import { NextFunction, Request } from "express";

describe("User Registration", () => {
  test.skip("User has an invalid first name", async () => {
    const mockRequest: any = {
      body: {
        firstName: "J",
        lastName: "Doe",
        email: "jdoe@abc123.com",
        password: "Abcd1234",
        passwordConfirm: "Abcd1234",
        company: "ABC Inc."
      }
    };

    const mockResponse: any = {
      json: jest.fn(),
      status: jest.fn()
    };

    const mockNext: NextFunction = jest.fn();

    await userRegister(mockRequest, mockResponse, mockNext);

    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith(
      new Error("First name must be between 2 and 50 characters")
    );
  });
});
