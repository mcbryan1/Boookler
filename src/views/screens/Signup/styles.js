import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: dimensions.padding.lg,
  },

  headerContainer: {
    flex: 3,
    justifyContent: "center",
  },
  headerContainerText: {
    fontFamily: "SemiBold",
    fontSize: dimensions.font.xxl,
  },
  textInputContainer: {
    flex: 6,
    justifyContent: "center",
  },
  otherLinkContainer: {
    flex: 1,
  },

  inputField: {
    backgroundColor: colors.card,
    padding: dimensions.padding.md,
    marginVertical: dimensions.margin.sm,
    borderRadius: dimensions.radius.xs,
    fontFamily: "Regular",
  },

  signinContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: dimensions.margin.xl
  },
  signinContainerText: {
    fontFamily: "Bold",
    fontSize: dimensions.font.lg,
    flex: 5,
  },
  signinButtonViewOne: {
    backgroundColor: "rgba(0, 172, 238, 0.4)",
    height: dimensions.image.md,
    width: dimensions.image.md,
    borderRadius: dimensions.radius.lg,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: dimensions.margin.md,
  },
  signinButtonViewTwo: {
    backgroundColor: "rgba(0, 172, 238, 0.6)",
    height: dimensions.image.md - 10,
    width: dimensions.image.md - 10,
    borderRadius: dimensions.radius.lg,
    justifyContent: "center",
    alignItems: "center",
  },
  signinButtonViewThree: {
    backgroundColor: colors.blue,
    height: dimensions.image.md - 25,
    width: dimensions.image.md - 25,
    borderRadius: dimensions.radius.lg,
    justifyContent: "center",
    alignItems: "center",
  },

  otherLinkText:{
      fontFamily: 'Regular',
      fontSize: dimensions.font.md,
      borderBottomColor: colors.gray,
      borderBottomWidth: 1,
      alignSelf: 'flex-start'
  }
});

export default styles;
