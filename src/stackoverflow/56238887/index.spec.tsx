import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { EditPolicy, IEditPolicyProps } from './';
import * as PolicyModels from './PolicyModels';

describe('EditPolicy', () => {
  let wrapper: ReactWrapper;
  const baseProps: IEditPolicyProps = {
    user: {},
    services: []
  };
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter keyLength={0}>
        <EditPolicy {...baseProps} />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Test patchPolicy function with context body', async () => {
    const patchWorkContextSpy = jest.spyOn(PolicyModels, 'patchWorkContext');
    wrapper.find('EditPolicy').setState({
      data: {
        Policy: '',
        Choices: '',
        WorkID: '',
        WORK_CONTEXT: [{ Context_UID: 1 }]
      }
    });
    await (wrapper.find('EditPolicy').instance() as any).patchPolicy();
    expect(patchWorkContextSpy).toBeCalledWith({ user: {}, services: [], body: { Context_UID: 1 }, id: 1 });
  });

  it('Test patchPolicy function without context body', async () => {
    const patchWorkContextSpy = jest.spyOn(PolicyModels, 'patchWorkContext');
    wrapper.find('EditPolicy').setState({
      data: {
        Policy: '',
        Choices: '',
        WorkID: '222',
        WORK_CONTEXT: [{ Context_UID: 0, WorkID: 0 }]
      }
    });
    await (wrapper.find('EditPolicy').instance() as any).patchPolicy();
    expect(patchWorkContextSpy).toBeCalledWith({
      user: {},
      services: [],
      body: { Context_UID: 0, WorkID: '222' },
      id: 0
    });
  });
});
