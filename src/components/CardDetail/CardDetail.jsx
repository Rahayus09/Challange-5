import mobil from '../../assets/img/image 1.png'
import calender from '../../assets/Icon/calendar.png'
import users from '../../assets/Icon/users.png'
import Rent from '../../assets/Icon/Rent.png'
import React from 'react';

function CardDetail(id) {
    return (
        <div className="container-fluid" >
          <div className="container style= ">
            <div className="row py-5">
                  {/* <div className="col-12"> */}
                  {/* <div className="card">
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
                     </div> */}
                  </div>                
                  <div className="col-5 offset-1">
                  <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={mobil} alt="hasilmobil" />
                        </h5>
                        <p>Nama/Tipe Mobil</p>
                        <div className="flex-row">
                            <p className="card-text"><img src={users} alt="user" />4 orang</p>
                            <p className="card-text"><img src={Rent} alt="rent" /></p>
                            <p className="card-text"><img src={calender} alt="cal" />Tahun 2020</p>
                        </div>
                       <div className="row">
                           <div className='col-6'>
                               <p>Total</p>
                           </div>
                           <div className='col-6'>
                               <p><b>Rp430.000</b></p>
                           </div>
                       </div>
                        <div className="d-grid gap-2">
                            <button 
                            type="button" 
                            className=" btn btn-success px-4 py-2 rounded"
                            > Lanjutkan Pembayaran
                            </button>                            
                        </div>
                    </div>
                  </div>
            </div>
        </div>
        </div>
    )
}
export default CardDetail;