import { StyleSheet, View, Text } from "react-native";

export default function CountDown({ number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#740370",
    padding: 20,
    elevation: 20,
    borderRadius: 150,
    marginHorizontal: 140,
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
