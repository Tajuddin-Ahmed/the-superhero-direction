import { FaUserCheck  } from "react-icons/fa";
import React from 'react';

const Cart = (props) => {
    const {cart} =props;
    // showing total sallary 
    let totalCost = 0;
    const heroName = [];
    const brPoint = <br />
    for(const cost of cart){
        totalCost = totalCost+cost.sallary;
        heroName.push(cost.name)
        heroName.push(brPoint)
    }    
    return (
        <div className='w-100'>
            <h5 className='ms-4'> <FaUserCheck></FaUserCheck> Person Added : {cart.length} </h5>
            <h5 className='ms-0'>Total Sallary : ${totalCost.toFixed(2)} billion</h5>
             <h4 className='text-center'>{heroName}</h4>
        </div>
    );
};

export default Cart;