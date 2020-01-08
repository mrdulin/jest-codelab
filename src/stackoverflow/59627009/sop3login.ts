import ADCServices from './adc.service';

export interface IVariables {
  user: any;
  history: IHistory;
  i18n(name: string): any;
  SOP3toggleModal(props: IVariables, flag: boolean): void;
}

interface IHistory {
  push(router: string): any;
}

export const SOP3loginConfig = (props: IVariables) => {
  const { i18n } = props;
  return {
    buttonLabel: props.user != null ? i18n('StartJourney') : i18n('logIn'),
    loginLink: '/login?redirectUrl=' + window.location.href,
    isSOP3: async () => {
      const userData = await ADCServices.getUserInfo();
      if (!userData.session.tammUserInfo || userData.session.tammUserInfo.Type !== 'SOP3') {
        props.SOP3toggleModal(props, true);
        setTimeout(() => props.SOP3toggleModal(props, false), 5000);
        return false;
      } else {
        return true;
      }
    },
  };
};
