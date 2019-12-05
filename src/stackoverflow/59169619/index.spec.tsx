import React from "react";
import App from "./";
import { mount } from "enzyme";

describe("App", () => {
  it("should pass", () => {
    const wrapper = mount(<App></App>);
    expect(wrapper).toMatchInlineSnapshot(`
      <App>
        <a
          href="https://www.google.com"
          key="0"
        >
          Google
        </a>
      </App>
    `);
  });
});
