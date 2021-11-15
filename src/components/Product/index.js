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

function Product({ products, addToCart }) {
  return (
    <View>
      {products.map((product) =>
        <StyledProductWrapper>
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
      )}
    </View>
  );
}

Product.PropTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func
}

export default Product;