import React, { useState, useContext } from "react";
import { View, Text, Switch } from "react-native";
import styles from './styles.js'
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../../config/themeContext";

const More = () => {
  const [mode, setMode] = useState(false);
  const theme = useContext(themeContext);
  return (
   
   <View style={[styles.mainConatiner, { backgroundColor: theme.background }]}>
      <Text style={{color: theme.color}}>Toggle Dark Mode</Text>
      <Switch
        value={mode}
        style={{ marginVertical: 20, color: "#000" }}
        onValueChange={(value) => {
          setMode(value);
          EventRegister.emit("changeTheme", value);
        }}
      />
    </View>
  );
};

export default More;
