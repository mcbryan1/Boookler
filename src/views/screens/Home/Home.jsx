import React from "react";
import { View, Text, LogBox } from "react-native";

LogBox.ignoreAllLogs();

const Home = ({ navigation }) => {
  return (
    <View style={styles.mainConatiner}>
     <Text>Home</Text>
    </View>
  );
};

export default Home;
