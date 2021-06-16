import React, { useState, useEffect } from "react";
import StackNavigation from "./AuthStack";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { EventRegister } from "react-native-event-listeners";
import { colors } from "../constants";
import themeContext from "../config/themeContext";
import theme from "../config/theme";

const navigationRef = React.createRef();
const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const Root = () => {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  const MyDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#fff',
    },
  };

  const MyDarkTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#192734',
    },
  };
  return (
    <themeContext.Provider value= {mode === true ? theme.dark : theme.light} >
      <NavigationContainer ref={navigationRef}  theme= {mode === true ? MyDarkTheme : MyDefaultTheme}>
        <StackNavigation navigate={navigate} />
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default Root;
