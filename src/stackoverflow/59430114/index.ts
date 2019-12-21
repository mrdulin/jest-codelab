function trimLeft(str: string): string {
  if (String.prototype.trimLeft) {
    return str.trimLeft();
  } else {
    return str.replace(/^[\s\uFEFF\xA0]+/, '');
  }
}

function trimRight(str: string): string {
  if (String.prototype.trimRight) {
    return str.trimRight();
  } else {
    return str.replace(/[\s\uFEFF\xA0]+$/, '');
  }
}

export { trimLeft, trimRight };
