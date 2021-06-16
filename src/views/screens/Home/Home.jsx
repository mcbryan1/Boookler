import React, { useContext } from "react";
import { View, Text, LogBox } from "react-native";
import styles from "./styles";
import themeContext from "../../../config/themeContext.js";

LogBox.ignoreAllLogs();

const Home = ({ navigation }) => {
  const theme = useContext(themeContext);
  return (
    <View style={[styles.mainConatiner, { backgroundColor: theme.background }]}>
      <Text style={{color: theme.color}}>Home</Text>
    </View>
  );
};

export default Home;
