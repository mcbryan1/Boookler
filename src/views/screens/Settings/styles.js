import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    
  },
  image:{
    height: dimensions.image.lg,
    width: dimensions.image.lg,
    borderRadius: dimensions.radius.xl
  },
  profileContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: dimensions.padding.xxl,
  },
  profileName:{
    fontFamily: 'Regular',
    fontSize: dimensions.font.xl,
    marginVertical: dimensions.margin.md,
  },
  profileEmail:{
    color: "#aaa",
    fontFamily: 'SemiBold',
    fontSize: dimensions.font.sm
  },
  preferencesCard:{
    padding: dimensions.padding.md
  },
  preferencesText:{
    fontFamily: 'Regular',
    letterSpacing: 3,
    fontSize: dimensions.font.sm
  },
  darkModeMainContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: dimensions.margin.md,
    marginVertical: dimensions.margin.xl,
    
  },
  darkModeContainer:{
  flexDirection: 'row',
  alignItems: 'center',
  flex: 2,
  },
  darkModeIcon:{
    fontSize: dimensions.font.lg,
    marginRight: dimensions.margin.md
  },
  dackModeText:{
    fontFamily: 'Regular',
    fontSize: 20
  },
  darkMode:{
    borderBottomWidth: .3,
    borderBottomColor: colors.gray,
  }
});

export default styles;
