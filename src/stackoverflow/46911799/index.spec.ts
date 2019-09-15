import { readdirSync } from './';
import fs from 'fs';

fs.readdirSync = jest.fn();

describe('readdirSync', () => {
  it('t1', () => {
    (fs.readdirSync as jest.MockedFunction<any>).mockReturnValueOnce(['Y']);
    const actualValue = readdirSync('X');
    expect(actualValue).toEqual(['Y']);
    expect(fs.readdirSync).toBeCalledWith('X');
  });

  it('t2', () => {
    (fs.readdirSync as jest.MockedFunction<any>).mockReturnValueOnce(['Z']);
    const actualValue = readdirSync('T');
    expect(actualValue).toEqual(['Z']);
    expect(fs.readdirSync).toBeCalledWith('T');
  });
});
