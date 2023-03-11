import { Pressable, Text, StyleSheet } from "react-native";

export default function Button({ text, onTapped }) {
  return (
    <Pressable
      onPress={onTapped}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#5B05A8",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#FFF",
    padding: 8,
    textAlign: "center",
    width: 150,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});
