import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Image, StatusBar } from 'react-native';
import { ActivityIndicator, Colors, Text, Appbar, Badge, Avatar, Button, Card, Title, Paragraph, FAB, TextInput, Surface, Searchbar, BottomNavigation } from 'react-native-paper';
import Home from './Home';
import Restaurants from './Restaurants';
import Profile from './Profile';


import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

type Props = {};

export default class Dashboard extends Component<Props> {
    state = {
        index: 0,
        routes: [
            { key: 'home', title: 'Home', icon: 'home', color: '#3F51B5' },
            { key: 'restaurants', title: 'Restaurants', icon: 'restaurant', color: '#009688' },
            { key: 'profile', title: 'Profile', icon: 'person', color: '#795548' },
        ],
    }
    _handleIndexChange = index => this.setState({ index });

    render() {
        return (
            <View style={styles.view}>
                <BottomNavigation
                    navigationState={this.state}
                    onIndexChange={this._handleIndexChange}
                    renderScene={({ route, jumpTo }) => {
                        switch (route.key) {
                          case 'home':
                            return <Home jumpTo={jumpTo} {...this.props} />;
                          case 'restaurants':
                            return <Restaurants jumpTo={jumpTo} {...this.props}/>;
                          case 'profile':
                            return <Profile jumpTo={jumpTo} {...this.props} />;
                        }
                      }}
                />
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
        height: '55%',
        width: '100%',
        elevation: 4,
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
