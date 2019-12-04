const { OrderProgress } = require("./");
const mod = require("./");
import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();

afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderProgress", () => {
  it("should passs", () => {
    const getRndIntegerSpy = jest
      .spyOn(mod, "getRndInteger")
      .mockReturnValueOnce(200);
    const subscribeSpy = jest.spyOn(mod.subject, "subscribe");

    const mProps = { orderData: { price: 1000 } };
    const wrapper = mount(<OrderProgress {...mProps}></OrderProgress>);
    expect(wrapper.find(".progressBar").prop("style")).toEqual({
      width: "10%",
      maxWidth: "99%"
    });
    expect(wrapper).toMatchSnapshot();
    act(() => {
      jest.advanceTimersByTime(10 * 1000);
    });
    wrapper.update();
    expect(wrapper.find(".progressBar").prop("style")).toEqual({
      width: "20%",
      maxWidth: "99%"
    });

    expect(subscribeSpy).toBeCalledTimes(1);
    expect(getRndIntegerSpy).toBeCalledWith(0, 120);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("getRndInteger", () => {
  it("should pass", () => {
    const randomSpy = jest.spyOn(Math, "random").mockReturnValueOnce(1);
    const actual = mod.getRndInteger(1, 100);
    expect(actual).toBe(101);
    expect(randomSpy).toBeCalledTimes(1);
  });
});
