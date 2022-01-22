import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

// Getting a bit carried away here but I love the names of these analagous colors
// for our logo color
export const GlobalColors = {
    // complementary
    valencia: "#DB3B3B",

    bradyPunch: "#DB8B3B",

    wattle: "#DBDB3B",

    atlantis: "#8BDB3B",

    emerald: "#3BDB3B",

    shamrock: "#3BDB8B",

    lightCoral: "#ff7477",
    pastelPink: "#e69597",
    silverPink: "#ceb5b7",
    powderBlue: "#b5d6d6",
    celeste: "#9cf6f6",

    // tints
    light: "#E46C6C",
    lighter: "#ED9D9D",
    lightest: "#F6CECE",

    // Button color
    lightBlack: "#292929",
    veryLightGrey: "#F4F4F4",
    lightestGrey: "#D5D5D5",
    blueOutline: "#2C69F6",
    lightBlue: "#EFF5FE",
    greenOutline: "#96C746",
    lightGreen: "#FAFDF2",
    darkGrey: "#7B7B7B",
    buttonRed: "#FF4040",
    lightRed: "rgba(254, 61, 60, 0.07)",
};
export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    topSection: {
        flex: 1,
    },
    cardSection: {
        //borderRadius: 30,
        overflow: "hidden",
    },
    columnContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    bottomSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 40,
        zIndex: -1,
    },
    headerText: {
        fontSize: "1.75rem",
        lineHeight: "3.125rem",
        letterSpacing: "0.04em",
        color: "#292C35",
        fontWeight: "500",
        fontFamily: "Gilroy",
        textAlign: "center",
        letterSpacing: 1,
        marginHorizontal: "2.906rem",
        marginTop: "4.375rem",
    },
    //bolden text
    extraBold: {
        fontFamily: "GilroyExtraBold"
    },
    descriptionText: {
        fontFamily: "SFPro",
        fontWeight: "bold",
        fontSize: 16,
        color: GlobalColors.darkGrey,
        paddingLeft: 20,
    },
    subheaderText: {
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: "SFPro",
        paddingLeft: 20,
        paddingVertical: 10,
    },
    subheaderText_smaller: {
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "SFPro",
        paddingLeft: 20,
        paddingVertical: 10,
    },
    bodyText: {
        fontFamily: "Gilroy",
        fontSize: "0.9375rem",
        fontWeight: "500",
        letterSpacing: "0.04rem",
        lineHeight: "1.563rem"
    },
    buttonText: {
        color: "white",
        fontSize: "0.9375rem",
        fontFamily: "GilroyExtraBold",
        letterSpacing: "0.04rem"
    },
    iconBox: {
        height: "3.75rem",
        width: "3.75rem",
        backgroundColor: GlobalColors.lightRed,
        borderRadius: "0.734rem",
        alignItems: "center",
        justifyContent: "center",
    },
    submitButton: {
        borderRadius: "0.5rem",
        width: "13.5rem",
        height: "3.25rem",
        backgroundColor: GlobalColors.buttonRed,
        alignItems: "center",
        justifyContent: "center",
    },
    timeButton: {
        width: 150,
        alignSelf: "center",
    },
    textInput: {
        fontSize: 15,
        fontFamily: "SFPro",
        paddingLeft: 10,
        paddingVertical: 10,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 8,
        placeholderTextColor: "lightgrey",
        backgroundColor: "white",
    },
    errorText: {
        fontSize: 15,
        fontFamily: "SFPro",
        color: "red",
        textAlign: "center",
    },

    infoSection: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: GlobalColors.lightestGrey,
        borderRadius: 7,
        marginHorizontal: 20,
        paddingVertical: 15,
    },

    infoSectionFilled: {
        backgroundColor: GlobalColors.veryLightGrey,
        borderRadius: 7,
        marginHorizontal: 20,
        paddingVertical: 15,
    },
    infoSectionFilledGreen: {
        backgroundColor: GlobalColors.lightGreen,
        borderWidth: 1,
        borderColor: GlobalColors.greenOutline,
        borderRadius: 7,
        marginHorizontal: 20,
        paddingVertical: 15,
    },

    infoSectionFilledBlue: {
        backgroundColor: GlobalColors.lightBlue,
        borderWidth: 1,
        borderColor: GlobalColors.blueOutline,
        borderRadius: 7,
        borderRadius: 7,
        marginHorizontal: 20,
        paddingVertical: 15,
    },
    toggleSwitch: {
        height: 31,
        width: 51
    },
});
