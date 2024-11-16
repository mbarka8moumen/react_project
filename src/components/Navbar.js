import { Navbar, Nav, Container,  Form, FormControl, Button } from 'react-bootstrap';
import React from 'react';
import '../styles/Navbar.css';
import jewelery from '../assets/jewelery.jpg';
import Logo from '../assets/Logo.jpg';

import favoris from '../assets/Heart.png';
import user from '../assets/user.png';
import location from '../assets/location.png';
import shoppingBag from '../assets/shopping-bag.png';
import searchIcon from '../assets/search.png';
import { useState } from 'react';




function MyNavbar() {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    // Perform search logic here, such as redirecting or filtering results
    console.log("Search :", search);
  };
  return (
    <>
    <img src={jewelery} className='jewelery_img' />
    <Navbar expand="lg" className="fixed-top">
  <Container className="px-0">
  <Navbar.Brand className="navbar-brand-left ">
    <a href='/Home' style={{ textDecoration: 'none'}}>
      <h1>SHINEORA</h1></a>
    </Navbar.Brand>
    <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Looking For"
                  className="me-2 search-bar"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Nav.Link><img src={searchIcon} className='searchIcon' onClick={handleSearch}/>
                </Nav.Link>
              </Form>
             
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <Nav.Link href="/">
          <img src={Logo} className='Logo' /> 
        </Nav.Link>
        <Nav.Link href="/"><img className="icon_Nav" src={location}/></Nav.Link>
        <Nav.Link href="/Connexion"><img className="icon_Nav" src={user}/></Nav.Link>
        <Nav.Link href="/"><img className="icon_Nav" src={favoris}/></Nav.Link>
        <Nav.Link href="/"><img className="icon_Nav" src={shoppingBag}/></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
{/* <p className='title'>SHINEORA JEWELRY</p> */}
{/* <img src={picture} className='picture'/> */}
<div className='circul_title'>
  {/* <h3>S</h3>
  <h3>H</h3>
  <h3>I</h3>
  <h3>N</h3>
  <h3>E</h3>
  <h3>O</h3>
  <h3>R</h3>
  <h3>A</h3> */}
  </div>
 
  
</>


  );
}

export default MyNavbar;
