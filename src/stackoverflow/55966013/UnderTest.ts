export interface MockedDependency {
  returnSomething(...args: any[]): any;
  returnSomething2(...args: any[]): any;
}

export default class UnderTest {
  private mockedDependency: MockedDependency;

  constructor(mockedDependency: MockedDependency) {
    this.mockedDependency = mockedDependency;
  }

  public methodUnderTest(parameter: string) {
    const mockedResult = this.mockedDependency.returnSomething(parameter);
    return this.doSomethingElse(mockedResult);
  }

  public methodUnderTest2(parameter1: string, parameter2: string) {
    const mockedResult = this.mockedDependency.returnSomething2(parameter1, parameter2);
    return this.doSomethingElse(mockedResult);
  }

  private doSomethingElse(mockedResult: string) {
    return mockedResult;
  }
}
