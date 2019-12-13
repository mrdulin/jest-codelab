export const ajaxGet = (config) => {
  const httpRequest = new XMLHttpRequest();
  const defaultConfig = Object.assign(
    {
      url: '',
      contentType: 'application/json',
      success: (response) => {},
    },
    config,
  );

  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status >= 200 && httpRequest.status < 300) {
        defaultConfig.success(JSON.parse(httpRequest.responseText));
      }
    }
  };

  httpRequest.open('GET', defaultConfig.url, true);
  httpRequest.send();
};
