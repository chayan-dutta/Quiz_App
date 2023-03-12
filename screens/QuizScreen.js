import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function QuizScreen({ route }) {
  return (
    <LinearGradient
      colors={["#6C1B8E", "#CB01CB"]}
      style={styles.rootContainer}
    >
      <View>
        <Text>{route.params.selectedOptions.topic}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
