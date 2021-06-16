import React from "react";
import { colors } from "../constants";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../views/screens/Home/Home";
import More from "../views/screens/More/More";
import Bookmarks from '../views/screens/Bookmarks/Bookmarks'


const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#4D2D13"
      inactiveColor="#D1B59F"
      
      barStyle={{ backgroundColor: colors.white }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="bookmarks"
        component={Bookmarks}
        options={{
          tabBarLabel: "Bookmarks",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="more"
        component={More}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color }) => (
            <Entypo name="squared-plus" size={24} color={color} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default TabNavigation;
