import * as React from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity , ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../Constants/colors';

export default function LoginScreen({navigation}){
     return(

        <ScrollView>
            <View style={styles.loginMainContainer}>
               <View >
                    <Image source={require("../../../assets/login_image.webp")} resizeMode="center" style={styles.image}/>
                    <Text style={styles.headerText}>Welcome Back</Text>
                    <Text style={{textAlign: "center", color: COLORS.colorWhite}}>Login to your Account</Text>
               
               </View>
               <View style={styles.loginDetails}>
                    <Text style={styles.emailText}>
                         Email
                    </Text>
                    <TextInput placeholder='Email' 
                    placeholderTextColor="#ffffff" 
                    style={styles.emailInput}/>
                    <Text style={styles.passwordText}>
                         Password
                    </Text>
                    <TextInput placeholder='Password' secureTextEntry={true} style={styles.passwordInput} placeholderTextColor="#ffffff"/>
               </View>
               <View style={styles.doNotHaveAccountContainer}>
                    <Text style={{color: COLORS.colorWhite}}>Don't have an Account?  </Text>
                    <Text
                    onPress={() => navigation.navigate("Signup")} 
                    style={{
                         fontWeight: "900",
                         color: COLORS.colorJazzberryJam
                    }}>Sign up</Text>
               </View>
               <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate("TabLayoutContainer")}
                    >
                    <Text 
                    style={{color: COLORS.colorWhite}}>Login</Text>
               </TouchableOpacity>
               
          </View>
        </ScrollView>
          
     );
}

const styles = StyleSheet.create({
     loginMainContainer: {
          flex: 1,
          backgroundColor: COLORS.colorDarkBlue
     },
     image: {
          width: 400,
          height: 250,
          marginTop: 10
     },
     headerText: {
          textAlign: "center",
          fontWeight: '900',
          fontSize: 40,
          marginVertical: 10,
          color: COLORS.colorWhite
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
          fontWeight: "700",
          color: COLORS.colorWhite
     },
     emailInput: {
          alignItems: "center",
          height: 50,
          borderWidth: 1,
          marginBottom: 20,
          borderRadius: 15,
          paddingLeft: 20,
          borderColor: COLORS.colorWhite
     },
     passwordInput: {
          alignItems: "center",
          height: 50,
          borderWidth: 1,
          marginBottom: 20,
          borderRadius: 15,
          paddingLeft: 20,
          borderColor: COLORS.colorWhite
     },
     passwordText: {
          paddingBottom: 10,
          fontWeight: "700",
          color: COLORS.colorWhite
     },
     doNotHaveAccountContainer: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginRight: 20
     },
     loginButton: {
          backgroundColor: COLORS.colorJazzberryJam,
          padding: 20,
          margin: 15,
          alignItems: "center",
          borderRadius: 20
     }
});