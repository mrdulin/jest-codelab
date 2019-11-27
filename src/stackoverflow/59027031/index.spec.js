const unzipFile = require("./");
const fs = require("fs");
const unzipper = require("./unzipper");

jest.mock("fs", () => {
  return {
    existsSync: jest.fn(),
    createReadStream: jest.fn().mockReturnThis(),
    pipe: jest.fn()
  };
});

describe("unzipFile", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  it("should unzip file correctly", async () => {
    const filename = "go.pdf";
    const outputPath = "workspace";
    const eventHandlerMap = {};
    const mStream = {
      on: jest.fn().mockImplementation((event, handler) => {
        eventHandlerMap[event] = handler;
      })
    };
    const logSpy = jest.spyOn(console, "log");
    fs.existsSync.mockReturnValueOnce(true);
    fs.createReadStream().pipe.mockReturnValueOnce(mStream);
    jest.spyOn(unzipper, "Extract").mockReturnValueOnce({});
    const pending = unzipFile(filename, outputPath);
    eventHandlerMap["finish"]();
    const actual = await pending;
    expect(actual).toEqual(outputPath);
    expect(fs.existsSync).toBeCalledWith(filename);
    expect(fs.createReadStream).toBeCalled();
    expect(fs.createReadStream().pipe).toBeCalledWith({});
    expect(logSpy).toBeCalledWith("file unzipped");
    expect(mStream.on).toBeCalledWith("finish", eventHandlerMap["finish"]);
  });
});
