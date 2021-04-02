import React from 'react';
import { useSelector} from 'react-redux';
import CartProperties from '../ShoppingCartComponents/index'

import './ShoppingCart.css'

function ShoppingCart() {
    const addPost = useSelector(state => state.addPost)
    const items = useSelector(state => state.addPost)
    console.log(items, "------------------------")
    let total = 0;
    if (items) {
        const itemTotal = items.forEach(item => {
            let itemPrice = item.price.slice(1);
            total = total + +itemPrice
            return total
        })
    console.log(itemTotal)
    }


    if (!Array.isArray(addPost)) {
        return null
    } else {
        const ele = addPost.map((el, i) => {
            return <CartProperties key={i} props={el} />
        })
        return (
            <>
                <div className="cart-posts-outer-div" >
                    <h1 className="header">Shopping Cart</h1>
                    {ele}
                    <div className="line" />
                    <h3 className="header">Total: ${total}</h3>
                </div>
            </>
        );
    }
}

export default ShoppingCart;
