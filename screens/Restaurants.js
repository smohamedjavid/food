/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Image, StatusBar } from 'react-native';
import { ActivityIndicator, Colors, Text, Appbar, Badge, List, Avatar, Button, Card, Title, Paragraph, FAB, TextInput, Surface, Searchbar, BottomNavigation } from 'react-native-paper';
import { TouchableHighlight } from 'react-native-gesture-handler';
type Props = {};
export default class Restaurants extends Component<Props> {
    state = {
        restaurants: [
            {
                title: 'Adyar Ananda Bhavan Sweets',
                description: 'Vegetarian restaurant',
                image: { uri: 'http://www.indiamarks.com/wp-content/uploads/restaurant_trikaya_in_bawdhan-pune.png' },
                coordinate: {
                    latitude: 13.048264,
                    longitude: 80.205277
                }
            },
            {
                title: 'Aasife Biriyani',
                description: 'Biryani restaurant',
                image: { uri: 'http://visitdalmatia.com/makarska/images/restaurant-jez.jpg' },
                coordinate: {
                    latitude: 13.072786,
                    longitude: 80.201350
                }
            },
            {
                title: 'Bistro 1427',
                description: 'Multi-cuisine restaurant',
                image: { uri: 'http://www.elitetraveler.com/wp-content/uploads/2012/11/bluewater1-462x345.jpg' },
                coordinate: {
                    latitude: 13.042867,
                    longitude: 80.268150
                }
            },
            {
                title: 'Me (Meat And Eat)',
                description: 'Family restaurant',
                image: { uri: 'https://anakjajan.files.wordpress.com/2017/01/dscf8714.jpg?w=474&h=316' },
                coordinate: {
                    latitude: 12.968643,
                    longitude: 80.257306
                }
            },
            {
                title: 'Kobe Sizzlers',
                description: 'Indian Sizzlers restaurant',
                image: { uri: 'https://www.gayot.com/blog/wp-content/uploads/2014/03/waterfront-restaurant-open-show-kitchen.jpg' },
                coordinate: {
                    latitude: 12.992005,
                    longitude: 80.217181
                }
            },
            {
                title: 'Wangs Kitchen',
                description: 'Chinese restaurant',
                image: { uri: 'https://www.bpimaging.com/assets/uploads/2015/02/restaurant-photography-interior-booths.jpg' },
                coordinate: {
                    latitude: 13.048264,
                    longitude: 80.205277
                }
            },
            {
                title: 'Doveton Cafe',
                description: 'Vegetarian restaurant',
                image: { uri: 'http://media.bizj.us/view/img/10256100/barnsnobleedina30339*1200xx3000-1688-0-81.jpg' },
                coordinate: {
                    latitude: 13.086806,
                    longitude: 80.258122
                }
            },
            {
                title: 'Pizza Cottage',
                description: 'Pizza restaurant',
                image: { uri: 'http://restaurantnewsrelease.com/wp-content/uploads/2018/01/Russos-New-York-Pizzeria-Rolls-Out-Next-Generation-Pizza-Italian-Restaurant-Design.jpg' },
                coordinate: {
                    latitude: 13.098786,
                    longitude: 80.286630
                }
            },
            {
                title: 'V7 Hotel',
                description: 'Multi-Cuisine restaurant',
                image: { uri: 'http://www.uniquepos.com/v/vspfiles/assets/images/restaurant-pos.jpg' },
                coordinate: {
                    latitude: 13.036314,
                    longitude: 80.145332
                }
            },
            {
                title: 'Brownie Heaven',
                description: 'Dessert restaurant',
                image: { uri: 'https://i.ytimg.com/vi/7DXlv7_rzJY/maxresdefault.jpg' },
                coordinate: {
                    latitude: 13.054222,
                    longitude: 80.261176
                }
            },
        ]
    }

    render() {
        return (
            <ScrollView style={styles.view} contentContainerStyle={{ flexGrow: 1 }} >
                <Searchbar
                    placeholder="Search"
                    onChangeText={query => { this.setState({ firstQuery: query }); }}
                    value={this.state.firstQuery}
                />
                
                {this.state.restaurants.map((restaurant, index) =>
                    <TouchableHighlight key={index} underlayColor={'transparent'} onPress={() => this.props.navigation.navigate('MapRoute', { latitude: restaurant.coordinate.latitude, longitude: restaurant.coordinate.longitude, shopName: restaurant.title })}>
                        <Card style={{marginHorizontal:'5%', marginBottom: '5%',}}>
                            <Card.Cover source={restaurant.image} />
                            <Card.Title title={restaurant.title} subtitle={restaurant.description} />
                            <Text style={{marginHorizontal:'5%', fontWeight: '200',fontSize:14, marginBottom:'5%'}}>Tap to get directions</Text>
                        </Card>
                    </TouchableHighlight>
                    // <List.Item
                    //     title={restaurant.title}
                    //     description={restaurant.description}
                    //     left={props => <List.Icon {...props} icon={restaurant.image} />}
                    //     onPress={() => this.props.navigation.navigate('MapRoute', { latitude: restaurant.coordinate.latitude, longitude: restaurant.coordinate.longitude })}
                    // />
                )}


            </ScrollView>
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
