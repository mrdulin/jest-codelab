import { SomeClass } from "./";
const WebSocket = require("ws");

jest.mock("ws", () => {
  const mWebSocket = {
    on: jest.fn()
  };
  return jest.fn(() => mWebSocket);
});

describe("SomeClass", () => {
  let instance;
  let ws;
  beforeEach(() => {
    ws = new WebSocket();
    instance = new SomeClass();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  it("should pass", async () => {
    const eventHandler = {};
    ws.on.mockImplementation((event, handler) => {
      eventHandler[event] = handler;
    });
    const pending = instance.run();
    eventHandler["open"]();
    const actual = await pending;
    expect(actual).toBeUndefined();
    expect(ws.on).toBeCalledWith("open", eventHandler["open"]);
  });

  it("should fail", async () => {
    const eventHandler = {};
    ws.on.mockImplementation((event, handler) => {
      eventHandler[event] = handler;
    });
    const pending = instance.run();
    const mError = new Error("connection error");
    eventHandler["error"](mError);
    await expect(pending).rejects.toThrowError(mError);
    expect(ws.on).toBeCalledWith("error", eventHandler["error"]);
  });
});
