import { RecommendCards } from './recommendCards';

export function main() {
  const instance = new RecommendCards();
  document.addEventListener('DOMContentLoaded', () => {
    instance.init();
  });
}
