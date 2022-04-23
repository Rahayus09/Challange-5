import axios from "axios";
import { GET_HASIL } from "../types";

export const getHasil= ()=> {
    console.log("2. Masuk Action");
    return (dispatch) => {

        dispatch({ type: `${GET_HASIL}_LOADING` });
       
        //get API
        
        axios({
            method: 'GET',
            url: 'https://rent-cars-api.herokuapp.com/customer/car',
        })
            .then((response) => {
                console.log("3. Berhasil dapat Data : ", response.data);
                dispatch({
                    type: `${GET_HASIL}_FULFILLED`,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log("3. Gagal dapat Data : ", error);
                dispatch({
                    type: `${GET_HASIL}_ERROR`,
                    error: error.message,
                });
            });
    };
};