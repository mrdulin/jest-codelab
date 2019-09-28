export default class B {
  public app = {
    post(route: string, controller: () => any) {
      //
    }
  };
  private name: string = '';
  private url: string = '';
  constructor(name: string) {
    this.name = name;
  }

  protected setCors(url: string) {
    this.url = url;
  }
}
