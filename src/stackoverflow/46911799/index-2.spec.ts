import { readdirSync } from './';
import fs from 'fs';

fs.readdirSync = jest.fn().mockImplementation(path => {
  switch (path) {
    case 'X':
      return ['Y'];
    case 'T':
      return ['Z'];
  }
});

describe('readdirSync', () => {
  it('t3', () => {
    const actualValue = readdirSync('X');
    expect(actualValue).toEqual(['Y']);
    expect(fs.readdirSync).toBeCalledWith('X');
  });

  it('t4', () => {
    const actualValue = readdirSync('T');
    expect(actualValue).toEqual(['Z']);
    expect(fs.readdirSync).toBeCalledWith('T');
  });
});
