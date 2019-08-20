export const actions = {
  $axios: {
    $get: url => ''
  },
  async submitPhoneNumber(context) {
    let data = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos/1');
    // do something with data

    data = this.processData(data);
    return data;
  },

  processData(data) {
    return data;
  }
};
