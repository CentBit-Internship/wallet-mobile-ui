import React from 'react'
import { View, ImageBackground, Text, Image } from 'react-native'
import { COLORS } from '../Constants/colors';
import { HOMEIMAGE, HOMEIMAGEAMAZON } from '../Constants/file';



export default function HomeSecondComponent(){
     return(
          <View style={{
               paddingLeft: 20,
               paddingRight: 20,
               paddingTop: 50
          }}>
               <ImageBackground source={HOMEIMAGE} resizeMode="cover" style={{ height: 205, padding: 20 }}>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                         <View>
                              <Text style={{color: COLORS.colorWhite}}>RIFAT SARKAR</Text>
                         </View>
                         <View>
                              <Image source={require('../assets/amazon_1.png')} style={{height: '40%', aspectRatio: 2, resizeMode: 'stretch'}}/>
                         </View>
                    </View>
                    <View>
                         <Text style={{
                              color: COLORS.colorWhite,
                              fontSize: 20,
                              fontWeight: "900"
                         }}>
                              .... .... .... 7280
                         </Text>
                    </View>
                    <View style={{
                              flexDirection: 'row', 
                              justifyContent: 'space-between',
                              marginTop: 35,
                              alignItems: 'center'
                              }}>
                         <View>
                              <Text style={{
                                   color: COLORS.colorWhite
                              }}>
                                   Avaliable Balance
                              </Text>
                              <Text style={{
                                   color: COLORS.colorWhite,
                                   fontSize: 20,
                                   fontWeight: '900'
                              }}>
                                   $7595.00
                              </Text>
                         </View>
                         <View>
                              <Image source={require('../assets/images1.png')} style={{height: '40%', aspectRatio: 2, resizeMode: 'stretch'}}/>
                         </View>
                    </View>
               </ImageBackground>
          </View>
     );
}