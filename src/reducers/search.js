import { REQUEST_RESTAURANT_LIST, RECEIVE_RESTAURANT_LIST, CHANGE_ORDERING, SEARCH_INPUT_CHANGE } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  queryParams: {
    pageSize:   10,
    pageNum:    1,
    search:    '강남',
    ordering:   '-pk',
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
    return {
      ...state,
      queryParams: { ...state.queryParams, ordering: action.ordering }
    };

  case SEARCH_INPUT_CHANGE:
    return {
      ...state,
      queryParams: { ...state.queryParams, search: action.search }
    };

  default:
    return state;
  }
};


export default Search;