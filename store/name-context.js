import { createContext, useState } from "react";

export const participatorName = createContext({
  name: "",
  getEnteredname: (enteredName) => {},
  allQuestions: [],
  setAllQuestions: (responseFromAPI) => {},
  score: 0,
  setTotalScore: (score, totalNoOfQuestion) => {},
});

export default function NameContextProvider({ children }) {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [totalPsScore, setTotalPsScore] = useState(0);

  function enteredName(name) {
    setName(name);
  }

  function gettingAllQuestions(receivedResponseFromAPI) {
    setQuestions(receivedResponseFromAPI.results);
  }

  function setTotalScore(score, totalNoOfQuestion) {
    const percentage = (score / totalNoOfQuestion) * 100;
    setTotalPsScore(percentage);
    console.log("Percent", totalPsScore);
  }

  const value = {
    name: name,
    getEnteredname: enteredName,
    allQuestions: questions,
    setAllQuestions: gettingAllQuestions,
    score: totalPsScore,
    setTotalScore: setTotalScore,
  };

  return (
    <participatorName.Provider value={value}>
      {children}
    </participatorName.Provider>
  );
}
