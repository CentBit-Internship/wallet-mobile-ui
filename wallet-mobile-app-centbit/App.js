import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { COLORS } from './Constants/colors';
import MainContainer from './Navigation/MainContainer';
import TabLayoutContainer from './Navigation/TabLayoutContainer';


export default function App() {
  return (
    <SafeAreaView style={{
      backgroundColor: COLORS.colorDarkBlue,
      flex: 1
    }}>
      <MainContainer/>
    </SafeAreaView>
  );
}
