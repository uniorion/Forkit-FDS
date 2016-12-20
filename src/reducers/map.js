import { REQUEST_GOOGLE_MAP_API, RECEIVE_GOOGLE_MAP_API } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  mapApi: null
};

const GoogleMap = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_GOOGLE_MAP_API:
    return {
      ...state,
      isFetching: true
    };

  case RECEIVE_GOOGLE_MAP_API:
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = action.mapApi;
    document.body.appendChild(script);
    return {
      ...state,
      isFetching: false,
      mapApi: action.mapApi,
    };

  default:
    return state;
  }
};

export default GoogleMap;