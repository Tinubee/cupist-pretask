import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function TabIcon({ iconName, color, focused }: any) {
  return (
    <Ionicons
      name={focused ? iconName : `${iconName}-outline`}
      color={color}
      size={28}
    />
  );
}
