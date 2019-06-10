/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Image, StatusBar, ToastAndroid, PermissionsAndroid } from 'react-native';
import { ActivityIndicator, Text, Button, Card, Title, Paragraph, FAB, TextInput, Surface } from 'react-native-paper';
import Geolocation from 'react-native-geolocation-service';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {};
export default class App extends Component<Props> {
    state = {
        email: '',
        password: ''
    }
    hasLocationPermission = async () => {
        if (Platform.OS === 'ios' ||
            (Platform.OS === 'android' && Platform.Version < 23)) {
            return true;
        }

        const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (hasPermission) return true;

        const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

        if (status === PermissionsAndroid.RESULTS.DENIED) {
            ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
        }

        return false;
    }
    componentDidMount() {
        let hasLocationPermission = this.hasLocationPermission();
        // Instead of navigator.geolocation, just use Geolocation.
        if (hasLocationPermission) {
            Geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                    this.setState({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }
    render() {
        return (
            <View style={styles.view} >
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />
                <Image style={{ width: '40%', height: '30%', alignSelf: 'center', marginTop: '20%', }}
                    source={require('../assets/images/chilli.png')} />
                <View style={styles.innerView}>
                    <TextInput
                        autoCapitalize='none'
                        mode="outlined"
                        style={{ margin: 8 }}
                        label="Email"
                        value={this.state.email}
                        keyboardType="email-address"
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        mode="outlined"
                        style={{ margin: 8 }}
                        secureTextEntry
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Button mode="contained" style={{ marginHorizontal: '2%', marginTop: '5%', padding: '2%', borderRadius: 4, }} onPress={() => {

                        // if(this.state.email == 'safanamarvaa@gmail.com' && this.state.password == '14081998'){
                        //     ToastAndroid.show('Welcome In, Bae :)', ToastAndroid.LONG)
                        //     this.props.navigation.replace('Dashboard')
                        // }else if(this.state.email == '' && this.state.password == ''){
                        //     ToastAndroid.show('Type Something, Baby <3 ', ToastAndroid.LONG)
                        // }else{
                        //     ToastAndroid.show('Try Again once more, Baby <3', ToastAndroid.LONG)
                        // }
                        this.props.navigation.replace('Dashboard')
                    }}>
                        Login
                    </Button>
                    <TouchableOpacity onPress={() => {
                        //ToastAndroid.show('You can directly sign in, Baby <3. You always have a account :) ', ToastAndroid.LONG)
                    }
                    }
                    >
                        <Text style={{ color: '#cf000f', fontSize: 16, textAlign: 'center', marginTop: '10%', fontWeight: '500', }}>or Sign Up Instead</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'red',
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
        backgroundColor: 'transparent',
    },
    surface: {
        height: '55%',
        width: '100%',
        elevation: 4,
    },
    innerView: {
        flex: 1,
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
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
