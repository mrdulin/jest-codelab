import { mapDispatchToProps, showSettings, setFilterText, setExportCount } from './';

const dispatch = jest.fn();

describe('mapDispatchToProps', () => {
  it('t1', () => {
    const actualValue = mapDispatchToProps(dispatch);
    expect(Object.keys(actualValue)).toEqual(['sidebarSettings', 'setFilterText', 'setExportCount']);

    actualValue.sidebarSettings();
    expect(dispatch).toBeCalledWith(showSettings);

    actualValue.setFilterText('name');
    expect(dispatch).toBeCalledWith(setFilterText('name'));

    actualValue.setExportCount();
    expect(dispatch).toBeCalledWith(setExportCount());
  });
});
