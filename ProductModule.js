/**
 * ProductModule
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Home } from './src/components'

function ProductModule({ products }) {
  const addToCart = (cartData) => {
    console.log(cartData);
  }

  return (
    <Home products={products} addToCart={addToCart} />
  );
};

ProductModule.PropTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func
}

ProductModule.defaultProps = {
  products: [{
    id: 1,
    productName: 'Chicken',
    productPrice: 70,
    productImage: 'https://www.biltong.co.za/wp-content/uploads/2019/06/Chicken-Starpack1.jpg',
    productSize: '500ml',
    productDescription: 'This is coolest product ever.'
  }, {
    id: 2,
    productName: 'Coffee',
    productPrice: 70,
    productImage: 'https://www.biltong.co.za/wp-content/uploads/2019/06/Chicken-Starpack1.jpg',
    productSize: '500ml',
    productDescription: 'This is coolest product ever.'
  }, {
    id: 3,
    productName: 'Milk',
    productPrice: 70,
    productImage: 'https://www.biltong.co.za/wp-content/uploads/2019/06/Chicken-Starpack1.jpg',
    productSize: '500ml',
    productDescription: 'This is coolest product ever.'
  }]
}

export default ProductModule;
