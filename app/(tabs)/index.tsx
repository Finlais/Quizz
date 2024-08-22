import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import translations from "@/constants/data";
import { getRandomInt, get4RandomInt, objectKeyValue } from "@/constants/utils";

export default function HomeScreen() {
  const [number, setNumber] = useState<number[]>(
    get4RandomInt(translations.length - 1)
  );

  const obj = translations[number[0]];

  const [key, setKey] = useState(objectKeyValue(obj)[0]);
  const [result, setValue] = useState(objectKeyValue(obj)[1]);

  const [isTrue, setIsTrue] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.key}>{key}</Text>
      <View style={styles.valuesContainer}>
        <Button title={result}
          
          onPress={() => {
            setIsTrue(true);
          }}
        />
        <Text style={styles.value} onPress={() => {}}>
          test
        </Text>
      </View>
      <View style={styles.valuesContainer}>
        <Text style={styles.value} onPress={() => {}}>
          test
        </Text>
        <Text style={styles.value} onPress={() => {}}>
          test
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BGGreen: {
    backgroundColor: "green",
  },
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  valuesContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  key: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  value: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    color: "white",
  },
});
