import React from 'react';
import { Text } from 'react-native';
import Product from '../../components/Product/index';

function ProductDetail({ route: {
  params: {
    product
  },
}, }) {
  return (
    <>
      <Text>{product.productName}</Text>
      <Text>{product.productDescription}</Text>
      <Text>{product.productPrice}</Text>
    </>
  );
}

export default ProductDetail;
