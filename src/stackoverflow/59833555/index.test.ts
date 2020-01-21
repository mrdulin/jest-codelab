import MyClass from './index';

describe('testing as first', () => {
  let createElement;
  let querySelector;
  let createObjectURL;
  beforeEach(() => {
    createElement = document.createElement;
    querySelector = document.querySelector;
    createObjectURL = window.URL.createObjectURL;
  });
  afterEach(() => {
    jest.restoreAllMocks();
    document.createElement = createElement;
    document.querySelector = querySelector;
    window.URL.createObjectURL = createObjectURL;
  });
  it('should call render method', () => {
    jest.spyOn(MyClass.prototype, 'render').mockReturnValueOnce();
    const myClass = new MyClass();
    expect(myClass.render).toBeCalledTimes(1);
  });
  it('should render element and handle change event if input has files', () => {
    const myClass = new MyClass();
    const mAvailFile = new Blob(['I am file'], { type: 'text/html' });
    const mInput = { setAttribute: jest.fn(), addEventListener: jest.fn(), files: [mAvailFile] };
    const mLink = { setAttribute: jest.fn(), innerHTML: '' };
    const mContainer = { appendChild: jest.fn() };

    document.createElement = jest.fn().mockImplementation((tagName) => {
      switch (tagName) {
        case 'input':
          return mInput;
        case 'a':
          return mLink;
      }
    });
    document.querySelector = jest.fn().mockReturnValueOnce(mContainer);
    mInput.addEventListener.mockImplementationOnce((event, callback) => {
      callback();
    });
    const mObjectURL = 'blob:https://www.google.com/6e165b50-979b-43f6-b685-7163413f0faf';
    window.URL.createObjectURL = jest.fn().mockReturnValueOnce(mObjectURL);
    myClass.render();
    expect(document.createElement).toBeCalledTimes(2);
    expect(document.querySelector).toBeCalledWith('body');
    expect(mLink.innerHTML).toBe('Click Me!');
    expect(mLink.setAttribute.mock.calls[0]).toEqual(['href', '#']);
    expect(mLink.setAttribute.mock.calls[1]).toEqual(['target', '_blank']);
    expect(mInput.setAttribute).toBeCalledWith('type', 'file');
    expect(mContainer.appendChild.mock.calls[0]).toEqual([mInput]);
    expect(mContainer.appendChild.mock.calls[1]).toEqual([mLink]);
    expect(mInput.addEventListener).toBeCalledWith('change', expect.any(Function));
    expect(window.URL.createObjectURL).toBeCalledWith(new Blob([mAvailFile], { type: mAvailFile.type }));
    expect(mLink.setAttribute.mock.calls[2]).toEqual(['href', mObjectURL]);
  });

  it('should render element', () => {
    const myClass = new MyClass();
    const mInput = { setAttribute: jest.fn(), addEventListener: jest.fn() };
    const mLink = { setAttribute: jest.fn(), innerHTML: '' };
    const mContainer = { appendChild: jest.fn() };

    document.createElement = jest.fn().mockImplementation((tagName) => {
      switch (tagName) {
        case 'input':
          return mInput;
        case 'a':
          return mLink;
      }
    });
    document.querySelector = jest.fn().mockReturnValueOnce(mContainer);
    mInput.addEventListener.mockImplementationOnce((event, callback) => {
      callback();
    });
    myClass.render();
    expect(document.createElement).toBeCalledTimes(2);
    expect(document.querySelector).toBeCalledWith('body');
    expect(mLink.innerHTML).toBe('Click Me!');
    expect(mLink.setAttribute.mock.calls[0]).toEqual(['href', '#']);
    expect(mLink.setAttribute.mock.calls[1]).toEqual(['target', '_blank']);
    expect(mInput.setAttribute).toBeCalledWith('type', 'file');
    expect(mContainer.appendChild.mock.calls[0]).toEqual([mInput]);
    expect(mContainer.appendChild.mock.calls[1]).toEqual([mLink]);
    expect(mInput.addEventListener).toBeCalledWith('change', expect.any(Function));
  });
});
