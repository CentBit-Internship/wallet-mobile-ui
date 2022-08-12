import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react"
import { View, Text, Image , ScrollView} from "react-native"
import AppIntroSlider from 'react-native-app-intro-slider'
import { COLORS } from "../../../Constants/colors";

const slides = [
     {
       key: 1,
       title: 'Register your Account',
       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
       image: require("../../../assets/i1.jpeg"),
       backgroundColor: '#59b2ab',
     },
     {
       key: 2,
       title: 'Finance your wallet',
       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
       image: require("../../../assets/i2.webp"),
       backgroundColor: '#febe29',
     },
     {
       key: 3,
       title: 'Send payments',
       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
       image: require("../../../assets/i3.jpeg"),
       backgroundColor: '#22bcb5',
     }
   ];

function toPage({Navigation}) {
     
}
export default class App extends React.Component {
     constructor(props){
          super(props);
          this.state = {
               showRealApp: false
          }
     }
     
     _renderItem = ({ item }) => {
       return (
         <ScrollView>
          <View style={{flex: 1, alignItems: "center", backgroundColor: COLORS.colorDarkBlue}}>
           
           <Image style={{width: '100%', height: 350}} source={item.image} resizeMode="cover"/>
           <Text style={{
                fontSize: 32, 
                paddingTop: 50,
                fontWeight: '900',
                color: COLORS.colorWhite
                }}>{item.title}</Text>
           <Text style={{
                padding: 20,
                textAlign: "center",
                color: COLORS.colorWhite
           }}>{item.text}</Text>
         </View>
         </ScrollView>
       );
     }
     _onDone = () => {
       // User finished the introduction. Show real app through
       // navigation or simply by controlling state
     //   this.setState({ showRealApp: true });
     this.props.navigation.navigate('Signup');
     }
     render() {
       if (this.state.showRealApp) {
         return <App />;
       } else {
         return <AppIntroSlider 
         activeDotStyle={{marginLeft: -5, width: 40, backgroundColor: COLORS.colorJazzberryJam, height: 2}}
         dotStyle={{marginLeft: -5, width: 40, backgroundColor: COLORS.colorWhite, height: 2}}
         renderItem={this._renderItem} 
         data={slides} 
         onDone={this._onDone}/>;
       }
     }
   }