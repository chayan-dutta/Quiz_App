import * as Network from "expo-network";
import { Alert } from "react-native";

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

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
