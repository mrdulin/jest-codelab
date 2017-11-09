import * as actions from './dropdown-data-actions';
import yearGroupsSelectors from './year-groups-selectors';

jest.mock('./year-groups-selectors', () => ({
  selectAllTeachers: jest.fn()
}));
const initialState = {};

describe('setYearGroups', () => {
  const dispatchSpy = jest.fn();
  const getStateSpy = jest.fn();

  it('dispatches action to set year group dropdown data', () => {
    const mockedData = 'mocked data';
    (yearGroupsSelectors.selectAllTeachers as jest.MockedFunction<
      typeof yearGroupsSelectors.selectAllTeachers
    >).mockReturnValueOnce(mockedData);

    getStateSpy.mockReturnValueOnce(initialState);

    actions.setYearGroups()(dispatchSpy, getStateSpy);
    expect(dispatchSpy).toBeCalledWith(actions.setDropdownData({ TEACHER_LIST: { data: mockedData } }));
    expect(yearGroupsSelectors.selectAllTeachers).toBeCalledWith(initialState);
  });
});
