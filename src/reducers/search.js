import { REQUEST_RESTAURANT_LIST, RECEIVE_RESTAURANT_LIST } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  pageSize  : 10,
  pageNum   : 1,
  totalCount: 0,
  keyword   : '',
  ordering  : 'recent',
  filter    : '',
  items: []
};

const Search = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_RESTAURANT_LIST:
    return {
      ...state,
      isFetching: true
    };

  case RECEIVE_RESTAURANT_LIST:
    return {
      ...state,
      isFetching: false,
      totalCount: action.totalCount,
      items: action.results
    };

  default:
    return state;
  }
};


export default Search;