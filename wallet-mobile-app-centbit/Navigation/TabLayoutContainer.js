import * as React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Importing Screens
import HomeScreen from './screens/TabLayoutScreens/HomeScreen'
import ActivityScreen from './screens/TabLayoutScreens/ActivityScreen'
import EwalletScreen from './screens/TabLayoutScreens/E-WalletScreen'
import QrScreen from './screens/TabLayoutScreens/QRScreen'
import SettingScreen from './screens/TabLayoutScreens/SettingsScreen'
import { COLORS } from '../Constants/colors';

//Screen Names
const HomeName = 'Home'
const ActivityName = 'Activity'
const EwalletName = 'Ewallet'
const QrName = 'Qr'
const SettingsName = 'Setting'


const Tab = createBottomTabNavigator();

export default function TabLayoutContainer(){
     return(
               <Tab.Navigator
               initialRouteName={HomeName}
               screenOptions={({route}) => ({
                    tabBarActiveTintColor: COLORS.colorLightPink,
                    tabBarInactiveTintColor: COLORS.colorLightGray,
                    headerShown: false,
                    tabBarStyle: {backgroundColor: COLORS.colorDarkBlue},
                    headerStyle: {
                         backgroundColor: 'green',
                         
                    },
                    tabBarIcon: ({focused, color, size}) => {
                         let iconName;
                         let routeName = route.name

                         if(routeName === HomeName){
                              iconName = focused ? 'home-sharp' : 'home-outline'
                         } else if(routeName === ActivityName){
                              iconName = focused ? 'analytics-sharp' : 'analytics-sharp'
                         }else if(routeName === QrName){
                              iconName = focused ? 'scan-sharp' : 'scan-sharp'
                         }else if(routeName === EwalletName){
                              iconName = focused ? 'wallet-sharp' : 'wallet-sharp'
                         }else if(routeName === SettingsName){
                              iconName = focused ? 'settings-sharp' : 'settings-sharp'
                         }

                         return <Ionicons name={iconName} size={size} color={color}/>
                    }
               
               })}>
                    <Tab.Screen name={HomeName} component={HomeScreen}/>
                    <Tab.Screen name={ActivityName} component={ActivityScreen}/>
                    <Tab.Screen name={QrName} component={QrScreen}/>
                    <Tab.Screen name={EwalletName} component={EwalletScreen}/>
                    <Tab.Screen name={SettingsName} component={SettingScreen}/>

               </Tab.Navigator>
     );
}