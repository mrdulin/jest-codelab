import {
  submitTeammateInvitation,
  submitTeammateInvitationRequest,
  submitTeammateInvitationSuccess,
  submitTeammateInvitationError
} from './actionCreators';
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import fetch from 'node-fetch';
import { AnyAction } from 'redux';
import { showErrorAlert } from './showErrorAlert';

const { Response } = jest.requireActual('node-fetch');

jest.mock('node-fetch');
jest.mock('./showErrorAlert.ts', () => {
  return {
    showErrorAlert: jest.fn()
  };
});

const middlewares = [thunk];
const mockStore = createMockStore<any, ThunkDispatch<any, any, AnyAction>>(middlewares);

describe('submitTeammateInvitation', () => {
  it('dispatches the correct actions on a failed fetch request', () => {
    const mockedResponse = { data: 'mocked response' };
    const mockedJSONResponse = JSON.stringify(mockedResponse);
    const mockedData = { data: 'mocked data' };
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
      new Response(mockedJSONResponse, { status: 500, statusText: 'Internal Server Error' })
    );

    const intialState = {};
    const store = mockStore(intialState);
    const expectedActions = [
      submitTeammateInvitationRequest(mockedData),
      submitTeammateInvitationError(mockedResponse)
    ];
    return store.dispatch(submitTeammateInvitation(mockedData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(showErrorAlert).toBeCalledWith(mockedResponse);
    });
  });
});
