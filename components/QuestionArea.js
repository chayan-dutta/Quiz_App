import { StyleSheet, Text, View } from "react-native";

export default function QuestionArea({ question, questionNo }) {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>
        {questionNo}. {question}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    margin: 10,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#3A0374",
    paddingVertical: 15,
    paddingHorizontal: 10,
    elevation: 10,
  },
  questionText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "justify",
  },
});
