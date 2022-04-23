import { GET_HASIL } from '../types';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const hasilReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_HASIL}_LOADING`:
      console.log("4. Masuk Reducer");
      return {
        ...state,
       
      };
    case `${GET_HASIL}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_HASIL}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
      default:
        return state;
  };
};
export default hasilReducer;