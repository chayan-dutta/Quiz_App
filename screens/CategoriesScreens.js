import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { participatorName } from "../store/name-context";
import { AllCategories } from "../consts/AllCategories";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoriesScreen({ navigation }) {
  const enteredNameCtx = useContext(participatorName);

  function renderCategoryList(itemData) {
    function categorySelected() {
      navigation.navigate("Confirmation", {
        selectedCategory: {
          id: itemData.item.id,
          name: itemData.item.title,
          value: itemData.item.valueInAPI,
        },
      });
    }
    return (
      <CategoryGrid title={itemData.item.title} onTpped={categorySelected} />
    );
  }

  return (
    <LinearGradient
      colors={["#6C1B8E", "#CB01CB"]}
      style={styles.rootContainer}
    >
      <View style={styles.upperContainer}>
        <Text style={styles.text1}> Hey, {enteredNameCtx.name}! Welcome. </Text>
        <Text style={styles.text2}>
          {" "}
          Please Select a category from the below list.{" "}
        </Text>
      </View>
      <View>
        <FlatList
          data={AllCategories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryList}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  upperContainer: {
    marginHorizontal: 10,
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  text2: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
});
