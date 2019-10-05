export class DependencyService {
  private _list: any[] = [];
  public get list(): any[] {
    return this._list;
  }
}
