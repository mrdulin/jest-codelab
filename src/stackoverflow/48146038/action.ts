import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export function someAction() {
  history.push('/home');

  return {
    type: 'NAVIGATE_HOME',
  };
}
