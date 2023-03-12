import { Alert, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";

import Button from "../components/Button";

const dropdownData = [
  { label: "5 Questions", value: 5 },
  { label: "10 Questions", value: 10 },
  { label: "15 Questions", value: 15 },
  { label: "20 Questions", value: 20 },
  { label: "25 Questions", value: 25 },
];

export default function ConfirmationScreen({ route }) {
  const [dropdown, setDropdown] = useState(null);

  const selectedCategoryName = route.params.selectedCategory.name;

  const renderDropdownItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    );
  };

  function onConfirm() {
    if (dropdown == null) {
      Alert.alert(
        "Select No. of Questions",
        "Please select how many questions you want to play."
      );
      return;
    }
    console.log("Confirmed:", dropdown);
  }

  return (
    <LinearGradient
      colors={["#6C1B8E", "#CB01CB"]}
      style={styles.rootContainer}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.titleText1}>Your Selected Category Is - </Text>
        <Text style={styles.titleText2}>{selectedCategoryName}</Text>
        <Text style={styles.descriptionText}>
          Select How Many Questions You Want To Play
        </Text>
      </View>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={dropdownData}
        labelField="label"
        valueField="value"
        placeholder="Select No. of Questions"
        placeholderStyle={styles.placeholderStyle}
        onChange={(item) => {
          setDropdown(item.value);
        }}
        renderItem={(item) => renderDropdownItem(item)}
      />
      <View style={styles.noteWindow}>
        <Button text="Confirm" onTapped={onConfirm} />
        <Text style={styles.noteText}>
          **You will get 10 seconds on each question**
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    textAlign: "center",
    marginTop: 50,
  },
  titleText1: {
    fontSize: 18,
    color: "#fff",
  },
  titleText2: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  descriptionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  },
  dropdown: {
    backgroundColor: "#6F027D",
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    color: "#fff",
    margin: 20,
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  containerStyle: {
    borderRadius: 10,
  },
  placeholderStyle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    opacity: 0.7,
  },
  selectedTextStyle: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  itemContainer: {
    backgroundColor: "#BF00FE",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    color: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  itemText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  noteWindow: {
    marginHorizontal: 10,
    marginTop: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  noteText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 50,
  },
});
