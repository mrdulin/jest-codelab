import { main } from './';

describe('main', () => {
  test('should mock FileReader', () => {
    const readAsBinaryStringSpy = jest.spyOn(FileReader.prototype, 'readAsBinaryString');
    main();
    expect(readAsBinaryStringSpy).toBeCalledWith(new Blob());
  });
});
