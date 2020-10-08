const express = require('express');

const useSpy = jest.fn();
const listenSpy = jest.fn();
const urlencodedMock = jest.fn();
const jsonMock = jest.fn();

jest.mock('express', () => {
  return () => ({
    listen: listenSpy,
    use: useSpy,
  });
});

express.json = jsonMock;
express.urlencoded = urlencodedMock;

describe('64259504', () => {
  test('should initialize an express server', () => {
    require('./index');
    expect(jsonMock).toBeCalled();
    expect(urlencodedMock).toBeCalled();
    expect(listenSpy).toHaveBeenCalled();
  });

  test('should call listen fn', () => {
    require('./index');
    expect(jsonMock).toBeCalled();
    expect(urlencodedMock).toBeCalled();
    expect(listenSpy).toHaveBeenCalled();
  });
});
