/**
 *
 * NavigationManager
 *
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductDetail, Home } from '../../screens';

function NavigationManager({ products, addToCart }) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="All Products">
        <Stack.Screen name="All Products">
          {props => <Home {...props} products={products} addToCart={addToCart} />}
        </Stack.Screen>
        <Stack.Screen name="Product Details" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationManager;
