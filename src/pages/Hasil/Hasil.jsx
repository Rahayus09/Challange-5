import Header from '../../components/Header/Header'
import FormPencarian from '../../components/FormPencarian/FormPencarian';
import Footer from '../../components/Footer/Footer'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardMobil from '../../components/CardMobil/CardMobil'
import { useDispatch, useSelector } from 'react-redux';
import { getHasil } from '../../redux/actions/hasilAction';



const styles = {
    card: {
        display: 'flex',
        flexdirection: 'column',
        alignitems: 'flex-start',
        padding: '24px',
        position: 'static',
        width: '333px',
        height: '586px',
        left: '0px',
        top: '0px',

    },
}

function Hasil() {
    // const [listData, setListData]=useState([])
    // const getData= async ()=> {
    //     try {
    //        const resp=await axios.get("https://rent-cars-api.herokuapp.com/customer/car")
    //        setListData(resp.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const dispatch = useDispatch();
    const { isLoading, data: hasil } = useSelector(
        (state) => state.hasil
    );

    useEffect(()=> {
        dispatch(getHasil());
    }, [dispatch])

    return (
        <div container>
            <Header />
            <div className="container style= py-5">            
            <FormPencarian  />
            <div className="row py-5">
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    hasil?.map((hasil) => {
                        return (
                            <div className="col-4" key={hasil.id}> 
                            <CardMobil sx={styles.card}/>
                            </div>
                        )
                    })
                )
            }          
            </div>
            </div>
            <Footer />
      </div>
    )
}
export default Hasil;