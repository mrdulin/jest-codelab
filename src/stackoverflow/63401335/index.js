import { useEffect } from 'react';

function useNiceHook(data) {
  useEffect(() => {
    window.analytics.identify();
  }, [data]);
}

export { useNiceHook };
