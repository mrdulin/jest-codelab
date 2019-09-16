class MyService {
  public getMessage(): string {
    return `Her name is ${this.genName()}, age is ${this.getAge()}`;
  }

  public genName(): string {
    return 'novaline';
  }

  public getAge(): number {
    return 26;
  }
}
export default MyService;
