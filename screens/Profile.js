
import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Image, StatusBar } from 'react-native';
import { ActivityIndicator, Colors, Text, Appbar, Badge, Avatar, Button, Card, Title, Paragraph, FAB, TextInput, Surface, Searchbar, BottomNavigation, Headline, Divider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {};
export default class App extends Component<Props> {
    state = {

    }

    render() {
        return (
            <View style={styles.view} >
                <View style={{ marginTop: '20%', justifyContent: 'center', width: '100%', alignItems: 'center', }}>
                    <Avatar.Image size={100} source={{ uri: 'https://cdn2.vectorstock.com/i/1000x1000/95/01/avatar-profile-account-icon-vector-1979501.jpg' }} />
                    <Headline>Ms. Safana Javid</Headline>
                </View>
                <View style={{ height: '10%', alignSelf: 'center', }}>
                    <Surface style={{ width: '90%', elevation: 8, }} >
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ width: '30%', backgroundColor: '#cf000f' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                    <Avatar.Icon size={54} icon="playlist-add-check" />
                                </View>
                            </View>
                            <View style={{ width: '70%', paddingHorizontal: '5%', backgroundColor: 'transparent' }}>
                                <Headline style={{ fontSize: 16, fontWeight: '500' }}>Fill out your profile and get some offers on your next order</Headline>
                            </View>
                        </View>
                    </Surface>
                </View>

                <View style={{ height: '50%', alignSelf: 'center', marginTop: '10%', }}>
                    <Surface style={{ width: '100%', elevation: 8, height: '100%' }} >
                        <View style={{ flexDirection: 'row', height: '20%' }}>
                            <View style={{ width: '30%', backgroundColor: '#cf000f' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                    <MaterialIcons size={24} name="person" style={{ color: 'white' }} />
                                </View>
                            </View>
                            <View style={{ width: '60%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                <Headline style={{ fontSize: 16, fontWeight: '500' }}>Peronal Details</Headline>
                            </View>
                            <View style={{ width: '10%', flex: 1, marginRight: '2%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-end', }}>
                                <MaterialIcons size={34} name="navigate-next" />
                            </View>
                        </View>
                        <Divider />
                        <Divider />
                        <View style={{ flexDirection: 'row', height: '20%' }}>
                            <View style={{ width: '30%', backgroundColor: '#cf000f' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                    <MaterialIcons size={24} name="location-city" style={{ color: 'white' }} />
                                </View>
                            </View>
                            <View style={{ width: '60%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                <Headline style={{ fontSize: 16, fontWeight: '500' }}>Delivery Address</Headline>
                            </View>
                            <View style={{ width: '10%', flex: 1, marginRight: '2%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-end', }}>
                                <MaterialIcons size={34} name="navigate-next" />
                            </View>
                        </View>
                        <Divider />
                        <Divider />
                        <View style={{ flexDirection: 'row', height: '20%' }}>
                            <View style={{ width: '30%', backgroundColor: '#cf000f' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                    <MaterialIcons size={24} name="payment" style={{ color: 'white' }} />
                                </View>
                            </View>
                            <View style={{ width: '60%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                <Headline style={{ fontSize: 16, fontWeight: '500' }}>Payment Methods</Headline>
                            </View>
                            <View style={{ width: '10%', flex: 1, marginRight: '2%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-end', }}>
                                <MaterialIcons size={34} name="navigate-next" />
                            </View>
                        </View>
                        <Divider />
                        <Divider />
                        <View style={{ flexDirection: 'row', height: '20%' }}>
                            <View style={{ width: '30%', backgroundColor: '#cf000f' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                    <MaterialIcons size={24} name="build" style={{ color: 'white' }} />
                                </View>
                            </View>
                            <View style={{ width: '60%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                <Headline style={{ fontSize: 16, fontWeight: '500' }}>App Settings</Headline>
                            </View>
                            <View style={{ width: '10%', flex: 1, marginRight: '2%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-end', }}>
                                <MaterialIcons size={34} name="navigate-next" />
                            </View>
                        </View>
                        <Divider />
                        <Divider />
                        <View style={{ flexDirection: 'row', height: '20%' }}>
                            <View style={{ width: '30%', backgroundColor: '#cf000f' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                    <MaterialIcons size={24} name="headset-mic" style={{ color: 'white' }} />
                                </View>
                            </View>
                            <View style={{ width: '60%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                <Headline style={{ fontSize: 16, fontWeight: '500' }}>Help and Support</Headline>
                            </View>
                            <View style={{ width: '10%', flex: 1, marginRight: '2%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-end', }}>
                                <MaterialIcons size={34} name="navigate-next" />
                            </View>
                        </View>

                    </Surface>
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#dadfe1',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    view: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: '#dadfe1',
    },
    surface: {
        height: '20%',
        width: '100%',
        elevation: 8,
    },
    innerView: {
        marginTop: '20%',
        marginHorizontal: '5%',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});
