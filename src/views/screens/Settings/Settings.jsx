import React, { useState, useContext } from "react";
import { View, Text, Switch, Image, ScrollView } from "react-native";
import styles from "./styles";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../../config/themeContext";
import pp from "../../../../assets/mypic.jpg";
import { Feather, Fontisto } from "@expo/vector-icons";

const More = () => {
  const [mode, setMode] = useState(false);
  const theme = useContext(themeContext);
  return (
    <View style={[styles.mainConatiner, { backgroundColor: theme.background }]}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <Image source={pp} style={styles.image} />
          <Text style={[styles.profileName, { color: theme.color }]}>
            Solomon McBryan
          </Text>
          <Text style={styles.profileEmail}>solomonmcbryan@gmail.com</Text>
        </View>
        <View style={[styles.preferencesCard, { backgroundColor: theme.card }]}>
          <Text style={[styles.preferencesText, { color: theme.color }]}>
            Preferences
          </Text>
        </View>
        <View style={styles.darkMode}>
          <View style={styles.darkModeMainContainer}>
            <View style={styles.darkModeContainer}>
              <Feather
                name="moon"
                style={[styles.darkModeIcon, { color: theme.color }]}
              />
              <Text style={[styles.dackModeText, { color: theme.color }]}>
                Dark Mode
              </Text>
            </View>
            <View style={styles.switchContainer}>
              <Switch
                trackColor={{ false: "#000", true: "#00acee" }}
                value={mode}
                onValueChange={(value) => {
                  setMode(value);
                  EventRegister.emit("changeTheme", value);
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default More;
