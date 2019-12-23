export default function useResponsive<T>(options: Array<[string, T]>) {
  for (const [mediaQuery, result] of options) {
    if (window.matchMedia(mediaQuery).matches) {
      return result;
    }
  }

  return undefined;
}
