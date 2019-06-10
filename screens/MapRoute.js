import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  ScrollView,
  Dimensions,
  Animated,
  Image,
  TouchableOpacity, PermissionsAndroid, ToastAndroid
} from 'react-native';
import { ActivityIndicator, Colors, Appbar, Badge, Avatar, Button, Card, Title, Paragraph, FAB, TextInput } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { RetroStyle, DarkStyle } from '../MapStyle';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      shopName: this.props.navigation.getParam('shopName'),
      coordinates: {
        latitude: 13.164217,
        longitude: 80.279310,
      },
      region: {
        latitude: 13.064217,
        longitude: 80.179310,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      source: {
        latitude: 13.064217,
        longitude: 80.179310,
      },
      destination: {
        latitude: this.props.navigation.getParam('latitude'),
        longitude: this.props.navigation.getParam('longitude'),
      }
    }
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

  componentWillMount() {
    let hasLocationPermission = this.hasLocationPermission();
    // Instead of navigator.geolocation, just use Geolocation.
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.setState({
            source: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }
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
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCmQQkTsQjLZ0nkk0VvTSwvb3_8rilbyVE';
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.region}
          style={styles.container}
          customMapStyle={RetroStyle}
        >
          <MapViewDirections
            origin={this.state.source}
            destination={this.state.destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="#cf000f"
          />
          <Marker
            coordinate={this.state.source}
            title={'Your Location'}
            description={'Go down the red line to eat :)'}
          />
          <Marker
            coordinate={this.state.destination}
            title={this.state.shopName}
          //image={require('../assets/images/shop.png')}
          />
        </MapView>
        <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={{ position: 'absolute', top: 0, margin: '5%', flexDirection: 'row', }}>
          <MaterialIcons size={34} name="arrow-back" style={{ color: 'black', }} />
          <Text style={{ fontWeight: "500", fontSize: 18, marginLeft: '10%', marginTop: '1%' }}>{this.state.shopName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});