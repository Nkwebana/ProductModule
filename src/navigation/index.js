/**
 *
 * Navigation
 *
 */
import React from "react";
import PropTypes from "prop-types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductDetail } from "../components";
import { Home } from "../screens";

function Navigation({ products, addToCart }) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products Screen">
          {(props) => (
            <Home {...props} products={products} addToCart={addToCart} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Product Details" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Navigation.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
};

export default Navigation;
