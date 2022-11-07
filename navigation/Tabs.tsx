import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Live from "../screens/Live";
import Heart from "../screens/Heart";
import Chats from "../screens/Chats";
import TabIcon from "../components/TabIcon";
import TopTabs from "./TopTabs";
import Profile from "../screens/Profile";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={TopTabs}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <TabIcon iconName={"home"} color={color} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Live"
      component={Live}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <TabIcon iconName={"tv"} color={color} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Heart"
      component={Heart}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <TabIcon iconName={"heart"} color={color} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Chats"
      component={Chats}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <TabIcon iconName={"chatbubble"} color={color} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <TabIcon iconName={"person"} color={color} focused={focused} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
