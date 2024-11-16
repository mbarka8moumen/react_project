import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import Navbar from './Navbar';
import NavNavigation from './NavNavigation';
import Time from './Time';
import Footer from './Footer';
import Data from './DataCatalogue';
import styles from '../styles/Catalogue.module.css'; 
import Del_img from '../assets/Always on time.jpg'
import pictA from '../assets/picA.jpg'
import pictB from '../assets/PICB.jpg'

function Catalogue() {
  const [Favorit, setFavorit] = useState({});
  const handleClick = (id) => {
    setFavorit(prevFavorit => ({
      ...prevFavorit,
      [id]: !prevFavorit[id]
    }));
  };

  return (
    <div>
      <Navbar />
      <NavNavigation />
      <Time />
      <h3 style={{position:'absolute'
        ,top:'500px',
        left:'340px',
        fontSize:'60px',
        color:'Highlight'
        }}>DECOUVRIR NOS BIJOUS</h3>
      <div className={styles.mainContainer}>
        {Data.map(({ id, img, title, price }) => {
          const isFavorited = Favorit[id];
          return (
            <div key={id} className={styles.BOX}>
              <div className={styles.CARD}>
                <div className={styles.IMG}>
                  <img src={img} alt={title} />
                </div>
                <div className={styles.DESC}>
                  <h1>{title}</h1>
                  <span>{price}DH</span>
                </div>
                <div
                  className={styles.HEART}
                  onClick={() => handleClick(id)}
                >
                  <FaHeart className={`${styles.icon} ${isFavorited ? styles.favorited : ''}`} />
                </div>
              </div>
              <button className={styles.button}>Add to cart</button>
            </div>
          );
        })}
      </div>
  
      <img src={Del_img} className='Del_img'  style={{
          position: "absolute",
          width: "100%",
          height: "400px",
          top: "2680px",
          left: "0",
        }} ></img>



        <div className='images'  style={{
       display: 'flex',
       alignItems: 'center',
       position: 'absolute',
       top: '2150px',
       height: '400px',  
       left: '160px',
       width: '400PX',
       textAlign: 'center'
      }}>

<div>
      <p style={{position:'absolute', 
                top:'10px',
                left:'330px',
                fontSize:'80px',
                // color:'white',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight:'600',

      }}>
      Elegant Diamond Rings
      </p>
      </div>
          <img src={pictA} style={{
          height: '500px',
          margin: '0',
          
        }} />
          <img src={pictB} style={{
          height: '500px',
          width: 'auto',
          margin: '0',
         
        }}/>
       
        </div>
      <Footer />
    </div>
  );
}

export default Catalogue;
