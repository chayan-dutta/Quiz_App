import * as Network from "expo-network";
import { Alert } from "react-native";
import axios from "axios";

export async function checkInternetConnection() {
  const airplaneModeEnabled = await Network.isAirplaneModeEnabledAsync();
  if (!airplaneModeEnabled) {
    const networkState = await Network.getNetworkStateAsync();
    return networkState;
  } else {
    Alert.alert(
      "Airplane Mode is Enabled",
      "Please turn off airplane mode to start the quiz"
    );
    return false;
  }
}

export function FetchAPI(categoryValue, noOfQuestion) {
  const url = `https://opentdb.com/api.php?amount=${noOfQuestion}&category=${categoryValue}&difficulty=easy&type=multiple`;
  axios.get(url).then((response) => {
    console.log(response);
  });
}
