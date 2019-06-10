/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Image, StatusBar, TouchableOpacity, FlatList, PermissionsAndroid, ToastAndroid } from 'react-native';
import { ActivityIndicator, Colors, Headline, Text, Badge, Avatar, List, Button, Card, Title, Paragraph, FAB, TextInput, Surface, Searchbar, Banner } from 'react-native-paper';
import Geolocation from 'react-native-geolocation-service';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            latitude: 0,
            longitude: 0
        }
        console.log(this.props)
    }

    // hasLocationPermission = async () => {
    //     if (Platform.OS === 'ios' ||
    //         (Platform.OS === 'android' && Platform.Version < 23)) {
    //         return true;
    //     }

    //     const hasPermission = await PermissionsAndroid.check(
    //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    //     );

    //     if (hasPermission) return true;

    //     const status = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    //     );

    //     if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    //     if (status === PermissionsAndroid.RESULTS.DENIED) {
    //         ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    //     } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    //         ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    //     }

    //     return false;
    // }

    // componentDidMount() {
    //     let hasLocationPermission = this.hasLocationPermission();
    //     // Instead of navigator.geolocation, just use Geolocation.
    //     if (hasLocationPermission) {
    //         Geolocation.getCurrentPosition(
    //             (position) => {
    //                 console.log(position);
    //                 this.setState({
    //                     latitude: position.coords.latitude,
    //                     longitude: position.coords.longitude
    //                 })
    //             },
    //             (error) => {
    //                 // See error code charts below.
    //                 console.log(error.code, error.message);
    //             },
    //             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //         );
    //     }
    // }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Banner
                    visible={this.state.visible}
                    actions={[
                        {
                            label: `Sure I'll`,
                            onPress: () => {this.setState({ visible: false },()=> 
                            {
                                //ToastAndroid.show('Saranghee So much <3', ToastAndroid.LONG)
                            })},
                        },
                        // {
                        //     label: `Saranghaee`,
                        //     onPress: () => {this.setState({ visible: false },()=> ToastAndroid.show('Saranghee So much <3', ToastAndroid.LONG))},
                        // }
                    ]}
                    image={({ size }) =>
                        <Image
                            source={require('../assets/images/chilli.png')}
                            style={{
                                width: size,
                                height: size,
                            }}
                        />
                    }
                >
                    This app is just a concept prototype built by me(for you). Feel free to give me suggestions :)
      </Banner>
      <ScrollView style={{ width: '100%' }}>
                <Headline style={{ fontWeight: '600', marginTop: '5%', marginHorizontal: '5%', marginBottom:'2%'}}>Offers for you</Headline>
                {/* <ScrollView contentContainerStyle={{flexGrow: 1,}} style={{height: '40%',width: '100%'}}>
                    
                        <Surface style={styles.surface}>
                            <View style={{ margin: '2%', height: '70%' }}>
                                <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'http://www.elitetraveler.com/wp-content/uploads/2012/11/bluewater1-462x345.jpg' }} />
                            </View>
                            <View  style={{ flexDirection: 'column'}}>
                            <Headline style={styles.headline}>Le Merdian</Headline>
                            <Text style={styles.headline}>FLAT60</Text>
                            </View>
                        </Surface>
                        
                        <Surface style={styles.surface}>
                            <View style={{ margin: '2%', height: '70%' }}>
                                <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'http://www.elitetraveler.com/wp-content/uploads/2012/11/bluewater1-462x345.jpg' }} />
                            </View>
                            <View  style={{ flexDirection: 'column'}}>
                            <Headline style={styles.headline}>Le Merdian</Headline>
                            <Text style={styles.headline}>FLAT60</Text>
                            </View>
                        </Surface>
                        <Surface style={styles.surface}>
                            <View style={{ margin: '2%', height: '70%' }}>
                                <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'http://www.elitetraveler.com/wp-content/uploads/2012/11/bluewater1-462x345.jpg' }} />
                            </View>
                            <View  style={{ flexDirection: 'column'}}>
                            <Headline style={styles.headline}>Le Merdian</Headline>
                            <Text style={styles.headline}>FLAT60</Text>
                            </View>
                        </Surface>
                       
                    </ScrollView> */}

                {/* <View style={{ flexDirection: 'row', height: '40%' }}>
                    <Surface style={styles.surface}>
                        <View style={{ margin: '2%', height: '70%' }}>
                            <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'http://www.elitetraveler.com/wp-content/uploads/2012/11/bluewater1-462x345.jpg' }} />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Headline style={styles.headline}>Le Merdian</Headline>
                            <Text style={styles.headline}>FLAT60</Text>
                        </View>
                    </Surface>
                    <Surface style={styles.surface}>
                        <View style={{ margin: '2%', height: '70%' }}>
                            <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'http://www.elitetraveler.com/wp-content/uploads/2012/11/bluewater1-462x345.jpg' }} />
                        </View>
                        <Headline style={styles.headline}>Restorian Ishaq</Headline>
                        <Headline style={styles.headline}>MDU40</Headline>
                    </Surface>
                </View> */}
                <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
                    <View style={{backgroundColor:'transparent',  width: '5%'}}/>
                    <Card style={{width:'50%'}}>
                        <Card.Cover source={{ uri: 'https://d2gk7xgygi98cy.cloudfront.net/20-4-facebook.jpg' }} />
                        <Card.Title title='McDonalds' subtitle='FLAT50' />
                    </Card>
                    <View style={{backgroundColor:'transparent',  width: '5%'}}/>
                    <Card  style={{width:'50%'}}>
                        <Card.Cover source={{ uri: 'https://i1.wp.com/media.hungryforever.com/wp-content/uploads/2016/07/29160902/best-sizzlers-in-kolkata.jpg?ssl=1?w=356&strip=all&quality=80' }} />
                        <Card.Title title='Italian Sizzlers' subtitle='CRICKET60' />
                    </Card>
                    <View style={{backgroundColor:'transparent',  width: '5%'}}/>
                    <Card  style={{width:'50%'}} >
                        <Card.Cover source={{ uri: 'http://www.elitetraveler.com/wp-content/uploads/2012/11/bluewater1-462x345.jpg' }} />
                        <Card.Title title='Italian Sizzlers' subtitle='CRICKET60' />
                    </Card>
                    <View style={{backgroundColor:'transparent',  width: '5%'}}/>
                    <Card  style={{width:'50%'}}>
                        <Card.Cover source={{ uri: 'http://www.elitetraveler.com/wp-content/uploads/2012/11/bluewater1-462x345.jpg' }} />
                        <Card.Title title='Italian Sizzlers' subtitle='CRICKET60' />
                    </Card>
                </ScrollView>

                <View style={{flex: 1, marginTop: '5%'}}>

                <View style={{ height: '15%', alignSelf: 'center' }}>
                    <Surface style={{ height: '98%', width: '90%', elevation: 8, }} >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Maps', { latitude: this.state.latitude, longitude: this.state.longitude })}>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ width: '30%', backgroundColor: '#cf000f', marginTop: '1%', }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                        <MaterialIcons size={34} name="map" style={{ color: 'white' }} />
                                    </View>
                                </View>
                                <View style={{ width: '70%', paddingHorizontal: '5%', backgroundColor: 'transparent' }}>
                                    <Headline style={{ fontSize: 16, fontWeight: '500' }}>Look for restaurants near you in Maps</Headline>
                                </View>
                            </View>
                        </TouchableOpacity >
                    </Surface>
                </View>

                <View style={{flex: 1, marginTop: '5%'}}>
                <Headline style={{ fontWeight: '600', margin: '5%', marginTop: '5%' }}>Your Favourties</Headline>
                <Text style={{ fontWeight: '300', marginLeft: '5%' }}>from past orders</Text>
                
                    <List.Item
                        title="Ginger Chai"
                        description="Chai Point"
                        left={props => <List.Icon {...props} icon="favorite" />}
                    />
                    <List.Item
                        title="Chocolate Lava Cake"
                        description="Oyalo"
                        left={props => <List.Icon {...props} icon="favorite" />}
                    />
                    <List.Item
                        title="Dark Chocolate Ice Cream with Raisin toppings"
                        description="Ibaco"
                        left={props => <List.Icon {...props} icon="favorite" />}
                    />
                    <List.Item
                        title="Crab Fry"
                        description="Italian Sizzlers"
                        left={props => <List.Icon {...props} icon="favorite" />}
                    />
                    <List.Item
                        title="Cold Coffee"
                        description="Cafe Coffee Day"
                        left={props => <List.Icon {...props} icon="favorite" />}
                    />
                    </View>
                    </View>
                </ScrollView>

                <FAB
                    style={styles.fab}
                    icon="shopping-cart"
                    onPress={() => alert('Cart is coming soon :) Thanks for pressing me :)')}
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
        height: '90%',
        width: '80%',
        //marginRight:'5%',
        elevation: 12,
        marginHorizontal: '5%'
    },
    headline: {
        fontSize: 14,
        paddingLeft: '5%',
        fontWeight: '500'
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
        backgroundColor: '#cf000f',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});
