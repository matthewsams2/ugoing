import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Clipboard,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import { fs } from "../Firebase/firebase";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
// The below import isn't working for me -- setString fails
//import Clipboard from "@react-native-community/clipboard";
import { ShareComponent } from "../components/ShareComponent";

// route.params - eventID to event
export const PublishPost = ({ route, navigation }) => {
    //console.log("passed info is " + JSON.stringify(route.params));
    const [eventDetails, setEventDetails] = useState({});
    const [url, setURL] = useState("");

    const { eventID } = route.params;

    const [toggleAboutText, setToggleAboutText] = useState({});

    useEffect(() => {
        if (eventID == "") {
            console.log("route params not found");
            return;
        }
        var docRef = fs.collection("events").doc(eventID);
        //var docRef = fs.collection('events').doc("cks0i7SlWYGD8Vy4Cr8z");

        docRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setEventDetails(doc.data());
                    setURL(`ugoing.us/u/${eventID}`);
                } else {
                    console.log(
                        "ERROR: Document with eventID " +
                            route.params +
                            " not found!"
                    );
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [route.params?.eventID]);

    const toggleAboutTextLength = () => {
        setToggleAboutText(!toggleAboutText)
    }

    const getTitleSection = () => {
        // check to make sure firebase data exists
        if (!eventDetails || !eventDetails.eventName) {
            return <View></View>;
        }

        return (
            <View style={styles.eventTitleSection}>
                <Text style={GlobalStyles.subheaderText}>
                    {eventDetails.eventName}
                </Text>

                <TouchableOpacity
                    style={{
                        paddingRight: 20,
                        justifyContent: "center",
                    }}
                    onPress={() => {
                        // navigate to actual event
                    }}
                >
                    <Text
                        style={{
                            textDecorationLine: "underline",
                            fontSize: 15,
                        }}
                    >
                        view event
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    const getCongratsSection = () => {
        return (
            <View style={GlobalStyles.infoSection}>
                <Text style={GlobalStyles.subheaderText_smaller}>
                    Congratulations 👏🎉
                </Text>
                <Text style={GlobalStyles.bodyText}>
                    You’ve just published{" \n"}
                </Text>
                <Text
                    style={[
                        GlobalStyles.bodyText,
                        {
                            fontWeight: "bold",
                            paddingLeft: 0,
                            textAlign: "center",
                        },
                    ]}
                >
                    {eventDetails.eventName}!
                </Text>
                <Text style={GlobalStyles.bodyText}>
                    Click below to share details with friends:{" "}
                </Text>
            </View>
        );
    };

    const getEventCard = () => {
        return (
            <View style={[GlobalStyles.tileSection, GlobalStyles.eventTileShadow, GlobalStyles.commonHorizontalMargin, {backgroundColor: "white"}]}>
                <View style={GlobalStyles.commonMargin}>
                    <View>
                        <Text style={[GlobalStyles.eventText, GlobalStyles.eventTextBig, GlobalStyles.extraBold, {marginBottom: "0.934rem"}]}>
                            {eventDetails.eventName}
                        </Text>
                        <View style={[styles.eventTextAndIcons, {marginBottom: "0.5rem"}]}>
                            <Image 
                                style={{width:"0.8125rem", height:"0.8125rem", margin: "auto auto auto auto"}}
                                source={require("../assets/EventOrganizer-Icon.svg")}
                            />  
                            <Text style={[GlobalStyles.bodyText, GlobalStyles.eventTextMedium, GlobalStyles.semiBold,{color: GlobalColors.standardRed, alignItems: "center"}]}>
                                    
                                {' '}{eventDetails.organizerName}
                            </Text>
                        </View>
                        <View style={[styles.eventTextAndIcons, {marginBottom: "0.5rem"}]}>
                            <Image 
                                style={{width:"0.8125rem", height:"0.8125rem", margin: "auto auto auto auto"}}
                                source={require("../assets/EventPhone-Icon.svg")}
                            />  
                            <Text style={[GlobalStyles.bodyText, GlobalStyles.eventTextMedium, GlobalStyles.semiBold, {color: GlobalColors.standardRed, alignItems: "center"}]}>
                                    
                                {' '}{eventDetails.phoneNumber}
                            </Text>
                        </View>
                    </View>
                    <View style={[GlobalStyles.greyLine, styles.lineStyling]}> </View>
                    <View>
                        <View style={[styles.eventTextAndIcons, {marginBottom: "0.75rem"}]}>
                            <Image 
                                style={{width:"0.8125rem", height:"0.8125rem", margin: "auto auto auto auto"}}
                                source={require("../assets/EventCalendar-Icon.svg")}
                            />  
                            <Text style={[GlobalStyles.bodyText, GlobalStyles.eventTextMedium, GlobalStyles.semiBold, {color: GlobalColors.lightGrey, alignItems: "center", paddingTop: "0.17rem"}]}>
                                    
                                {' '}{'Date'}
                            </Text>
                        </View>
                        <View style={[styles.eventDateText, {marginBottom: "0.75rem"}]}>
                            <Text style={[GlobalStyles.bodyText, GlobalStyles.eventTextMedium, GlobalStyles.semiBold, {color: GlobalColors.standardRed, alignItems: "center"}]}>
                                    
                                {moment(eventDetails.startDate).format('MMM DD hh:mm a')}
                            </Text>
                            <Text style={[GlobalStyles.bodyText, GlobalStyles.eventTextMedium, {alignItems: "center"}]}>
                                    
                                {'To'}
                            </Text>
                            <Text style={[GlobalStyles.bodyText, GlobalStyles.eventTextMedium, GlobalStyles.semiBold, {color: GlobalColors.standardRed, alignItems: "center"}]}>
                                    
                                {moment(eventDetails.endDate).format('MMM DD hh:mm a')}
                            </Text>
                        </View>
                    </View>
                    <View style={[GlobalStyles.greyLine, styles.lineStyling, ]}> </View>
                    <View>
                        <View style={[styles.eventTextAndIcons, {marginBottom: "0.75rem"}]}>
                            <Image 
                                style={{width:"0.8125rem", height:"0.8125rem", margin: "auto auto auto auto"}}
                                source={require("../assets/EventLocation-Icon.svg")}
                            />  
                            <Text style={[GlobalStyles.bodyText, GlobalStyles.eventTextMedium, GlobalStyles.semiBold, {color: GlobalColors.lightGrey, alignItems: "center", paddingTop: "0.17rem"}]}>
                                    
                                {' '}{'Location'}
                            </Text>
                        </View>
                        <Text style={[GlobalStyles.bodyText, GlobalStyles.eventTextMedium, , {color: GlobalColors.lightBlack, alignItems: "center", marginBottom: "0.625rem", textDecorationLine: 'underline'}]}>
                            {eventDetails.eventLocation == '' ? 'Event Location' : eventDetails.eventLocation}
                        </Text>
                        <Text style={[GlobalStyles.bodyText, GlobalStyles.eventTextSmall, , {color: GlobalColors.standardBlue, alignItems: "center", marginBottom: "0.625rem"}]}>
                            {eventDetails.arrivalInstructions == '' ? 'Arrival Instructions' : eventDetails.arrivalInstructions}
                        </Text>
                    </View>
                    <View style={[GlobalStyles.greyLine, styles.lineStyling, ]}> </View>
                    <View>
                        <View style={[styles.eventTextAndIcons, {marginBottom: "0.75rem"}]}>
                            <Image 
                                style={{width:"0.8125rem", height:"0.8125rem", margin: "auto auto auto auto"}}
                                source={require("../assets/EventAbout-Icon.svg")}
                            />  
                            <Text style={[GlobalStyles.bodyText, GlobalStyles.eventTextMedium, GlobalStyles.semiBold, {color: GlobalColors.lightGrey, alignItems: "center", paddingTop: "0.17rem"}]}>
                                    
                                {' '}{'About'}
                            </Text>
                        </View>
                        <Text style={[GlobalStyles.bodyText, GlobalStyles.eventTextSmall, {color: GlobalColors.lightBlack, alignItems: "center"}]}>
                            {alert(eventDetails.eventDetails)}
                            {(typeof(eventDetails.eventDetails) !== undefined && eventDetails.eventDetails != null) 
                                (eventDetails.eventDetails == '') ? 'Event Details' : eventDetails.eventDetails.length <= 50 ? eventDetails.eventDetails.length : !toggleAboutText ? eventDetails.eventDetails.substring(0, 50) : eventDetails.eventDetails}
                                {eventDetails.eventDetails.length > 50 &&
                                    <Text onPress = {toggleAboutTextLength} style={[GlobalStyles.bodyText, GlobalStyles.eventTextSmall, {color: GlobalColors.standardRed, alignItems: "center", textDecorationLine: 'underline'}]}>
                                        {!toggleAboutText ? "View More" : "View Less"}
                                    </Text>
                                
                            }
                            
                            
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    const getAddCalendarButton = () => {
        return (
            <TouchableOpacity
                style={[GlobalStyles.submitButton, GlobalStyles.commonHorizontalMargin, GlobalStyles.eventTopSpacing, styles.buttonSpacing, {width: "auto", marginBottom: "1.113em"}]}
                onPress={() => {
                    console.log(navigation);
                    navigation.navigate("Signup");
                }}
            >
                <Text style={GlobalStyles.buttonText}>Add to Calendar</Text>
            </TouchableOpacity>
        )
    }

    const getShareButton = () => {
        return (
            <TouchableOpacity
                style={[GlobalStyles.submitButton2, GlobalStyles.commonHorizontalMargin, styles.buttonSpacing, {width: "auto", marginTop: "1.25em"}]}
                onPress={() => {
                    Clipboard.setString(url);
                }}
            >
                <View style={[styles.eventTextAndIcons]}>
                    <Image 
                        style={{width: "1.281rem", height: "1.281rem", margin: "auto auto auto auto"}}
                        source={require("../assets/Copy-Icon.svg")}
                    />  
                    <Text style={[GlobalStyles.buttonText2]}>
                        Copy
                    </Text>
                    
                </View>
                
                
            </TouchableOpacity>
        )
       
    }

    const getShareSection = () => {
        return (
            <View>
                <View
                    style={[
                        GlobalStyles.infoSectionFilledBlue,
                        { flexDirection: "row" },
                    ]}
                >
                    <View
                        style={{
                            width: "75%",
                            borderColor: GlobalColors.blueOutline,
                            borderRightWidth: 1,
                        }}
                    >
                        <Text style={GlobalStyles.subheaderText_smaller}>
                            Add to Calendar
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "25%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Ionicons name="add-outline" size={32} color="black" />
                    </View>
                </View>
                <Text style={GlobalStyles.subheaderText}>Share It 📤</Text>
                <View
                    style={[
                        GlobalStyles.infoSectionFilledGreen,
                        { flexDirection: "row" },
                    ]}
                >
                    <View
                        style={{
                            width: "75%",
                            borderColor: GlobalColors.greenOutline,
                            borderRightWidth: 1,
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={[
                                GlobalStyles.bodyText,
                                { textDecorationLine: "underline" },
                            ]}
                        >
                            {url}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "25%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                Clipboard.setString(url);
                            }}
                        >
                            <Text
                                style={[
                                    GlobalStyles.bodyText,
                                    {
                                        color: GlobalColors.greenOutline,
                                        paddingLeft: 0,
                                    },
                                ]}
                            >
                                COPY
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ShareComponent url={url} eventName={eventDetails.eventName} />
            </View>
        );
    };

    return (
        <View style={[GlobalStyles.container, {backgroundColor: GlobalColors.lightRed}]}>
            
            {getAddCalendarButton()}
            {/*<View style={{ justifyContent: "flex-start" }}>
                {getTitleSection()}
                {getCongratsSection()}
                <Text style={GlobalStyles.subheaderText}>Plan It 📅</Text>
            </View>
            */}
            {getEventCard()}
            {getShareButton()}
            {/*
            {getShareSection()}
            */}
            <View style={GlobalStyles.bottomSection}>
                {/*
                <View style={{ width: "90%", marginBottom: 10 }}>
                    <Text
                        style={[GlobalStyles.bodyText, { textAlign: "center" }]}
                    >
                        To edit this event in the future {"\n"} create an
                        account{" "}
                    </Text>
                </View>
                <TouchableOpacity
                    style={GlobalStyles.submitButton}
                    onPress={() => {
                        console.log(navigation);
                        navigation.navigate("Signup");
                    }}
                >
                    <Text style={GlobalStyles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                <View style={{ width: "90%", marginBottom: 10 }}>
                    <Text
                        style={[GlobalStyles.bodyText, { textAlign: "center" }]}
                    >
                        (it only takes 30 seconds 😁)
                    </Text>
                </View>*/}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    eventTitleSection: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    buttonSpacing: {

    },
    eventTextAndIcons: {
        alignItems: "center", 
        flexDirection: "row", 
        justifyContent: 'center', 
    },
    eventDateText: {
        alignItems: "center", 
        flexDirection: "row", 
        justifyContent: 'space-between', 
    },
    lineStyling: {
        marginVertical: "1.25rem",
        width: "auto"
    },
    standardHoriMargin: {
        marginHorizontal: "1.25rem",
    }
});
