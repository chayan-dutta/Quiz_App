import { View, TextInput } from "react-native";

export default function Input({ textInputConfig }) {
  return (
    <View>
      <TextInput {...textInputConfig} />
    </View>
  );
}
