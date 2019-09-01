class Link {
  private name: string;
  private _href: string = '';
  constructor(name) {
    this.name = name;
  }

  get href() {
    return this._href;
  }

  set href(url) {
    this._href = url;
  }
}

const document = {
  createElement(name) {
    return new Link(name);
  }
};

function createLink(url) {
  const link = document.createElement('a');
  link.href = url;
  return link;
}

export { createLink, document, Link };
