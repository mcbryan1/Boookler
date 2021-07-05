import React from "react";
import { colors } from "../constants";
import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../views/screens/Home/Home";
import Settings from "../views/screens/Settings/Settings";
import Bookmarks from "../views/screens/Bookmarks/Bookmarks";
import theme from "../config/theme";

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="Home"
      activeColor="#00acee"
      inactiveColor="#aaa"
      barStyle={{
        borderTopWidth: 0.4,
        borderTopColor: "#E6E6FA",
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="bookmarks"
        component={Bookmarks}
        options={{
          tabBarLabel: "Bookmarks",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="more"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "ios-settings" : "ios-settings-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
