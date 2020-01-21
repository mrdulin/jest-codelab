export default class MyClass {
  constructor() {
    this.render();
  }

  render() {
    const el: HTMLInputElement = document.createElement('input') as HTMLInputElement;
    const link: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
    const container: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;

    link.innerHTML = 'Click Me!';
    link.setAttribute('href', '#');
    link.setAttribute('target', '_blank');

    el.setAttribute('type', 'file');
    container.appendChild(el);
    container.appendChild(link);

    el.addEventListener('change', (event) => {
      if ('files' in el) {
        const availFile: File = el.files![0];
        const blob = new Blob([availFile], { type: availFile.type });

        const objectURL = window.URL.createObjectURL(blob);
        link.setAttribute('href', objectURL);
      }
    });
  }
}
