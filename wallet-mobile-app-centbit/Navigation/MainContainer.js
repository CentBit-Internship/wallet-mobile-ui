import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importing screens
import PayBillsScreen from './screens/OtherScreens/Paybills';
import SendCoincreen from './screens/OtherScreens/SendCoin';
import TabLayoutContainer from './TabLayoutContainer';
import LoginScreen from './screens/OtherScreens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function MainContainer(){
     return(
          <NavigationContainer>
               <Stack.Navigator initialRouteName="Login">
                    
                    
                    <Stack.Screen name="TabLayoutContainer" component={TabLayoutContainer} options={{headerShown: false}}/>
                    <Stack.Screen name="SendCoin" component={SendCoincreen} options={{headerShown: false}}/>
                    <Stack.Screen name="PayBills" component={PayBillsScreen}/>
                    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>

               </Stack.Navigator>
          </NavigationContainer>
     );
};