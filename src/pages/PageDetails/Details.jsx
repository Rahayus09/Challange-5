
import Header from '../../components/Header/Header'
import FormPencarian from '../../components/FormPencarian/FormPencarian';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Detail from '../../components/Detail/Detail';

// const styles = {
//     card: {
//         display: 'flex',
//         flexdirection: 'column',
//         alignitems: 'flex-start',
//         padding: '24px',
//         position: 'static',
//         width: '333px',
//         height: '586px',
//         left: '0px',
//         top: '0px',

//     },
//     form: {
//         py: '-5',
//     },

//     button: {
//         display: 'flex',
//         flexdirection: 'row',
//         justifycontent: 'center',
//         alignitems: 'center',
//         padding: '8px 12px',
//     }
// }

function Details() {
    const [listData, setListData]=useState([])
    const getData= async ()=> {
        try {
           const resp=await axios.get("https://rent-cars-api.herokuapp.com/customer/car")
           setListData(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getData()
    },[])
    return (
        <div container>
            <Header />
            <div className="container style= py-5">
            <FormPencarian  />
                <div className="row">
                    {listData?.map(item =>{
                        return (
                            <div className="col-6" key={item.id}> 
                                <Detail />
                            </div>
                        )
                    })}                           
                </div>
                <div styles={{}}className="btn-group" aria-label="Basic example">
                    <button type="button" className="btn btn-success">
                        <p>Lanjutkan Pembayaran</p>
                    </button>                            
                </div>
            </div>
            
            <Footer />
        </div>
    )
}
export default Details;