import { StyleSheet, View, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useEffect, useState } from "react";
import ProgressLoader from "rn-progress-loader";

import { shuffle } from "../util/QuizQutionsOrganizer";
import { participatorName } from "../store/name-context";
import QuestionArea from "../components/QuestionArea";
import CountDown from "../components/CountDown";
import Options from "../components/Options";
import Button from "../components/Button";

export default function QuizScreen({ navigation, route }) {
  const [loadingIconVisibility, setLoadingIconVisibility] = useState(false);
  const [count, setCount] = useState(10);
  const [questionNO, setQuestionNo] = useState(1);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [answer, setAns] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [disableOption, setDisablleOption] = useState(false);
  const [score, setScore] = useState(0);

  const ctx = useContext(participatorName);

  const noOfQuestionSelected = route.params.selectedNoOfQuestions;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
      getAnswerSetScore();
    }

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    setQuestion(GetQuestionOptionsAnswer(questionNO - 1, "Question"));
    setOptions(GetQuestionOptionsAnswer(questionNO - 1, "Options"));
  }, [questionNO]);

  function getAnswerSetScore() {
    const correctAns = GetQuestionOptionsAnswer(questionNO - 1, "Ans");
    setAns(correctAns);
    if (correctAns == selectedOption) {
      setScore(score + 1);
    }
    setDisablleOption(true);
    setTimeout(() => {
      if (questionNO != noOfQuestionSelected) {
        setCount(10);
        setDisablleOption(false);
        setQuestionNo(questionNO + 1);
        setAns(null);
      } else {
        console.log("Score", score);
        ctx.setTotalScore(score, noOfQuestionSelected);
        setLoadingIconVisibility(true);
        setScore(0);
        setTimeout(() => {
          navigation.navigate("CertificateScreen");
        }, 2000);
      }
    }, 3000);
  }

  function manualSubmit() {
    getAnswerSetScore();
  }

  function GetQuestionOptionsAnswer(index, itemNeeded) {
    let response;
    switch (itemNeeded) {
      case "Question":
        response = ctx.allQuestions[index].question;
        break;
      case "Options":
        let options = [
          ...ctx.allQuestions[index].incorrect_answers,
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

  function renderOptions(itemData) {
    function onOptionPressed() {
      setSelectedOption(itemData.item);
    }
    return (
      <Options
        option={itemData.item}
        onTapped={onOptionPressed}
        selectedOption={selectedOption}
        correctOption={answer}
        optiondisablity={disableOption}
      />
    );
  }

  return (
    <LinearGradient
      colors={["#6C1B8E", "#CB01CB"]}
      style={styles.rootContainer}
    >
      <View>
        <CountDown number={count} />
        <QuestionArea questionNo={questionNO} question={question} />
        <View style={styles.optionsContainer}>
          <FlatList data={options} key={options} renderItem={renderOptions} />
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Submit" onTapped={manualSubmit} />
        </View>
        <View style={styles.loadingContainer}>
          <ProgressLoader
            visible={loadingIconVisibility}
            isModal={true}
            isHUD={true}
            hudColor={"#3C0155"}
            color={"#FFFFFF"}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  optionsContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
