import React from "react";
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";

var logoimg = document.createElement("logo-img");
logoimg.src = "../assets/UGoing_Logo.png"

class Footer extends React.Component {
    render() {
        return (
            /*Footer Container for Event Creation (i.e. condensed) */
            <View style={[GlobalStyles.cardSection, styles.footerContainer, {backgroundColor: "white"}]}>
               <View style={[GlobalStyles.cardSection, styles.footerContainer, {borderWidth: 1, borderColor:'#FE3D3C', borderLeftColor: 'white', borderRightColor: 'white', borderBottomColor:'white'}]}>         
                    
                    {this.props.publish == "True" &&
                    <Text style={[GlobalStyles.bodyText, {paddingTop: "2.5rem", paddingBottom: "2.5rem", textAlign: "center", color: "lightBlack", fontSize: 15}]}>
                        About Us
                    </Text>
                    }

                    <View style={[GlobalStyles.columnContainer, {backgroundColor: '#FE3D3C', paddingTop: "0.9375rem", paddingBottom: "0.9375rem", }]}>

                        <View></View>
                        {this.props.homepage == "False" &&
                        <Image
                            style={{width:"5.25rem", height:"1.6875rem", marginLeft: "1.5625rem"}}
                            source={require("../assets/UGoing_Logo_w.png")}
                            > 
                        </Image>
                        }
                        <Text style={[GlobalStyles.bodyText, {marginRight: "1.5625rem", textAlign: "center", color: "white", fontSize: 12}]}>
                             UGoing™ 2022. All rights reserved.
                        </Text>   
                        <View></View>

                    </View>   

                </View>

            </View>
        )
    }
    
}


export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        justifyContent: "center", 
        backgroundColor: "white", 
        borderTopWidth: 1, 
        borderColor: "#D5D5D5"
    },
    buttonLayout: {
        width: "35%",
        paddingTop: "1.875rem",
        paddingBottom: "2.5rem" 
    }
});



/*

class Footer extends React.Component {
    render() {
        return (
            /*Footer Container*
            <View style={[GlobalStyles.columnContainer, styles.footerContainer]}>
                    {/*About Button*}
                    <TouchableOpacity onPress = {() => navigation.navigate("About")} style={styles.buttonLayout}>
                        <Text style={[ {textAlign: "center"}]}>
                            About
                        </Text>
                    </TouchableOpacity>
                    {/*TOS Button*}
                    <TouchableOpacity onPress = {() => navigation.navigate("TOS")} style={styles.buttonLayout}>
                        <Text style={[ {textAlign: "center"}]}>
                            Terms Of Use
                        </Text>
                    </TouchableOpacity>
                    {/*Privacy Policy Button*}
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


*/