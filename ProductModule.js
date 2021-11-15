/**
 * ProductModule
 */

import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native'

import { NavigationManager } from './src/components'

function ProductModule({ products, addToCart }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationManager products={products} addToCart={addToCart} />
    </SafeAreaView>
  );
};

ProductModule.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func
}

ProductModule.defaultProps = {
  products: [{
    id: 1,
    productName: 'Chicken',
    productPrice: 75,
    productImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190808-baked-drumsticks-0205-portrait-pf-1567089281.jpg?crop=1.00xw:0.667xh;0,0.150xh&resize=768:*',
    productSize: '500ml',
    productDescription: 'This is coolest product ever.'
  }, {
    id: 2,
    productName: 'Coffee',
    productPrice: 50,
    productImage: 'https://joya.info/images/content/438914-1200x700c56x50-Kaffee-mit-pflanzlicher-Milch-Barista_1200x798.jpg',
    productSize: '500ml',
    productDescription: 'This is coolest product ever.'
  }, {
    id: 3,
    productName: 'Milk',
    productPrice: 80,
    productImage: 'https://www.verywellhealth.com/thmb/-EP3Xy46uvfaoGcXo8f-froqabY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1167159966-ede3f881729e4b53b0508aa1a801b227.jpg',
    productSize: '500ml',
    productDescription: 'This is coolest product ever.'
  }]
}

export default ProductModule;
