import { main } from "./";

describe("pdf blob", () => {
  it("should mock correctly", () => {
    const mBlob = { size: 1024, type: "application/pdf" };
    const blobSpy = jest
      // @ts-ignore
      .spyOn(global, "Blob")
      .mockImplementationOnce(() => mBlob);
    const logSpy = jest.spyOn(console, "log");
    main();
    expect(blobSpy).toBeCalledWith(["testing"], {
      type: "application/pdf"
    });
    expect(logSpy).toBeCalledWith(mBlob);
  });
});
