const inquirer = require('inquirer');

const getAnswers = async (request) => {
  const answer = await inquirer.prompt(request);
  return answer;
};

module.exports = getAnswers;
