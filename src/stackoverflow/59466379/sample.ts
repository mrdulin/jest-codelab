export class Sample {
  update(): void {
    this.update1();
    this.update2();
  }

  protected update1(): void {
    console.log('hai');
  }

  protected update2(): void {
    console.log('hello');
  }
}
