const m = require('./module');

//通过common module define（通用模块定义），定义的函数可以成功的mock
describe('mock function test suites', () => {

  it('t-1', () => {
    m.genName = jest.fn(() => 'emilie');
    
    expect(jest.isMockFunction(m.genName)).toBeTruthy();
    expect(m.getMessage()).toBe('Her name is emilie, age is 26');
    expect(m.genName).toHaveBeenCalled();

  });

  it('t-1.1', () => {

    expect(jest.isMockFunction(m.genName)).toBeTruthy();
    m.genName.mockReset();

  });

  it('t-1.2', () => {

    //t-1.1中, m.genName调用了mockReset，该方法并不是将mock的方法重置成原始的方法（非mock的），而是重置为mock的初始状态，即jest.fn()
    //这时再次调用m.genName，将返回undefined
    //所以m.genName还是mock的方法
    expect(jest.isMockFunction(m.genName)).toBeTruthy();
    
  });

  it('t-2', () => {

    const getAgeSpy = jest.spyOn(m, 'getAge').mockImplementation(() => 99);
    expect(jest.isMockFunction(m.getAge)).toBeTruthy();
    
    //在t-1.1中，m.genName被重置为jest.fn()，所以m.genName()返回undefined
    expect(m.getMessage()).toBe('Her name is undefined, age is 99');
    expect(m.getAge).toHaveBeenCalled();

  });

  it('t-2.1', () => {

    expect(jest.isMockFunction(m.getAge)).toBeTruthy();
    expect(m.getAge()).toBe(99);
    m.getAge.mockRestore();

  });

  it('t-2.2', () => {

    expect(jest.isMockFunction(m.getAge)).toBeFalsy();
    expect(m.getAge()).toBe(26);
    
  });

});
