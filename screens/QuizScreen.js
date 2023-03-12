import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useEffect } from "react";

import { shuffle } from "../util/QuizQutionsOrganizer";
import { participatorName } from "../store/name-context";

export default function QuizScreen({ route }) {
  const ctx = useContext(participatorName);

  const noOfQuestionSelected = route.params.selectedNoOfQuestions;

  useEffect(() => {
    let i = 0;
    let intervalId = setInterval(() => {
      console.log(GetQuestionOptionsAnswer(i, "Question"));
      setTimeout(() => {
        console.log(GetQuestionOptionsAnswer(i, "Ans"));
        i++;
        if (i === noOfQuestionSelected) {
          clearInterval(intervalId);
        }
      }, 3000);
    }, 5000);
  }, []);

  function GetQuestionOptionsAnswer(index, itemNeeded) {
    let response;
    switch (itemNeeded) {
      case "Question":
        response = ctx.allQuestions[index].question;
        break;
      case "Options":
        let options = [
          ...ctx.allQuestions[index].options,
          ctx.allQuestions[index].correct_answer,
        ];
        response = shuffle(options);
        break;
      case "Ans":
        response = ctx.allQuestions[index].correct_answer;
        break;
      default:
        response = false;
    }
    return response;
  }

  return (
    <LinearGradient
      colors={["#6C1B8E", "#CB01CB"]}
      style={styles.rootContainer}
    >
      <View>
        <Text>Quiz screen</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
