export const fetchGitHubDataAsync = () => {
  return dispatch => {
    return fetch('https://api.github.com/search/topics?q=javascript', {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json'
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log('json', json.items.slice(0, 5));
        return dispatch({ type: 'FETCH_GITHUB_DATA', payload: json.items.slice(0, 5) });
      });
  };
};
