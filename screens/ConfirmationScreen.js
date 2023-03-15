import { Alert, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dropdown } from "react-native-element-dropdown";
import { useContext, useState } from "react";
import axios from "axios";
import ProgressLoader from "rn-progress-loader";

import Button from "../components/Button";
import { checkInternetConnection } from "../util/QuizQutionsOrganizer";
import { participatorName } from "../store/name-context";

const dropdownData = [
  { label: "5 Questions", value: 5 },
  { label: "10 Questions", value: 10 },
  { label: "15 Questions", value: 15 },
  { label: "20 Questions", value: 20 },
  { label: "25 Questions", value: 25 },
];

export default function ConfirmationScreen({ navigation, route }) {
  const [selectedNoOfQuestion, setSelectedNoOfQuestion] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  const ctx = useContext(participatorName);

  const selectedCategoryName = route.params.selectedCategory.name;
  const selectedCategoryValue = route.params.selectedCategory.value;

  const renderDropdownItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    );
  };

  async function onConfirm() {
    if (selectedNoOfQuestion == null) {
      Alert.alert(
        "Select No. of Questions",
        "Please select how many questions you want to play."
      );
      return;
    }
    const networkState = await checkInternetConnection();
    if (networkState) {
      if (networkState.isConnected && networkState.isInternetReachable) {
        setModalVisibility(true);
        FetchAPI(selectedCategoryValue, selectedNoOfQuestion);
        setTimeout(() => {
          navigation.navigate("QuizScreen", {
            selectedNoOfQuestions: selectedNoOfQuestion,
          });
        }, 3000);
      } else {
        Alert.alert(
          "Oops! Something went wrong.",
          "Please check your internet connection and try again"
        );
      }
    } else {
      return;
    }
  }

  function FetchAPI(categoryValue, noOfQuestion) {
    const url = `https://opentdb.com/api.php?amount=${noOfQuestion}&category=${categoryValue}&difficulty=easy&type=multiple`;
    axios.get(url, { responseType: "json" }).then((response) => {
      ctx.setAllQuestions(JSON.parse(JSON.stringify(response.data)));
    });
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
          setSelectedNoOfQuestion(item.value);
        }}
        renderItem={(item) => renderDropdownItem(item)}
      />
      <View style={styles.noteWindow}>
        <Button text="Start" onTapped={onConfirm} />
        <Text style={styles.noteTextStarTop}>**</Text>
        <Text style={styles.noteText}>
          You will get 10 seconds on each question
        </Text>
        <Text style={styles.noteTextStarBottom}>**</Text>
      </View>
      <View style={styles.loadingContainer}>
        <ProgressLoader
          visible={modalVisibility}
          isModal={true}
          isHUD={true}
          hudColor={"#3C0155"}
          color={"#FFFFFF"}
        />
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
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  noteTextStarTop: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50,
    textAlign: "center",
  },
  noteTextStarBottom: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
