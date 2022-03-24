import React, { useEffect, useState } from 'react';
import { addToDb, removeFromDb } from '../../fakeDb';
import Cart from '../cart/Cart';
import './Shop.css'
const Shop = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleToCart = (product) => {
        addToDb(product.id);
    }
    const removeItem = (product) => {
        removeFromDb(product.id)
    }
    return (
        <div className='shop'>
            {
                products.map(item => <Cart
                    key={item.id} product={item}
                    handleToCart={handleToCart}
                    removeItem={removeItem}
                />)
            }

        </div>
    );
};

export default Shop;