import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import NavNavigation from './NavNavigation'
import Collection  from './Collection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card'
import Time from './Time'
import Footer from './Footer'

function Home() {
    return (  
        <div>
        <Navbar />
        <NavNavigation/>
        <Time/>
        <Card/>
        <Collection/>
       
        
        <Footer />
      </div>
    );
}

export default Home;
