export function isElementInViewport(ele) {
  const rect = ele.getBoundingClientRect();
  const InViewPort =
    rect.top >= 0 && rect.left >= 0 && rect.bottom <= 0 && rect.right <= 0;
  return InViewPort;
}
