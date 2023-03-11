import { Text, View } from "react-native";

export default function CategoriesScreen({ route }) {
  return (
    <View>
      <Text> Welcome {route.params.participatorName}</Text>
    </View>
  );
}
