import { GET_DETAILS } from '../types';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const detailReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_DETAILS}_LOADING`:
      console.log("4. Masuk Reducer");
      return {
        ...state,
      };
   
    case `${GET_DETAILS}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_DETAILS}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
      default:
        return state;
  };
};
export default detailReducer;