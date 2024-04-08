import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './stylenav.css'
import 'boxicons/css/boxicons.min.css';

// import git from './icons/git.svg';
// import linkedin from './icons/linkedin.svg';
// import twitter from './icons/twitter.svg';


function Menu() {
  return (
    <div>
        <Navbar className='navbar navbar-expand-lg'  expand="lg" sticky='top'>
        <Container className='d-flex justify-content-beetwen'>
            <Navbar.Brand href="/" style={{ fontFamily:'Oxygen'}}>
              <h4>
                <span style={{borderTop:'2px solid black',borderBottom:'2px solid black'}}><b>Pastries</b></span><br/><i>Tangier</i>
              </h4>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='icons' style={{justifyContent:'end'}}>
              {/* <Container> */}
            <Nav className="me-auto" style={{textAlign:'center',gap:'20px'}}>  
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Cakes&Specials</Nav.Link>
              <Nav.Link href="/">Reservation</Nav.Link>
              <Nav.Link href="/">Order</Nav.Link>
              <Nav.Link href="/">About Us</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav>
            {/* </Container> */}
                <Nav style={{gap:'0.5rem', alignItems:'center'}}>
                <box-icon name='search'></box-icon>
                <h3>
                  <i class='bx bx-search-alt-2' ></i>
                  <i class='bx bx-user'></i>
                  <i class='bx bx-heart'></i>
                </h3>
                <h3><i className='bx bxs-store'></i> </h3>

                    {/* <img src={git} alt='git' ></img>
                    <img src={twitter} alt='twitter'></img>
                    <img src={linkedin} alt='linkedin'></img> */}
                </Nav>
            </Navbar.Collapse>
            

            
        </Container>
        </Navbar>
    </div>
  )
}

export default Menu