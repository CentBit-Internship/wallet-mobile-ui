import * as React from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../Constants/colors';

export default function LoginScreen({navigation}){
     return(
          <View style={styles.container}>
               <View >
                    <Image source={require("../../../assets/login_image.webp")} resizeMode="center" style={styles.image}/>
                    <Text style={{
                         textAlign: "center",
                         fontWeight: '900',
                         fontSize: 40,
                         marginVertical: 10,
                         color: COLORS.colorDarkBlue
                         }}>Welcome Back</Text>
                    <Text style={{textAlign: "center"}}>Login to your Account</Text>
               
               </View>
               <View style={styles.loginDetails}>
                    <Text style={styles.emailText}>
                         Email
                    </Text>
                    <TextInput placeholder='Email'  
                    style={{
                         alignItems: "center",
                         height: 50,
                         borderWidth: 1,
                         marginBottom: 20,
                         borderRadius: 15,
                         paddingLeft: 20,
                         borderColor: COLORS.colorDarkBlue}}/>
                    <Text style={styles.passwordText}>
                         Password
                    </Text>
                    <TextInput placeholder='Password' secureTextEntry={true} style={styles.passwordInput}/>
               </View>
               <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginRight: 20}}>
                    <Text>Don't have an Account? </Text>
                    <Text style={{
                         fontWeight: "900",
                         color: COLORS.colorDarkBlue
                    }}>Sign up</Text>
               </View>
               <TouchableOpacity
                    style={{
                         backgroundColor: COLORS.colorDarkBlue,
                         padding: 20,
                         margin: 15,
                         alignItems: "center",
                         borderRadius: 20
                    }}
                    onPress={() => navigation.navigate("TabLayoutContainer")}
                    >
                    <Text style={{color: COLORS.colorWhite}}>Login</Text>
               </TouchableOpacity>
               
          </View>
          
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#ffffff'
     },
     image: {
          width: 400,
          height: 250,
     },
     headerText: {
          
     },
     bodyText: {
          fontFamily: "Foundation",
          fontSize: 16
     },
     loginDetails: {
          padding: 15,
     },
     emailText: {
          textAlign: "left", 
          marginBottom: 10,
          fontWeight: "700"
     },
     emailInput: {
          
     },
     passwordInput: {
          alignItems: "center",
          height: 50,
          borderWidth: 1,
          marginBottom: 20,
          borderRadius: 15,
          paddingLeft: 20,
          borderColor: COLORS.colorDarkBlue
     },
     passwordText: {
          paddingBottom: 10,
          fontWeight: "700"
     }
});