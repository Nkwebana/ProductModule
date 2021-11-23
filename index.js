/**
 * @format
 */

import { AppRegistry } from "react-native";

import { ProductModule } from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => ProductModule);
