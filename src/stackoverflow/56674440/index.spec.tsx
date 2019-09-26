import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { PornComponent, IPornComponentProps } from './';
import * as Models from './Models';

describe('PornComponent', () => {
  let wrapper: ShallowWrapper;
  const mockedProps: IPornComponentProps = {
    accountToEdit: '1',
    user: {},
    services: [],
    FirmId: '2'
  };
  beforeEach(() => {
    wrapper = shallow(<PornComponent {...mockedProps}></PornComponent>);
  });

  it('Test patchAccount function', async () => {
    const patchAccountSpy = jest.spyOn(Models, 'patchAccount').mockResolvedValueOnce({ error: false });
    const actualValue = await (wrapper.instance() as any).patchAccount();
    expect(actualValue).toBeTruthy();
    expect(patchAccountSpy).toBeCalledWith({
      user: {},
      services: [],
      body: { AccountName: '', AccountTitle: '', AccountStatusDate: '2019-01-01' },
      firmId: '2',
      id: '1'
    });
    patchAccountSpy.mockRestore();
  });
});
