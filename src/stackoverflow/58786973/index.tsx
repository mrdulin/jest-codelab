import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

type IRouterResetScroll = any;

export const ScrollToTop = ({ history }: IRouterResetScroll) => {
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    };
  }, []);

  return null;
};

export default withRouter(ScrollToTop);
