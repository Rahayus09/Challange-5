import mobil from '../../assets/img/image 1.png'
// import Header from '../../components/Header/Header'
// import FormPencarian from '../../components/FormPencarian/FormPencarian';
// import Footer from '../../components/Footer/Footer'
import calender from '../../assets/Icon/calendar.png'
import users from '../../assets/Icon/users.png'
import Rent from '../../assets/Icon/Rent.png'
import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

function Detail() {
    return (
        <div className="container-fluid" >
          <div className="container style= ">
            <div className="row py-5">
                  <div className="col-6">
                  <div className="card">
                     <h3>Tentang Paket</h3>
                     <p>
                         Include
                         <ul>
                         <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                         <li>Sudah termasuk bensin selama 12 jam</li>
                         <li>Sudah termasuk Tiket Wisata</li>
                         <li>Sudah termasuk pajak</li>
                         </ul>
                     </p>
                     <p>
                         Exclude
                         <ul>
                         <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                         <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                         <li>Tidak termasuk akomodasi penginapan</li>
                         </ul>
                     </p>

                     <h3>Refund, Reschedule, Overtime</h3>
                     <ul>
                         <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                         <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                         <li>Tidak termasuk akomodasi penginapan</li>
                         <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                         <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                         <li>Tidak termasuk akomodasi penginapan</li>
                         <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                         <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                         <li>Tidak termasuk akomodasi penginapan</li>
                     </ul>
                     </div>
                  </div>

                  <div className="col-5 offset-1">
                  <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={mobil} alt="hasilmobil" />
                        </h5>
                        <p>Nama/Tipe Mobil</p>
                        <p className="card-text"><img src={users} alt="user" />4 orang</p>
                        <p className="card-text"><img src={Rent} alt="rent" /></p>
                        <p className="card-text"><img src={calender} alt="cal" />Tahun 2020</p>
                        <div className="btn-group" aria-label="Basic example">
                            <button type="button" className="btn btn-success">
                                {/* <img src={pilih} alt="icon-trash" />Pilih Mobil */}
                                <p>Lanjutkan Pembayaran</p>
                            </button>                            
                        </div>
                    </div>
                  </div>
                  </div>
            </div>
        </div>
        {/* <Footer /> */}
        </div>
    )
}
export default Detail;