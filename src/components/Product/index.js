import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  StyledProductWrapper,
  StyledImage,
  StyledProductInfo,
  StyledTitle,
  StyledDescription,
  StyledPrice,
  StyledAddToCartButton,
  StyledButtonTitle
} from './styledComponets'

function Product({ products, addToCart, handleNavigation }) {
  return (
    <View>
      {products.map((product, index) => (
        <StyledProductWrapper onPress={() => handleNavigation(product)} key={index + "product"}>
          <StyledImage
            source={{
              uri: product.productImage,
            }}
          />

          <StyledProductInfo>
            <StyledTitle>{product.productName}</StyledTitle>
            <StyledDescription>{product.productDescription}</StyledDescription>
            <StyledPrice>Only for R{product.productPrice}.00</StyledPrice>
          </StyledProductInfo>

          <StyledAddToCartButton onPress={() => addToCart(product)} >
            <StyledButtonTitle>+</StyledButtonTitle>
          </StyledAddToCartButton>
        </StyledProductWrapper>
      ))}
    </View>
  );
}

Product.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
  handleNavigation: PropTypes.func,
}

export default Product;