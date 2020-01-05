import apiService from './apiservice';

class Group {
  groups = [];
  getAllGroups() {
    return apiService
      .getAllGroups()
      .then((data) => {
        this.groups = data;
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }
}

export default Group;
