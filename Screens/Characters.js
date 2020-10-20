import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Searchbar from "../Components/searchbar";
import HarryPotter from "../Api/HarryPotter";
import Character from "../Components/charater";

const Characters = () => {
  const [term, setTerm] = useState("");
  const [data, setData] = useState([]);
  const [searchdata, setSearchdata] = useState([]);

  const HRApi = async () => {
    const response = await HarryPotter.get("/characters", {
      params: {
        key: "$2a$10$1sIa9cN/WvobTghXugJeV.JjpSYiFYf/9420gXiqUu5hfXaFLFHri",
      },
    });
    setData(response.data);
    setSearchdata(response.data);
  };

  const filter = (value) => {
    let searchresults = data.filter((tem) => {
      return tem.name.toLowerCase().match(value.toLowerCase());
    });
    setSearchdata(searchresults);
  };

  useEffect(() => {
    HRApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Characters</Text>
      <View
        style={{
          alignSelf: "stretch",
        }}
      >
        <Searchbar
          term={term}
          onTermChange={(newterm) => {
            setTerm(newterm);
            filter(newterm);
          }}
          onTermSubmit={() => {
            filter(term);
          }}
        />
        <FlatList
          data={searchdata}
          keyExtractor={(result, index) => result.id + `${index}`}
          renderItem={({ item }) => {
            return <Character results={item} />;
          }}
        />
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
  heading: {
    fontSize: 30,
    marginTop: 50,
    color: "#333333",
    fontWeight: "bold",
  },
});

export default Characters;
