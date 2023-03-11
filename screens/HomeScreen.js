import { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Input from "../components/Input";
import { participatorName } from "../store/name-context";
import Button from "../components/Button";

export default function HomeScreen({ navigation }) {
  const { width, height } = useWindowDimensions();

  const enteredNameCtx = useContext(participatorName);

  function onInputChangedHandler(enteredText) {
    enteredNameCtx.getEnteredname(enteredText);
  }

  function getStarted() {
    navigation.navigate("Categories");
  }

  return (
    <LinearGradient
      colors={["#6C1B8E", "#CB01CB"]}
      style={styles.rootContainer}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Enter your name to get started.
        </Text>
        <Input
          textInputConfig={{
            autoCapitalize: "words",
            multiline: false,
            onChangeText: onInputChangedHandler,
          }}
        />
        <View style={styles.buttonContainer}>
          <Button text="Get Started" onTapped={getStarted} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  logoImage: {
    height: "90%",
    width: "90%",
    opacity: 0.9,
  },
  logoContainer: {
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 150,
  },
  descriptionContainer: {
    margin: 5,
    padding: 24,
    alignItems: "center",
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
