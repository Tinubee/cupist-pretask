import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import { SafeAreaView } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import TopTabs from "./navigation/TopTabs";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const queryClient = new QueryClient();
export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    const imagesToLoad = [require("./assets/icon/main/logo3x.png")];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    await Promise.all([...fonts, ...imagePromises]);
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <SafeAreaView />
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
