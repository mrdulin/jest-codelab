export const ASSESSMENT = {
  BOOK: {
    ADD: 'ADD',
    GET: 'GET'
  }
};

export const getBook = data => ({ type: ASSESSMENT.BOOK.GET, payload: { data } });

export const someMethod = ({ collections }) => {
  return dispatch => {
    if (collections.length > 0) {
      for (let index = 0; index < collections.length; index++) {
        const collection = collections[index];
        const { libraryUrl, bookUrl, libraryId } = collection;
        const containerId = Math.random().toString();
        dispatch(getBook({ boolURL: bookUrl, libraryURL: libraryUrl, libraryId }));
        dispatch({
          type: ASSESSMENT.BOOK.ADD,
          payload: { boolURL: bookUrl, libraryId }
        });
      }
    }
  };
};
