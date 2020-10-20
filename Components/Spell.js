import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Spell = ({ results }) => {
  const icondec = () => {
    if (results.type === "Spell") return "magic";
    else if (results.type === "Charm") return "flask";
    else return "ban";
  };
  return (
    <View style={styles.Container}>
      <FontAwesome name={icondec()} style={styles.IconStyle} color="black" />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.Text1}>{results.spell}</Text>
        <Text style={styles.Text2}>{results.effect}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    marginHorizontal: 10,
    backgroundColor: "#cccccc",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  IconStyle: {
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 5,
  },
  Text1: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "#999999",
    marginBottom: 5,
  },
  Text2: {
    fontSize: 15,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 3,
  },
});
export default Spell;
