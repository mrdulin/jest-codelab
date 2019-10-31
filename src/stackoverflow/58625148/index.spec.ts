import generateFile from './';
import fsExtra from 'fs-extra';

const writeFileSpy = jest.spyOn(fsExtra, 'writeFile');

describe('writeFile', () => {
  test('it should check whether writeFile has been called', async () => {
    await generateFile('jest');
    expect(writeFileSpy).toHaveBeenCalled();
  });
});
