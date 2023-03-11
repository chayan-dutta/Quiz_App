import { Pressable, StyleSheet, View, Text } from "react-native";

export default function CategoryGrid({ title, onTpped }) {
  return (
    <Pressable
      onPress={onTpped}
      style={({ pressed }) => [
        styles.pressableContainer,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableContainer: {
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FE00A6",
    backgroundColor: "#6F027D",
    borderColor: "#fff",
    padding: 10,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
