function connectDatabase(config) {
  switch (config.env) {
    case 'development':
      console.log('Connect to Dev DB');
      break;
    case 'test':
      console.log('Connect to Test DB');
      break;
    default:
      console.log('Connect to Prod DB');
      break;
  }
}

export { connectDatabase };
