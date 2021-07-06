import { StyleSheet, Dimensions } from "react-native";
import { colors, dimensions } from "../../../constants";

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Bold",
  },
  Image: {
    width: win.width / 2,
    height: win.width / 2,
    resizeMode: "contain",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  mainTextContainer: {
    position: "absolute",
    bottom: 0,
    marginHorizontal: dimensions.margin.lg,
    marginBottom: dimensions.margin.xxxl,
  },
  textContainer: {
    marginBottom: dimensions.margin.xxl,
  },
  textOne: {
    fontFamily: "Bold",
    fontSize: 40,
    color: colors.white,
  },
  textTwo: {
    fontFamily: "Bold",
    fontSize: 40,
    color: colors.blue,
  },
  textThree: {
    fontFamily: "Regular",
    fontSize: 18,
    color: colors.white,
    textTransform: "capitalize",
  },
  googleContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  googleContainerText:{
    fontFamily: "Bold",
    color: colors.white,
    fontSize: 25
  },
  googleButtonViewOne:{
    backgroundColor:"rgba(0, 172, 238, 0.4)",
    height: dimensions.image.md,
    width: dimensions.image.md,
    borderRadius: dimensions.radius.lg,
   justifyContent: 'center',
   alignItems: 'center',
   marginLeft: dimensions.margin.md
  },
  googleButtonViewTwo:{
    backgroundColor:"rgba(0, 172, 238, 0.6)",
    height: dimensions.image.md - 10,
    width: dimensions.image.md - 10,
    borderRadius: dimensions.radius.lg,
    justifyContent: 'center',
    alignItems: 'center'
  },
  googleButtonViewThree:{
    backgroundColor:colors.blue,
    height: dimensions.image.md - 25,
    width: dimensions.image.md - 25,
    borderRadius: dimensions.radius.lg,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    height: dimensions.image.lg - 15,
    width: dimensions.image.lg - 15
  }
});

export default styles;
