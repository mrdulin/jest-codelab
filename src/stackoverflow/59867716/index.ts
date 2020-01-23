export class DsBreadcrumb {
  public getAttributes(el) {
    const dataAttrs = {};
    const attributes = el.attributes;
    const dataAttributes: any = Object.values(attributes);

    for (const dataAttribute of dataAttributes) {
      const keyName = dataAttribute.name;
      const keyValue = dataAttribute.value;
      dataAttrs[keyName] = keyValue;
    }

    return dataAttrs;
  }
}
