import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FaFacebookSquare,FaTwitter  } from "react-icons/fa";
import './Superhero.css';

const Superhero = (props) => {
    const {img,name,age,role,sallary,country} =props.superhero;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (    
        <div className='superhero'>
            <img width='130px' height='130px' className='rounded-circle mt-2' src={img} alt="" />
            <h5>Name:  {name}</h5>
            <p>Age:  {age}</p>
            <p>Role:  {role}</p>
            <p>Sallary:  ${sallary} billion</p>
            <p>Country:  {country}</p>
            <button onClick={()=>props.handleAddToCart(props.superhero)} className='btn btn-danger py-1 px-3 mb-3'>{cartIcon}Add To Cart</button>
            <p > <span className='me-4 fs-4'> <a className='text-white' href="www.facebook.com"> <FaFacebookSquare></FaFacebookSquare></a></span> <span className='fs-4'> <a className='text-white' href="www.twitter.com"><FaTwitter></FaTwitter></a> </span></p>
        </div>       
    );
};

export default Superhero;