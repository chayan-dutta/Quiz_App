import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import NameContextProvider from "./store/name-context";

export default function App() {
  return (
    <>
      <NameContextProvider>
        <HomeScreen />
      </NameContextProvider>
    </>
  );
}
