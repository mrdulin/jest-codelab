import { ThunkAction } from 'redux-thunk';
import { Dispatch, AnyAction } from 'redux';

export const UPDATE_EXP = 'UPDATE_EXP';

export const updateExperience = action => ({ type: action.type, payload: { experience: action.experience } });

export interface ISessionRequest {
  isError: boolean;
}

type GetState<S = IState> = () => S;

export interface IState {
  isNewExp: boolean;
}

export const goToNewExperience = (request?: ISessionRequest): ThunkAction<any, IState, {}, AnyAction> => {
  return async (dispatch: Dispatch, getState: GetState<IState>) => {
    const state = getState();
    const isNewExp = state.isNewExp;

    if (isNewExp) {
      dispatch(
        updateExperience({
          type: UPDATE_EXP,
          experience: 'NewExperience'
        })
      );
    } else if (request && request.isError) {
      dispatch(
        updateExperience({
          type: UPDATE_EXP,
          experience: 'ErrorExperience'
        })
      );
    }
  };
};
