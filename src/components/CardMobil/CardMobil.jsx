import mobil from '../../assets/img/image 1.png'
import calendar from '../../assets/Icon/calendar.png'
import Rent from '../../assets/Icon/Rent.png'
import users from '../../assets/Icon/users.png'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
  } from '@mui/material';


function CardMobil () {
    const navigate = useNavigate()
    return (
        // <div className="card" >
        //     {/* style={{width: '333px', height: '586px', margin: '0px 24px' }} */}
        //     <div sx={styles.contentUtama} className="card-body">
        //         <h5 className="card-title img-fluid">
        //             <img style={{position: 'absolute', width: '270px', height: '160px', left: '16px', top: '31px'}} src={mobil} alt="mobil" />
        //         </h5>
        //         <p>Nama/Tipe Mobil</p>
        //         <h6>Rp 430.000 / hari</h6>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>                       
        //         <p className="card-text"><img src={users} alt="user" />4 orang</p>
        //         <p className="card-text"><img src={Rent} alt="rent" /></p>                    
        //         <p className="card-text"><img src={calendar} alt="cal" />Tahun 2020</p>
                
        //         <div className="btn-group" aria-label="Basic example">
        //             <button type="button" className="btn btn-success">
        //                 <p>Pilih Mobil</p>
        //             </button>                           
        //         </div> 
        //     </div>
        // </div>  
        <div className="card">
                    <div className="card-body py-5">
                        <h5 className="card-title">
                            <img src={mobil} alt="hasilmobil" />
                        </h5>
                        <p>Nama/Tipe Mobil</p>
                        <h6>Rp 430.000 / hari</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        <p className="card-text"><img src={users} alt="user" />4 orang</p>
                        <p className="card-text"><img src={Rent} alt="rent" /></p>
                        <p className="card-text"><img src={calendar} alt="cal" />Tahun 2020</p>
``                      </p>
                        <div className="btn-group" aria-label="Basic example">
                            <Button variant="contained">
                                <p onClick={() =>navigate("/detail")}>Pilih Mobil</p>
                            </Button>                            
                        </div>
                    </div>
                  </div>
    );
}
export default CardMobil;