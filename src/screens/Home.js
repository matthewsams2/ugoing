
import React from "react";
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import LinearGradient from "react-native-web-linear-gradient";
import Grid from "antd/lib/card/Grid";
import Footer from "../components/Footer"

//Home Screen
export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            {/*Top Section */}
            <View style={[GlobalStyles.topSection, {backgroundColor: '#FFF'}]}>
    
                    {/*First Card/Section */}
                    <View style={[GlobalStyles.cardSection]}>
                        <View style={[styles.titleSection]}>
                            {/*Header*/}
                            <Text style={[GlobalStyles.headerText, {marginTop: "0.04rem", marginBottom: "5.8rem", marginHorizontal: "1.5625rem", fontSize: "2.052rem", lineHeight: "3.125rem"}]}>
                                The world’s fastest{"\n"}
                                {/*Inline Bold Text*/}
                                <Text style={GlobalStyles.extraBold}>Event Organizer</Text>
                            </Text>
                            {/*Icon*/}
                            <Image
                                style={{ width: "17.625rem", height: "10.574rem", margin: '0 auto 0 auto'}}
                                source={require("../assets/HomeIcon-1.png")}
                            />
                            {/*Create Event Button*/}
                            <TouchableOpacity style={[GlobalStyles.submitButton, {marginTop: "5.776rem", marginBottom: "4.6875rem"}]}
                                onPress={() => {
                                    navigation.navigate("Create");
                                }}
                            >
                                <Text style={GlobalStyles.buttonText}>
                                    Create Event
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/*Second Card/Section: "Let's throw a party!" */}
                    <View style={[GlobalStyles.cardSection, {backgroundColor: GlobalColors.lightRed}]}>
                        <View style={[styles.titleSection]}>
                            {/*Header*/}
                            <Text style={[GlobalStyles.headerText, {marginBottom: "0.9375rem"}]}>
                                Let's throw a party!
                            </Text>
                            {/*Body text*/}
                            <Text style={[GlobalStyles.bodyText, {marginBottom: "0.9375rem", marginBottom: "4.75rem", color: "#6F7480", marginHorizontal: "2.906rem"}]}>
                                UGoing creates a free shareable link to your next event that friends can add directly to their calendars
                            </Text>
                            {/*Icon*/}
                            <Image
                                style={{ width: "12.0625rem", height: "12.0625rem", margin: '0 auto 0 auto', marginBottom: "4.6875rem"}}
                                source={require("../assets/Schedule-1.png")}
                            />
                        </View>
                    </View>

                    {/*Third Card/Section: "It's as easy as..."  */}
                    <View style={[GlobalStyles.cardSection]}>
                        <View style={[styles.titleSection]}>
                            {/*Header*/}
                            <Text style={[GlobalStyles.headerText, {marginBottom: "3.4375rem"}]}>
                                It's as easy as...
                            </Text>

                            {/*Icon + pink box. Box styling and dimensions set in iconBox*/}
                            <View style={[GlobalStyles.iconBox]}>
                                <Image
                                    style={{ width: "1.96rem", height: "1.96rem", margin: '0 auto 0 auto'}}
                                    source={require("../assets/Plus-Icon.svg")}
                                />
                            </View>

                            {/*Body text is slightly larger. Has identical spacing and color set in bigBodyText*/}
                            <Text style={[GlobalStyles.bodyText, styles.bigBodyText]}>
                                1. Create your event
                            </Text>

                            {/*Icon + pink box. Box styling and dimensions set in iconBox*/}
                            <View style={[GlobalStyles.iconBox]}>
                                <Image
                                    style={{ width: "1.96rem", height: "1.96rem", margin: '0 auto 0 auto'}}
                                    source={require("../assets/Link-Icon.svg")}
                                />
                            </View>

                            {/*Body text is slightly larger. Has identical spacing and color set in bigBodyText*/}
                            <Text style={[GlobalStyles.bodyText, styles.bigBodyText]}>
                                2. Send the link to your friends
                            </Text>

                            {/*Icon + pink box. Box styling and dimensions set in iconBox*/}
                            <View style={[GlobalStyles.iconBox]}>
                                <Image
                                    style={{ width: "1.96rem", height: "1.96rem", margin: '0 auto 0 auto'}}
                                    source={require("../assets/Calendar-Icon.svg")}
                                />
                            </View>

                            {/*Body text is slightly larger. Has identical spacing and color set in bigBodyText*/}
                            <Text style={[GlobalStyles.bodyText, styles.bigBodyText, {marginHorizontal: "1.3rem", marginBottom: "5.478rem"}]}>
                                3. View the details online or add them{"\n"}to your calendar with a single tap
                            </Text>
                            
                        </View>
                    </View>

                    {/*Fourth Card/Section: "One link to rule them all"  */}
                    <View style={[GlobalStyles.cardSection, {backgroundColor: GlobalColors.lightBlack}]}>
                    
                        <View style={[styles.titleSection]}> 
                            {/*Header*/}
                            <Text style={[GlobalStyles.headerText, {marginBottom: "0.9375rem", color: "white", lineHeight: "2.0625rem"}]}> {/*  15px bottom /16=.9375 */}
                                One link to rule{"\n"}them all
                            </Text>

                            <Text style={[GlobalStyles.bodyText, {marginBottom: "1.875rem", color: "white", marginHorizontal: "2.906rem"}]}>
                            Details get burried easily in the group chat. Instead of re-typing your event details each time, send a link
                            </Text>
                        
                            <View style={[GlobalStyles.columnContainer, {marginBottom: "2.25rem"}]}>
                                
                                <View style={[GlobalStyles.imageContainer, styles.iconSpacing]}>
                                    {/*Calendar icon*/}
                                    <Image  
                                        style={[styles.iconFormatting, { width: "1.75rem", height: "1.75rem", }]}
                                        source={require("../assets/Calendar-small.svg")}
                                    />
                                </View>
                                <View style={[GlobalStyles.imageContainer, styles.iconSpacing]}>
                                    {/*Mail icon*/}
                                    <Image 
                                        style={[styles.iconFormatting, { width: "1.89rem", height: "1.5131rem", }]}
                                        source={require("../assets/Mail-small.svg")}
                                    />
                                </View>
                                <View style={[GlobalStyles.imageContainer, styles.iconSpacing]}>
                                    {/*SMS icon*/}
                                    <Image
                                        style={[styles.iconFormatting, { width: "1.875rem", height: "1.75rem", }]}
                                        source={require("../assets/SMS-small.svg")}
                                    />
                                </View>
                                <View style={[GlobalStyles.imageContainer, styles.iconSpacing]}>
                                    {/*Facebook icon*/}
                                    <Image
                                        style={[styles.iconFormatting, { width: "1.703rem", height: "1.703rem", }]}
                                        source={require("../assets/Facebook-small.svg")}
                                    />
                                </View>
                            </View>

                            {/*  Adding text convo image*/}
                            <Image
                                style={{width:"20.3125rem", height:"25.0625rem", margin: "0 auto 0 auto"}}
                                source={require("../assets/text-convo.png")}
                            >
                                
                            </Image>
                        </View>
                    </View>


                    {/*Fifth Card/Section: "Right into their calendar" */}
                    <View style={[GlobalStyles.cardSection, {backgroundColor: GlobalColors.white}]}>
                        <View style={[styles.titleSection]}>
                            {/*Header*/}
                            <Text style={[GlobalStyles.headerText, {marginBottom: "1.875rem"}]}>
                                    Right into their Calendar
                            </Text>
                                    
                            {/*  Adding multiple calendar image*/}
                            <Image
                                style={{width:"9.1875rem", height:"6.6875rem", margin: "0 auto 0 auto", marginBottom: "1.875rem"}}
                                source={require("../assets/calendar-multiple.png")}
                            >  
                            </Image>


                            {/*Body text*/}
                            <Text style={[GlobalStyles.bodyText, {marginBottom: "4.75rem", color: "#6F7480", marginHorizontal: "2.906rem"}]}>
                                UGoing lets you add events directly into your preferred calendar.
                                {'\n'}
                                {'\n'}
                                No more digging through messages or forgotten reminders - Everything you need to know front and center where you expect it
                            </Text>
                        </View>
                    </View>


                    {/*sixth: Tile Section */}
                    <View style={[GlobalStyles.tileSection, GlobalStyles.tileShadow, GlobalStyles.commonHorizontalMargin, styles.titleSection, {backgroundColor: GlobalColors.white}]}>
                        <Text style={[GlobalStyles.headerText, {marginBottom: "3rem"}]}>
                            And it’s all free!
                        </Text>

                        <Text style={[GlobalStyles.bodyText, {marginBottom: "4.75rem", color: GlobalColors.lightBlack, marginHorizontal: "2.906rem", textAlign: "center", marginBottom: "4.5625rem"}]}>
                            Create as many events as you want
                            {'\n'}
                            Free to create events
                            {'\n'}
                            Free for your guests
                        </Text>

                        {/*Create Event Button*/}
                        <TouchableOpacity style={[GlobalStyles.submitButton, {marginBottom: "3.125rem"}]}
                            onPress={() => {
                                navigation.navigate("Create");
                            }}
                        >
                            <Text style={[GlobalStyles.buttonText, {width: "11.75rem"}]}>
                                Create Event
                            </Text>
                        </TouchableOpacity>
                    </View>

            
                </View>
            
            <Footer homepage="True" publish = "False"></Footer>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
    },
    titleSection: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    createSection: {
        alignItems: "center",
        justifyContent: "center",
    },
    bigBodyText: {
        color: "#292C35",
        fontSize: "1.125rem",
        marginTop: "1.633rem",
        marginBottom: "3.125rem",
        lineHeight: "2.063rem"
    },
    createEventSection: {
        alignItems: "center",
        justifyContent: "center",
    },
    linearGradient: {
        height: "40%",
    },
    calendarImage: {
        position: "absolute",
        right: 0,
        top: 261,

        height: 198,
        width: 126,
    },
    columnContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rowContainer: {
        justifyContent: "space-evenly",
    },
    iconFormatting: {   
        margin: '0 auto 0 auto',        
        opacity: 0.5,
    },
    iconSpacing: {
        marginHorizontal: "0.625rem",      
    },

    sticky: {
        position: "fixed", 
        top: 0, 
        width: "100%"
    }
});
