import { createContext, useState } from "react";

export const participatorName = createContext({
  name: "",
  getEnteredname: (enteredName) => {},
});

export default function NameContextProvider({ children }) {
  const [name, setName] = useState("");

  function enteredName(name) {
    setName(name);
  }

  const value = {
    name: name,
    getEnteredname: enteredName,
  };

  return (
    <participatorName.Provider value={value}>
      {children}
    </participatorName.Provider>
  );
}
