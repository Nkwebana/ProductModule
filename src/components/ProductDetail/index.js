import React from "react";
import { Text, Button } from "react-native";

function ProductDetail({ product, goBack }) {
  return (
    <>
      <Text>{product.productName}</Text>
      <Text>{product.productDescription}</Text>
      <Text>{product.productPrice}</Text>
      <Button title="Back" onPress={() => goBack()} />
    </>
  );
}

export default ProductDetail;
