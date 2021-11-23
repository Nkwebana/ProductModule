import React from "react";
import { Text } from "react-native";

function ProductDetail({
  route: {
    params: { product },
  },
}) {
  return (
    <>
      <Text>{product.productName}</Text>
      <Text>{product.productDescription}</Text>
      <Text>{product.productPrice}</Text>
    </>
  );
}

ProductDetail.options = {
  topBar: {
    title: {
      text: "Product Details",
      color: "white",
    },
    background: {
      color: "lightblue",
    },
  },
};

export default ProductDetail;
