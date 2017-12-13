export class MyComponent {
  private myService;
  constructor(myService) {
    this.myService = myService;
  }
  public testFunction(): void {
    this.myService.returnMyObservable.subscribe(value => this.doAThing(value));
  }
  public doAThing(value) {}
}
