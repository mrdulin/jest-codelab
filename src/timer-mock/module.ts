function timerGame(callback?: () => void) {
  console.log('Ready....go!');
  setTimeout(() => {
    console.log('Times up -- stop!');
    if (callback) {
      callback();
    }
  }, 1000);
}

export { timerGame };
