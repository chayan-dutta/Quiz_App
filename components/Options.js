import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Options({
  option,
  correctOption,
  onTapped,
  selectedOption,
  optiondisablity,
}) {
  const selectedOptionStyle = [
    {
      borderColor: option == selectedOption ? "#fff" : "#000",
      borderWidth: option == selectedOption ? 2 : 0,
      backgroundColor: !selectedOption
        ? option === correctOption
          ? "#359401"
          : "#3A0374"
        : !correctOption
        ? "#3A0374"
        : selectedOption == correctOption && option == selectedOption
        ? "#359401"
        : selectedOption !== correctOption && option == selectedOption
        ? "#E70000"
        : option == correctOption
        ? "#359401"
        : "#3A0374",
    },
  ];

  return (
    <Pressable onPress={onTapped} disabled={optiondisablity}>
      <View style={[styles.options, selectedOptionStyle]}>
        <Text style={styles.text}>{option}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  options: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "#3A0374",
    elevation: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "left",
    color: "#fff",
  },
});
