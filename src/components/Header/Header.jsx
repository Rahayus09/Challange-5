import React from 'react'
import {
    Container,
  } from '@mui/material';

const styles = {
    navi: {
      backgroundColor: '#F1F3FF',    
    },
  };

function Header() {
    return (
 <nav className="navbar navbar-expand-sm" >
     <Container sx={styles.navi}>
         <div className="navbar-collapse justify-content-end">
             <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
                 <div className="navbar-collapse justify-content-end">
                     <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
                         <li className="nav-item">
                             <a className="nav-link" href="# ">Our Service</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#Why Us">Why Us</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#Testimonial">Testimonial</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#FAQ">FAQ</a>
                         </li>
                         <li className="nav-item">
                             <button className="btn btn-success">Register</button>
                         </li>
                     </ul>
                 </div>
            </ul>
     </div>
     </Container>
 </nav>

    )
}
export default Header;