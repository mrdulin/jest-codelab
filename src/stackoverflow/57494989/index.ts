import loadDataFromLocalStorage from './loadDataFromLocalStorage';

const someModule = {
  myFunc() {
    const data = loadDataFromLocalStorage()();
    console.log(`data: ${data}`);
    if (data) {
      return true;
    }
  }
};

export { someModule };
