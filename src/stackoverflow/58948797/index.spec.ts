import { main } from "./";

describe("main", () => {
  const originalEnv = process.env.REDIS_ENABLE_CACHE;
  afterAll(() => {
    process.env.REDIS_ENABLE_CACHE = originalEnv;
    jest.restoreAllMocks();
  });
  it("should enable", () => {
    process.env.REDIS_ENABLE_CACHE = "true";
    const logSpy = jest.spyOn(console, "log");
    main();
    expect(logSpy).toBeCalledWith("enable redis cache");
  });

  it("should disable", () => {
    process.env.REDIS_ENABLE_CACHE = "false";
    const logSpy = jest.spyOn(console, "log");
    main();
    expect(logSpy).toBeCalledWith("disable redis cache");
  });
});
