import React, { useState, useContext } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../../config/themeContext";

const Landing = ({ navigation }) => {
  const theme = useContext(themeContext);

  return (
    <View style={[styles.mainConatiner, { backgroundColor: theme.background }]}>
      <Text style={[styles.text,{ color: theme.color }]}>Landing</Text>
      <Button title="Go To Tabs" onPress={() => navigation.navigate("tabs")} />
    </View>
  );
};

export default Landing;
