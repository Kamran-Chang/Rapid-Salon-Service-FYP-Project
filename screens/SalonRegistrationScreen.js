import React, { Children, createContext } from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../navigation/Authentication";
//import { TextInput as RNPTextInput, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Input } from "react-native-elements";
import auth from "@react-native-firebase/auth";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import {TouchableOpacity , KeyboardAvoidingView,
  ScrollView, TextInput as RNPTextInput, Alert } from 'react-native'
import {Picker} from '@react-native-picker/picker'
//import Picker from 'react-native'
//import SelectList from 'react-native-dropdown-select-list';

import {
  Image,
  StyleSheet,
  StatusBar,
  Pressable,
  View,
  Text,
} from "react-native";
import SalonLoginScreen from "./SalonLoginScreen";



const SalonRegistrationScreen = () => {

  //const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  //const [fullname, setFullname] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullname, setFullname] = useState('')
  const [error, setError] = useState('')
  const [number, setNumber] = useState('')


  const cityList = [
    { label: 'Lahore', value: 'Lahore' },
    { label: 'Karachi', value: 'Karachi' },
    { label: 'Islamabad', value: 'Islamabad' },
    { label: 'Sukkur', value: 'Sukkur' },
    { label: 'Faisalabad', value: 'Faisalabad' },
    { label: 'Hydrabad', value: 'Hydrabad' },
    
  ];

  const [selectedCity, setSelectedCity] = useState('');
  
  const UpdateSecurityTextEntry = () => {
    setPassword({
      ...password, 
      secureTextEntry: !password.secureTextEntry
    })
  }
  

  const handleRegistration = async() =>{
    if (!fullname || !email || !password || !selectedCity || !number) {
      Alert.alert('Please fill in all fields')
      return
    }
    try{
      const isUserCreated = await auth().createUserWithEmailAndPassword(email,password);
      console.log(isUserCreated)
    }catch(err){
        console.log(err)
    }
  }

  const Navigation = useNavigation();
  return (
    <ScrollView>
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}>



    <View style={styles.registrationScreen}>
      <Image
        style={styles.CornerShapeIcon}
        resizeMode="contain"
        source={require("../assets/CornerShape.png")}
      />
      <StatusBar style={styles.buttonLayout} barStyle="default" />
      
      <Text
        style={[
          styles.welcomeOnboard,
          styles.getStartedFlexBox,
          styles.getStartedTypo,
        ]}
      >
        Welcome Onboard
      </Text>
      
    
     
      <View  style={ [styles.input, styles.inputLayout] }>
       <Ionicons name="person" size={20} color="#949096" style={ {marginTop: 18, left: 10}}/>
       <RNPTextInput 
        style ={[ styles.textInput]}
        placeholder="Enter your Business Name"
        label="Full Name"
        onChangeText={(fullname) => setFullname(fullname)}
        //mode="outlined"
        
        //placeholderTextColor="rgba(0, 0, 0, 0.81)"
        //outlineColor="#dcdedf"
       // activeOutlineColor="#7f7f7f"
        //theme={{ colors: { text: "rgba(0, 0, 0, 0.81)" } }}
      />
      </View>

      <View  style={ [styles.input1, styles.inputLayout] }>
       <Ionicons name="call-outline" size={20} color="#949096" style={ {marginTop: 18, left: 10}}/>
       <RNPTextInput 
        style ={[ styles.textInput]}
        placeholder="92xxxxxxxxxx"
        label="Full Name"
        onChangeText={(number) => setNumber(number)}
        //mode="outlined"
        
        //placeholderTextColor="rgba(0, 0, 0, 0.81)"
        //outlineColor="#dcdedf"
       // activeOutlineColor="#7f7f7f"
        //theme={{ colors: { text: "rgba(0, 0, 0, 0.81)" } }}
      />
      </View>

      
      <View style={[styles.input2,styles.inputLayout]}>
        
      <Ionicons name="mail-outline" size={20} color="#949096" style={ {marginTop: 18, left: 10}} />
      <RNPTextInput 
        style ={[ styles.textInput]}
        placeholder="Enter your Email"
        onChangeText={(email) => setEmail(email)}
        //onBlur={() => this.emailValidator()}
        label="Email"
        //mode="outlined"
        keyboardType="email-address"
        //placeholderTextColor="rgba(0, 0, 0, 0.81)"
        //outlineColor="#dcdedf"
        //activeOutlineColor="#7f7f7f"
       // theme={{ colors: { text: "rgba(0, 0, 0, 0.81)" } }}
      />
      
      </View>
      
      
      <View style={[ styles.input3,styles.inputLayout]}>
       
      <Ionicons name="lock-closed" size={20} color="#949096" style={ {marginTop: 18, left: 10}}/> 
      <RNPTextInput
        style ={[styles.textInput]}
        placeholder="Enter Password"
        onChangeText={(password) => setPassword(password)}
        label="Password"
        secureTextEntry={password.secureTextEntry ? true : false}
        
      />
      <TouchableOpacity
      onPress={UpdateSecurityTextEntry}>
        {password.secureTextEntry ?
      <Ionicons name="eye-off-outline" size={25} style={{marginTop:15}}></Ionicons>
      :
      <Ionicons name="eye-outline" size={25} style={{marginTop:15}}></Ionicons>
        }
      </TouchableOpacity>
      
      </View>
      

      
      <View style={[styles.input4,styles.inputLayout]}>
        
      <Ionicons name="lock-closed" size={20} color="#949096" style={ {marginTop: 18, left: 10}}/>
      <RNPTextInput
        style ={[styles.textInput]}
        placeholder="Confirm Password"
       // onChangeText={(password) = setPassword(password)}
        label="Confirm Password"
        secureTextEntry={password.secureTextEntry ? true : false}
        
        placeholderTextColor="rgba(0, 0, 0, 0.81)"
        
        //theme={{ colors: { text: "rgba(0, 0, 0, 0.81)" } }}
      />
      <TouchableOpacity
      onPress={UpdateSecurityTextEntry}>
        {password.secureTextEntry ?
      <Ionicons name="eye-off-outline" size={25} style={{marginTop:15}}></Ionicons>
      :
      <Ionicons name="eye-outline" size={25} style={{marginTop:15}}></Ionicons>
        }
      </TouchableOpacity>
      
      </View>
      {error ? <Text style={{color: 'red', top: 150, left: 130}}>{error}</Text> : null}

      
      <View style = {[styles.input5,styles.inputLayout]}>
      
      <Picker

        style = {styles.inputLayout}
        selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedCity(itemValue)
        }>
        <Picker.Item label="Select City" value="" />
        {cityList.map((city) => (
          <Picker.Item key={city.value} label={city.label} value={city.value} />
        ))}
      </Picker>
      
    </View>
    



<Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => handleRegistration()}
      >
        <View style={[styles.buttonChild, styles.signUpButtonPosition]} />
        <Text
          style={[
            styles.SignUpText,
            styles.SiginUpFlexBox,
            styles.getStartedTypo,
            styles.signUpButtonPosition,
          ]}
        >
          Sign Up
        </Text>
      </Pressable>
      


      
      <Text style={styles.alreadyHaveAnContainer}>
        <Text style={styles.letHopeYouClr}>{`Already have an account ? `}</Text>
        <TouchableOpacity  onPress={() => Navigation.navigate(SalonLoginScreen)} >
        <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
      </Text>


    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  IconStyle:{
    top: 45,
    left: -20
  },
  Text_footer:{
    fontSize: 18
  },
  textInput:{
    //marginTop: 100, 
    //padding: 15,
    paddingLeft: 20,
    //paddingBottom: 20,
    flex: 5
    
     
  },

  buttonLayout: {
    width: 310,
    position: "absolute",
    left: 20,
    

  },
  signUpButtonPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  getStartedFlexBox: {
    textAlign: "center",
    position: "absolute",
    marginTop: 5,
  },
  SiginUpFlexBox: {
    marginTop: 15,
  },
  getStartedTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  letHopeYouClr: {
    color: Color.gray,
    fontFamily: FontFamily.poppinsRegular,
  },
  inputLayout: {
    
    
    // justifyContent: 'space-around',  
    height: 50,
    width: 320,
    opacity:10,
    borderWidth: 1,
    borderColor: '#949096',
    borderRadius: Border.br_md,
    left: 15,
    //position: "absolute",
    flexDirection: 'row'
   
  },
  CornerShapeIcon: {
    top: -12,
    left: 0,
    width: 230,
    height: 180,
    position: "absolute",
  },
  buttonChild: {
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.coral,
    position: "absolute",
  },
  SignUpText: {
    color: Color.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 26,
  },
  button: {
    top: 570,
    left: 25,
    height: 61,
  },
  welcomeOnboard: {
    top: 120,
    left: 70,
    color: Color.black,
    width: 229,
  },
  letHopeYou: {
    top: 200,
    left: 50,
    fontSize: FontSize.size_base,
    width: 281,
    lineHeight: 26,
  },
  signIn: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.firebrick,
  },
  alreadyHaveAnContainer: {
    top: 650,
    left: 70,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    lineHeight: 26,
    position: "absolute",
  },
  input: {
    top: 170,
   // width: 20,
  
  },
  input1: {
    top: 188,
   // width: 20,
  
  },
  input2: {
    top: 206,
    
  },
  input3: {
    top: 224,
  },
  input4: {
    top: 242,
    
  },
  input5: {
     top: 260,
  },
  registrationScreen: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default SalonRegistrationScreen;
