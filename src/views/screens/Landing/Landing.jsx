import React, { useState, useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "./styles";
import themeContext from "../../../config/themeContext";
import bg from "../../../../assets/images/landing.jpg";
import logo from '../../../../assets/images/logo.png'
import { Feather } from "@expo/vector-icons";

const Landing = ({ navigation }) => {
  const theme = useContext(themeContext);

  return (
    <ImageBackground
      source={bg}
      style={StyleSheet.absoluteFillObject}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay}>
        <View>
          <Image source={logo} style={styles.logo}/>
        </View>
        <View style={styles.mainTextContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textOne}>Find Your Next</Text>
            <Text style={styles.textTwo}>Great Read!</Text>
            <Text style={styles.textThree}>
              We've got brand new books you will love
            </Text>
          </View>
          <View style={styles.googleContainer}>
            <Text style={styles.googleContainerText}>Continue With Google</Text>
            <TouchableOpacity onPress={() => navigation.navigate('tabs')}>
              <View style={styles.googleButtonViewOne}>
                <View style={styles.googleButtonViewTwo}>
                  <View style={styles.googleButtonViewThree}>
                    <Feather name="arrow-right" size={24} color="white" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Landing;
