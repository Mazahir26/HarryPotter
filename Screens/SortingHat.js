import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import HarryPotter from "../Api/HarryPotter";
import { FontAwesome5 } from "@expo/vector-icons";

const SortingHat = () => {
  const [house, setHouse] = useState("Click Me, And I Shall Sort You");
  const talks = [
    "Hmmm..Intresting",
    "Let's See..",
    "Oh, Very Tough..",
    "You Belong To..",
  ];

  const HRApi = async () => {
    const response = await HarryPotter.get("/sortinghat", {
      params: {
        key: "$2a$10$1sIa9cN/WvobTghXugJeV.JjpSYiFYf/9420gXiqUu5hfXaFLFHri",
      },
    });
    setHouse((response.data + "!").toUpperCase());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SortingHat</Text>
      <View style={styles.heading2}>
        <TouchableOpacity
          onPress={() => {
            setHouse(talks[Math.floor(Math.random() * talks.length)]);
            setTimeout(function () {
              HRApi();
            }, 3000);
          }}
        >
          <FontAwesome5 name="hat-wizard" size={300} color="#dddddd" />
          <Text
            style={{
              alignSelf: "center",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            {house}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#eeeeee",
  },
  heading2: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
    alignSelf: "stretch",
  },
  heading: {
    fontSize: 30,
    marginTop: 50,
    color: "#333333",
    fontWeight: "bold",
  },
});

export default SortingHat;
