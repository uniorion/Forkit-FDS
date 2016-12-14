import { REQUEST_RESTAURANT_LIST, RECEIVE_RESTAURANT_LIST, CHANGE_ORDERING } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  queryParams: {
    pageSize:   10,
    pageNum:    1,
    keyword:    '소고기',
    ordering:   '-review_count',
    filter:     '',
  },
  totalCount: -1,
  nextUrl:    null,
  prevUrl:    null,  
  items:      []
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
      nextUrl:    action.nextUrl,
      prevUrl:    action.prevUrl,  
      items:      action.results
    };
  
  case CHANGE_ORDERING:
    console.log('CHANGE_ORDERING ======');
    return {
      ...state,
      queryParams: { ...state.queryParams, ordering: action.ordering }
    };

  default:
    return state;
  }
};


export default Search;