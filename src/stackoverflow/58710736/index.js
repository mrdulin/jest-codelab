export class SomeClass {
  editableData = {
    jest: []
  };
  $uuid = {
    v1() {
      return 'real uuid';
    }
  };
  addDataItem(key) {
    const basicDataItem = {
      id: this.$uuid.v1(),
      units: '',
      price: '',
      label: ''
    };

    this.editableData[key].push(basicDataItem);
  }
}
