import axios from "axios";
import { GET_DETAILS_BY_ID } from "../types";

export const getDetailByID = (id) => {
    return (dispatch) => {
        dispatch({ type: `${GET_DETAILS_BY_ID}_LOADING` });

        axios({
            method: "GET",
            url: `https://rent-cars-api.herokuapp.com/customer/car/${id}`,
        })
        .then((response) => {
            console.log("3. Berhasil dapat Data : ", response.data);
            dispatch({
                type: `${GET_DETAILS_BY_ID}_FULFILLED`,
                payload: response.data,
            });
        })
        .catch((error) => {
            dispatch({
                type: `${GET_DETAILS_BY_ID}_ERROR`,
                error: error.message,
            });
        });
    };
};

export const saveDetailByID = (action) => {
    return (dispatch) => {
        dispatch({
            type: `${GET_DETAILS_BY_ID}_FULFILLED`,
            payload: action,
        });
    };
};