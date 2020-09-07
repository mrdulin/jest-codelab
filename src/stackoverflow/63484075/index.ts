export function main() {
  let byteArray = new Uint8Array(1);
  return window.crypto.getRandomValues(byteArray);
}
