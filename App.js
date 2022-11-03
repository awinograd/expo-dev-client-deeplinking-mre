import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as SplashScreen from "expo-splash-screen";
console.log("App.js");

SplashScreen.hideAsync();

export default function App() {
  console.log("App");
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
