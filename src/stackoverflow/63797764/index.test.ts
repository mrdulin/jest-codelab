import classA from './classA';
import classB from './classB';

describe('63797764', () => {
  it('invokes its initialisation function during the import of ./initialiser', async () => {
    jest.spyOn(classA, 'initialise').mockImplementation(() => console.log('mocked classA initialise'));
    jest.spyOn(classB, 'initialise').mockImplementation(() => console.log('mocked classB initialise'));

    await import('./');
    expect(classA.initialise).toBeCalled();
    expect(classA.initialise).toBeCalled();
  });
});
