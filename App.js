import * as React from "react";
import { Text, View, StyleSheet, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Sortinghat from "./Screens/SortingHat";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Spells from "./Screens/Spells";
import Characters from "./Screens/Characters";

function HomeScreen(props) {
  return (
    <View style={About_Styles.container}>
      <Text style={About_Styles.heading}>About</Text>
      <Text style={About_Styles.heading2}>
        This a Simple Harry Potter Fans App, You can find most of the Characters
        and Spells from the Movies and Books.
      </Text>
      <Text style={About_Styles.heading2}>
        This App was made in react-native, with the help of 2 Api's
      </Text>
      <Text
        style={{
          borderBottomWidth: 1,
          borderColor: "gray",
          marginTop: 10,
          fontStyle: "italic",
          fontSize: 16,
        }}
        onPress={() => Linking.openURL("https://www.potterapi.com/")}
      >
        PotterApi
      </Text>
      <Text
        style={{
          borderBottomWidth: 1,
          borderColor: "gray",
          marginTop: 10,
          fontStyle: "italic",
          fontSize: 16,
        }}
        onPress={() => Linking.openURL("https://hp-api.herokuapp.com/")}
      >
        HP-Api
      </Text>
      <Text style={About_Styles.heading2}>Hope you like it, Have Fun.</Text>
      <Text style={{ marginTop: 50, fontWeight: "bold", fontSize: 18 }}>
        Made With {<Ionicons name="md-heart" size={18} color="red" />} in India
      </Text>
    </View>
  );
}
const About_Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#eeeeee",
  },
  heading2: {
    fontSize: 18,
    marginHorizontal: 20,
    alignItems: "center",
    alignSelf: "stretch",
    textAlign: "center",
    marginTop: 30,
  },
  heading: {
    fontSize: 30,
    marginTop: 50,
    color: "#333333",
    fontWeight: "bold",
    marginBottom: 60,
  },
});
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        headerMode="none"
        initialRouteName="Sortinghat"
        shifting={true}
        activeColor="#ced4da"
        inactiveColor="#464646"
      >
        <Tab.Screen
          options={{
            tabBarColor: "#666666",
            tabBarIcon: ({ color }) => {
              return <Ionicons name="md-people" size={24} color={color} />;
            },
          }}
          name="Characters"
          component={Characters}
        />
        <Tab.Screen
          options={{
            tabBarColor: "#666666",
            tabBarIcon: ({ color }) => {
              return <FontAwesome5 name="hat-wizard" color={color} size={24} />;
            },
          }}
          name="Sorting Hat"
          component={Sortinghat}
        />
        <Tab.Screen
          options={{
            tabBarColor: "#666666",
            tabBarIcon: ({ color }) => {
              return <Ionicons name="ios-flask" size={24} color={color} />;
            },
          }}
          name="Spells"
          component={Spells}
        />
        <Tab.Screen
          options={{
            tabBarColor: "#555555",
            tabBarIcon: ({ color }) => {
              return (
                <Ionicons
                  name="ios-information-circle-outline"
                  size={24}
                  color={color}
                />
              );
            },
          }}
          name="About"
          component={HomeScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const tabstyle = {};
