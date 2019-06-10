import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,
    ScrollView, 
    Dimensions,  
    Animated,
    Image,
    TouchableOpacity, } from 'react-native';
import { ActivityIndicator, Colors, Appbar, Badge, Avatar, Button, Card, Title, Paragraph, FAB, TextInput } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {RetroStyle, DarkStyle} from '../MapStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

const Images = [
    { uri: "https://i.imgur.com/sNam9iJ.jpg" },
    { uri: "https://i.imgur.com/N7rlQYt.jpg" },
    { uri: "https://i.imgur.com/UDrH0wm.jpg" },
    { uri: "https://i.imgur.com/Ka8kNST.jpg" }
  ]

type Props = {};
export default class App extends Component<Props> {
  state = {
    markers: [
      {
        title: 'Adyar Ananda Bhavan Sweets', 
        description: 'Vegetarian restaurant',
        image: { uri:'http://www.indiamarks.com/wp-content/uploads/restaurant_trikaya_in_bawdhan-pune.png'},
        coordinate:{
            latitude: 13.048264, 
            longitude: 80.205277
            }
        },
        {
        title: 'Aasife Biriyani', 
        description: 'Biryani restaurant',
        image: { uri:'http://visitdalmatia.com/makarska/images/restaurant-jez.jpg'},
        coordinate:{
            latitude: 13.072786, 
            longitude: 80.201350
            }
        },
        {
        title: 'Bistro 1427', 
        description: 'Multi-cuisine restaurant',
        image: { uri:'http://www.elitetraveler.com/wp-content/uploads/2012/11/bluewater1-462x345.jpg'},
        coordinate:{
            latitude: 13.042867, 
            longitude: 80.268150
            }
        },
        {
        title: 'Me (Meat And Eat)', 
        description: 'Family restaurant',
        image: { uri:'https://anakjajan.files.wordpress.com/2017/01/dscf8714.jpg?w=474&h=316'},
        coordinate:{
            latitude: 12.968643, 
            longitude: 80.257306
            }
        },
        {
        title: 'Kobe Sizzlers', 
        description: 'Indian Sizzlers restaurant',
        image: { uri:'https://www.gayot.com/blog/wp-content/uploads/2014/03/waterfront-restaurant-open-show-kitchen.jpg'},
        coordinate:{
            latitude: 12.992005, 
            longitude: 80.217181
            }
        },
        {
        title: 'Wangs Kitchen', 
        description: 'Chinese restaurant',
        image: { uri:'https://www.bpimaging.com/assets/uploads/2015/02/restaurant-photography-interior-booths.jpg'},
        coordinate:{
            latitude: 13.048264, 
            longitude: 80.205277
            }
        },
        {
        title: 'Doveton Cafe', 
        description: 'Vegetarian restaurant',
        image: { uri:'http://media.bizj.us/view/img/10256100/barnsnobleedina30339*1200xx3000-1688-0-81.jpg'},
        coordinate:{
            latitude: 13.086806,
            longitude: 80.258122
            }
        },
        {
        title: 'Pizza Cottage', 
        description: 'Pizza restaurant',
        image: { uri:'http://restaurantnewsrelease.com/wp-content/uploads/2018/01/Russos-New-York-Pizzeria-Rolls-Out-Next-Generation-Pizza-Italian-Restaurant-Design.jpg'},
        coordinate:{
            latitude: 13.098786, 
            longitude: 80.286630
            }
        },
        {
        title: 'V7 Hotel', 
        description: 'Multi-Cuisine restaurant',
        image: { uri:'http://www.uniquepos.com/v/vspfiles/assets/images/restaurant-pos.jpg'},
        coordinate:{
            latitude: 13.036314,
            longitude:  80.145332
            }
        },
        {
        title: 'Brownie Heaven', 
        description: 'Dessert restaurant',
        image: { uri:'https://i.ytimg.com/vi/7DXlv7_rzJY/maxresdefault.jpg'},
        coordinate:{
            latitude: 13.054222, 
            longitude: 80.261176
            }
        },
      ],
      region: {
        latitude: 13.048264, 
        longitude: 80.205277,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      },
  }
  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }
  render() {
    const interpolations = this.state.markers.map((marker, index) => {
        const inputRange = [
          (index - 1) * CARD_WIDTH,
          index * CARD_WIDTH,
          ((index + 1) * CARD_WIDTH),
        ];
        const scale = this.animation.interpolate({
          inputRange,
          outputRange: [1, 2.5, 1],
          extrapolate: "clamp",
        });
        const opacity = this.animation.interpolate({
          inputRange,
          outputRange: [0.35, 1, 0.35],
          extrapolate: "clamp",
        });
        return { scale, opacity };
      });
  
    return (
        <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
          customMapStyle={RetroStyle}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
        <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={{ position: 'absolute', top: 0, margin: '5%', flexDirection: 'row', }}>
          <MaterialIcons size={34} name="arrow-back" style={{ color: 'black', }} />
          <Text style={{ fontWeight: "500", fontSize: 18, marginLeft: '10%', marginTop: '1%' }}>Restaurants near you</Text>
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
    endPadding: {
      paddingRight: width - CARD_WIDTH,
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
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
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
      width: 10,
      height: 10,
      borderRadius: 4,
      backgroundColor: "#cf000f",
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