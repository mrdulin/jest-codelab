function checkEnvironmentVars() {
  if (!process.env.NODE_ENV) {
    throw Error('Process environment is required!');
  }

  const allowedEnvironments = ['local', 'development', 'production'];

  if (!allowedEnvironments.includes(process.env.NODE_ENV)) {
    throw Error('Process environment not allowed! Choose another!');
  }
}

export { checkEnvironmentVars };
