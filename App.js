const Stack = createNativeStackNavigator();
import * as React from "react";
//import { initializeApp } from 'firebase/app';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import UserScreen from "./screens/UserScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import SalonRegistrationScreen from "./screens/SalonRegistrationScreen";
import LogInScreen from "./screens/LogInScreen";
import SalonLogInScreen from "./screens/SalonLoginScreen";
import MainScreen from "./screens/MainScreen";
import DashboardSlide from "./screens/DashBoardSlide";
import SalonDashBoard from "./screens/SalonDashBoard";
//import {stack} from "@react-navigation/stack";
import { useEffect } from "react";
import firestore from '@react-native-firebase/firestore';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { View, Text, Pressable, TouchableOpacity } from "react-native";
//import { firebase } from "@react-native-firebase/auth";

//let fApp
const App = () => {
  
  
    useEffect(() => {
     getDataBase();
    },[]);
    const getDataBase = async() => {
     try{
       const data = await firestore().collection('testing').doc ('nj8V6pXTUakkqgjDZ4p1').get(); 
 
 
       console.log(data)
     }  catch(err){
       console.log(err)
     }
    }







  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    "IBM Plex Sans KR": require("./assets/fonts/IBM_Plex_Sans_KR.ttf"),
    "IBM Plex Sans KR_regular": require("./assets/fonts/IBM_Plex_Sans_KR_regular.ttf"),
    "IBM Plex Sans KR_semibold": require("./assets/fonts/IBM_Plex_Sans_KR_semibold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserScreen"
              component={UserScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogInScreen"
              component={LogInScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SalonRegistrationScreen"
              component={SalonRegistrationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SalonLogInScreen"
              component={SalonLogInScreen}
              options={{ headerShown: false }}
            />
           <Stack.Screen
              name="SalonDashBoard"
              component={SalonDashBoard}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="DashBoardSlide"
              component={DashboardSlide}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );


}

export default App;