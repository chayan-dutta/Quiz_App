import { Text, View } from "react-native";

export default function ConfirmationScreen({ route }) {
  const selectedCategoryName = route.params.selectedCategory.name;
  return (
    <View>
      <Text>Confirm screen</Text>
      <Text>{selectedCategoryName}</Text>
    </View>
  );
}
