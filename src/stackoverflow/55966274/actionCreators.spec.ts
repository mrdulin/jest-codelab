import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import axios from 'axios';
import { BG_LOAD_START, BG_LOAD_SUCCESS } from './types';
import { bgLoad } from './actionCreators';
import { AnyAction } from 'redux';

const middlewares = [thunk];
const mockStore = configureStore<any, ThunkDispatch<{}, any, AnyAction>>(middlewares);

jest.mock('axios', () => {
  return {
    get: jest.fn()
  };
});

describe(`async bgLoad action`, () => {
  const fetchedData = [
    {
      image: 'this is example image',
      name: 'my name is image',
      url: 'this is example link'
    }
  ];
  afterEach(() => {
    jest.resetAllMocks();
  });

  it(`creates BG_LOAD_SUCCESS when data has been fetched`, () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: { photos: [fetchedData[0].image], name: fetchedData[0].name, url: fetchedData[0].url }
    });

    const expectedActions = [
      { type: BG_LOAD_START },
      {
        type: BG_LOAD_SUCCESS,
        payload: {
          bgImage: fetchedData[0].image,
          name: fetchedData[0].name,
          url: fetchedData[0].url
        }
      }
    ];

    const store = mockStore({});

    return store.dispatch(bgLoad('https://github.com/mrdulin')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(axios.get).toBeCalledWith('https://github.com/mrdulin', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      });
    });
  });
});
