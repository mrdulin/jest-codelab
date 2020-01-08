import { start } from './work';
import { SOP3loginConfig, IVariables } from './sop3login';

jest.mock('./sop3login.ts', () => {
  const mObj = {
    isSOP3: jest.fn(),
  };
  return { SOP3loginConfig: jest.fn(() => mObj) };
});

describe('Start SOP3loginConfig should be called', () => {
  it('Should call the SOP3', async () => {
    const mProps: IVariables = {
      user: true,
      history: { push: jest.fn() },
      i18n: jest.fn(),
      SOP3toggleModal: jest.fn(),
    };
    await start(mProps);
    expect(SOP3loginConfig).toBeCalledWith(mProps);
    expect(SOP3loginConfig(mProps).isSOP3).toBeCalledTimes(1);
  });
});
