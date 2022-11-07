import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home";
import Live from "../screens/Live";
import Around from "../screens/Around";
import styled from "styled-components/native";
import EditProfile from "../screens/EditProfile";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Logo = styled.Image`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Glam"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Logo
              resizeMode="contain"
              source={require("../assets/icon/main/logo3x.png")}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name="근처" component={Around} />
      <Tab.Screen name="라이브" component={Live} />
      <Tab.Screen
        name="Profile"
        component={EditProfile}
        options={{
          tabBarIcon: () => (
            <Logo
              resizeMode="contain"
              source={require("../assets/icon/main/setting3x.png")}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabs;
