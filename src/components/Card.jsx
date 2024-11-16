import React, { useState } from 'react';
import Data from './Data';

import { FaHeart } from "react-icons/fa";
import "../styles/Card.css";

const Card = () => {
    const [favorites, setFavorites] = useState({});
    const handleHeartClick = (id) => {
        setFavorites(prevFavorites => ({
            ...prevFavorites,
            [id]: !prevFavorites[id] 
        }));
    };

    return (
        <div className='mainContainer'>
            {
                Data.map(({ id, image, title, price }) => {
                    const isFavorited = favorites[id];

                    return (
                        <div key={id} className='box'>
                            <div className="card">
                                <div className="image">
                                    <img src={image} alt="" />
                                </div>
                                <div className="desc">
                                    <h1>{title}</h1>
                                    <span>{price}DH</span>
                                </div>
                                <div className="heart" onClick={() => handleHeartClick(id)}>
                                    <FaHeart  className={`icon ${isFavorited ? 'favorited' : ''}`} />
                                </div>
                            </div>
                            <button className='btn'>Add to cart</button>
                        </div>
                    
                    );
                })
            }
            <div>
                <a href='/Catalogue' className='page2'>
                    <h3>DESCOVER</h3>
                </a>
            </div>
        </div>
    );
};

export default Card;
