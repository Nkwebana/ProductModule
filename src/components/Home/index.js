import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';

import { Product } from '../'

function Home({ products, addToCart }) {
  return (
    <SafeAreaView>
      <Product products={products} addToCart={addToCart} />
    </SafeAreaView>
  );
}

Home.PropTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func
}

export default Home;
