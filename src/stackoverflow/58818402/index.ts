type qaModel = any;

export class SomeComponent {
  private fGroup = {
    controls: {
      street: {
        callReset() {}
      },
      zip: {
        callReset() {}
      },
      city: {
        callReset() {}
      }
    }
  };

  resetAdd(qa: qaModel) {
    const street = qa.children.find(temp => temp.token === 'street');
    const zip = qa.children.find(temp => temp.token === 'zip');
    const city = qa.children.find(temp => temp.token === 'city');
    this.fGroup.controls[street.pathway].callReset();
    this.fGroup.controls[zip.pathway].callReset();
    this.fGroup.controls[city.pathway].callReset();
  }
}
