import yearGroupsSelectors from './year-groups-selectors';

const SET_DROPDOWN_DATA = 'SET_DROPDOWN_DATA';

export function setDropdownData(data) {
  return { type: SET_DROPDOWN_DATA, payload: { data } };
}
export function setYearGroups() {
  const TEACHER_LIST = 'TEACHER_LIST';
  return (dispatch, getState) => {
    dispatch(
      setDropdownData({
        [TEACHER_LIST]: {
          data: yearGroupsSelectors.selectAllTeachers(getState())
        }
      })
    );
  };
}
