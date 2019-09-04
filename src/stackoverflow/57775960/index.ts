import { SomeService } from './someService';

export default class UnderTest {
  private service: SomeService;

  constructor() {
    this.service = new SomeService();
  }

  public update(data: any): any {
    return this.service.saveNewElement(data).then(res => {
      // stuff to do
      console.log(res);
    });
  }
}
