import { useLocation } from 'react-router-dom';

export function usePageViews() {
  return useLocation();
}
