import { render, fireEvent } from "@testing-library/react";
import Login from "./";
import React from "react";

it("should handle ClickEvents", () => {
  const logSpy = jest.spyOn(console, "log");
  const { getByTestId } = render(<Login />);
  expect(getByTestId("login-button")).toBeTruthy();
  fireEvent.submit(getByTestId("form"));
  expect(logSpy).toHaveBeenCalledTimes(1);
});
