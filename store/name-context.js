import { createContext, useState } from "react";

export const participatorName = createContext({
  name: "",
  getEnteredname: (enteredName) => {},
  allQuestions: [],
  setAllQuestions: (responseFromAPI) => {},
});

export default function NameContextProvider({ children }) {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);

  function enteredName(name) {
    setName(name);
  }

  function gettingAllQuestions(receivedResponseFromAPI) {
    setQuestions(receivedResponseFromAPI.results);
  }

  const value = {
    name: name,
    getEnteredname: enteredName,
    allQuestions: questions,
    setAllQuestions: gettingAllQuestions,
  };

  return (
    <participatorName.Provider value={value}>
      {children}
    </participatorName.Provider>
  );
}
