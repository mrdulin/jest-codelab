export function render() {
  if (document.body.getAttribute('data-basepath') === 'coolvalue') {
    return 'My Component';
  }
  return null;
}
