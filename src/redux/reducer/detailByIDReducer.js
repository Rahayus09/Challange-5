// import { GET_DETAILS_BY_ID } from "../types";

// const initialState = {
//     data: [],
//     isLoading: true,
//     error: null,
// };

// const detailByIDReducer = (state = initialState, action) => {
//     const { type, payload, error } = action;
//     switch (type) {
//         case `${GET_DETAILS_BY_ID}_LOADING`:
//             return {
//                 ...state,
//             };
//         case `${GET_DETAILS_BY_ID}_FULFILLED`:
//             return {
//                 ...state,
//                 data: payload,
//                 isLoading: false,
//             };
//             case `${GET_DETAILS_BY_ID}_ERROR`:
//                 return {
//                     ...state,
//                     isLoading: false,
//                     error: error,
//                 };
    // default:
    //   return {
    //     ...state,
    //   };
//     }
// };

// export default detailByIDReducer;