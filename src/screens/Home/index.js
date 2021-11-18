import React, { useState } from "react";
import PropTypes from "prop-types";

import { Product, ProductDetail } from "../../components";

function Home({ products, addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigation = (product) => {
    setSelectedProduct(product);
  };

  const goBack = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {!selectedProduct && (
        <Product
          products={products}
          addToCart={addToCart}
          handleNavigation={handleNavigation}
        />
      )}

      {selectedProduct && (
        <ProductDetail product={selectedProduct} goBack={goBack} />
      )}
    </>
  );
}

Home.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
};

export default Home;
