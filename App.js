import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './screens/login';
import MapScreen from './screens/Map';
import MapRouteScreen from './screens/MapRoute';
import Dashboard from './screens/Dashboard';
import {setJSExceptionHandler, setNativeExceptionHandler} from 'react-native-exception-handler';

setJSExceptionHandler((error, isFatal) => {
  console.log(error,isFatal);
  //Alert.alert(error);
});
setNativeExceptionHandler(exceptionString => {
  console.log(exceptionString);
  //Alert.alert(exceptionString);
});

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Dashboard:{
    screen: Dashboard
  },
  Maps:{
    screen: MapScreen
  },
  MapRoute:{
    screen: MapRouteScreen
  }
},{
  initialRouteName: 'Login',
  headerMode: 'none'
});

export default createAppContainer(AppNavigator);

