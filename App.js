import React from "react";
import { AppNavigator } from "./src/navigation/Navigation.js";
import { useFonts } from "expo-font";

function App() {
    const [loaded] = useFonts({
        SFPro: require("./assets/fonts/SF-Pro.ttf"),
        Mako: require("./assets/fonts/Mako-Regular.ttf"),
        Limelight: require("./assets/fonts/Limelight-Regular.ttf"),
        Gilroy: require("./assets/fonts/Gilroy-Regular.ttf"),
        GilroyBold: require("./assets/fonts/Gilroy-Bold.ttf"),
        GilroyExtraBold: require("./assets/fonts/Gilroy-ExtraBold.ttf")
    });
    if (!loaded) {
        return null;
    }
    return <AppNavigator />;
}
export default App;
