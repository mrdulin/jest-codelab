const utils = require('./utils');

describe('utils', () => {
  it('Builds a Car', () => {
    const buildEngineSpy = jest.spyOn(utils, 'buildEngine').mockReturnValue('Mock Engine');
    expect(utils.buildCar()).toBe('Mock Engine and Car Body');
    expect(buildEngineSpy).toBeCalledTimes(1);
    buildEngineSpy.mockRestore();
  });

  it('build engine original implementation', () => {
    expect(utils.buildEngine()).toBe('Engine');
    expect(utils.buildCar()).toBe('Engine and Car Body');
  });
});
