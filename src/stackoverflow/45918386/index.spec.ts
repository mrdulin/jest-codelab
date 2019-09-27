import { toggleClass } from '.';

describe('toggleClass', () => {
  const mockedElementDOM = { classList: { contains: jest.fn(), remove: jest.fn(), add: jest.fn() } };

  it('should remove the class', () => {
    const className = 'a';
    mockedElementDOM.classList.contains.mockReturnValueOnce(true);
    toggleClass(mockedElementDOM, className);
    expect(mockedElementDOM.classList.remove).toBeCalledWith('a');
  });

  it('should add the class', () => {
    const className = 'a';
    mockedElementDOM.classList.contains.mockReturnValueOnce(false);
    toggleClass(mockedElementDOM, className);
    expect(mockedElementDOM.classList.add).toBeCalledWith('a');
  });
});
