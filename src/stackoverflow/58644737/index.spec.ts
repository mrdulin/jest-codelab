import { Component } from './';

const cmp = new Component();

describe('main', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('should test handle file upload correctly', () => {
    const mFile = new File(['go'], 'go.pdf');
    const mEvent = { target: { files: [mFile] } };
    const readAsBinaryStringSpy = jest.spyOn(FileReader.prototype, 'readAsBinaryString');
    const btoaSpy = jest.spyOn(window, 'btoa');
    const reader = cmp.handleFileUpload(mEvent);
    expect(reader).toBeInstanceOf(FileReader);
    if (reader.onload) {
      Object.defineProperty(reader, 'result', { value: 'gogo' });
      const mOnloadEvent = {} as any;
      reader.onload(mOnloadEvent);
      expect(btoaSpy).toBeCalledWith('gogo');
      expect(cmp.object.image).toBe(btoa('gogo'));
    }
    expect(readAsBinaryStringSpy).toBeCalledWith(mFile);
  });
});
