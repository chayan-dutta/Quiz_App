import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

import CategoriesScreen from "./screens/CategoriesScreens";
import HomeScreen from "./screens/HomeScreen";
import NameContextProvider from "./store/name-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NameContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Categories" component={CategoriesScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NameContextProvider>
    </>
  );
}
