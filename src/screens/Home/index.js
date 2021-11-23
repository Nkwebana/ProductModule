import React from "react";
import PropTypes from "prop-types";

import { Product } from "../../components";

function Home({ products, addToCart, handleNavigation }) {
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
  addToCart: PropTypes.func,
};

export default Home;
