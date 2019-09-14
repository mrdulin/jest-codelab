const ACTION_TYPES = {
  SHOW_SETTINGS: 'SHOW_SETTINGS',
  SET_FILTER_TEXT: 'SET_FILTER_TEXT',
  SET_EXPORT_COUNT: 'SET_EXPORT_COUNT'
};

export const showSettings = { type: ACTION_TYPES.SHOW_SETTINGS };
export const setFilterText = value => ({ type: ACTION_TYPES.SET_FILTER_TEXT, payload: { value } });
export const setExportCount = () => ({ type: ACTION_TYPES.SET_EXPORT_COUNT });

export const mapDispatchToProps = dispatch => {
  return {
    sidebarSettings: () => {
      dispatch(showSettings);
    },
    setFilterText: value => {
      dispatch(setFilterText(value));
    },
    setExportCount: () => {
      dispatch(setExportCount());
    }
  };
};
