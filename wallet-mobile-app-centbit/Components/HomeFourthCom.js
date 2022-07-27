import * as React from 'react'
import { View, Image, Text } from 'react-native'
import { COLORS } from '../Constants/colors';
import { HOMEIMAGSPOTIFY } from '../Constants/file';

export default function HomeFourthComponent(){
     return(
          <View>
               <View style={{
                    backgroundColor: COLORS.colorblack,
                    marginLeft: 20,
                    marginRight: 20,
                    height: 80,
                    borderRadius: 20,
                    marginBottom: 10,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingLeft: 15,
                    paddingEnd: 15,
                    paddingTop: 18
               }}>
                    <View>
                         <Image source={require('../assets/spotify.webp')} style={{ height: '60%', aspectRatio: 1, resizeMode: 'stretch'}}/>
                    </View>
                    
                    <View style={{
                         // justifyContent: 'space-between'
                    }}>
                         <View>
                              <Text style={{color: COLORS.colorWhite, paddingBottom: 5}}>
                                   Spotify Subscription
                              </Text>
                         </View>
                         <View>
                              <Text style={{color: COLORS.colorWhite}}>
                                   12:01 am  21 June 2021
                              </Text>
                         </View>
                    </View>
                    <View>
                         <Text style={{color: COLORS.colorWhite}}>
                              -$11.90
                         </Text>
                    </View>
               </View>
               <View style={{
                    backgroundColor: COLORS.colorblack,
                    marginLeft: 20,
                    marginRight: 20,
                    height: 80,
                    borderRadius: 20,
                    marginBottom: 10,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingLeft: 15,
                    paddingEnd: 15,
                    paddingTop: 18
               }}>
                    <View>
                         <Image source={require('../assets/myppp.jpeg')} style={{ height: '60%', aspectRatio: 1, resizeMode: 'stretch'}}/>
                    </View>
                    
                    <View style={{
                         // justifyContent: 'space-between'
                    }}>
                         <View>
                              <Text style={{color: COLORS.colorWhite, paddingBottom: 5}}>
                                   Pinterest Salary
                              </Text>
                         </View>
                         <View>
                              <Text style={{color: COLORS.colorWhite}}>
                                   09:00 pm  20 Jane 2021
                              </Text>
                         </View>
                    </View>
                    <View>
                         <Text style={{color: COLORS.colorWhite}}>
                              +$6359.00
                         </Text>
                    </View>
               </View>
          </View>
     );
}