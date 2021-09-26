import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Superhero from '../Superhero/Superhero';
import './superheros.css';

const Superheros = () => {
    const [superheros,setSuperheros] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() =>{
        fetch('./superHero.JSON')
        .then(res =>res.json())
        .then(data => setSuperheros(data));
    },[]) 

    const handleAddToCart = superhero =>{
        const newHero = [...cart,superhero];
        setCart(newHero);
    }
    
    return (
        <>           
            <div className='container superheros-container'>
                <div className='superhero-container'>
                {
                    superheros.map(superhero =><Superhero
                    key={superhero.key}
                    handleAddToCart={handleAddToCart}
                    superhero={superhero}></Superhero>)
                }
                </div>
                <div className='text-light text-start ms-4 rounded'>
                  <Cart cart={cart}></Cart>
                </div>
            </div>
            
       </>
    );
};

export default Superheros;