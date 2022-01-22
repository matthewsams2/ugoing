import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";

class Footer extends React.Component {
    render() {
        return (
            /*Footer Container*/
            <View style={[GlobalStyles.columnContainer, styles.footerContainer]}>
                    {/*About Button*/}
                    <TouchableOpacity onPress = {() => navigation.navigate("About")} style={styles.buttonLayout}>
                        <Text style={[ {textAlign: "center"}]}>
                            About
                        </Text>
                    </TouchableOpacity>
                    {/*TOS Button*/}
                    <TouchableOpacity onPress = {() => navigation.navigate("TOS")} style={styles.buttonLayout}>
                        <Text style={[ {textAlign: "center"}]}>
                            Terms Of Use
                        </Text>
                    </TouchableOpacity>
                    {/*Privacy Policy Button*/}
                    <TouchableOpacity onPress = {() => navigation.navigate("PrivacyPolicy")} style={styles.buttonLayout}>
                        <Text style={[ {textAlign: "center"}]}>
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>
            </View>
        )
    }
    
}

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        justifyContent: "center", 
        backgroundColor: "#FFF", 
        borderTopWidth: 1, 
        borderColor: "#D5D5D5"
    },
    buttonLayout: {
        width: "35%",
        paddingTop: "1.875rem",
        paddingBottom: "2.5rem" 
    }
});
