import React, { useRef } from 'react';
import Link from 'next/Link';
import { useStateContext } from '../context/StateContext';
import { toast } from 'react-hot-toast';


const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();

    return (
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container">
                <button
                type="button"
                className="cart-heading"
                onClick={() => setShowCart(false)}>
                    <span className="heading"> Your Cart</span>
                    <span className="cart-num-items"> ({totalQuantities} items)</span>

                </button>

                {cartItems.length < 1 && (
                    <div className ="empty-cart">
                        <h3>Your shopping cart is empty</h3>
                        <Link href="/">
                            <button
                              type="button"
                              onClick={() => setShowCart(false)}
                              className="btn"
                            >
                              Continue Shopping
                              </button>
                        </Link>
                    </div>
                )}

                <div className="product-container">
                    {cartItems.length >= 1 && cartItems.map((item) => (
                        <div className ="product" key={item._id}>
                          <img src={urlFor(item?.image[0])}
                          className="cart-product-image" />
                          <div className="item-desc">
                              <div className ="flex-top">
                                  <h5>{item.name}</h5>
                                  <h4>${item.price}</h4>
                              </div>
                              <div className="flex bottom">
                                  <div>
                                      <p className ="quantity-desc">
                                          <span className="minus"
                                           onClick=""><AiOutlineMinus /></span>
                                          <span className = "num" onClick="">0</span>
                                          <span className = "plus" 
                                          onClick=""><AiOutlinePlus /></span>
                                      </p>
                                       </div>
                                       <button
                                         type="button"
                                         className ="remove-item"
                                         onClick={() => onRemove(item)}
                                       >
                                         <TiDeleteOutline />
                                       </button>
                                      </div>
                                    </div>
                                </div>
                              ))}
                            </div>
                            {cartItems.length >= 1 && (
                                <div className="cart-bottom">
                                    <div className="total">
                                        <h3> Subtotal: </h3>
                                        <h3>${totalPrice} </h3>
                                    </div>
                                    <div className ="btn-container">
                                        <button type="button" classname="btn"
                                        onClick="">
                                            Pay with Stripe
                                        </button>
                                    </div>
                                </div>
                            )}
                         </div>
                       </div>
    )
}

export default Cart