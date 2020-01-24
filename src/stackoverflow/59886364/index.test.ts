import { removeSlot } from './';

describe('59886364', () => {
  it('should remove each el', () => {
    const mNodeList = [{ remove: jest.fn() }];
    const mComponent = { querySelectorAll: jest.fn().mockReturnValue(mNodeList) };
    const mSelector = 'ol';
    removeSlot(mComponent, mSelector);
    expect(mComponent.querySelectorAll).toBeCalledTimes(2);
    expect(mComponent.querySelectorAll).toBeCalledWith(mSelector);
    mNodeList.forEach((el) => {
      expect(el.remove).toBeCalled();
    });
  });

  it('should print error if no node found', () => {
    jest.spyOn(console, 'error');
    const mNodeList = [];
    const mComponent = { tagName: 'DIV', querySelectorAll: jest.fn().mockReturnValue(mNodeList) };
    const mSelector = 'ol';
    removeSlot(mComponent, mSelector);
    expect(mComponent.querySelectorAll).toBeCalledTimes(1);
    expect(mComponent.querySelectorAll).toBeCalledWith(mSelector);
    expect(console.error).toBeCalledWith(`'ol' not found in component 'div'`);
  });
});
