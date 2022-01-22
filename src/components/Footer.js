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
            <View style={[GlobalStyles.columnContainer, {justifyContent: 'center', backgroundColor: '#FFFFFF', borderTopWidth: 1, borderColor: '#D5D5D5'}]}>
                    <TouchableOpacity onPress = {() => navigation.navigate("About")} style={{width: '35%', paddingTop: 30, paddingBottom: 40 }}>
                        <Text style={[ {textAlign: "center"}]}>
                            About
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => navigation.navigate("TOS")} style={{width: '30%', paddingTop: 30, paddingBottom: 40 }}>
                        <Text style={[ {textAlign: "center"}]}>
                            Terms Of Use
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => navigation.navigate("PrivacyPolicy")} style={{width: '35%', paddingTop: 30, paddingBottom: 40 }}>
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
});
