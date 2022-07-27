import * as React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../Constants/colors';

export default function HomeThirdComponent(){
     return(
          <View style={{paddingTop: 60, paddingStart: 20, paddingEnd: 20, paddingBottom: 40}}>
               <ScrollView horizontal>
                    <View style={{alignItems: 'center', marginRight: 20}}>
                         <TouchableOpacity
                              style={{
                                   backgroundColor: COLORS.colorInchworm,
                                   padding: 12,
                                   borderRadius: 50
                              }}
                              // onPress={{}}
                              >
                              <Ionicons name={'send-outline'} size={32} color={COLORS.colorMaximumGreen}/>
                              
                         </TouchableOpacity>
                         <Text style={{fontSize: 10, marginTop: 10, color: COLORS.colorLightGray}}>
                              Send
                         </Text>
                    </View>
                    <View style={{alignItems: 'center', marginRight: 20}}>
                         <TouchableOpacity
                              style={{
                                   backgroundColor: COLORS.colorSalmon,
                                   padding: 12,
                                   borderRadius: 50
                              }}
                              // onPress={{}}
                              >
                              <Ionicons name={'cash-outline'} size={32} color={COLORS.colorMahogany}/>
                              
                         </TouchableOpacity>
                         <Text style={{fontSize: 10, marginTop: 10, color: COLORS.colorLightGray}}>
                              Pay
                         </Text>
                    </View>
                    <View style={{alignItems: 'center', marginRight: 20}}>
                         <TouchableOpacity
                              style={{
                                   backgroundColor: COLORS.colorTropicalRainForest,
                                   padding: 12,
                                   borderRadius: 50
                              }}
                              // onPress={{}}
                              >
                              <Ionicons name={'briefcase-outline'} size={32} color={COLORS.colorCaribbeanGreen}/>
                              
                         </TouchableOpacity>
                         <Text style={{fontSize: 10, marginTop: 10, color: COLORS.colorLightGray}}>
                              Withdraw
                         </Text>
                    </View>
                    <View style={{alignItems: 'center', marginRight: 20}}>
                         <TouchableOpacity
                              style={{
                                   backgroundColor: COLORS.colorLavender1,
                                   padding: 12,
                                   borderRadius: 50
                              }}
                              // onPress={{}}
                              >
                              <Ionicons name={'clipboard-outline'} size={32} color={COLORS.colorMaximumPurple}/>
                              
                         </TouchableOpacity>
                         <Text style={{fontSize: 10, marginTop: 10, color: COLORS.colorLightGray}}>
                              Bill
                         </Text>
                    </View>
                    <View style={{alignItems: 'center', marginRight: 20}}>
                         <TouchableOpacity
                              style={{
                                   backgroundColor: COLORS.colorYellowOrange,
                                   padding: 12,
                                   borderRadius: 50
                              }}
                              // onPress={{}}
                              >
                              <Ionicons name={'star-outline'} size={32} color={COLORS.colorRedOrange}/>
                              
                         </TouchableOpacity>
                         <Text style={{fontSize: 10, marginTop: 10, color: COLORS.colorLightGray}}>
                              Voucher
                         </Text>
                    </View>
               </ScrollView>
          </View>
     );
}