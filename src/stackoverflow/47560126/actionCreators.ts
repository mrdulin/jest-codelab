import fetch from 'node-fetch';
import { showErrorAlert } from './showErrorAlert';

const SUBMIT_TEAMATE_INVITATION_REQUEST = 'SUBMIT_TEAMATE_INVITATION_REQUEST';
const SUBMIT_TEAMATE_INVITATION_SUCCESS = 'SUBMIT_TEAMATE_INVITATION_SUCCESS';
const SUBMIT_TEAMATE_INVITATION_ERROR = 'SUBMIT_TEAMATE_INVITATION_ERROR';

export const submitTeammateInvitationRequest = data => ({ type: SUBMIT_TEAMATE_INVITATION_REQUEST, payload: { data } });
export const submitTeammateInvitationSuccess = data => ({ type: SUBMIT_TEAMATE_INVITATION_SUCCESS, payload: { data } });
export const submitTeammateInvitationError = data => ({ type: SUBMIT_TEAMATE_INVITATION_ERROR, payload: { data } });

export const submitTeammateInvitation = data => {
  const config = {
    // config code
  };

  const inviteTeammateEndpoint = 'https://github.com/mrdulin';

  return async dispatch => {
    dispatch(submitTeammateInvitationRequest(data));

    try {
      const response = await fetch(inviteTeammateEndpoint, config);
      const jsonResponse = await response.json();
      if (!response.ok) {
        showErrorAlert(jsonResponse);
        dispatch(submitTeammateInvitationError(jsonResponse));

        throw new Error(response.statusText);
      }

      dispatch(submitTeammateInvitationSuccess(jsonResponse));
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Request failed', error);
      }
    }
  };
};
