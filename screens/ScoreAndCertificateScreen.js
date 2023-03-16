import { View, Text, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";

import { participatorName } from "../store/name-context";
import Button from "../components/Button";

export default function ScoreAndCertificateScreen({ navigation }) {
  const ctx = useContext(participatorName);

  function GetCertificate() {
    Alert.alert(
      "Sorry! :(",
      "We're sorry. This feature will be introduced on future release.",
      [
        {
          text: "I Understand",
          onPress: () => console.log("Custom button pressed"),
        },
      ]
    );
  }

  function GoHome() {
    navigation.navigate("HomeScreen");
  }

  return (
    <LinearGradient
      colors={["#6C1B8E", "#CB01CB"]}
      style={styles.rootContainer}
    >
      <View style={styles.scoreContainer}>
        <Text style={styles.congratulationText}>Congratulations!!</Text>
        <Text style={styles.scoreDescription}>You Have Scored</Text>
        <Text style={styles.scoreText}>{ctx.score}%</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Get Certificate" onTapped={GetCertificate} />
        <Button text="Go Home" onTapped={GoHome} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  scoreContainer: {
    marginTop: 200,
    margin: 20,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#591C7B",
    elevation: 30,
  },
  congratulationText: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
  },
  scoreDescription: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  scoreText: {
    marginTop: 15,
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  buttonContainer: {
    marginTop: 50,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
