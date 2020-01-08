import { SOP3loginConfig, IVariables } from './sop3login';

const start = async (props: IVariables) => {
  if (props.user) {
    if (await SOP3loginConfig(props).isSOP3()) {
      props.history.push('/adc/card-renewal/customs');
    }
  } else {
    props.history.push(SOP3loginConfig(props).loginLink);
  }
};

export { start };
