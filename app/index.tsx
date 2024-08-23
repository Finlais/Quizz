import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import translations from "@/constants/data";
import { getRandomInt, get4RandomInt, get4KeysValues } from "@/constants/utils";

export default function HomeScreen() {
  // Copie des données
  const [datas, setDatas] = useState(translations);

  // 4 nombres aléatoires
  const [randoms, setRendoms] = useState<number[]>(
    get4RandomInt(Object.keys(datas).length - 1)
  );

  // Nombre aléatoire
  const [random, setRendom] = useState<number>(getRandomInt(4));

  const [keysValues, setKeysValues] = useState<String[][]>(
    get4KeysValues(datas, randoms)
  );

  // Stockage du résultat
  const [res, setRes] = useState(keysValues[random]);

  const [isTrue, setIsTrue] = useState<(boolean | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const handlePress = (index: number) => {
    const value = keysValues[index][1];
    const array = [false, false, false, false];
    if (value === res[1]) {
      array[index] = true;
    } else {
      keysValues.forEach((item, idx) => {
        if (item[1] === res[1]) array[idx] = true;
      });
    }
    setIsTrue(array);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.key}>{res[0]}</Text>
      <View style={styles.valuesContainer}>
        {keysValues.map((item, index) => (
          <Pressable
            key={index}
            style={[
              styles.pressable,
              isTrue[index] === true && styles.BGGreen,
              isTrue[index] === false && styles.BGRed,
            ]}
            onPress={() => handlePress(index)}
          >
            <View><Text style={styles.value}>{item[1]}</Text></View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BGGreen: {
    backgroundColor: "green",
  },
  BGRed: {
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  valuesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  key: {
    margin: 35,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  pressable: {
    flex: 1,
    width: "90%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  value: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color: "white",
    alignSelf: 'center'
  },
});
