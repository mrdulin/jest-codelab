import axios from 'axios';
const LIST_SUCCES = 'LIST_SUCCES';
const LIST_FAILURE = 'LIST_FAILURE';

export const fetchList = async (dispatch) => {
  try {
    const result = await axios.get('/list/'); /* AXIOS */
    dispatch({ type: LIST_SUCCES, payload: result.data.list });
  } catch (error) {
    dispatch({ type: LIST_FAILURE });
  }
};

export const listReducer = (state, action) => {
  switch (action.type) {
    case LIST_SUCCES:
      return action.payload;
    case LIST_FAILURE:
      return [];
    default:
      throw new Error();
  }
};
