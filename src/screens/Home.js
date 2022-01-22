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
                        <Text style={[GlobalStyles.headerText, {marginTop: "0.04rem", marginBottom: "5.8rem", marginHorizontal: "1.5625rem", fontSize: "2.052rem"}]}>
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
                {/*Second Card/Section */}
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
                {/*Third Card/Section */}
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
                {/*<View style={[GlobalStyles.cardSection, {backgroundColor: "#F7F7F7", zIndex: 1}]}>
                    <View style={styles.titleSection}>
                        <Text
                            style={[
                                GlobalStyles.headerText,
                                {
                                    paddingTop: 115,
                                    paddingBottom: 186,
                                    paddingHorizontal: 35,
                                    color: "#292929",
                                    fontWeight: "normal",
                                    letterSpacing: 1,
                                },
                            ]}
                        >
                            The 🌎’s Fastest {"\n"}
                            <Text
                                style={{ textDecorationLine: "underline" }}
                                onPress={() => navigation.navigate("Create")}
                            >
                                Event
                            </Text>{" "}
                            Organizer
                        </Text>
                        <TouchableOpacity
                            style={[
                                GlobalStyles.submitButton,
                                { marginBottom: 192},
                            ]}
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
                <View style={[GlobalStyles.cardSection, {backgroundColor: "#7B7B7B", zIndex: 2, marginTop: -60}]}>
                    <View
                        style={{
                            flexDirection: "column",
                            paddingHorizontal: 30,
                            paddingBottom: 23,
                        }}
                    >
                            <Text
                                style={[
                                    GlobalStyles.headerText,
                                    {
                                        fontSize: 24,
                                        marginTop: 50,
                                        textAlign: 'left',
                                        paddingHorizontal: 0,
                                        fontWeight: 700,
                                        letterSpacing: 1,
                                        color: '#FFFFFF'
                                    },
                                ]}
                            >
                                Let’s throw a party! 🎉{" "}
                            </Text>
                            <Text
                                style={[
                                    GlobalStyles.bodyText,
                                    { textAlign: "center", fontSize: 18, lineHeight: 36, color: '#FFFFFF', marginTop: 28, marginBottom: 100, paddingLeft: 0},
                                ]}
                            >
                                UGoing creates a{" "}
                                <Text
                                    style={{ textDecorationLine: "underline" }}
                                    onPress={() => navigation.navigate("Create")}
                                >
                                    unique link
                                </Text>{" "}
                                to your next event that friends can add directly to
                                their calendars
                            </Text>
                            <View style={{justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: 179}}>
                                <Image
                                    style={{ height: 172, width: 172, margin: '0 auto 0 auto'}}
                                    source={require("../assets/Hands_Party.png")}
                                />

                            </View>
                            
                            
                    </View>
                </View>
                <View style={[GlobalStyles.cardSection, {backgroundColor: "#F7F7F7", zIndex: 3, marginTop: -60}]}>
                    <Text
                        style={[
                            GlobalStyles.headerText,
                            {
                                fontSize: 24,
                                marginTop: 50,
                                textAlign: 'left',
                                paddingHorizontal: 30,
                                fontWeight: 700,
                                letterSpacing: 1,
                            },
                        ]}
                    >
                        It's as easy as...
                    </Text>
                    <View
                        style={[
                            GlobalStyles.bodyText,
                            { fontSize: 18, lineHeight: 36, marginTop: 32, marginBottom: 40, paddingHorizontal: 30},
                        ]}
                    >
                        <ol>
                            <li>Create Your Event</li>
                            <li>Send the link to your friends</li>
                            <li>View the details online or add them to your calendar with a single tap</li>
                        </ol>
                        
                    </View>
                    <Image
                        style={{ height: 316, width: 283, marginBottom: 47, marginLeft: 'auto', marginRight: 'auto'}}
                        source={require("../assets/Google_Calendar_Event.png")}>
                    </Image>
                </View>

                <View >
                        <Text
                            style={[
                                GlobalStyles.headerText,
                                {
                                    fontSize: 24,
                                    marginTop: 38,
                                    textAlign: "center",
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                },
                            ]}
                        >
                            1 Link to Rule Them All 🔗
                        </Text>
                        <Text
                            style={[
                                GlobalStyles.bodyText,
                                { textAlign: "center", fontSize: 18, lineHeight: 36, marginTop: 32, marginBottom: 23, paddingLeft: 30, paddingRight: 30},
                            ]}
                        >
                            Details get burried often in the group chat.
                            Instead of re-typing each time, send a{" "}
                            <Text
                                style={{ textDecorationLine: "underline" }}
                                onPress={() =>
                                    navigation.navigate("Create")
                                }
                            >
                                link
                            </Text>
                        </Text>
                    <Image
                        style={{ height: 441, width: 315, marginLeft: 'auto', marginRight: 'auto', marginBottom: 69}}
                        source={require("../assets/Messenger_Chat.png")}
                    />
                </View>

                <View style={[GlobalStyles.cardSection, {backgroundColor: "#FAFDF2", zIndex: 1, marginTop: -60}]}>
                    <Text
                        style={[
                            GlobalStyles.headerText,
                            {
                                fontSize: 24,
                                marginTop: 38,
                                marginBottom: 74,
                                textAlign: "center",
                                fontStyle: "normal",
                                fontWeight: 700,
                                letterSpacing: 1,
                            },
                        ]}
                    >
                        Right into their Calendar 📅
                    </Text>
                    <View style={[styles.columnContainer, {marginBottom: 188, paddingRight: 30}]}>
                        <Image
                            style={{ height: 96, width: 96, marginLeft: 30, marginTop: 'auto', marginBottom: 'auto' }}
                            source={require("../assets/Icon_Calendar.png")}
                        />
                        <Text
                            style={[
                                GlobalStyles.bodyText,
                                { textAlign: "right", fontSize: 18, lineHeight: 36, paddingLeft: 10},
                            ]}
                        >
                            UGoing lets friends add your event directly into
                            their preferred calendar{"\n"}
                            {"\n"}
                            No more digging through messages or forgotten reminders - Everything you need to know front and center where you expect it
                        </Text>
                    </View>
                </View>

                <View style={[GlobalStyles.cardSection, {backgroundColor: "#7B7B7B", zIndex: 2, marginTop: -60}]}>
                    <Text
                        style={[
                            GlobalStyles.headerText,
                            {
                                fontSize: 24,
                                marginTop: 38,
                                marginBottom: 74,
                                marginLeft: 30,
                                textAlign: "center",
                                fontStyle: "normal",
                                fontWeight: 700,
                                letterSpacing: 1,
                                color: '#FFFFFF'
                            },
                        ]}
                    >
                        And it’s all Free!  👏
                    </Text>
                    <Text
                        style={[
                            GlobalStyles.bodyText,
                            { textAlign: "center", color: '#FFFFFF', fontSize: 18, lineHeight: 36, paddingLeft: 0, marginHorizontal: 80},
                        ]}
                    >
                        Create as many events as you want{"\n"}
                        {"\n"}
                        Free to create events{"\n"}
                        {"\n"}
                        Free for your guests{"\n"}
                        {"\n"}
                    </Text>
                    <Image
                        style={{ height: 64, width: 64, marginLeft: 'auto', marginRight: 'auto', marginBottom: 101}}
                        source={require("../assets/Icon_FreeEvent.png")}
                    />
                </View>

                    <TouchableOpacity
                        style={[
                            GlobalStyles.submitButton,
                            { marginTop: 54, marginBottom: 64, marginLeft: 'auto', marginRight: 'auto' },
                        ]}
                        onPress={() => {
                            navigation.navigate("Create");
                        }}
                    >
                        <Text style={GlobalStyles.buttonText}>
                            Create Event
                        </Text>
                    </TouchableOpacity>
                    */}</View>
            
            <Footer ></Footer>
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
});
