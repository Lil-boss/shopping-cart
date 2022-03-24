import React from 'react';
import "./Cart.css"
const Cart = ({ product, handleToCart, removeItem }) => {
    //console.log(product);
    const { name, price, ratings } = product
    return (
        <div className='cart'>
            <h1 className='text'>Name:{name}</h1>
            <h1 className='text'>Price:${price}</h1>
            <h1 className='text'>Ratings:{ratings}</h1>
            <button onClick={() => handleToCart(product)} className='btn'>Add to cart</button>
            <button onClick={() => removeItem(product)} className='btn-remove'>Remove from cart</button>
        </div>
    );
};

export default Cart;