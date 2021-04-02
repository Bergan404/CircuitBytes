import React from "react";
import { NavLink } from 'react-router-dom'

import './ShoppingCart.css'

const CartProperties = (cart) => {

    return (
        <>
            <div className="cart-posts" >
                <NavLink to={`/post/${cart.props.id}`}>
                    <img className="homepage-picture" src={cart.props.listPicture} />
                    <div>{cart.props.postTitle}</div>
                    <div>{cart.props.price}</div>
                </NavLink>
            </div>
        </>
    )
}

export default CartProperties;
