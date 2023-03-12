import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import CategoriesScreen from "./screens/CategoriesScreens";
import ConfirmationScreen from "./screens/ConfirmationScreen";
import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import NameContextProvider from "./store/name-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NameContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#3C0155",
              },
              headerTintColor: "#fff",
            }}
          >
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Categories"
              component={CategoriesScreen}
              options={{
                title: "All Categories",
              }}
            />
            <Stack.Screen
              name="Confirmation"
              component={ConfirmationScreen}
              options={{ title: "Confirm and Continue" }}
            />
            <Stack.Screen
              name="QuizScreen"
              component={QuizScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NameContextProvider>
    </>
  );
}
