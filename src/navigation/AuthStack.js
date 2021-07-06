import React from "react";
import { View } from "react-native";
import TabNavigation from "./TabNavigation";
import Landing from "../views/screens/Landing/Landing";
import Signin from "../views/screens/Signin/Signin"
import Signup from "../views/screens/Signup/Signup"
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

const AuthStack = ({auth}) => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="landing">
        <Stack.Screen name="landing" component={Landing} options={options} />
        <Stack.Screen name="signin" component={Signin} options={options} />
        <Stack.Screen name="signup" component={Signup} options={options} />
        <Stack.Screen name="tabs" component={TabNavigation} options={options} />
      </Stack.Navigator>
    </View>
  );
};

export default AuthStack;
