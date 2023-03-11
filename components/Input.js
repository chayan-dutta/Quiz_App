import { View, TextInput, StyleSheet } from "react-native";

export default function Input({ textInputConfig }) {
  return (
    <View style={styles.inputBoxContainer}>
      <TextInput style={styles.inputBox} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBoxContainer: {
    padding: 20,
    marginTop: 20,
    alignItems: "center",
  },
  inputBox: {
    color: "#fff",
    alignItems: "center",
    fontSize: 25,
    fontWeight: "bold",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    padding: 5,
    width: 250,
    textAlign: "center",
    backgroundColor: "#9305C2",
  },
});
