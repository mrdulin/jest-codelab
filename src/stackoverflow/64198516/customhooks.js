import { useLocation } from 'react-router-dom';

export const useCustomLocation = () => {
  return new URLSearchParams(useLocation().search);
};
