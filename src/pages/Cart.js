import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id}>
              <img src={item.imageUrl} alt={item.name} style={{ width: '100px' }} />
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
