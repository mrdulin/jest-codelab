const Api = {
  async post(url) {
    return { data: { data: 'real data' } };
  }
};

export class Service {
  public uploadSomething = filename => {
    return Api.post('/test')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
}
