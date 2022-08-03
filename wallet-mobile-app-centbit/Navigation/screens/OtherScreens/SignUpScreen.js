import * as React from "react"
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { COLORS } from "../../../Constants/colors";

export default function SignUpScreen({navigation}) {
     return(
          <ScrollView style={{
               backgroundColor: COLORS.colorDarkBlue,
               flex: 1
          }}>
               <View>
                    <View style={{alignItems: "center"}}>
                         <Image source={require("../../../assets/imageekene.png")} style={styles.image}/>
                         <Text style={styles.headerText}>Sign up Here</Text>
                         {/* <Text style={{textAlign: "center", color: COLORS.colorWhite}}>Login to your Account</Text> */}
                              
                    </View>
                    <View style={styles.loginDetails}>
                         <Text style={styles.emailText}>
                              First Name
                         </Text>
                         <TextInput placeholder='First Name' placeholderTextColor="#ffffff" style={styles.emailInput}/>
                         <Text style={styles.emailText}>
                              Middle Name
                         </Text>
                         <TextInput placeholder='Middle Name' placeholderTextColor="#ffffff" style={styles.emailInput}/>
                         <Text style={styles.emailText}>
                              Last Name
                         </Text>
                         <TextInput placeholder='Last Name' placeholderTextColor="#ffffff" style={styles.emailInput}/>
                         <Text style={styles.emailText}>
                              Email
                         </Text>
                         <TextInput placeholder='Email' placeholderTextColor="#ffffff" style={styles.emailInput}/>
                         <Text style={styles.emailText}>
                              Phone Number
                         </Text>
                         <TextInput placeholder='Phone Number' placeholderTextColor="#ffffff" style={styles.emailInput}/>
                         <Text style={styles.passwordText}>
                              Password
                         </Text>
                         <TextInput placeholder='Password' secureTextEntry={true} style={styles.passwordInput} placeholderTextColor="#ffffff"/>
                         <Text style={styles.passwordText}>
                              Confirm Password
                         </Text>
                         <TextInput placeholder='Confirm Password' secureTextEntry={true} style={styles.passwordInput} placeholderTextColor="#ffffff"/>
                    
                    </View>
                    <View style={styles.doNotHaveAccountContainer}>
                         <Text style={{color: COLORS.colorWhite}}>Already have an Account?  </Text>
                         <Text
                         onPress={() => navigation.navigate("Login")} 
                         style={{
                              fontWeight: "900",
                              color: COLORS.colorJazzberryJam
                         }}>Login</Text>
                    </View>
                    <TouchableOpacity
                         style={styles.signupButton}
                         onPress={() => navigation.navigate("Login")}
                         >
                         <Text 
                         style={{color: COLORS.colorWhite}}>Sign up</Text>
                    </TouchableOpacity>
               </View>
          </ScrollView>
          
     );
}

const styles = StyleSheet.create({
     image: {
          width: 100,
          height: 100,
          marginTop: 10
     },
     headerText: {
          textAlign: "center",
          fontWeight: '900',
          fontSize: 40,
          marginVertical: 10,
          color: COLORS.colorWhite
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
     signupButton: {
          backgroundColor: COLORS.colorJazzberryJam,
          padding: 20,
          margin: 15,
          alignItems: "center",
          borderRadius: 20
     }
});