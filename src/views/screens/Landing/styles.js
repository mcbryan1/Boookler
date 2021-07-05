import { useContext } from "react";
import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";
import themeContext from "../../../config/themeContext";
import theme from "../../../config/theme";


const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 text:{
     fontFamily: 'Bold'
 }
});

export default styles;
