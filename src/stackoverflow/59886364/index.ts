export function removeSlot(component: any, selector: string) {
  if (component.querySelectorAll(selector).length > 0) {
    component.querySelectorAll(selector).forEach((el) => el.remove());
  } else {
    console.error(`'${selector}' not found in component '${component.tagName.toLowerCase()}'`);
  }
}
