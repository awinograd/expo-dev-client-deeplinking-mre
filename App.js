import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Linking, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    Linking.getInitialURL().then(setUrl);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Text>{JSON.stringify({ url })}</Text>
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
