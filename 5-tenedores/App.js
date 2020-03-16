import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Loading from "./Loading.js";

export default function App() {
  const [isLoading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text>hola mundo</Text>
      {isLoading === true && <Loading />}
      <Button title="Actualizar" onPress={() => setLoading(true)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
