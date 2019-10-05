export function getUserInfo() {
  const userInfo = window.sessionStorage.getItem('userInfo');
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return {};
}
