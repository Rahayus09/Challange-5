import React from 'react'
import Header from '../../components/Header/Header'
import FormPencarian from '../../components/FormPencarian/FormPencarian';
import mobil from '../../assets/img/img_car.png'
import Footer from '../../components/Footer/Footer'
import { Container } from '@mui/material';

const styles = {
  navi: {
    backgroundColor: '#F1F3FF',    
  },
};

function Home() {
  return (
    <div className="container-fluid" >
      <Header />
          <Container sx={styles.navi}  >
              <div className="row">
                  <div className="col-6 background-color: #F1F3FF" id="opening">
                      <h1>Sewa & Rental Mobil Terbaik<br/>di Kawasan (Lokasimu)</h1>
                      {/* <p className=='pb-3'> */}
                      <p></p>
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br/> terbaik dengan
                          harga terjangkau. selalu siap melayani kebutuhanmu<br/> untuk sewa mobil selama 24 jam. <p/>
                  </div>
                  <div className="col-6">
                    <className sx= {{position: 'absolute'}} />
                        <img className="img-fluid" src={mobil} alt="car images"/>
                  </div>
                  <FormPencarian />
                </div>
          </Container>
        <Footer />
  </div>
  );
}

export default Home;