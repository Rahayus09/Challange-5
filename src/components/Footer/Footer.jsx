import { Container } from 'reactstrap';
import list from '../../assets/img/list item.png'
import segi from '../../assets/img/Rectangle 74.png'

const styles = {
    style: {
        height: '128px',
        width: '1141px',
        left: '173px',
        top: '672px',
        borderradius: '0px',
        justify: 'space-between',
        marginBottom: '10px',
        display: 'flex',
        flexdirection: 'row',
        justifycontent: 'space-between',
        alignitems: 'flex-start',
        padding: '0px',
        position: 'absolute',
    },
}

function Footer() {
    return (
        <section  >
        <Container sx={styles.style}>
            <div className="row my-5">
                <div className="col-12">
                    <div className="d-flex" sx={styles.style} >
                        <div  className="col-3">
                            <div className="wrapper-col-1">
                                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                <p>binarcarrental@gmail.com</p>
                                <p>081-233-334-808</p>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wrapper-col-1">
                                <p>Our services</p>
                                <p>Why Us</p>
                                <p>Testimonial</p>
                                <p>FAQ</p>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wrapper-col-1">
                                <p>Connect with us</p>
                                <img src={list} alt='ngelist'/>
                            </div>
                        </div>

                        <div className="col-3">
                            <p>Copyright Binar 2022</p>
                            <img src={segi} alt='persegi' />
                        </div>
                    </div>

                </div>
            </div>
        </Container>

    </section>
    )
}
export default Footer;