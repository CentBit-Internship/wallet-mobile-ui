import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PayBillsScreen from './screens/OtherScreens/Paybills';
import SendCoincreen from './screens/OtherScreens/SendCoin';
import TabLayoutContainer from './TabLayoutContainer';

const Stack = createNativeStackNavigator();

export default function MainContainer(){
     return(
          <NavigationContainer>
               <Stack.Navigator initialRouteName="TabLayoutContainer">
                    <Stack.Screen 
                         name="TabLayoutContainer"
                         component={TabLayoutContainer}
                         options={{headerShown: false}}
                    />
                    <Stack.Screen name="SendCoin" component={SendCoincreen} options={{headerShown: false}}/>
                    <Stack.Screen name="PayBills" component={PayBillsScreen}/>

               </Stack.Navigator>
          </NavigationContainer>
     );
};