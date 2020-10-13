class CommandOption {
  constructor(commands) {
    this.section = commands[0];
    this.method = commands[1];
    this.command1 = commands[2];
  }

  option(optionName) {
    return require(`./commands/options/${optionName}`)(this);
  }
}

module.exports = CommandOption;
