export class Component {
  object = {
    image: ''
  };
  handleFileUpload(event) {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.readAsBinaryString(file);

    reader.onload = () => {
      let base64String = btoa(reader.result as string);
      this.object.image = base64String;
    };

    return reader;
  }
}
