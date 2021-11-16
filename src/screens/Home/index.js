import React from 'react';
import PropTypes from 'prop-types';

import { Product } from '../../components'

function Home({ navigation, products, addToCart }) {
  const handleNavigation = (product) => {
    navigation.navigate('Product Details', { product })
  }

  return (
    <Product
      products={products}
      addToCart={addToCart}
      handleNavigation={handleNavigation}
    />
  );
}

Home.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func
}

export default Home;
