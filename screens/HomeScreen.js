import { useContext } from "react";
import { Button, Text, View } from "react-native";

import Input from "../components/Input";
import { participatorName } from "../store/name-context";

export default function HomeScreen() {
  const enteredNameCtx = useContext(participatorName);

  function onInputChangedHandler(enteredText) {
    enteredNameCtx.getEnteredname(enteredText);
  }

  function getParticipatorName() {
    console.log(enteredNameCtx.name);
  }

  return (
    <>
      <View>
        <Text>Logo Here</Text>
      </View>
      <View>
        <Text>Hi, Welcome to Quizificate! Enter your name to get started.</Text>
        <Input
          textInputConfig={{
            autoCapitalize: "words",
            multiline: false,
            onChangeText: onInputChangedHandler,
          }}
        />
        <Button title="Get Name" onPress={getParticipatorName} />
      </View>
    </>
  );
}
