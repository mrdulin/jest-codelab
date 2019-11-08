export function get() {
  return {
    build: 'dist',
    action: {
      pusher: {
        name: 'montezuma',
        email: 'best@cat'
      },
      gitHubToken: 'exists'
    }
  };
}
