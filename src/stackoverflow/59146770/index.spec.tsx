import React from "react";
import { shallow } from "enzyme";
import Cookies from "universal-cookie";
import axios from "axios";
import { MyComponent } from "./";

jest.mock("axios", () => {
  return {
    defaults: {
      headers: {
        common: {
          Authorization: ""
        }
      }
    }
  };
});

jest.mock("universal-cookie", () => {
  const mCookie = {
    get: jest.fn()
  };
  return jest.fn(() => mCookie);
});

describe("MyComponent", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should set token correctly", () => {
    const cookies = new Cookies();
    (cookies.get as jest.Mocked<any>).mockReturnValueOnce({
      value: "12492525"
    });
    const logSpy = jest.spyOn(console, "log");
    const wrapper = shallow(<MyComponent></MyComponent>);
    expect(axios.defaults.headers.common.Authorization).toBe("12492525");
    expect(logSpy).toBeCalledWith("12492525");
  });
});
