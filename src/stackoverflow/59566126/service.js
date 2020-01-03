const MyService = {
  init: function(context) {
    this.playerStats = {};
    this.checkForContextParam(context);
  },

  checkForContextParam: function(context) {
    if (context) {
      this.playerStats.contextValue = context;
      this.playerStats.contextParam = 'context=' + this.playerStats.contextValue;
    } else {
      this.playerStats.contextValue = 'context_missing';
      this.playerStats.contextParam = 'error=' + this.playerStats.contextValue;
    }
  },
};

export default MyService;
