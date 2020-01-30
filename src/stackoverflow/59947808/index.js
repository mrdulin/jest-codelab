export function $isNodeList(input) {
  return NodeList.prototype.isPrototypeOf(input);
}
