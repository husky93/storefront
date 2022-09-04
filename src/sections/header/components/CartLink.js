import React from 'react';
import { ReactComponent as CartIcon } from '../../../assets/icons/shopping-cart.svg';

const CartLink = ({ link, cartCount }) => {
  return (
    <div className="cart-link__wrapper">
      {cartCount ? (
        <span
          className="cart-link__counter"
          role="status"
          aria-label="Cart item counter"
        >
          {cartCount}
        </span>
      ) : (
        ''
      )}
      <a className="cart-link" href={link} aria-label="Cart">
        <CartIcon />
      </a>
    </div>
  );
};

export default CartLink;