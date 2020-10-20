import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Character = ({ results }) => {
  return (
    <View style={styles.Container}>
      <FontAwesome5 name="laugh" style={styles.IconStyle} color="black" />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.Text1}>{results.name}</Text>
        <View style={styles.Container2}>
          <Text style={styles.text3}>House : </Text>
          <Text style={styles.Text2}>
            {results.house != undefined ? results.house : "Unknown"}
          </Text>
        </View>
        <View style={styles.Container2}>
          <Text style={styles.text3}>School : </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.Text2}>
            {results.school != undefined ? results.school : "Unknown"}
          </Text>
        </View>
        <View style={styles.Container2}>
          <Text style={styles.text3}>Blood : </Text>
          <Text style={styles.Text2}>
            {results.bloodStatus != undefined ? results.bloodStatus : "Unknown"}
          </Text>
        </View>
        <View style={styles.Container2}>
          <Text style={styles.text3}>Role : </Text>
          <Text style={styles.Text2}>
            {results.role != undefined ? results.role : "Unknown"}
          </Text>
        </View>
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
    marginHorizontal: 10,
  },
  Text1: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "#999999",
    marginBottom: 10,
  },
  Text2: {
    fontSize: 15,
    textAlign: "center",
    flex: 0.6,
  },
  Container2: {
    flexDirection: "row",
    marginBottom: 5,
  },
  text3: {
    fontSize: 15,
    alignSelf: "center",
    flex: 0.2,
    fontWeight: "bold",
  },
});

export default Character;
