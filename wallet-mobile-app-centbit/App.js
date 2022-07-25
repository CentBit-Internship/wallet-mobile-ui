import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import MainContainer from './Navigation/MainContainer';


export default function App() {
  return (
    <SafeAreaView>
      <MainContainer/>
    </SafeAreaView>
  );
}
