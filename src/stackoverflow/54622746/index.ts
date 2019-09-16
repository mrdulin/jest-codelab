class Student {
  private age: number;
  private name: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public goToSchool() {
    if (this.age > 16) {
      this.drive();
    } else {
      this.takeBus();
    }
  }

  public drive() {
    // ...
  }

  public takeBus() {
    // ...
  }
}

export { Student };
