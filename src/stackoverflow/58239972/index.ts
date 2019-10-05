import Vue from './Vue';

export default {
  errorNotification(title, text) {
    Vue.notify({
      group: 'max-fordham',
      type: 'error',
      title: title,
      text: text
    });
  },

  infoNotification(title, text) {
    Vue.notify({
      group: 'max-fordham',
      type: 'info',
      title: title,
      text: text
    });
  },

  successNotification(title, text) {
    Vue.notify({
      group: 'max-fordham',
      type: 'success',
      title: title,
      text: text
    });
  },

  warningNotification(title, text) {
    Vue.notify({
      group: 'max-fordham',
      type: 'warning',
      title: title,
      text: text
    });
  }
};
