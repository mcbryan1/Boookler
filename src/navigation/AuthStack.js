import React from "react";
import { View } from "react-native";
import TabNavigation from "./TabNavigation";
import Landing from "../views/screens/Landing/Landing";
import { createStackNavigator } from "@react-navigation/stack";
import { colors, dimensions } from "../constants";

const Stack = createStackNavigator();

const options = { headerShown: false };
const categoryOptions = {
  title: "Details",
  headerTitleStyle: {
    fontSize: 23,
    fontFamily: "Bold",
  },
  headerStyle: {
    backgroundColor: colors.cafeNoir,
  },
  headerTintColor: colors.white,
};

const AuthStack = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="landing">
        <Stack.Screen name="landing" component={Landing} options={options} />
        <Stack.Screen name="tabs" component={TabNavigation} options={options} />
      </Stack.Navigator>
    </View>
  );
};

export default AuthStack;
